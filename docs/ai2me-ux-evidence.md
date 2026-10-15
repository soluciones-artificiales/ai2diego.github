# Ai2Me: por qué la fricción de entrada no es un caso único ni es *newbie friendly*

**Para:** Carlos (Ai2Me) · **De:** Diego Vetencourt · **Fecha:** 15 de octubre de 2026
**Propósito (constructivo):** mostrar con evidencia que el problema de experiencia de usuario de Ai2Me es estructural y reproducible por cualquier usuario nuevo, no la experiencia aislada de una persona, y justificar una demo rediseñada, mobile y guiada por onboarding, que **mantiene** los links de pago, los usuarios y el routing de OpenRouter de Ai2Me. No se propone quitarle clientes a Ai2Me: se propone mejorar la puerta de entrada de **sus** usuarios.

> **Honestidad metodológica, antes que nada:** la evidencia pública independiente de usuarios de ai2me.com es **escasa**. No encontramos un corpus de reseñas de usuarios quejándose (ni elogiando) la facilidad de uso. Este brief no inventa ese corpus. La demostración se apoya en (1) las pocas señales públicas verificables que sí existen, y (2) una evaluación heurística propia de la pantalla real de entrada, que cualquier persona puede reproducir en menos de un minuto: la fricción está en el diseño de la pantalla, no en quien la mira.

---

## (a) Evidencia externa encontrada

### Lo que NO se encontró (y es en sí mismo un dato)

- Búsqueda específica en **Reddit, Trustpilot y Product Hunt** para "ai2me": **sin resultados**. No hay ficha del producto ni hilo de discusión localizable en esas plataformas (búsqueda del 15-oct-2026).
- Búsqueda en **Instagram, Facebook y Threads** (social.search) sobre Ai2Me / ai2me.com, experiencia, principiantes y tutoriales: **cero posts devueltos**.
- No apareció ficha en directorios de reseñas tipo G2 o Capterra en las búsquedas realizadas.
- Los buscadores devuelven mayoritariamente **homónimos que no son este producto**: ai2.me (consultoría de IA, otro dominio), A2E / a2e.ai (generación de video, con reseñas en Trustpilot que **no** son de Ai2Me) y AI2 (incubadora del Allen Institute). Que hasta para investigar el producto haya que desambiguar tres marcas casi idénticas ya es un problema de descubribilidad y confusión para un usuario nuevo que busca ayuda o reseñas.

**Lectura:** un producto *newbie friendly* suele dejar rastro público de principiantes: reseñas, tutoriales de terceros, preguntas y respuestas en foros. De Ai2Me ese rastro prácticamente no existe. La ausencia no prueba quejas, pero sí prueba que el usuario nuevo está solo: no hay comunidad ni contenido de terceros que lo rescate cuando se traba.

### Las señales públicas que SÍ existen

1. **El producto necesita un "deep dive" completo en video para explicarse.**
   - YouTube: "Everything You Need to Know About AI2Me | Full Deep Dive" (publicado hace ~99 días según metadatos de búsqueda, ~julio de 2026). La propia descripción lo presenta como una inmersión profunda en qué ofrece la plataforma y por qué sería una alternativa más inteligente, y enlaza a ai2me.com.
   - Fuente: https://www.youtube.com/watch?v=6oMdTwPRMl8
   - Señal: cuando la explicación de un producto para usuarios nuevos requiere el formato "todo lo que necesitas saber, inmersión completa", la curva de aprendizaje no es plana. Es material de la propia órbita del producto, no una reseña independiente.

2. **La huella pública de la marca es fragmentada: varias propuestas distintas bajo el mismo nombre.**
   - Otro video de YouTube asociado a la marca describe un producto diferente en posicionamiento (un "equipo ejecutivo de IA" por niveles de precio mensuales), que no coincide con el posicionamiento actual del sitio ("sistema operativo de IA para construir y operar negocios" con herramientas y créditos).
   - Fuente: https://www.youtube.com/watch?v=OKG28dc-Bfo
   - Señal (con cautela: no pudimos confirmar que sea el mismo equipo): quien llega desde contenido viejo de la marca aterriza en un producto que se presenta de otra manera. Para un principiante, esa inconsistencia se vive como "no entiendo qué es esto".

