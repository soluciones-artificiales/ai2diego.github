# AI2Diego · Capa de experiencia para Ai2Me

**Una puerta de entrada fácil, mobile y conversacional para Ai2Me**, construida por
Diego Vetencourt (Soluciones Artificiales) como propuesta para el equipo de Ai2Me.

## La tesis

Los compradores del segundo cerebro de Operador 90 (la dupla Diego + Vesper)
usarán Ai2Me como su CLI. El problema: la experiencia actual de Ai2Me no es
amigable para el usuario común. Entra y se encuentra un prompt en blanco y diez
herramientas al mismo nivel, sin un primer paso. Ese usuario no va a manejarlo
fácil ni en el navegador, ni desde Telegram, ni un día desde WhatsApp.

Esta capa lo corrige **sin quitarle nada a Ai2Me**:

- **Sus links de pago**: planes y créditos apuntan a `ai2me.com/pricing`.
- **Sus usuarios**: quien ya tiene cuenta entra directo a `ai2me.com/landing`.
- **Su enrutado**: el chat habla con Kimi K3 vía OpenRouter, con la llave del
  propio usuario. Ai2Me sigue siendo el servicio; esto es solo la experiencia.

## Cómo funciona

1. **Valor primero** (práctica de Nikita Bier): antes de pedir registro, la
   primera pantalla muestra un ejemplo de entrega terminada.
2. **Onboarding tipo Laya**: una decisión tipada por pantalla
   (`choice`, `score`, sí/no, texto clasificado localmente). Los diez módulos
   de Ai2Me dejan de ser una grilla y se convierten en decisiones internas del
   enrutador: al final hay un perfil estructurado, una etapa
   (Build / Launch / Operate / Scale) y un agente sugerido de Ai2Me.
3. **Chat primero**: el usuario conversa con su segundo cerebro. El LLM
   principal tras el onboarding es **Kimi K3** (`moonshotai/kimi-k3` en
   OpenRouter, API compatible con OpenAI). K3 pesa 2,8 billones de parámetros:
   no corre en un teléfono, corre por API; lo que sí corre local es la capa de
   decisiones del onboarding.
4. **Traspaso a Telegram**: con un toque, el perfil y los últimos mensajes se
   copian como contexto y se abre el bot, que continúa la misma conversación.
   El bot está en `telegram-bot/` y WhatsApp queda como paso siguiente natural.

## Diseño

Sistema generado con **UI UX Pro Max** (producto: app de chat y mensajería):
minimalismo suizo + microinteracciones, modo oscuro OLED, tipografía Inter,
azul mensajero `#2563EB` como primario y verde `#059669` como acento,
contraste alto y una sola acción principal por pantalla.

La evidencia completa está en `docs/`:

- `docs/rea-report.md` · Ai2Me revertido con la herramienta REA real (Evidence IDs, grafo de 903 módulos) y sus limitaciones.
- `docs/bundle-analysis.md` · ingeniería inversa de los bundles públicos de
  ai2me.com con el método de REA (rutas, endpoints candidatos, vendors).
- `docs/ai2me-ux-evidence.md` · por qué la fricción de Ai2Me no es un caso
  único ni *newbie friendly* (con su caveat: no hay corpus público de reseñas).
- `docs/nikita-bier-practicas.md` · las prácticas aplicadas y su fuente.

## Correr la demo

Es un sitio estático de un solo archivo: `index.html`. Sírvelo con cualquier
hosting estático (GitHub Pages incluido) o ábrelo en local:

```bash
python3 -m http.server 8080
```

Para hablar en vivo con el modelo: Ajustes → pega tu llave de OpenRouter.
La llave se guarda solo en el navegador del teléfono.

## Bot de Telegram

```bash
cd telegram-bot
TELEGRAM_BOT_TOKEN=... OPENROUTER_API_KEY=... node bot.mjs
```

Crea el bot con BotFather, pon su usuario en Ajustes de la web, y el botón
«Pasar este chat a Telegram» hace el resto.

## Créditos y licencias de las piezas usadas como referencia

- REA (morluto/rea), método de análisis web · licencia MIT.
- Laya (NandhaKishorM/laya), patrón de decisiones tipadas · Apache-2.0.
- Kimi K3 (MoonshotAI), modelo vía OpenRouter · licencia Kimi K3.
- UI UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill), sistema de diseño.

Todo el código de esta capa es original. No contiene código ni textos de Ai2Me.
