# Prácticas de producto/UX de Nikita Bier (fuentes públicas)

Investigación para guiar el rediseño móvil y conversacional de Ai2Me, pensado para
usuarios no técnicos (compradores del segundo cerebro / la dupla de Operador 90).

Nota de método: todo está parafraseado de fuentes públicas. Las fuentes primarias
son su entrevista en el podcast de Lenny y los análisis de su app Explode; las
síntesis de terceros (Antoine Buteau, Ilias Ism en Medium, la skill de GitHub de
heyimjames) se usan solo cuando resumen material público de Bier, y se marcan
como síntesis. Las citas textuales se limitan a dos frases muy cortas y conocidas.

---

## Las prácticas

### 1. El valor se demuestra en los primeros tres segundos
- **Práctica:** diseñar la primera pantalla para que el usuario entienda y sienta el
  valor central casi al instante. En su entrevista con Lenny lo plantea como
  optimizar para el momento "aha" en segundos, y eso suele obligar a recortar
  funciones sin piedad. En otro post suyo, enlazado desde esa misma entrevista,
  habla de invertir el tiempo hasta el valor (el ejemplo es Dupe): primero el
  resultado, después todo lo demás.
- **Por qué importa al no técnico:** no lee manuales ni explora. Si en la primera
  pantalla no ve un resultado, concluye que "esto no es para mí" y abandona.
- **Fuente:** https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier

### 2. Cada tap es un milagro: una acción por pantalla
- **Práctica:** parte de que la atención móvil es mínima y cada toque extra es una
  oportunidad de fuga. La síntesis de Antoine Buteau recoge su frase breve
  ("every tap is a miracle", 5 palabras) y la conclusión operativa: optimizar cada
  interacción del flujo principal.
- **Por qué importa al no técnico:** cada decisión adicional lo hace sentir que puede
  equivocarse. Una sola acción clara por pantalla convierte la app en una
  conversación, no en un examen.
- **Fuente:** https://www.antoinebuteau.com/lessons-from-nikita-bier/

### 3. Un campo por pantalla, y el mínimo de campos posible
- **Práctica:** en Explode, el registro pide solo teléfono, nombre y apellido, en
  pasos separados, con un botón grande y fijo para avanzar. El teardown de Julian
  Ivaldy lo describe paso a paso; una nota de Startup Spells recoge su idea de que
  pedir varios datos en la misma pantalla (su ejemplo: nombre y correo juntos)
  mata la conversión. La skill que sintetiza su playbook pone el coste orientativo:
  cada campo extra reduce la finalización.
- **Por qué importa al no técnico:** un formulario largo parece trabajo de oficina.
  Una pregunta por pantalla, en orden fácil primero, parece que alguien le está
  hablando.
- **Fuentes:** https://julianivaldy.com/explode-product-analysis-by-nikita-bier
  y https://startupspells.com/p/typeform-one-field-onboarding-ux-gas-snapchat-duolingo-spotify-signup-conversion

### 4. El flujo puede ser largo si cada paso sube la activación
- **Práctica:** en su hilo sobre construir apps sociales (resumido por Ilias Ism en
  Medium) sostiene que un registro largo no es problema si lleva a mayor
  activación, porque quien ya instaló rara vez abandona a mitad; lo que importa
  es que cada paso recoja solo información valiosa y se mida la activación, no
  la longitud.
- **Por qué importa al no técnico:** permite un onboarding guiado completo (tipo
  Laya, con decisiones tipadas) sin miedo a "son muchas preguntas", siempre que
  cada pregunta personalice visiblemente el resultado. Lo que mata no es la
  cantidad de pasos, es la sensación de que no sirven para nada.
- **Fuente:** https://medium.com/@illyism/how-to-build-successful-social-apps-lessons-from-nikita-bier-creator-of-tbh-and-gas-11c564ece467

### 5. Nada de tour de funciones: si necesitas explicar la UI, la UI falló
- **Práctica:** la síntesis de su playbook en GitHub lo formula como regla fija:
  sin tour de producto; si hace falta uno, se arreglan navegación, jerarquía,
  estados vacíos y textos, aunque los usuarios avanzados pierdan atajos. También:
  ningún estado vacío, se pre-puebla con contenido real o representativo.
- **Por qué importa al no técnico:** un lienzo en blanco (un prompt vacío frente a
  10 herramientas) es justo el estado que más lo paraliza. Entrar y ver un ejemplo
  ya hecho le enseña el producto sin enseñarle nada.