3. **En materiales públicos del propio ecosistema Ai2Me, la oferta ya es tan amplia que la recomendación interna es no mostrarla toda.**
   - Repositorios públicos de GitHub del ecosistema (cuenta eternitai01, marzo de 2026) identifican a Ai2Me con Carlos Cuevas como fundador/CEO y enlazan a ai2me.com, y conviven varias líneas: agentes por Telegram/WhatsApp, división de deportes, división de entretenimiento, demos sectoriales.
   - En un documento público de ese ecosistema con la referencia de precios de un producto asociado (AgentOS 24/7) conviven **dos familias de planes** (Instant y BYOK, "trae tu propia llave"), tres niveles cada una y descuentos por contratos de 12 y 24 meses; y el propio playbook de ventas de ese documento instruye presentar un solo plan por vez y no leer la tabla completa de precios.
   - Fuentes: https://github.com/eternitai01/ai2me-the-agency y https://github.com/eternitai01/ai2me-the-agency/blob/HEAD/shared-skills/agentos247-emails/SKILL.md
   - Señal: si el equipo comercial necesita la regla de "una cosa a la vez" para no abrumar, el problema de sobrecarga no lo inventó un usuario: está reconocido en la práctica de venta del propio ecosistema. La demo nueva aplica exactamente ese mismo principio, pero en la interfaz.

4. **El sitio público no se explica sin entrar.**
   - La URL pública https://www.ai2me.com/landing , sin sesión iniciada, solo deja ver el título de posicionamiento y el aviso de cookies; la experiencia real queda detrás del login (verificado el 15-oct-2026 con fetch de texto).
   - Señal: el principiante no puede explorar, comparar ni entender el producto antes de registrarse; su primera experiencia completa es ya dentro, frente al dashboard descrito en la sección (b).

### Resumen de la sección

| Tipo de evidencia | Resultado |
|---|---|
| Reseñas independientes de usuarios (Reddit / Trustpilot / Product Hunt / G2) | **0 encontradas** |
| Posts sociales sobre experiencia de uso (IG / FB / Threads) | **0 devueltos** |
| Material explicativo propio o cercano | 2 videos de YouTube (uno, un "deep dive" completo) |
| Materiales públicos del ecosistema (GitHub, mar-2026) | Alcance amplio y planes múltiples; regla interna de presentar un plan a la vez |
| Opiniones de homónimos (ai2.me, A2E) | Existen, pero **no** son de ai2me.com y no se usan como evidencia |

---

## (b) Evaluación heurística propia

> Esta sección es **análisis nuestro**, separado de la evidencia externa. Se basa en la estructura real del dashboard de Ai2Me en `/landing`, observada directamente con sesión iniciada: una caja de prompt en blanco, una grilla de **10 herramientas** (Builder, Slides, Sheets, Docs, Agent Launchpad, AI Chat, Image, Video, Business Management marcada "Soon", Client Acquisition), una lista de proyectos (con pestañas tipo "My projects / Recently viewed / Shared with me" y filtros por tipo) y un contador de créditos. Evaluamos esa pantalla contra principios básicos de usabilidad para principiantes.

1. **Problema de la página en blanco (*blank canvas*).** La acción principal de la pantalla es un prompt vacío. Un experto sabe qué pedir; un principiante no sabe ni qué se puede pedir, ni en qué formato, ni qué es un buen pedido. Sin ejemplos accionables ni primer paso sugerido, la primera decisión del usuario es la más difícil de todas, y la toma sin ninguna información.
2. **Sobrecarga de elección: 10 herramientas a la vez.** Builder, Slides, Sheets, Docs, Agent Launchpad, AI Chat, Image, Video, Business Management y Client Acquisition se presentan en el mismo nivel, en una sola grilla, sin orden, sin recomendación y sin "empieza por aquí". Es la misma sobrecarga que el playbook citado en (a) evita en ventas presentando un plan a la vez, pero aquí aplicada al revés: todo junto, el primer día.
3. **Jerga sin traducción.** "Builder", "Agent Launchpad", "credits" son conceptos del producto, no del usuario. Nada en la pantalla responde en lenguaje llano a la pregunta del recién llegado: ¿qué hace cada cosa, para qué me sirve a mí y cuánto me cuesta?
4. **Créditos sin contexto.** Hay un contador de créditos visible, pero la pantalla de entrada no enseña cuánto cuesta cada acción ni qué alcanza a lograr con su saldo. El usuario nuevo aprende el precio de las cosas gastando, es decir, equivocándose.
5. **Una herramienta lleva a un callejón sin salida.** Business Management aparece en la grilla principal marcada como "Soon": ocupa un lugar de primera fila una función que todavía no existe. Para un principiante, clicar y descubrir que no hay nada es una lección temprana de desconfianza.
6. **El eslogan no es una ruta.** "Build + Launch + Operate + Scale" describe fases de un negocio, pero en la pantalla son un título, no un camino: no hay pasos, no hay progreso visible, no hay "estás aquí" ni "esto sigue". Sin ruta ni *checklist*, el usuario no sabe cuándo terminó de "empezar".
7. **Proyectos y filtros pensados para quien ya tiene historial.** La zona de proyectos con pestañas y filtros (Web, App, Slides, Sheets, Docs, Image, Video, Chat) está vacía u ordenada para un usuario con trabajo acumulado. Al recién llegado no le aporta nada y le ocupa media pantalla.
8. **Desktop primero, mobile después.** La composición (barra lateral estrecha, grilla ancha de tarjetas, contador en una esquina) es de escritorio. En un teléfono, esa misma grilla se convierte en scroll largo de tarjetas equivalentes entre sí, y el prompt —la única acción real— compite con todo lo demás.

