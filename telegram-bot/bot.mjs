// AI2Diego · Bot de Telegram
// Continúa en Telegram la conversación que empezó en la capa web.
// Sin dependencias: solo usa fetch de Node 18+.
//
// Uso:
//   TELEGRAM_BOT_TOKEN=... OPENROUTER_API_KEY=... node bot.mjs
// Opcionales:
//   OPENROUTER_MODEL (default: moonshotai/kimi-k3)
//   AI2ME_PRICING_URL (default: https://www.ai2me.com/pricing)

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const OR_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OPENROUTER_MODEL || "moonshotai/kimi-k3";
const PRICING = process.env.AI2ME_PRICING_URL || "https://www.ai2me.com/pricing";

if (!TOKEN) { console.error("Falta TELEGRAM_BOT_TOKEN"); process.exit(1); }
if (!OR_KEY) { console.error("Falta OPENROUTER_API_KEY"); process.exit(1); }

const API = `https://api.telegram.org/bot${TOKEN}`;
const sessions = new Map(); // chatId -> { context: string, history: [] }

async function tg(method, body) {
  const r = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body || {}),
  });
  return r.json();
}

async function send(chatId, text) {
  for (let i = 0; i < text.length; i += 3900) {
    await tg("sendMessage", { chat_id: chatId, text: text.slice(i, i + 3900) });
  }
}

function systemPrompt(context) {
  return [
    "Eres el segundo cerebro de un alumno de Operador 90: la dupla Diego Vetencourt + Vesper operando sobre Ai2Me.",
    "Hablas español simple, directo, sin jerga técnica. Una idea por mensaje, pasos cortos y accionables.",
    "Nunca le pidas al usuario que aprenda herramientas complicadas: tú decides y propones el siguiente paso.",
    context ? `Contexto que llega de su onboarding web:\n${context}` : "Todavía no tienes su perfil: pídele en una frase qué quiere lograr en 90 días.",
    `Si pregunta por planes, créditos o pagos, su cuenta vive en Ai2Me: ${PRICING}`,
  ].join("\n");
}

async function askLLM(session, userText) {
  session.history.push({ role: "user", content: userText });
  const messages = [
    { role: "system", content: systemPrompt(session.context) },
    ...session.history.slice(-12),
  ];
  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OR_KEY}`,
      "Content-Type": "application/json",
      "X-Title": "AI2Diego Telegram Bot",
    },
    body: JSON.stringify({ model: MODEL, messages }),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || `HTTP ${r.status}`);
  const reply = data.choices?.[0]?.message?.content || "Sin respuesta del modelo.";
  session.history.push({ role: "assistant", content: reply });
  return reply;
}

async function handle(msg) {
  const chatId = msg.chat.id;
  const text = (msg.text || "").trim();
  if (!text) return;
  if (!sessions.has(chatId)) sessions.set(chatId, { context: "", history: [] });
  const session = sessions.get(chatId);

  if (text.startsWith("/start")) {
    await send(chatId,
      "Soy tu segundo cerebro. Si vienes de la web, pega aquí el contexto que copiaste (empieza con AI2DIEGO-CONTEXTO). " +
      "Si no, dime en una frase qué quieres lograr en 90 días y arrancamos.");
    return;
  }
  if (text.startsWith("AI2DIEGO-CONTEXTO")) {
    session.context = text;
    session.history = [];
    await send(chatId, "Contexto recibido. Ya sé tu perfil y dónde quedó la conversación. Seguimos aquí, un paso a la vez. ¿Qué quieres hacer primero?");
    return;
  }
  try {
    await tg("sendChatAction", { chat_id: chatId, action: "typing" });
    await send(chatId, await askLLM(session, text));
  } catch (e) {
    await send(chatId, `No pude hablar con el modelo (${e.message}). Inténtalo de nuevo en un momento.`);
  }
}

console.log("AI2Diego bot escuchando…");
let offset = 0;
for (;;) {
  try {
    const res = await tg("getUpdates", { offset, timeout: 30, allowed_updates: ["message"] });
    for (const upd of res.result || []) {
      offset = upd.update_id + 1;
      if (upd.message) await handle(upd.message);
    }
  } catch (e) {
    console.error("Polling error:", e.message);
    await new Promise(r => setTimeout(r, 3000));
  }
}