- **Fuente (síntesis secundaria de su playbook público):**
  https://github.com/heyimjames/nikita-bier-consumer-apps/blob/HEAD/SKILL.md

### 6. Permisos con "soft ask": nunca el diálogo del sistema en frío
- **Práctica:** antes de cualquier permiso del sistema (notificaciones, cámara,
  contactos), mostrar una pantalla propia que explica el beneficio con un botón
  principal y una salida secundaria tipo "ahora no". Solo si toca el botón
  principal aparece el diálogo oficial. El teardown de Explode documenta el
  patrón en notificaciones y cámara, incluida la explicación previa de para qué
  se necesita el permiso.
- **Por qué importa al no técnico:** un permiso pedido en frío se lee como riesgo
  o como truco. Pedido después de entender el beneficio, y con salida sin castigo,
  se lee como ayuda.
- **Fuentes:** https://julianivaldy.com/explode-product-analysis-by-nikita-bier
  y https://github.com/heyimjames/nikita-bier-consumer-apps/blob/HEAD/SKILL.md

### 7. Progreso visible y salida "Not Now" en los pasos que sacan de la app
- **Práctica:** en el paso más frágil de Explode (configurar algo fuera de la app,
  en iMessage), Bier apila cuatro reductores de fricción: vista previa de los
  pasos que quedan, indicador de progreso, opción de saltarlo ("Not Now") y guía
  en video picture-in-picture que sigue visible mientras el usuario está fuera,
  con camino de regreso.
- **Por qué importa al no técnico:** salir de la app (por ejemplo, a conectar
  Telegram o WhatsApp) es donde el usuario común se pierde y no vuelve. Ver que
  "casi termina" y poder saltar el paso sin perder lo avanzado lo mantiene dentro.
- **Fuente:** https://julianivaldy.com/explode-product-analysis-by-nikita-bier

### 8. Una sola cosa: audiencia estrecha y caso de uso único al inicio
- **Práctica:** empezar por una cuña pequeña y muy específica en vez de lanzar
  para todos, y ser descaradamente relevante para ese primer público. En la
  entrevista con Lenny y en su hilo coincide: las cosas grandes crecen desde
  segmentos pequeños, y un producto que funciona en una comunidad debería
  funcionar en las demás.
- **Por qué importa al no técnico:** si la pantalla intenta servir a todo el
  mundo, no le habla a nadie. Si la primera experiencia está hecha exactamente
  para su caso (su negocio, su oficio), siente que el producto "ya lo conoce".
- **Fuentes:** https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier
  y https://medium.com/@illyism/how-to-build-successful-social-apps-lessons-from-nikita-bier-creator-of-tbh-and-gas-11c564ece467

### 9. Buscar demanda latente: cristalizar lo que ya intenta hacer a las malas
- **Práctica:** buscar comportamientos existentes que la gente resuelve con
  métodos torpes o lentos, entender la motivación real y convertir ese proceso
  en un flujo directo. Es uno de los takeaways centrales de la entrevista de Lenny.
- **Por qué importa al no técnico:** el usuario común no quiere "una plataforma
  de agentes", quiere el resultado que hoy persigue por WhatsApp, notas y
  memoria. Si el producto nombra ese resultado en su idioma, no hay curva de
  aprendizaje conceptual.
- **Fuente:** https://www.lennysnewsletter.com/p/how-to-consistently-go-viral-nikita-bier

### 10. Diseñar para uso distraído y en ráfagas cortas
- **Práctica:** sus apps se diseñan para poder usarse distraído, en momentos
  robados del día; argumenta que si una app exige atención completa, el usuario
  casi no encuentra ocasiones para crear el hábito (lo ilustra con el cementerio
  de apps de video en vivo).
- **Por qué importa al no técnico:** su "sesión" real son 30 segundos entre
  clientes. Una interfaz tipo chat, que se retoma donde quedó y no exige terminar
  nada, encaja en esa vida; un dashboard de escritorio, no.
- **Fuente:** https://medium.com/@illyism/how-to-build-successful-social-apps-lessons-from-nikita-bier-creator-of-tbh-and-gas-11c564ece467

### 11. El hábito nace de exposición recurrente fuera de la app
- **Práctica:** para que un producto se vuelva hábito, su contenido tiene que
  aparecerle al usuario en otros lugares de forma orgánica y repetida (el ejemplo
  que da: contenido de una red que circula en otra), recordándole que el producto
  existe.
