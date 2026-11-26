# Blog: listado con tarjetas, artículo con índice y portada por defecto

Aprobado el 26-11-2026 (diseño corto, cambio pequeño).

## Por qué

El blog era una lista de enlaces sin imágenes. Se quiere que parezca un blog y poder diseñarlo ya,
con artículos de maqueta, antes de que haya contenido real.

## Enfoques considerados

Se prototiparon en tableros (desktop + 375 px) con la skill rework-section.

- **Listado:** A rejilla de tarjetas con filtros de tema (elegida); B destacado + filas compactas;
  C bloques por tema deslizables; D lista editorial con columna lateral.
- **Artículo:** A clásico, portada bajo el título; B cabecera partida; C banda a todo lo ancho;
  D portada + columna lateral fija con índice y WhatsApp (elegida, recomendación aceptada).

## Decisiones

- `image` + `imageAlt` opcionales en el frontmatter (`imageAlt` es obligatorio si hay `image`).
- Sin imagen propia: `src/assets/blog-portada-por-defecto.webp` (1200×630), generada con
  `scripts/blog-portada-por-defecto.mjs`: la foto de la portada en gris, fundida con el azul de la web,
  y el logo en blanco a la izquierda. Se usa en tarjetas, cabecera del artículo y `og:image`.
- Tarjetas: `BlogCard` / `BlogGrid`, compartidas por el índice y «Sigue leyendo» (máx. 3, mismo tema primero).
- Filtro por tema solo con JavaScript y solo si hay artículos de dos temas o más.
- Índice «En este artículo» solo con 3 h2 o más; plegable en móvil, fijo en la columna lateral en escritorio.
- Minutos de lectura calculados (200 palabras/min).
- Los borradores se ven en `astro dev` y nunca en la build. Las maquetas son
  `src/content/blog/maqueta-*.md` (`draft: true`); se borran antes de publicar artículos reales.

## Decisiones del implementador

- Textos «Sigue leyendo», «En este artículo», «N min de lectura»: borrador, pendientes de revisión.
- Una maqueta va en «Juicios rápidos» para que se vea el filtro, y otra con `raul-cabrera-consulta.webp`
  como portada propia.
