# Web nueva de Raúl Cabrera — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la web nueva de Raúl Cabrera (abogado penalista, Las Palmas) en Astro estático desplegado en Vercel, con contacto por WhatsApp, Google Analytics 4 tras consentimiento e informe mensual por correo, SEO tradicional y preparación para IA, y un `README-RAUL.md` vivo para el cliente.

**Architecture:** Sitio estático Astro sin adaptador. Una única fuente de verdad (`src/config/site.ts`) para identidad, contacto y navegación; colecciones de contenido para servicios y blog; tres módulos cliente pequeños (formulario → WhatsApp, consentimiento + GA4, medición de contactos) probados con Vitest + happy-dom. Un conjunto de pruebas sobre `dist/` comprueba SEO, identidad, reglas de copy y ausencia de Google antes del consentimiento en cada página.

**Tech Stack:** Astro 7 (última estable), TypeScript, CSS propio con variables, `@fontsource-variable/manrope`, `@astrojs/sitemap`, Vitest + happy-dom + node-html-parser, Vercel.

**Spec:** `docs/superpowers/specs/2026-11-09-web-raul-cabrera-design.md`. Contexto y fuentes: `reports/Propuesta web Raúl Cabrera abogado.md`.

## Global Constraints

- Identidad exacta: «Raúl Cabrera Santana», «Colegiado nº 6555», «Ilustre Colegio de la Abogacía de Las Palmas» (ICALPA), colegiado desde 2018 (alta 16/05/2018). Dirección: «C/ Carmen Llopis 7, 4º, 35003 Las Palmas de Gran Canaria». Teléfono «676 88 22 21» / `+34676882221`. WhatsApp `34676882221`. Correo `info@raulcabreraabogado.com`. Nunca «Santana Cabrera».
- Pie de página de **todas** las páginas: «Raúl Cabrera Santana · Abogado · Colegiado nº 6555 del Ilustre Colegio de la Abogacía de Las Palmas».
- Colores: fondo `#FFFFFF`, tinta `#0E2A3B`, acento `#0F7C8C`, superficie `#EEF6F7`, texto secundario `#41596A`. Manrope autoalojada; titulares peso 800, `letter-spacing: -0.02em`.
- Voz: tuteo, frases cortas, respuesta primero. H1 de portada exacto: «Abogado penalista en Las Palmas de Gran Canaria». Entradilla de portada exacta: «Defensa penal desde la comisaría hasta la sentencia. Te explico qué va a pasar y qué podemos hacer.»
- Copy prohibido en cualquier página (lo hace cumplir la prueba de `dist/`): «especialista», «el mejor»/«la mejor», «garantiz», promesas de disponibilidad («24 h», «24/7», «24 horas al día», «365 días»; los plazos legales sí se permiten), porcentajes de éxito, «casos ganados», testimonios con nombre, «lorem», **cualquier precio o cifra en euros**.
- Toda afirmación jurídica enlaza al texto consolidado del BOE con ancla de artículo (p. ej. `https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444#a379`). Antes de escribirla, abre el artículo en boe.es y comprueba lo que dice. Sin jurisprudencia citada.
- Ninguna petición a dominios de Google (`googletagmanager.com`, `google-analytics.com`, `fonts.googleapis.com`, `fonts.gstatic.com`, `maps.google`, `google.com/maps` en `iframe`/`script`/`link`/`img`) en el HTML servido. GA4 solo se carga tras «Aceptar».
- Parámetros del evento de contacto: `generate_lead` con `lead_method` ∈ {`whatsapp`, `telefono`, `formulario`} y `lead_location` (texto corto: `barra`, `hero`, `urgencia`, `contacto`, `pie`, `pagina`). El spec dice `method`/`location`; se prefijan con `lead_` para no chocar con el parámetro estándar `method` de GA4.
- Variables de entorno: `PUBLIC_GA_ID` (si falta, no se carga Analytics) y `PUBLIC_INDEXABLE` (solo `"true"` quita el `noindex`; por defecto todo es `noindex, nofollow`).
- URLs con barra final (`trailingSlash: 'always'`). Canonical siempre `https://raulcabreraabogado.com` + ruta.
- Título ≤ 65 caracteres, meta description entre 70 y 160 caracteres, un solo `<h1>` por página.
- **Navegador:** no lances navegadores nuevos ni headless para comprobar nada. Usa el Chrome del usuario (Claude in Chrome o chrome-devtools MCP con `--autoConnect`).
- Valor por defecto pendiente de confirmar: la página de violencia de género se orienta a **la defensa de quien está denunciado**, y las víctimas se derivan a «Acusación particular». Si el usuario responde otra cosa, solo cambia el contenido de la Task 5.
- Cada task añade su entrada a «Mejoras hechas» de `README-RAUL.md` con el formato `**Qué hemos hecho** → Para qué te sirve`, en lenguaje llano y sin jerga.

## Review Focus

- Visitante que rechaza o ignora las cookies: cero peticiones a Google y el contacto (WhatsApp, Llamar, formulario) funciona igual. Pruebas en Task 2 y Task 3.
- `localStorage` no disponible o que lanza excepciones (modo privado, almacenamiento bloqueado): el banner aparece, la elección se aplica en esa visita y nada se rompe. Prueba en Task 3.
- Formulario con tildes, emojis, `&`, `?`, `#`, nombre de 200 caracteres o campos vacíos: URL de `wa.me` válida y correctamente codificada; con campos vacíos no se navega y se muestra el error junto al campo. Prueba en Task 2.
- Sin JavaScript: «WhatsApp» y «Llamar» son enlaces `<a href>` normales que funcionan. Prueba de `dist/` en Task 2.
- `PUBLIC_GA_ID` o `PUBLIC_INDEXABLE` sin definir (vistas previas): no se inyecta GA, no hay errores en consola y todas las páginas llevan `noindex`. Pruebas en Task 1 y Task 3.