- **Por qué importa al no técnico:** no va a "entrar a revisar su panel". Si el
  segundo cerebro le llega por Telegram (y un día WhatsApp), con avances y
  resultados, la retención no depende de su disciplina.
- **Fuente:** https://medium.com/@illyism/how-to-build-successful-social-apps-lessons-from-nikita-bier-creator-of-tbh-and-gas-11c564ece467

### 12. Los productos viven y mueren en los píxeles
- **Práctica:** la síntesis de Buteau recoge su frase breve ("products live and
  die in the pixels", 6 palabras): los detalles finos de diseño, jerarquía y
  microtextos deciden el resultado. En Explode se ve en botones grandes, títulos
  claros, animaciones sutiles que sostienen la atención durante el onboarding.
- **Por qué importa al no técnico:** no distingue "buena tecnología" de "se ve
  fácil y confiable". Un botón enorme, un título en español simple y cero
  elementos compitiendo son, para él, la calidad del producto.
- **Fuentes:** https://www.antoinebuteau.com/lessons-from-nikita-bier/
  y https://julianivaldy.com/explode-product-analysis-by-nikita-bier

### Nota sobre contactos/compartir (solo si aplica)
Bier usa mecánicas sociales fuertes en productos de red (compartir tras el
onboarding con incentivo, en la primera sesión). Para Ai2Me, que no es una red
social, solo se traslada la versión sobria: el compartir aparece DESPUÉS del
primer resultado, como puente ("sigue esta conversación en Telegram"), nunca
como puerta que bloquea el uso. Documentado en el teardown de Explode:
https://julianivaldy.com/explode-product-analysis-by-nikita-bier

---

## Cómo se aplica al rediseño de Ai2Me

El dashboard actual de Ai2Me (prompt en blanco + grilla de 10 herramientas:
Builder, Slides, Sheets, Docs, Agent Launchpad, AI Chat, Image, Video, Business
Management, Client Acquisition) viola casi todas las prácticas anteriores:
lienzo en blanco, 10 decisiones simultáneas, jerga técnica, pensado para
escritorio y para quien ya sabe qué quiere construir.

Traducción práctica, pantalla por pantalla:

1. **Segundo 0 a 3 (práctica 1 y 5):** la app abre con un resultado ya hecho de
   ejemplo ("así se ve tu segundo cerebro trabajando") y un solo botón:
   "Quiero el mío". Nada de prompt vacío ni grilla.
2. **Onboarding conversacional tipo Laya (prácticas 2, 3 y 4):** una pregunta
   por pantalla, con opciones tocables (decisiones tipadas: elección, puntaje,
   sí/no), preguntas fáciles primero, progreso visible ("paso 2 de 5"). Cada
   respuesta cambia visiblemente lo que se está armando para él.
3. **La grilla desaparece como interfaz (prácticas 8 y 9):** las 10 herramientas
   dejan de ser opciones del usuario y pasan a ser decisiones internas del
   sistema: según sus respuestas, el router elige qué módulo de Ai2Me usar. El
   usuario pide resultados en su idioma ("quiero conseguir clientes"), no
   productos ("Client Acquisition").
4. **Cuenta al final, no al principio (prácticas 1 y 4):** primero ve su plan
   armado; el registro/pago llega cuando ya quiere conservar lo creado, y con
   los links propios de Ai2Me.
5. **Aterrizaje en la acción núcleo (prácticas 2 y 10):** tras el onboarding no
   hay dashboard: hay un chat. Una caja de texto, respuestas en ráfagas cortas,
   retomable en cualquier momento.
6. **Puente a Telegram con soft ask (prácticas 6 y 7):** pantalla propia que
   explica el beneficio ("tu cerebro te escribe por Telegram"), botón principal
   y "ahora no". Si el paso exige salir de la app, lleva vista previa de pasos,
   progreso y camino de regreso. WhatsApp queda como siguiente canal, mismo
   patrón.
7. **Retención fuera de la app (práctica 11):** el segundo cerebro manda
   avances y resultados por Telegram; la "app" vive donde el usuario ya está,
   no al revés.
8. **Píxeles (práctica 12):** look and feel móvil limpio: un titular por
   pantalla, botones grandes de pulgar, microcopy en español llano, cero jerga
   (nada de "credits", "launchpad" o "builder" frente al usuario).
9. **Audiencia cuña (práctica 8):** la primera versión habla solo al comprador
   de Operador 90 que quiere operar su negocio con su dupla; no intenta ser la
   portada universal de Ai2Me.
