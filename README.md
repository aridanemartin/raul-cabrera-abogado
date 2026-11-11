# raulcabreraabogado.com

Web de Raúl Cabrera Santana, abogado penalista en Las Palmas de Gran Canaria. Sitio estático en Astro desplegado en Vercel.

- Diseño y alcance: `docs/superpowers/specs/2026-11-09-web-raul-cabrera-design.md`
- Plan de implementación: `docs/superpowers/plans/2026-11-09-web-raul-cabrera.md`
- Documento para el cliente (no técnico): `README-RAUL.md`

## Requisitos

- Node.js ≥ 22.23 y npm.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Genera el sitio estático en `dist/`. |
| `npm run preview` | Sirve `dist/` en local. |
| `npm run check` | `astro check` (tipos y plantillas). |
| `npm test` | Pruebas unitarias (`tests/unit`). |
| `npm run test:dist` | Compila y prueba cada página generada (`tests/dist`): SEO, identidad, copy prohibido y ausencia de Google antes del consentimiento. |
| `npm run verify` | Todo lo anterior. Debe pasar antes de cada commit. |

## Variables de entorno

Copia `.env.example` a `.env` para desarrollo.

| Variable | Efecto |
|---|---|
| `PUBLIC_GA_ID` | ID de medición de GA4 (`G-…`). Si falta, no se carga Analytics. |
| `PUBLIC_INDEXABLE` | Solo `"true"` quita el `noindex`. Por defecto todas las páginas son `noindex, nofollow`. Se pone únicamente en Production tras el lanzamiento. |

## Fuente de verdad

La identidad del despacho (nombre, colegiación, dirección, teléfono, WhatsApp) vive solo en `src/config/site.ts`. El pie de todas las páginas muestra «Raúl Cabrera Santana · Abogado · Colegiado nº 6555 del Ilustre Colegio de la Abogacía de Las Palmas» (LSSI art. 10.1.d).
