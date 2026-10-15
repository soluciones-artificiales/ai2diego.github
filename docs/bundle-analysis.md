# ai2me.com — REA-style static bundle analysis (public assets only)

Date: 2026-10-15 (EDT). Method in the spirit of REA's website analysis:
capture page structure and scripts from public HTML, then inspect the
JavaScript bundles statically for routes, endpoint candidates, vendor
fingerprints and module relationships. No login, no credentials, no bypass.
Summaries below are in my own words; only short identifiers/labels are quoted.

## Corpus

- Source HTML: `evidence/ai2me-root.html` — public root of `https://www.ai2me.com/`
  (Next.js app; unauthenticated `/landing` redirects to `/`). 19,657 bytes.
- JS chunks referenced by that HTML: **38 chunks**, all downloaded HTTP 200 to
  `evidence/chunks/`, **2,616,471 bytes total (~2.6 MB)**, no empty files.
- Largest chunk: `3867-*.js` ~1.08 MB (appears to be a bundled editor / syntax
  highlighting library, judging by grammar-pattern strings — not app logic).
  Other large chunks: `7840-*.js` ~295 KB, `4bd1b696-*.js` and `1255-*.js`
  ~173 KB each, `polyfills-*.js` ~113 KB.
- Actual app code is thin in this corpus: `app/page-*.js` ~1.3 KB,
  `main-app-*.js` ~0.5 KB, `app/layout-*.js` ~60 KB.
- Root HTML also references 4 CSS files (not downloaded; out of scope).
- No `sourceMappingURL` in any chunk: **0 source maps** — analysis is of
  minified production code only.

## (a) Routes / paths found in strings

App pages (client-side navigation targets):

- `/landing` (a return target), `/pricing`, `/dashboard`, `/boardroom`,
  `/company`, `/auth`, `/auth/settings`, `/forgot-password`, `/reset-password`
- Productivity tools: `/ai-chat`, `/ai-slides`, `/ai-sheets`, `/ai-docs`
  (each also seen with a `?session_id=` variant)
- `/chat`, plus `/chat?agent_id=` variants for `chat`, `ai-image`, `ai-video`,
  and `/chat?agent_id=chat&from_landing=1&model=`; `/chat/media` with
  `mode=image` and `mode=video`; `/chat?session_id=`
- Projects: `/project/new`, `/project/new?agent_id=ai-builder`, `/project/<id>`
- `/client-acquisition` (also with `?session_id=`)
- Dashboard sub-pages: `/dashboard/credits`, `/dashboard/subscription`,
  `/dashboard/workspace`, `/dashboard/settings` (incl. `?tab=security`)
- `/connectors`, `/authorize`, `/confirm`, `/download`, `/status`
- Static assets named in strings: a demo video and a demo poster under `/videos/`

Agent identifiers used across routes: `ai-builder`, `ai-chat`, `ai-slides`,
`ai-sheets`, `ai-docs`, `ai-image`, `ai-video`, `ai-client-acquisition`, plus
plain `chat`. This matches a model where each tool is an "agent" opened either
as its own page or inside `/chat` / `/project/new`.

## (b) API endpoint candidates

All are string candidates from `fetch(...)` calls and path concatenations in the
public chunks — not probed, not authenticated, behaviour not verified.

Same-origin `/api/...` (42 distinct patterns):

- Auth: `/api/auth/login`, `/signup`, `/confirm-signup`, `/session`, `/me`,
  `/forgot-password`, `/reset-password`, `/resend-otp`, and a separate
  backend-style `/v1/auth/` path (see external hosts) plus `/auth/change-password`
- AI core: `/api/ai/builder/capabilities`, `/api/ai/builder/models`,
  `/api/ai/generations` (+ per-id and query variants), `/api/ai/upload`,
  `/api/ai/attachment?key=`, `/api/ai/fetch-url`, `/api/ai/connectors`,
  `/api/ai/google/…`, `/api/ai/handoffs/…`, `/api/ai/preview/…`, `/api/ai/route`,
  `/api/ai/voice/stream-ticket`
- Chat/projects: `/api/chat`, `/api/chat/projects/…`
- Connectors: `/api/connectors/…`, `/api/connectors/google/…`,
  `/api/connectors/google/status`
- Business context: `/api/context/…`, `/api/context/company/…`
- Money: `/api/credits/balance`, `/api/credits/pricing` (+ `?credits=`),
  `/api/stripe/create-checkout-session`, `/api/subscriptions/current`,
  `/api/subscriptions/activate-free`, `/api/subscriptions/starter-credits/claim`,
  `/api/subscriptions/starter-credits/status`
- Integrations: `/api/integrations/agentos`, `/api/integrations/custom-agent`
- Misc: `/api/cookie-consent`, `/api/preview/…`

External hosts referenced:

- `us.be.ai2me.com` — separate backend origin; base seen as that host + `/v1`
  in production (a localhost `:8000/v1` variant exists for development).
  Auth posts go to that backend's `/v1/auth/` path.
- `www.googleapis.com` — Google APIs, with OAuth scopes for Drive, Docs,
  Sheets, Slides-adjacent documents, Gmail (modify), Calendar (events +
  calendar list read-only), and basic profile/email.