---

### Task 1: Proyecto base, identidad y arnés de pruebas sobre `dist/`

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `.env.example`, `.gitignore` (añadir `node_modules/`, `dist/`, `.astro/`, `.vercel/`, `.env`)
- Create: `src/config/site.ts`, `src/styles/tokens.css`, `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`
- Create: `src/pages/index.astro` (provisional: H1 + entradilla; se completa en Task 6)
- Create: `tests/dist/load.ts`, `tests/dist/site.test.ts`
- Create: `README-RAUL.md`, `README.md`

**Interfaces:**
- Produces: `SITE` en `src/config/site.ts`:
  `SITE.url`, `SITE.name` (`'Raúl Cabrera Abogado'`), `SITE.lawyer.{fullName, colegiado, colegio, colegioShort, since, sinceDate}`, `SITE.address.{street, postalCode, locality, region, country}`, `SITE.phone.{display, e164}`, `SITE.whatsapp`, `SITE.email`, `SITE.google.{rating, reviews, profileUrl: string | null}`, `SITE.sameAs: string[]` (elAbogado `https://www.elabogado.com/abogados/raul-cabrera-santana/`; añade el perfil de Google cuando exista), `SITE.nav: {label: string; href: string}[]`.
- Produces: `BaseLayout` con props `{ title: string; description: string; breadcrumbs?: {name: string; path: string}[]; jsonLd?: object[]; ogType?: 'website' | 'article' }`. Renderiza `<title>`, meta description, canonical, Open Graph, `<meta name="robots">` según `PUBLIC_INDEXABLE`, `Header`, `<main>`, `Footer` y los `slot` de `ContactBar` y `ConsentBanner` (se rellenan en Tasks 2 y 3).
- Produces: `loadPages(): Promise<{ path: string; html: string; root: HTMLElement }[]>` en `tests/dist/load.ts`, que lee todos los `dist/**/*.html` con node-html-parser.

- [ ] **Step 1: Scaffold.** `npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git`, luego `npm i @astrojs/sitemap @fontsource-variable/manrope` y `npm i -D vitest happy-dom node-html-parser @astrojs/check typescript`. Si alguna API de este plan difiere en Astro 7, sigue la documentación de la versión instalada (Context7 `/withastro/docs`).
- [ ] **Step 2: Configura** `astro.config.mjs` con `site: 'https://raulcabreraabogado.com'`, `trailingSlash: 'always'`, `build.format: 'directory'`, `integrations: [sitemap()]`. Scripts en `package.json`: `dev`, `build`, `preview`, `check` (`astro check`), `test` (`vitest run tests/unit`), `test:dist` (`astro build && vitest run tests/dist`), `verify` (`npm run check && npm test && npm run test:dist`).
- [ ] **Step 3: Escribe la prueba de `dist/` que falla** en `tests/dist/site.test.ts`. Para cada página salvo `404`:
  - `title` existe y mide ≤ 65; meta description mide 70–160;
  - exactamente un `h1`;
  - `link[rel=canonical]` empieza por `https://raulcabreraabogado.com/` y termina en `/`;
  - el texto del pie contiene `Colegiado nº 6555` y `Raúl Cabrera Santana`;
  - el HTML no contiene `Santana Cabrera`;
  - sin `PUBLIC_INDEXABLE`, `meta[name=robots]` es `noindex, nofollow`;
  - ningún `script[src]`, `link[href]`, `iframe[src]` ni `img[src]` apunta a los dominios de Google de Global Constraints;
  - el texto visible no casa con `/especialista|\bel mejor\b|\bla mejor\b|garantiz|24\s?h\b|24\/7|24 horas (al|del) día|365 días|% de éxito|casos ganados|lorem|\d+\s?€|euros/i`. Las referencias legales a plazos («en las 24 horas siguientes») sí están permitidas.
- [ ] **Step 4:** `npm run test:dist` → FAIL (no existe la página o faltan elementos).
- [ ] **Step 5: Implementa** `site.ts`, tokens (los colores de Global Constraints como `--color-*`, escala tipográfica, espaciado, radio 12px), `global.css` (importa Manrope, reset, foco visible, `prefers-reduced-motion`), `Header` (nombre + navegación; en móvil, botón de menú accesible con `aria-expanded`), `Footer` (identidad exacta, dirección, teléfono, correo, enlaces legales) y `BaseLayout`. Portada provisional con el H1 y la entradilla exactos.
- [ ] **Step 6:** `npm run verify` → PASS.
- [ ] **Step 7: Crea `README-RAUL.md`** con las secciones del spec §7: qué es la web, mejoras hechas, cómo te llegan los clientes, tu informe mensual por correo, lo que necesitamos de ti, decisiones que puedes cambiar, qué viene después. Rellena «Lo que necesitamos de ti» con: foto profesional; revisar y aprobar los textos antes de publicar; confirmar si en violencia de género defiendes a denunciados, a víctimas o a ambos; si atiendes en inglés; si atiendes urgencias fuera de horario (hasta entonces no se anuncia); aceptar la invitación a Google Analytics; confirmar que el perfil de Google está a tu nombre; acceso al dominio (GoDaddy) y al hosting (BanaHosting). Primera entrada de mejoras: «**Web nueva, hecha desde cero** → Una base rápida y moderna, sin plantillas ni contenido de relleno» y «**Tu nombre y número de colegiado, bien escritos en todas las páginas** → Cumples la ley de servicios de internet y Google deja de confundir tus apellidos». `README.md` técnico: requisitos, scripts y variables de entorno.
- [ ] **Step 8: Commit** `feat: base Astro, identidad y pruebas sobre dist`.

