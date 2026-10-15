# Ai2Me revertido con REA (la herramienta real, no una imitación)

**Herramienta:** REA `rea@6.5.0` (github.com/morluto/rea), corrida el 15-oct-2026
sobre los assets públicos de `ai2me.com`. Sin login, sin credenciales, sin bypass:
solo el HTML público y los bundles JavaScript que ese HTML carga.

## Comandos corridos y su Evidence

| Comando REA | Resultado |
|---|---|
| `rea list-browser-targets` (CDP, Chrome 152) | Evidence `ev_06f5be13af0149cbb9b9e11cc52a36fa89fd67ff7128123c86531d7c98ad8e5e` · target público de ai2me.com descubierto |
| `rea analyze-javascript-application` sobre los 38 chunks | Evidence `ev_62b2977a2afb5c4edd45b2bb6da4ad15d428ef8673d16c388c0e6d05519e1b6b` |

## Lo que REA reconstruyó de Ai2Me

- **38 archivos** JavaScript parseados, **2.616.471 bytes**, 0 fallos de parseo.
- **630.504 nodos AST** visitados.
- **903 módulos** reconstruidos en el grafo de la aplicación:
  **1.046 nodos y 2.399 aristas** de relaciones entre módulos.
- **2.201 findings** estáticos.
- Integridad verificada por REA sin contradicciones; digest raíz del corpus:
  `87c6a86f40ca9bc55d49da2f6f05807a0d0a5c30b733a1cfccc455b93e554f6f`.

El inventario identificador que sale de ese análisis (rutas como `/pricing`,
`/landing`, `/chat?agent_id=…`, los agentes `ai-builder`, `ai-slides`,
`ai-sheets`, `ai-docs`, `ai-image`, `ai-video`, `ai-client-acquisition`, los
endpoints `/api/…` candidatos y los vendors detectados) está desarrollado en
`docs/bundle-analysis.md`.

## Limitaciones (las que REA misma reporta, sin maquillar)

- La cobertura del grafo quedó **parcial**: el chunk mayor (el editor, ~1 MB) y
  otros dos superaron el presupuesto de resultados del análisis semántico;
  REA retuvo los hechos estáticos y de módulos de esos archivos.
- La superficie CDP de REA (`inspect-web-page`, `analyze-web-bundle`) no logró
  adjuntarse a la página en el Chrome headless de este entorno
  (`target_not_allowed`, tras probar endpoint HTTP, socket del navegador,
  origen en vivo y espejo local de los mismos assets). La lista de targets sí
  funcionó. Por eso el análisis fuerte es el de aplicación JavaScript, que es
  el que produce el grafo de módulos.
- El JSON crudo de Evidence del análisis pesa ~89 MB y no se incluye en este
  repo por tamaño; este documento es su resumen fiel.
- Nada de esto copia código de Ai2Me: es un inventario a nivel de
  identificadores y relaciones, para construir una capa original equivalente.