- `apis.google.com` (Google API / Picker loader), plus public config keys
  named `NEXT_PUBLIC_GOOGLE_PICKER_API_KEY` and
  `NEXT_PUBLIC_GOOGLE_CLOUD_PROJECT_NUMBER`.
- `cdn.jsdelivr.net` — loads `@hyperframes/core` and `@hyperframes/player`.
- `d2i9g0y834tvw1.cloudfront.net` — a CloudFront distribution host (asset/CDN).
- `agentos247.com` and a placeholder-style `your-agent.com/webhook` — appear in
  the custom-agent / webhook integration strings.

Other config name seen: `NEXT_PUBLIC_BUILDER_MIN_CREDITS` (a credit gate for
the builder). No WebSocket or EventSource URLs found; the only streaming hint
is the voice `stream-ticket` endpoint above.

## (c) Vendor / library fingerprints

Strong evidence (named URLs, package names, or dedicated endpoints):

- **Next.js + React** — webpack chunk loader, `/_next/` paths, App Router
  chunk naming (`app/layout`, `app/page`, error/loading/not-found chunks),
  Next image endpoint strings, links to nextjs.org and react.dev error pages.
- **Auth.js / NextAuth family** — authjs error-site reference and next-auth
  strings; the app otherwise uses its own `/api/auth/*` + OTP vocabulary.
- **Google Workspace platform** — see scopes above; Google is the one clearly
  wired third-party productivity suite in this bundle.
- **Stripe** — dedicated checkout-session endpoint (one named integration;
  the word also appears in pricing/subscription UI strings).
- **Radix UI** — component-primitive references and radix-ui.com links.
- **ProseMirror + Tiptap** — editor stack (many references), consistent with
  a rich-text Docs editor.
- **react-markdown / remark ecosystem, core-js polyfills** — named in strings.
- **Hyperframes** — player/core packages loaded from a CDN (video/animation
  playback).
- **AI model names in strings** — identifiers for OpenAI GPT-4o family,
  a Claude Sonnet model, and Gemini Flash / Omni Flash models. This supports
  "multiple model providers selectable in chat", but which provider serves
  what is a server-side fact not visible here.

Weak / rejected signals (do not treat as vendors):

- "Supabase": a **single** occurrence, as an icon name in an icon set — no
  client, URL or key. Not evidence of a Supabase backend.
- "Sentry", "ElevenLabs", "Replicate", "Twilio": only 1–4 generic word hits,
  no SDK, endpoint or key strings. Not confirmed.
- Word-frequency hits like "segment" and "motion" are ordinary English/code
  words in this corpus, not analytics/animation vendor proof.

## (d) Feature / tool labels found in strings

Landing/dashboard vocabulary, in my own grouping:

- Productivity tools: Builder (also "App Builder" / "Web Builder"),
  Slides, Sheets, Docs, AI Chat, Image, Video, Agent Launchpad,
  Business Management, Client Acquisition.
- Project hub labels: "My projects", "Recently viewed", "Shared with me",
  "All Projects", "Builder Projects", "Project Workspace", project
  rename/delete actions.
- Monetisation labels: Credits, "Add Credits", "Purchase Credits",
  "Manage Credits", "Select Credit Package", Subscription, Starter, Pricing.
- Company/context labels: "AI2me Company", "Business Context", Company,
  Boardroom.
- Connector labels: Connectors, "Connect Agent" / "Connect Agents",
  "Custom Agent", "Advanced Integrations", and connector states equivalent
  to not-connected / re-authentication required / missing scope.
- Google-picker labels for choosing Google Docs/Sheets/Slides files.

## Module relationships (inferred, evidence-limited)

- One shared layout chunk (~60 KB) carries most cross-tool UI — navigation,
  credits, connectors and company context — which is why so many routes and
  endpoints appear even though the public page chunk itself is ~1 KB.
- Tools appear to be thin front-ends over three shared services: the `/api/ai/*`
  generation service, the `/api/chat/projects/*` project store, and the
  separate `us.be.ai2me.com/v1` backend for auth.
- Hand-off strings (`/api/ai/handoffs/…`, `from_landing=1`) suggest the landing
  prompt hands a session/model choice into chat or a tool rather than running
  generation on the landing page itself.

## Limitations — read before using this

1. **Public corpus only.** These 38 chunks are what the unauthenticated root
   HTML loads. The authenticated `/landing` experience almost certainly loads
   additional lazy chunks (per-tool editors, builder, media generation) that
   are **not** in this HTML and therefore not analysed here. Route/endpoint
   lists are a floor, not a complete inventory.
2. **Minified, no source maps.** Names are mangled; module relationships above
   are inferences from string co-occurrence and chunk sizes, not from source.
3. **Candidates, not contracts.** Endpoints were never called. Methods,
   payloads, auth requirements and whether a pattern is live, legacy or a
   template string are unverified.
4. **Server side is invisible.** Model routing, credit accounting, connector
   token storage and the real backend behind `us.be.ai2me.com/v1` cannot be
   derived from client bundles.
5. **Counts are string counts** in minified code, including library code
   (the ~1 MB editor/highlighting chunk inflates generic word counts).
   Vendor claims above are based on named references, not raw counts.
6. Nothing here copies ai2me code or content; it is an identifier-level
   inventory for building an original equivalent.