### Task 2: Contacto por WhatsApp (barra fija, tarjeta de urgencia y formulario)

**Files:**
- Create: `src/lib/whatsapp.ts`, `src/scripts/contact-form.ts`
- Create: `src/components/ContactBar.astro`, `src/components/UrgencyCard.astro`, `src/components/ContactForm.astro`
- Modify: `src/layouts/BaseLayout.astro` (montar `ContactBar` en todas las páginas)
- Test: `tests/unit/whatsapp.test.ts`, `tests/unit/contact-form.test.ts`, `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `SITE.whatsapp`, `SITE.phone.e164`.
- Produces: `DEFAULT_WHATSAPP_TEXT = 'Hola Raúl, te escribo desde tu web.'`; `buildWhatsAppUrl(text: string): string`; `buildContactMessage(input: { nombre: string; asunto: string; urgencia: string }): string`; `ASUNTOS: readonly string[]`; `URGENCIAS: readonly string[]`; `bindContactForm(form: HTMLFormElement, navigate?: (url: string) => void): void`.
- Produces: los enlaces de contacto llevan `data-lead="whatsapp" | "telefono"` y `data-lead-location="…"`. El formulario lleva `data-lead-location` (`contacto` o `portada`). Tras un envío válido, y justo antes de `navigate`, `bindContactForm` despacha en el formulario `new CustomEvent('rc:lead', { bubbles: true, detail: { method: 'formulario', location } })`. La Task 3 escucha los clics y ese evento.

- [ ] **Step 1: Pruebas que fallan** en `tests/unit/whatsapp.test.ts`:
  - `buildWhatsAppUrl('Hola & adiós? #1 😀')` empieza por `https://wa.me/34676882221?text=` y `decodeURIComponent` de lo que sigue devuelve el texto original;
  - `buildContactMessage({nombre:'  Ana  López ', asunto:'Juicio rápido, alcoholemia o tráfico', urgencia:'Es urgente (hoy o mañana)'})` === `'Hola Raúl, soy Ana López. Te escribo desde tu web por un asunto de: Juicio rápido, alcoholemia o tráfico. Urgencia: Es urgente (hoy o mañana).'`;
  - un nombre de 200 caracteres se recorta a 80.
- [ ] **Step 2: Pruebas que fallan** en `tests/unit/contact-form.test.ts` (entorno happy-dom, con el HTML del formulario):
  - con los tres campos rellenos, `submit` llama a `navigate` una vez con `buildWhatsAppUrl(buildContactMessage(...))`;
  - un envío válido despacha un único `rc:lead` con `detail` `{method:'formulario', location:'contacto'}` antes de llamar a `navigate`;
  - con el nombre vacío no se llama a `navigate` ni se despacha `rc:lead`, el campo queda con `aria-invalid="true"` y hay un mensaje de error asociado por `aria-describedby`;
  - funciona sin consentimiento de cookies (no depende de Analytics).
- [ ] **Step 3:** `npm test` → FAIL.
- [ ] **Step 4: Implementa** `whatsapp.ts` y `contact-form.ts`. Plantilla exacta del mensaje en el Step 1; colapsa espacios y recorta. `ASUNTOS` = «Detención o citación como investigado», «Juicio rápido, alcoholemia o tráfico», «Violencia de género o doméstica», «Lesiones, amenazas o delito leve», «Soy víctima y quiero personarme», «Recurso o antecedentes penales», «Otro asunto». `URGENCIAS` = «Es urgente (hoy o mañana)», «Esta semana», «Solo quiero informarme». `navigate` por defecto: `window.location.assign`.
- [ ] **Step 5: Componentes.**
  - `ContactBar`: fija abajo en móvil (< 768px), oculta en escritorio. Contiene dos `<a>` («WhatsApp» → `buildWhatsAppUrl(DEFAULT_WHATSAPP_TEXT)`, `data-lead-location="barra"`; «Llamar» → `tel:+34676882221`). Táctil ≥ 48px y `padding-bottom` del `body` para que no tape contenido.
  - `UrgencyCard`: «¿Te han detenido o tienes un juicio rápido?» + botón «Escríbeme por WhatsApp» + «o llama al 676 88 22 21».
  - `ContactForm`: `<label for>` reales; selects con `ASUNTOS` y `URGENCIAS`; texto junto al botón: «Se abrirá WhatsApp con tu mensaje. La web no guarda tus datos. No incluyas detalles de tu caso: los vemos en privado.»
- [ ] **Step 6: Añade a la prueba de `dist/`:** en todas las páginas hay un `a[href^="https://wa.me/34676882221"]` y un `a[href="tel:+34676882221"]` dentro de la barra.
- [ ] **Step 7:** `npm run verify` → PASS.
- [ ] **Step 8: README-RAUL.** Añade «**WhatsApp y Llamar siempre a mano en el móvil** → Quien tiene prisa te escribe con un toque desde cualquier página» y «**Un formulario que se convierte en WhatsApp** → El mensaje te llega ya redactado y la web no guarda datos de nadie». Rellena «Cómo te llegan los clientes».
- [ ] **Step 9: Commit** `feat: contacto por WhatsApp con barra fija y formulario`.

### Task 3: Consentimiento de cookies, Google Analytics 4 y medición de contactos