**Conclusión de la heurística:** ninguno de estos ocho puntos depende de quién sea el usuario. Son propiedades de la pantalla. Por eso se repiten idénticos con cada persona nueva que entra.

---

## (c) Conclusión: por qué no es un caso único ni *newbie friendly*

- **No es un caso único porque la fricción es estructural, no personal.** La experiencia de "entro y no sé qué hacer" no requiere un usuario especialmente torpe: la produce una pantalla con un prompt en blanco, 10 herramientas equivalentes, jerga propia y ningún primer paso guiado. Cambia la persona y la pantalla es la misma; el resultado se repite. Eso es la definición de un patrón de diseño, no de una anécdota.
- **Las señales públicas, aunque escasas, apuntan en la misma dirección:** el producto necesita videos de inmersión completa para explicarse, su propio ecosistema de venta adopta la regla de mostrar una sola cosa a la vez para no abrumar, y no existe comunidad ni reseñas de terceros que amortigüen la entrada de un principiante.
- **Lo que no afirmamos:** no afirmamos que haya muchos usuarios quejándose en público, porque ese corpus no existe (o no es localizable) al 15-oct-2026. La escasez también es parte del mensaje para Carlos: hoy la experiencia del usuario nuevo no se está midiendo ni contando en ningún sitio público.
- **No es *newbie friendly* en el sentido literal:** un producto amigable para principiantes le da al recién llegado una primera acción obvia, lenguaje llano, costo visible antes de gastar y una sensación de avance. La pantalla actual de Ai2Me le da opciones, conceptos y un contador. La potencia está; la puerta, no.

---

## (d) Qué corrige la demo (y qué no toca)

La demo que acompaña este brief rehace **solo la puerta de entrada**, con estos principios:

1. **Onboarding guiado tipo decisiones tipadas:** en lugar del prompt en blanco y la grilla, el usuario responde pocas preguntas cortas y tipadas (elección, escala, sí/no) sobre su negocio y su meta. Con eso, el sistema decide por él cuál es la primera herramienta y el primer paso. Un paso por pantalla, una sola acción principal por pantalla.
2. **Mobile primero:** la demo nace en formato teléfono, que es donde el usuario nuevo realmente está; la grilla de escritorio deja de ser la experiencia por defecto.
3. **Lenguaje llano y costo antes de gastar:** cada paso dice qué va a pasar y, cuando una acción consume créditos, el costo se muestra antes de confirmarla.
4. **Ruta visible:** las fases Build, Launch, Operate y Scale se convierten en un camino con progreso ("estás aquí, esto sigue"), no en un eslogan.
5. **Nada de callejones sin salida:** lo que aún no existe no ocupa la primera pantalla.

**Lo que la demo NO toca, a propósito:**

- **Los links de pago son los de Ai2Me.** Todo CTA de pago o suscripción apunta a Ai2Me.
- **Los usuarios son los de Ai2Me.** La cuenta y el acceso siguen siendo los suyos; la demo es una capa de entrada, no un producto paralelo.
- **El routing de modelos sigue siendo el de ellos:** se deja el OpenRouter de Ai2Me como ruta; la demo le manda tráfico a su servicio en vez de sustituirlo.
- El objetivo declarado es mejorar la experiencia de usuario de **sus** usuarios y demostrarle a Carlos, con su propio producto, que la entrada actual es el cuello de botella. Si la demo convierte mejor, gana Ai2Me.

---

### Fuentes consultadas (15 de octubre de 2026)

- Sitio público de Ai2Me: https://www.ai2me.com/landing (sin sesión, solo se expone el título y el aviso de cookies)
- YouTube, "Everything You Need to Know About AI2Me | Full Deep Dive": https://www.youtube.com/watch?v=6oMdTwPRMl8
- YouTube, video asociado a la marca con posicionamiento de equipo ejecutivo: https://www.youtube.com/watch?v=OKG28dc-Bfo
- GitHub, ecosistema público Ai2Me (eternitai01): https://github.com/eternitai01/ai2me-the-agency y su documento de planes/correos: https://github.com/eternitai01/ai2me-the-agency/blob/HEAD/shared-skills/agentos247-emails/SKILL.md
- Búsquedas sin resultados para este producto (registradas como escasez, no como evidencia de quejas): Reddit / Trustpilot / Product Hunt vía búsqueda web; Instagram / Facebook / Threads vía social.search
- Homónimos descartados expresamente: https://ai2.me (consultoría, otro dominio) y A2E / a2e.ai (sus reseñas en Trustpilot son de otro producto)