**Files:**
- Create: `src/lib/consent.ts`, `src/lib/analytics.ts`, `src/scripts/lead-tracking.ts`, `src/scripts/consent-banner.ts`
- Create: `src/components/ConsentBanner.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Test: `tests/unit/consent.test.ts`, `tests/unit/analytics.test.ts`

**Interfaces:**
- Consumes: `data-lead`, `data-lead-location` y el evento `rc:lead` (Task 2).
- Produces: `CONSENT_KEY = 'rc-consent'`; `type ConsentChoice = { analytics: boolean; ts: string; v: 1 }`; `readConsent(now?: Date): ConsentChoice | null`; `writeConsent(analytics: boolean, now?: Date): ConsentChoice`.
- Produces: `type LeadMethod = 'whatsapp' | 'telefono' | 'formulario'`; `initAnalytics(gaId: string | undefined): void`; `enableAnalytics(gaId: string): void`; `disableAnalytics(): void`; `isAnalyticsEnabled(): boolean`; `trackLead(method: LeadMethod, location: string): void`; `bindLeadTracking(doc: Document): void`; `bindConsentBanner(banner: HTMLElement, gaId: string | undefined): void`. La página de cookies (Task 9) reutiliza `writeConsent`, `enableAnalytics` y `disableAnalytics`.

- [ ] **Step 1: Pruebas que fallan** en `tests/unit/consent.test.ts`:
  - sin dato → `null`; JSON corrupto → `null`;
  - elección de hace más de 365 días → `null`;
  - `writeConsent(true)` y luego `readConsent()` → `{analytics:true, v:1}`;
  - si `localStorage.getItem` y `setItem` lanzan, ninguna función lanza; `readConsent` devuelve `null` y `writeConsent` devuelve igualmente la elección.
- [ ] **Step 2: Pruebas que fallan** en `tests/unit/analytics.test.ts` (happy-dom):
  - `initAnalytics('G-TEST')` sin consentimiento: no hay ningún `script[src*="googletagmanager"]`, y `dataLayer` contiene `['consent','default',{ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied'}]`;
  - `initAnalytics(undefined)` con consentimiento guardado: no inyecta nada ni lanza;
  - `enableAnalytics('G-TEST')` dos veces: inyecta un único script `https://www.googletagmanager.com/gtag/js?id=G-TEST` y deja en `dataLayer` `consent update` con `analytics_storage:'granted'` y `config` con `G-TEST`;
  - `trackLead('whatsapp','barra')` sin consentimiento no añade nada a `dataLayer`; con consentimiento añade `['event','generate_lead',{lead_method:'whatsapp', lead_location:'barra'}]`;
  - `disableAnalytics()` empuja `consent update` con `analytics_storage:'denied'` y borra las cookies `_ga` y `_ga_*`;
  - `bindLeadTracking`: un clic en `a[data-lead="telefono"][data-lead-location="hero"]` llama a `trackLead('telefono','hero')`, y un `rc:lead` con `detail` `{method:'formulario', location:'contacto'}` despachado en el documento llama a `trackLead('formulario','contacto')`.
- [ ] **Step 3:** `npm test` → FAIL.
- [ ] **Step 4: Implementa** los módulos: modo de consentimiento básico (no se carga `gtag.js` hasta aceptar), stub `window.dataLayer` + `gtag` con `arguments`, `ad_*` siempre `denied`, sin cola de eventos previos al consentimiento y todo acceso a `localStorage` dentro de `try/catch`.
- [ ] **Step 5: `ConsentBanner`** (panel no modal, encima de la barra de contacto, que no tape los botones y ocupe ≤ 30 % de la altura en 390×844). Copy exacto:
  - título: «Cookies de análisis»;
  - texto: «Uso Google Analytics para saber cuánta gente visita la web y cuántos me contactan. Solo se activa si aceptas. Puedes cambiar tu elección cuando quieras en la página de cookies.»;
  - botones «Aceptar» y «Rechazar» con el mismo estilo y tamaño;
  - enlace «Más información» → `/cookies/`.
  Se muestra si `readConsent()` es `null`; tras elegir se oculta y, si se acepta, llama a `enableAnalytics`. `BaseLayout` llama a `initAnalytics(import.meta.env.PUBLIC_GA_ID)` y a `bindLeadTracking(document)`.
- [ ] **Step 6:** `npm run verify` → PASS. La prueba de `dist/` de la Task 1 sigue garantizando que no hay Google en el HTML servido.
- [ ] **Step 7: README-RAUL.** Añade «**Google Analytics con aviso de cookies** → Sabrás cuánta gente te contacta y por dónde (WhatsApp, llamada o formulario), cumpliendo la normativa». Explica en una frase que no se cuentan quienes rechazan las cookies. Rellena «Tu informe mensual por correo»: llega el día 4 de cada mes en PDF; qué mirar (contactos por WhatsApp, llamada y formulario, y las páginas desde las que llegan); y si no llega, revisar la carpeta de spam y avisarnos.
- [ ] **Step 8: Commit** `feat: consentimiento de cookies, GA4 y medición de contactos`.

### Task 4: Datos estructurados, robots, llms.txt, sitemap y redirecciones

**Files:**
- Create: `src/lib/seo.ts`, `public/robots.txt`, `public/llms.txt`, `vercel.json`
- Modify: `src/layouts/BaseLayout.astro` (JSON-LD global + migas)
- Test: `tests/unit/seo.test.ts`, `tests/unit/redirects.test.ts`, `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `SITE`.
- Produces: `buildSiteGraph(): Record<string, unknown>` (un `@graph` con `LegalService` `@id` `https://raulcabreraabogado.com/#despacho` y `Person` `@id` `https://raulcabreraabogado.com/#raul`); `buildBreadcrumbs(items: {name: string; path: string}[]): Record<string, unknown>`; `buildArticle(input: {title: string; description: string; path: string; datePublished: Date; dateModified?: Date}): Record<string, unknown>`.

- [ ] **Step 1: Pruebas que fallan** en `tests/unit/seo.test.ts`:
  - `Person` tiene `name:'Raúl Cabrera Santana'`, `jobTitle:'Abogado'`, `identifier:{'@type':'PropertyValue', propertyID:'Número de colegiado (ICALPA)', value:'6555'}` y `memberOf.name:'Ilustre Colegio de la Abogacía de Las Palmas'`;
  - `LegalService` tiene `address.postalCode:'35003'`, `telephone:'+34676882221'`, `areaServed.name:'Canarias'` y `founder`/`employee` → `#raul`;
  - `sameAs` no contiene `null` y no hay `aggregateRating` en ningún sitio;
  - `buildBreadcrumbs` produce `BreadcrumbList` con `position` 1..n y URLs absolutas con barra final.
- [ ] **Step 2: Prueba que falla** en `tests/unit/redirects.test.ts`: `vercel.json` tiene `trailingSlash: true`. Cada origen del mapa siguiente tiene una redirección `statusCode: 301` a su destino:
  - `/sobre-mi/` → `/sobre-raul/`
  - `/politica-de-privacidad/` → `/privacidad/`
  - `/politica-de-cookies/` → `/cookies/`
  - `/terminos-y-condiciones/` → `/aviso-legal/`
  - `/servicio/defensa-penal-personalizada/` → `/servicios/`
  - `/servicio/asistencia-en-investigaciones/` → `/servicios/asistencia-detenido-investigado/`
  - `/servicio/delitos-de-violencia/` → `/servicios/violencia-genero-domestica/`
  - `/servicio/delitos-menores/` → `/servicios/lesiones-amenazas-delitos-leves/`
  - `/servicio/proteccion-de-derechos/` → `/servicios/`
  - `/servicio/revision-de-sentencias/` → `/servicios/recursos-antecedentes/`
  - más los tres posts antiguos, que obtienes con `curl -s https://raulcabreraabogado.com/wp-sitemap-posts-post-1.xml`: «¿Cómo saber si necesitas un abogado penalista?» → `/como-trabajo/`, y los otros dos a la página nueva de tema más cercano.
  - No hay reglas para `/team/*`, `/aeen_team_category/*`, `/unete-al-equipo/` ni `/feed/`: deben dar 404.
- [ ] **Step 3:** `npm test` → FAIL.
- [ ] **Step 4: Implementa** `seo.ts`, el JSON-LD en `BaseLayout` (`buildSiteGraph` en todas las páginas, migas si hay `breadcrumbs`) y `vercel.json` (redirecciones del Step 2, `trailingSlash: true`, cabeceras de seguridad `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` y `Permissions-Policy: camera=(), microphone=(), geolocation=()`).
- [ ] **Step 5: `public/robots.txt`.** `User-agent: *` / `Allow: /` y `Sitemap: https://raulcabreraabogado.com/sitemap-index.xml`. Un comentario explica que se permiten todos los bots de búsqueda e IA por decisión del cliente.
- [ ] **Step 6: `public/llms.txt`.** Formato llmstxt.org en español: H1 «Raúl Cabrera Santana — Abogado penalista en Las Palmas de Gran Canaria», resumen en `>` con colegiación y ámbito (Canarias), contacto (teléfono, WhatsApp, dirección) y lista de enlaces a portada, urgencias, las seis páginas de servicio, «Sobre Raúl» y «Cómo trabajo».
- [ ] **Step 7: Añade a la prueba de `dist/`:** cada página tiene al menos un `script[type="application/ld+json"]` que parsea, y `dist/sitemap-index.xml` existe y no lista `/404/`.
- [ ] **Step 8:** `npm run verify` → PASS.
- [ ] **Step 9: README-RAUL.** Añade «**Una ficha clara para Google y las IA** → Google, ChatGPT y otros asistentes entienden quién eres, dónde estás y qué casos llevas» y «**Las direcciones antiguas llevan a las nuevas** → No se pierde lo que Google ya conocía de tu web». En «Decisiones que puedes cambiar», explica en dos frases que la web permite a los asistentes de IA leerla (también para entrenarse) y que puede pedirse lo contrario.
- [ ] **Step 10: Commit** `feat: datos estructurados, robots, llms.txt y redirecciones`.

### Task 5: Páginas de servicio

**Files:**
- Create: `src/content.config.ts`, `src/content/servicios/*.md` (6), `src/layouts/ServiceLayout.astro`, `src/components/ServiceCard.astro`, `src/components/Faq.astro`, `src/pages/servicios/index.astro`, `src/pages/servicios/[slug].astro`
- Test: `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `BaseLayout`, `UrgencyCard`, `buildBreadcrumbs`.
- Produces: colección `servicios` (glob en `src/content/servicios`) con el esquema `{ title: string (≤65), description: string (70–160), h1: string, cardTitle: string, summary: string, order: number, legalRefs: {label: string; url: string (empieza por https://www.boe.es/)}[] (≥1), faqs: {q: string; a: string}[] (3–5) }`. Colección `blog` (glob en `src/content/blog`) con `{ title, description, h1, datePublished: date, dateModified?: date, cluster: 'detenido' | 'juicio-rapido' | 'violencia' | 'delitos-leves' | 'sentencia' | 'extranjeros', draft: boolean }` (la usa la Task 8).

- [ ] **Step 1: Prueba que falla** en la prueba de `dist/`: existen las seis páginas:
  - `/servicios/asistencia-detenido-investigado/`
  - `/servicios/alcoholemia-delitos-trafico/`
  - `/servicios/violencia-genero-domestica/`
  - `/servicios/lesiones-amenazas-delitos-leves/`
  - `/servicios/acusacion-particular/`
  - `/servicios/recursos-antecedentes/`

  Cada una tiene un `BreadcrumbList` en su JSON-LD, ≥ 1 enlace a `boe.es`, un enlace de WhatsApp en el cuerpo (fuera de la barra) y ≥ 600 palabras de texto principal. `/servicios/` enlaza a las seis.
- [ ] **Step 2:** `npm run test:dist` → FAIL.
- [ ] **Step 3: Implementa** el esquema, `ServiceLayout` (migas, H1, resumen de 2–3 frases que responde primero, cuerpo, `Faq` como `<details>` accesibles, `UrgencyCard`, «Otros casos» con 3 tarjetas) y las rutas.
- [ ] **Step 4: Escribe el contenido** de las seis páginas con esta estructura:
  - «En pocas palabras» (respuesta directa);
  - «Qué puede pasar», con las penas y los plazos de cada artículo citado, enlazados al BOE;
  - «Cómo lo trabajo», por pasos;
  - «En Las Palmas», solo con datos verificables y enlazados, p. ej. las Secciones de Violencia sobre la Mujer del Tribunal de Instancia de Las Palmas (BOE-A-2026-1261);
  - preguntas frecuentes.

  Artículos base que debes verificar en boe.es antes de citarlos:
  - CP (`BOE-A-1995-25444`): arts. 379, 384, 147, 169–171, 153, 173.2, 80–87 y 136;
  - LECrim (`BOE-A-1882-6036`): arts. 520, 795 y siguientes y 801;
  - LO 1/2026 (`BOE-A-2026-7966`);
  - Ley 1/1996 de asistencia jurídica gratuita (`BOE-A-1996-750`).

  Violencia de género: orientada a la defensa del denunciado, con enlace a «Acusación particular» para víctimas. Sin cifras de honorarios.
- [ ] **Step 5:** `npm run verify` → PASS (incluye las reglas de copy prohibido).
- [ ] **Step 6: README-RAUL.** Añade «**Seis páginas, una por tipo de caso** → Quien busca, por ejemplo, «abogado alcoholemia Las Palmas» encuentra una página que habla exactamente de eso». Lista las seis en «Lo que necesitamos de ti → Revisar estos textos», con la duda de violencia de género.
- [ ] **Step 7: Commit** `feat: páginas de servicio con contenido y referencias al BOE`.

### Task 6: Portada y páginas de urgencia

**Files:**
- Modify: `src/pages/index.astro`
- Create: `src/pages/te-han-detenido.astro`, `src/pages/juicio-rapido.astro`, `src/components/TrustStrip.astro`, `src/components/Portrait.astro`
- Test: `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `UrgencyCard`, `ServiceCard`, colección `servicios`, `SITE.google`.
- Produces: `TrustStrip` (props: ninguna; muestra «Colegiado nº 6555 · ICALPA · desde 2018» y, si `SITE.google.profileUrl`, «★ 5,0 en Google · 10 reseñas» con enlace al perfil y la nota «Reseñas publicadas por usuarios en Google; no las seleccionamos ni las modificamos»); `Portrait` (props `{size: 'sm' | 'lg'}`; retrato provisional con las iniciales «RC» sobre el acento, `alt` vacío decorativo, hasta que haya foto real).

- [ ] **Step 1: Prueba que falla:**
  - el `h1` de `/` es exactamente «Abogado penalista en Las Palmas de Gran Canaria», y la entradilla exacta aparece en `/`;
  - `/te-han-detenido/` y `/juicio-rapido/` existen, enlazan al BOE y llevan un enlace de WhatsApp antes del primer `h2`.
- [ ] **Step 2:** `npm run test:dist` → FAIL.
- [ ] **Step 3: Portada**, en este orden: hero (eyebrow «Las Palmas de Gran Canaria · Todas las islas», H1, entradilla, `UrgencyCard`, `TrustStrip`, `Portrait`), servicios (seis tarjetas), «Cómo trabajo» en 3 pasos con enlace, por qué conmigo (solo hechos verificables: colegiado desde 2018, actúa en todas las islas, trato directo con él) y contacto (`ContactForm`). Sin sliders, animaciones de entrada ni imágenes de banco.
- [ ] **Step 4: Páginas de urgencia**, de respuesta primero, con títulos y descripciones:
  - `/te-han-detenido/`: título «¿Te han detenido en Las Palmas? Qué hacer ahora | Raúl Cabrera». Contenido: plazo máximo de detención (art. 17 CE, `BOE-A-1978-31229`) y derechos del detenido (art. 520 LECrim).
  - `/juicio-rapido/`: título «Juicio rápido en Las Palmas: cómo prepararlo | Raúl Cabrera». Contenido: arts. 795 y siguientes y 801 LECrim.
- [ ] **Step 5:** `npm run verify` → PASS.
- [ ] **Step 6: README-RAUL.** Añade «**Portada y guías de urgencia** → Quien acaba de vivir una detención o tiene un juicio rápido sabe qué hacer y cómo contactarte en segundos».
- [ ] **Step 7: Commit** `feat: portada y páginas de urgencia`.

### Task 7: Sobre Raúl, Cómo trabajo, Preguntas frecuentes, Contacto y 404

**Files:**
- Create: `src/pages/sobre-raul.astro`, `src/pages/como-trabajo.astro`, `src/pages/preguntas-frecuentes.astro`, `src/pages/contacto.astro`, `src/pages/404.astro`, `src/components/MapLink.astro`
- Test: `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `Portrait`, `TrustStrip`, `ContactForm`, `Faq`, `SITE`.

- [ ] **Step 1: Prueba que falla:**
  - existen las cinco páginas;
  - `/contacto/` contiene `ContactForm`, `tel:` y la dirección exacta, y ningún `iframe`;
  - `/como-trabajo/` contiene «hoja de encargo» y «justicia gratuita»;
  - la `404` enlaza a `/te-han-detenido/` y a `/contacto/`;
  - todo `href` interno de cualquier página resuelve a un archivo de `dist/`.
- [ ] **Step 2:** `npm run test:dist` → FAIL.
- [ ] **Step 3: Implementa:**
  - **Sobre Raúl**: colegiación, desde 2018, islas y juzgados donde actúa, trato directo; nada de idiomas, 24 h ni formación hasta que Raúl lo confirme.
  - **Cómo trabajo**: del primer WhatsApp a la sentencia en 5 pasos. Presupuesto previo por escrito en la hoja de encargo (LO 5/2024, `BOE-A-2024-23630`; verifica el artículo). Justicia gratuita con enlace a la Ley 1/1996. Sin cifras.
  - **Preguntas frecuentes**: 8–10 preguntas generales que enlazan a la página de servicio correspondiente.
  - **Contacto**: formulario, teléfono, correo, dirección y `MapLink`, que es un enlace «Ver en Google Maps» a `https://www.google.com/maps/search/?api=1&query=` + dirección codificada, sin `iframe`.
  - **404**: accesos a urgencia y contacto.
- [ ] **Step 4:** `npm run verify` → PASS.
- [ ] **Step 5: README-RAUL.** Añade «**Sobre ti, cómo trabajas y preguntas frecuentes** → Generan confianza antes del primer mensaje y responden las dudas que más te hacen». Pide en «Lo que necesitamos de ti» las preguntas reales que más le hacen sus clientes.
- [ ] **Step 6: Commit** `feat: páginas de confianza, contacto y 404`.

### Task 8: Blog (estructura)

**Files:**
- Create: `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/layouts/PostLayout.astro`, `src/content/blog/.gitkeep`
- Test: `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: colección `blog` (Task 5), `buildArticle`, `buildBreadcrumbs`.
- Produces: la convención de la que dependerá el proyecto 2: un artículo = `src/content/blog/<slug>.md` con el frontmatter de la Task 5; `draft: true` no se publica.

- [ ] **Step 1: Prueba que falla:** `/blog/` existe con un `h1` y, sin artículos, muestra el texto «Muy pronto publicaré aquí guías prácticas sobre derecho penal en Las Palmas.» y los enlaces a las dos guías de urgencia. Añade un fixture `tests/fixtures/blog/ejemplo.md` y una prueba unitaria del filtro `isPublished(entry)`, que excluye `draft: true` y fechas futuras.
- [ ] **Step 2:** `npm test && npm run test:dist` → FAIL.
- [ ] **Step 3: Implementa** el índice agrupado por `cluster`, la plantilla del artículo (autor «Raúl Cabrera Santana», fechas «Publicado» y «Última revisión» visibles, JSON-LD `Article` + migas, `UrgencyCard` al final) y `isPublished` en `src/lib/blog.ts`. Los posts antiguos no se migran: eran genéricos y se redirigen (Task 4).
- [ ] **Step 4:** `npm run verify` → PASS.
- [ ] **Step 5: README-RAUL.** Añade «**Blog preparado** → Listo para publicar artículos que tú revisas y firmas (siguiente fase del proyecto)».
- [ ] **Step 6: Commit** `feat: estructura del blog`.

### Task 9: Páginas legales

**Files:**
- Create: `src/pages/aviso-legal.astro`, `src/pages/privacidad.astro`, `src/pages/cookies.astro`, `src/scripts/cookie-settings.ts`
- Test: `tests/unit/cookie-settings.test.ts`, `tests/dist/site.test.ts`

**Interfaces:**
- Consumes: `writeConsent`, `readConsent`, `enableAnalytics`, `disableAnalytics` (Task 3).
- Produces: `bindCookieSettings(root: HTMLElement, gaId: string | undefined): void`.

- [ ] **Step 1: Pruebas que fallan:**
  - `/aviso-legal/` contiene «Raúl Cabrera Santana», «6555», «Ilustre Colegio de la Abogacía de Las Palmas», «Licenciado en Derecho» o «Graduado en Derecho» (el título exacto queda marcado como pendiente en el README), un enlace al EGAE (`BOE-A-2021-4568`) y otro al Código Deontológico;
  - `/cookies/` lista las cookies `_ga` y `_ga_<ID>` con su finalidad y duración y tiene botones «Aceptar» y «Rechazar»;
  - en `tests/unit/cookie-settings.test.ts`: pulsar «Rechazar» llama a `disableAnalytics` y guarda `analytics:false`, y pulsar «Aceptar» llama a `enableAnalytics(gaId)`; el estado actual se muestra en texto.
- [ ] **Step 2:** `npm test && npm run test:dist` → FAIL.
- [ ] **Step 3: Implementa** los textos:
  - **Aviso legal**: datos de LSSI art. 10, con el NIF copiado del aviso legal actual de la web vieja.
  - **Privacidad**: responsable, finalidades, base legal y derechos ante la AEPD. Debe dejar claro que el formulario no guarda datos y que lo que se escriba por WhatsApp se rige por la política de WhatsApp y el secreto profesional. Proveedores: Vercel (alojamiento) y Google (Analytics, solo con consentimiento).
  - **Cookies**: qué son, la tabla de cookies y los controles.
- [ ] **Step 4:** `npm run verify` → PASS.
- [ ] **Step 5: README-RAUL.** Añade «**Textos legales nuevos** → Aviso legal, privacidad y cookies correctos, con tu nombre y colegiación, y fáciles de leer». Pide confirmar el título exacto («Licenciado» o «Graduado en Derecho») y la universidad.
- [ ] **Step 6: Commit** `feat: aviso legal, privacidad y cookies`.

### Task 10: Rendimiento, accesibilidad y documentación técnica

**Files:**
- Modify: lo que señale la auditoría
- Modify: `README.md`, `README-RAUL.md`

- [ ] **Step 1:** `npm run build && npm run preview`. En el Chrome del usuario (chrome-devtools MCP con `--autoConnect`, o Claude in Chrome), ejecuta Lighthouse en móvil sobre `/`, `/te-han-detenido/`, una página de servicio y `/contacto/`.
  Esperado: Rendimiento ≥ 90, Accesibilidad, Buenas prácticas y SEO ≥ 95, LCP < 2,5 s y CLS < 0,1. Corrige lo que no cumpla.
- [ ] **Step 2:** comprueba a mano en 390×844, en el Chrome del usuario:
  - la barra de contacto no tapa contenido;
  - el banner no tapa los botones de WhatsApp y Llamar;
  - se puede navegar con el teclado, con foco visible;
  - el menú móvil es accesible.
  Corrige lo que falle.
- [ ] **Step 3: `README.md` técnico**, con estos apartados:
  - **Despliegue en Vercel**: proyecto conectado a GitHub, plan Pro, `PUBLIC_GA_ID` en Production y Preview, y `PUBLIC_INDEXABLE=true` solo en Production tras el lanzamiento.
  - **Configuración de GA4**, paso a paso:
    1. Propiedad y flujo web.
    2. Dimensiones personalizadas de evento `lead_method` y `lead_location`.
    3. Marcar `generate_lead` como evento clave.
    4. Informe «Contactos de la web» en Biblioteca, con eventos `generate_lead` por `lead_method` y por página, más usuarios y canales.
    5. Dar acceso de Lector a Raúl con su Gmail.
    6. Compartir este informe → Programar correo: mensual, día 4, PDF, español, activo 12 meses, y renovarlo cada año.
  - **Migración del dominio**, con el aviso del MX del spec §8.
  - **Lanzamiento**: puerta de aprobación de Raúl.
- [ ] **Step 4: README-RAUL.** Añade «**Velocidad y accesibilidad comprobadas** → La web carga en menos de 2,5 segundos en el móvil y se puede usar con el teclado o con lector de pantalla». Revisa que todo el documento se entienda sin conocimientos técnicos y que «Lo que necesitamos de ti» esté completo.
- [ ] **Step 5:** `npm run verify` → PASS.
- [ ] **Step 6: Commit** `chore: auditoría de rendimiento y accesibilidad, documentación`.

### Task 11: Vista previa en Vercel y Google Analytics en marcha

**Bloqueada hasta que el usuario confirme las cuentas (GitHub, Vercel, GA4).**

- [ ] **Step 1:** crea el repositorio en GitHub, súbelo, importa el proyecto en Vercel y añade `PUBLIC_GA_ID` (Preview y Production). Sin `PUBLIC_INDEXABLE`.
- [ ] **Step 2:** con `curl -sI` sobre la URL de vista previa:
  - cada origen del mapa de la Task 4, con y sin barra final, devuelve 301 (o 308 + 301) hasta su destino;
  - `/team/destinee-erdman/` y `/unete-al-equipo/` devuelven 404;
  - todas las respuestas llevan `noindex`, por cabecera o por meta.
- [ ] **Step 3:** en el Chrome del usuario, sobre la vista previa:
  - sin elegir nada en el banner, el panel de red no muestra ninguna petición a dominios de Google;
  - tras «Aceptar», GA4 DebugView recibe `page_view`, y un toque en WhatsApp envía `generate_lead` con `lead_method=whatsapp`;
  - tras cambiar a «Rechazar» en `/cookies/`, no se envían más eventos.
- [ ] **Step 4:** configura GA4 según `README.md`: dimensiones, evento clave, informe y acceso de Raúl. Programa el correo y envía una prueba con «Enviar correo» a Raúl.
- [ ] **Step 5: README-RAUL.** Añade «**Tu web ya está en una dirección de prueba** → Puedes revisarla con calma antes de que sustituya a la actual», con el enlace de vista previa y la lista de textos que tiene que aprobar.
- [ ] **Step 6: Commit** `docs: vista previa y analítica configuradas`.

### Fase posterior (no forma parte de este plan): lanzamiento

Cuando Raúl apruebe los textos y haya acceso a GoDaddy y BanaHosting, sigue el spec §8:
1. Inventaria los DNS y protege el correo (MX → `mail.`, SPF).
2. Apunta el dominio a Vercel.
3. Pon `PUBLIC_INDEXABLE=true` en Production.
4. Envía el sitemap a Search Console y a Bing.
5. Comprueba el correo `info@` antes y después del cambio.
6. Retira el WordPress solo al final.
