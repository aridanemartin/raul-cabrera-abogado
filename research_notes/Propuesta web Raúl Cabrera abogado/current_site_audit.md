# Baseline audit: raulcabreraabogado.com and Raúl Cabrera's online presence (as of 2026-11-09)

Method note: every page in the WordPress sitemap was crawled with curl (27 URLs plus a forced 404) and parsed for title, meta, headings, JSON-LD, images and forms. Response headers, DNS and WHOIS were checked. The homepage was rendered in Playwright at 390 px and 1440 px. Lighthouse 13.4.1 was run locally through the Lighthouse MCP because the public PageSpeed Insights API returned HTTP 429 (daily quota exhausted for keyless use). Live google.es SERPs (hl=es, gl=es) were read in Playwright until Google returned a 403. The CGAE "Censo de Letrados" was searched (read-only lookup). No contact forms were submitted.

## 1. Client profile and content inventory

### Takeaway
Raúl is a solo criminal-defence lawyer ("abogado penalista") at C/ Carmen Llopis 7, 4º, 35003 Las Palmas de Gran Canaria. ICALPA nº 6555, colegiado since 16/05/2018, ejerciente. The site is a 12-page Kit Digital template build from April 2025. It has 6 thin service pages and a dormant 3-post blog (all posts published 25-Apr-2025, none since). It also still serves 9 indexed theme-demo "team" pages with lorem ipsum.

### Cited Findings
**Identity and credentials**
- CGAE census record: "Nombre: RAUL CABRERA SANTANA · N. Colegiado: 6555 · Colegio: LAS PALMAS · Alta Colegiación: 16/05/2018 · Residente Sí · Ejerciente Sí · Dirección Profesional: Carmen Llopis, nº7, 4º · 35003 Palmas de Gran Canaria (Las)". The record states "Información válida a 09/11/2026". Searching apellidos "Santana Cabrera" in Las Palmas returns only two other people (Ariadna Beatriz, nº 5097; Patricia del Mar, nº 4770), not Raúl. — [CGAE Censo de Letrados](https://censo.abogacia.es/ecensofront/html/homeColegiados.iface?env=www.abogacia.es) (via [abogacia.es](https://www.abogacia.es/servicios-abogacia/censo-de-letrados/))
- **Name inconsistency.** The site's Aviso legal and Política de privacidad name the owner "Titular: Raúl Santana Cabrera · Nombre comercial: Raúl Cabrera Abogado · NIF/CIF: [personal NIF published in full] · Domicilio social: C/ Carmen Llopis Nº 7, Piso 4º 35003 Las Palmas de Gran Canaria · info@raulcabreraabogado.com · Teléfono: 676882221 · Actividad: Servicio de abogacía". The surnames are the reverse of the census order (Cabrera Santana). — [Aviso legal](https://raulcabreraabogado.com/aviso-legal/); [Política de privacidad](https://raulcabreraabogado.com/politica-de-privacidad/)
- The "Sobre mí" page says: "Soy abogado ejerciente con más de siete años de experiencia, colegiado en el Ilustre Colegio de Abogados de Las Palmas. Mi trayectoria se centra en el Derecho Penal… Dispongo también de experiencia en Derecho Civil, habiendo gestionado con éxito reclamaciones de cantidad, desahucios y procedimientos de familia. Trabajo en coordinación con una red de profesionales de distintas áreas del Derecho". A counter badge reads "7 Años de Experiencia". No colegiado number, university, education, languages or case results are given anywhere on the site. — [Sobre mí](https://raulcabreraabogado.com/sobre-mi/)
- The homepage hero reads "Experiencia. Compromiso. Resultados. / Defensa Penal Profesional en Canarias / RAÚL CABRERA es un abogado especializado en Derecho Penal con despacho en Las Palmas de Gran Canaria. Ofrece una atención personalizada y un servicio jurídico de alta calidad en todo el archipiélago canario." The USP tiles are "Atención Personalizada", "Cobertura Regional" ("Defensa legal en todo el archipiélago canario") and "Compromiso Ético". — [Home](https://raulcabreraabogado.com/)
- The site states no languages. The header has a GTranslate machine-translation switcher offering Español, Holandés, Inglés, Francés, Alemán ("Aleman"), Italiano, Portugués and Ruso. The elAbogado profile lists "Idiomas: Español". — [Home](https://raulcabreraabogado.com/); [elAbogado](https://www.elabogado.com/abogados/raul-cabrera-santana/)
- Team: he works alone. The site uses the first person and mentions only a "red de profesionales" and a recruiting page ("Únete al equipo… Envíame tu CV", with a CV upload form). — [Únete al equipo](https://raulcabreraabogado.com/unete-al-equipo/)
- Pricing: no fees are shown. The FAQ says: "Mis honorarios se calculan en función del tipo de procedimiento, la complejidad del caso… Trabajo con presupuestos claros y detallados… sin sorpresas". It also mentions "una primera consulta en la que evaluaremos la viabilidad", without saying it is free. Availability: "Estoy disponible para asistir en comisarías, juzgados y en cualquier fase del procedimiento" (no 24h claim). — [Preguntas frecuentes](https://raulcabreraabogado.com/preguntas-frecuentes/)

**Services listed** (6 custom-post-type pages under /servicio/)
- Defensa Penal Personalizada. Sub-items: "Violencia de género", "Delitos leves" (hurtos, daños, amenazas), "Alcoholemia y tráfico" (conducción bajo influencia o sin carnet), "Acusación particular". — [page](https://raulcabreraabogado.com/servicio/defensa-penal-personalizada/)
- Asistencia en Investigaciones: detención, declaraciones, fase de instrucción. — [page](https://raulcabreraabogado.com/servicio/asistencia-en-investigaciones/)
- Protección de Derechos. — [page](https://raulcabreraabogado.com/servicio/proteccion-de-derechos/)
- Delitos Menores. — [page](https://raulcabreraabogado.com/servicio/delitos-menores/)
- Delitos de Violencia: "violencia doméstica, agresiones físicas o psicológicas", órdenes de alejamiento. — [page](https://raulcabreraabogado.com/servicio/delitos-de-violencia/)
- Revisión de Sentencias: recursos/apelación. — [page](https://raulcabreraabogado.com/servicio/revision-de-sentencias/)
- Civil work is mentioned only in prose (reclamaciones de cantidad, desahucios, familia) and has no pages. elAbogado lists "Especialista en: Penal y Lesiones; Otras: Reclamaciones de cantidad, Seguros, Herencias y Testamentos". — [Sobre mí](https://raulcabreraabogado.com/sobre-mi/); [elAbogado](https://www.elabogado.com/abogados/raul-cabrera-santana/)

**Content inventory.** Source: [wp-sitemap.xml](https://raulcabreraabogado.com/wp-sitemap.xml) and its 7 child sitemaps; dates from the [WP REST API](https://raulcabreraabogado.com/wp-json/wp/v2/pages). Word counts are total visible words including about 200 words of header/footer boilerplate (the 404 page alone counts 204).

| URL | Purpose | Words (incl. ~200 boilerplate) | Created / modified |
|---|---|---|---|
| / | Home (hero slider, 6 service teasers, form, 3 blog teasers) | 735 | 2020-12-01 (demo import) / 2025-10-20 |
| /sobre-mi/ | Bio, values, mission/vision | 483 | 2020-12-04 / 2025-10-20 |
| /servicios/ | Service hub (6 cards) | 328 | 2021-01-04 / 2025-04-24 |
| /servicio/* (6) | Service pages | 414–522 each (~220–320 net) | 2025-04-24 |
| /preguntas-frecuentes/ | 5 Q&As | 418 | 2020-12-08 / 2025-05-08 |
| /contacto/ | Phone, email, address, CF7 form, Google Maps iframe | 226 | 2020-12-08 / 2025-10-16 |
| /blog/ | Blog index | 402 | 2020-12-08 / 2025-04-24 |
| /como-saber-si-necesitas-un-abogado-penalista/ | Post | 1,119 | 2025-04-25 |
| /que-hacer-si-te-ves-envuelto-en-un-proceso-penal/ | Post | 1,167 | 2025-04-25 |
| /conocer-tus-derechos-una-herramienta-para-la-vida/ | Post | 1,044 | 2025-04-25 |
| /unete-al-equipo/ | Recruiting + CV form | 320 | 2025-04-24 |
| /aviso-legal/, /politica-de-privacidad/, /politica-de-cookies/, /terminos-y-condiciones/ | Legal | 703–841 | 2025-04-24 / 2026-03-17 |
| /mapa-del-sitio/ | HTML sitemap | 205 | 2025-04-24 |
| /team/* (9: destinee-erdman, alva-dickinson, derek-barnhouse, giovani-romaguera, shemar-nikki, peter-anderson, steven-griffith, mark-holman, willy-mchugh) | **Theme demo leftovers** | ~391 each | 2020-12-02 |
| /aeen_team_category/{business,civil,family}-lawyer/, /category/consejos/, /author/admin/ | Archives | ~200–400 | — |

- Blog: 3 posts, all in category "Consejos", author "admin", published 2025-04-25 between 00:11 and 00:13 (within 3 minutes). The RSS `lastBuildDate` is "Thu, 24 Apr 2025 22:13:37 +0000", so there have been no posts for about 18.5 months. Comment forms are open on posts. — [WP REST posts](https://raulcabreraabogado.com/wp-json/wp/v2/posts); [feed](https://raulcabreraabogado.com/feed/)
- Demo team page content (example /team/destinee-erdman/): "Posición: Family Lawyer… Lorem ipsum… Ubicación: Fargo Bank, 355 S Grand Ave, Los Angeles, CA 90071 · Correo electrónico: example@example.com · Teléfono: 800.123.4567 · Education: Master of Law… Business Law 75% Family Law 85%…". The archive /aeen_team_category/business-lawyer/ shows "Meet Our Attorneys". — [team page](https://raulcabreraabogado.com/team/destinee-erdman/); [category](https://raulcabreraabogado.com/aeen_team_category/business-lawyer/)
- At least one demo page is indexed in search: a search for the brand returned "Shemar Nikki — raulcabreraabogado.com/team/shemar-nikki/". — [WebSearch result](https://raulcabreraabogado.com/team/shemar-nikki/)
- The footer states the site was funded by "Programa kit digital financiado por los fondos next generation… NextGenerationEU" and is "Design by AVERON" (links to averon.es). — [Home](https://raulcabreraabogado.com/)
- The domain was created on 2025-04-10 (registrar GoDaddy.com, LLC) and expires on 2027-04-10. — WHOIS raulcabreraabogado.com (queried 2026-11-09)

### Inferences
- Taking the CGAE census as authoritative, the legal name is Raúl Cabrera Santana. The site's legal pages appear to have the surnames reversed, and Google's AI Overview repeats the wrong order (see section 8). This is an identity/E-E-A-T error to fix.
- On a 2018 colegiación he has about 8.5 years of practice in Nov 2026. The hard-coded "7 Años de Experiencia" badge is already out of date, so a rebuild should compute the figure or state "desde 2018".
- The site was built in about one day (24–25 April 2025) by a Kit Digital agent on a ThemeForest-style lawyer theme. Demo content was imported (page IDs from 2020) and never cleaned up. The service pages and blog posts read like generic, AI-style copy with no local, case-based or procedural specifics (no LECrim articles, no Las Palmas courts, no juicio rápido / guardia detail).
- He has real positioning assets the site barely uses: criminal defence across all the Canary Islands, attendance at comisaría and juzgado, acusación particular for victims, violencia de género, alcoholemia/tráfico, and civil work as a secondary line.

### Gaps
- Education (university, máster), year of first practice before colegiación, languages actually spoken, notable cases and memberships (e.g., turno de oficio, ICALPA sections) are not published anywhere I could find.
- Whether a second office or office sharing exists: TrustLocal lists another lawyer, "Abogado Pedro J. Quintana Rodríguez", at the same street address, C. Carmen Llopis 7 ([TrustLocal](https://trustlocal.es/las-palmas/las-palmas-de-gran-canaria/abogado/abogado-pedro-j-quintana-rodriguez/)). Any relationship is unverified.

## 2. Tech stack, hosting and CDN

### Takeaway
The site is a heavy WordPress + Elementor Pro + Slider Revolution build on the "aeen" theme, on BanaHosting shared LiteSpeed hosting with WP Rocket and no CDN. The homepage loads about 35 scripts and 38 stylesheets, including jQuery, Bootstrap, two carousels, RevSlider, WOW.js and parallax, plus GTranslate, a preloader and an accessibility-overlay plugin.

### Cited Findings
- Generators: `<meta name="generator" content="WordPress 7.1.4" />`, `<meta name="generator" content="Elementor 3.26.3; features: additional_custom_breakpoints, e_element_cache; …">`, `<meta name="generator" content="Powered by Slider Revolution 6.7.31 - …">`. — [Home HTML](https://raulcabreraabogado.com/)
- Theme and plugins seen in asset paths: theme `wp-content/themes/aeen`; plugins `aeen-core` (registers custom post types `aeen_team`, `aeen_practice` and taxonomy `aeen_team_category`), `elementor`, `elementor-pro`, `revslider`, `contact-form-7`, `cookie-law-info` (CookieYes), `gtranslate`, `pojo-accessibility` (One Click Accessibility toolbar), `preloader-plus`, `wp-rocket` (HTML comment: "Performance optimized by WP Rocket… Debug: cached@1793864105"). — [Home HTML](https://raulcabreraabogado.com/); [wp-sitemap.xml](https://raulcabreraabogado.com/wp-sitemap.xml)
- No SEO plugin (Yoast, Rank Math, etc.) is present. The sitemap is the WordPress core `wp-sitemap.xml`, and no meta descriptions, OG tags or schema are output. — [wp-sitemap.xml](https://raulcabreraabogado.com/wp-sitemap.xml)
- Front-end JS on the homepage, in order: jquery.min.js, cookie-law-info script, preloader-plus, revslider tptools.js (75 KB) and sr7.js (93 KB), jquery.passive.event, smartmenus, pojo-accessibility, popper, bootstrap, imagesloaded, jquery.parallax-scroll, owl.carousel, counterup, waypoints, parallaxie, wow, tilt.jquery, magnific-popup, slick, theia-sticky-sidebar, isotope, theme main.js, aeen-core.js, wp hooks/i18n, CF7 (2 files), Elementor/Elementor Pro runtimes (6 files) and jQuery UI core. That is 35 script files and 38 stylesheet links. — [Home HTML](https://raulcabreraabogado.com/)
- Google Fonts are requested three times: Lato+Lora (theme), Roboto and Roboto Slab with every weight from 100 to 900 plus italics (Elementor), and Lora/Lato again. — [Home HTML](https://raulcabreraabogado.com/)
- Server header: `server: LiteSpeed`. HTML has `cache-control: public, max-age=0`; static assets have `cache-control: public, max-age=31536000`. No CDN headers (no cf-*, x-cache or similar). — `curl -sI https://raulcabreraabogado.com/` (2026-11-09)
- Hosting: A record 204.93.189.151, which reverse-resolves to `hd-europe2124.banahosting.com`. The IP is registered to "OrgName: DEFT.COM, Country: US". NS are `europe2124.banahosting.com` and `europe2125.banahosting.com`. MX is `0 raulcabreraabogado.com.` (mail on the same shared host). SPF is `v=spf1 ip4:204.93.189.146 +a +mx include:relay.mailchannels.net ~all`. — dig/whois (2026-11-09)
- Security headers: none observed (no Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy or Permissions-Policy). `xmlrpc.php` returns 403. The REST API exposes users: `/wp-json/wp/v2/users` returns `[{"id":1,"name":"admin","slug":"admin"}]`. — [users endpoint](https://raulcabreraabogado.com/wp-json/wp/v2/users)
- One of the GTranslate flag images is hotlinked from a third-party domain: `https://empiresystems.io/wp-content/uploads/2024/02/espana.png`. — [Home HTML](https://raulcabreraabogado.com/)

### Inferences
- WordPress core 7.1.4 is current. Elementor 3.26.3 is a late-2024/early-2025 release line and was probably not updated after delivery (unverified). Many premium plugins (Elementor Pro, RevSlider, WP Rocket) carry licence-renewal and maintenance costs and are an attack surface for a site nobody maintains.
- The username "admin" is exposed via REST, the author archive /author/admin/ and post bylines. That is both a weak security practice and an E-E-A-T loss, since posts are not attributed to Raúl.
- Shared hosting, apparently US-registered IP space, no CDN and about 0.5–0.6 s TTFB (measured) give a weak base for Canary Islands users. A static or edge-hosted rebuild would remove most of this stack.

### Gaps
- Exact physical data-centre location for the IP (BanaHosting "europe" hostnames versus US ARIN registration) was not verified.
- Plugin versions other than those in generator tags, and whether the licences are active, could not be checked without admin access.

## 3. Technical SEO

### Takeaway
On-page SEO is essentially default WordPress. No page has a meta description. The homepage `<title>` is just "RAÚL CABRERA", and the homepage has no H1. There is no structured data, no Open Graph and no hreflang. Twelve archive and demo URLs (9 lorem-ipsum team pages among them) are in the sitemap. Redirects, canonicals on most pages, the 404 status and the robots.txt basics are fine. Nothing blocks AI crawlers, and there is no llms.txt.

### Cited Findings
- **Title tags** (exact, `&#8211;` = en dash): home `<title>RAÚL CABRERA</title>`. Every other page follows the pattern "{Page} – RAÚL CABRERA", e.g. `Contacto – RAÚL CABRERA`, `Servicios – RAÚL CABRERA`, `Defensa Penal Personalizada – RAÚL CABRERA`, `Delitos de Violencia – RAÚL CABRERA`, `¿Cómo saber si necesitas un abogado penalista? – RAÚL CABRERA`. Demo pages have titles such as `Destinee Erdman – RAÚL CABRERA` and `Business Lawyer – RAÚL CABRERA`. No title contains "abogado penalista", "Las Palmas" or "Gran Canaria". — [Home](https://raulcabreraabogado.com/); [Contacto](https://raulcabreraabogado.com/contacto/)
- **Meta description**: missing on all 27 crawled URLs. **Robots meta**: `<meta name='robots' content='max-image-preview:large' />` on every page, demo pages included (no noindex anywhere). — crawl of all sitemap URLs
- **Canonical**: present and self-referencing on pages, posts, service pages and team pages. Missing on /blog/, /category/consejos/, /aeen_team_category/*, /author/admin/ and the 404 page. — crawl
- **Headings**: the homepage has **no H1**. Its first headings are H3 "Atención Personalizada", "Cobertura Regional" and "Compromiso Ético", then H2 "Defensa Penal en Primera Persona" and "Servicios Jurídicos de Defensa Penal". The visual headline "Defensa Penal Profesional en Canarias" is a Slider Revolution layer, not a heading (Playwright `document.querySelectorAll('h1')` returned `[]`). Inner pages use the page name as H1 (e.g. H1 "Contacto", H1 "Servicios", H1 "Sobre Mí"). Service pages have an H1 plus a single H3 (e.g. "En cada detalle, tu defensa") and no H2. Blog posts jump from H1 to H3. The FAQ page has only an H1, with the questions not marked up as headings. The 404 page has two H1s ("404 Error Page", "404"). Legal pages contain many empty `<h3></h3>` elements. — crawl; [Home](https://raulcabreraabogado.com/)
- **Structured data**: zero JSON-LD blocks on all 27 URLs (no LegalService/Attorney/LocalBusiness/Person/FAQPage/BreadcrumbList/Article). — crawl
- **Open Graph / Twitter**: no `og:*` or `twitter:*` tags on any page. — crawl
- **Language/hreflang**: `<html lang="es">` with no hreflang alternates. Translations are client-side only via GTranslate (Google Translate widget), with no translated URLs. — [Home](https://raulcabreraabogado.com/)
- **GTranslate auto-switch**: in a browser with an English locale, GTranslate set cookies `gt_auto_switch=1; googtrans=/es/en` and switched `<html lang>` to "en" automatically. Machine translation garbled the Slider Revolution hero into nonsense: "ANDxpandrYoandncYoto. CeithermpreithermYose… / DandFandnsto Pandntol PreitherFandsYoeitherntol andn CtontorYotos", and the "Learn more" button overlapped the headline on mobile. — Playwright render of [Home](https://raulcabreraabogado.com/) at 390×844 and 1440×900 (2026-11-09)
- **robots.txt** (complete): 
  ```
  User-agent: *
  Disallow: /wp-admin/
  Allow: /wp-admin/admin-ajax.php

  Sitemap: https://raulcabreraabogado.com/wp-sitemap.xml
  ```
  There are no rules for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended or CCBot, so all are implicitly allowed. — [robots.txt](https://raulcabreraabogado.com/robots.txt)
- **AI/search bot access**: curl with the user agents of GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, CCBot, Googlebot and bingbot each got HTTP 200 and the same 217,722-byte HTML (no WAF blocking). — curl tests 2026-11-09
- **llms.txt**: `/llms.txt` returns 404. — [llms.txt](https://raulcabreraabogado.com/llms.txt)
- **Sitemaps**: `/sitemap.xml` 301-redirects to `/wp-sitemap.xml`, and `/sitemap_index.xml` returns 404. The index lists 7 child sitemaps: posts (3), pages (12), aeen_team (9 demo), aeen_practice (6), category (1), aeen_team_category (3 demo), users (/author/admin/). Only post/page/service entries have `<lastmod>`. — [wp-sitemap.xml](https://raulcabreraabogado.com/wp-sitemap.xml)
- **HTTPS/redirects**: `http://` → 301 → `https://raulcabreraabogado.com/`; `https://www.` → 301 → non-www; `http://www.` → 301 → non-www (single hop, `X-Redirect-By: WordPress`). — curl -sI (2026-11-09)
- **404 handling**: a nonexistent URL returns a true HTTP 404 with title "Página no encontrada – RAÚL CABRERA" (TTFB about 1.97 s, versus about 0.5 s for cached pages). — [test URL](https://raulcabreraabogado.com/esta-pagina-no-existe-xyz/)
- **Images/alt**: on the homepage, 28 of 37 `<img>` have empty or missing alt, including both logos (`Logo_3.png`, `Log_2.png`) and the two photos of the lawyer (`IMG_1326-scaled.jpeg`, `IMG_1644-scaled.jpeg`). Inner pages have 6–12 empty-alt images each, mostly in the shared header/footer. — crawl
- **Image weights**: the hero/LCP background `2025/06/IMG_1937-scaled.jpeg` is 1,180,131 bytes. Photos: `IMG_1644-scaled.jpeg` 885 KB, `IMG_1326-scaled.jpeg` 544 KB (2560 px "scaled" JPEGs). Four 150×150 animated GIF icons weigh `acuerdo-legal.gif` 1,096,760 B, `estrategia.gif` 529,515 B, `conocimiento.gif` 348,670 B and `trato.gif` 198,091 B (about 2.17 MB in total). Section backgrounds are WebP at 60–104 KB. — curl of [hero image](https://raulcabreraabogado.com/wp-content/uploads/2025/06/IMG_1937-scaled.jpeg) and assets
- Lighthouse SEO category: 85/100 on both mobile and desktop. — Lighthouse 13.4.1 lab run (Lighthouse MCP, 2026-11-09, [URL tested](https://raulcabreraabogado.com/))

### Inferences
- The site has almost no on-page relevance signals for its money keywords ("abogado penalista Las Palmas", "abogado violencia de género Las Palmas", "abogado alcoholemia Gran Canaria"). With no H1 or meta description and a brand-only title, Google has little to rank the homepage on beyond the brand.
- The missing LegalService/Attorney/Person schema with `identifier` (nº colegiado 6555), `memberOf` (ICALPA), `sameAs` (GBP, elAbogado) and `address` removes the strongest machine-readable entity signals for AI search.
- GTranslate's client-side auto-switch is a liability. Foreign visitors (a large expat and tourist population in Gran Canaria) see garbled hero text, and crawlers that render JS with a non-Spanish locale may index translated text (see the English snippet in section 8). The proper fix is real `/en/` pages with hreflang, or no translation widget.
- The 9 lorem-ipsum team pages plus 3 demo taxonomy archives are thin, off-topic, indexable URLs (about 40% of the 31 sitemap URLs). They dilute quality signals and are a credibility risk if a prospect lands on one.

### Gaps
- Google Search Console data (indexed page count, queries, impressions) is not available. The `site:` query showed about 10 results, but that operator is not a reliable index count.
- I did not check whether a Google Search Console verification meta or DNS TXT exists. DNS TXT showed only SPF.

## 4. Performance and Core Web Vitals

### Takeaway
Lab performance is poor: mobile Performance 61, LCP 15.7 s; desktop Performance 52, LCP 17.0 s. The cause is a 1.18 MB hero JPEG loaded as a CSS background, about 2.2 MB of animated GIF icons, RevSlider, a preloader and roughly 140 requests / about 6 MB per first view. TBT and CLS are fine. No field (CrUX) data could be retrieved.

### Cited Findings
- Lighthouse 13.4.1, **mobile** (simulated throttling): Performance **0.61**, Accessibility **0.94**, Best Practices **0.96**, SEO **0.85**, "Agentic Browsing" **1.0**. FCP **3.0 s**, LCP **15.7 s**, TBT **10 ms**, CLS **0.037**, Speed Index **10.9 s**, TTI **15.8 s**. — Lighthouse MCP run 2026-11-09T17:42Z on [raulcabreraabogado.com](https://raulcabreraabogado.com/)
- Lighthouse 13.4.1, **desktop**: Performance **0.52**, Accessibility **0.94**, Best Practices **1.0**, SEO **0.85**, Agentic Browsing **0.94**. FCP **3.1 s**, LCP **17.0 s**, TBT **10 ms**, CLS **0.111** (needs improvement), Speed Index **13.2 s**, TTI **24.7 s**. — same run
- LCP element (Playwright PerformanceObserver): the hero section `.home1-hero-banner` with background `https://raulcabreraabogado.com/wp-content/uploads/2025/06/IMG_1937-scaled.jpeg` (1.18 MB JPEG). — Playwright on [Home](https://raulcabreraabogado.com/)
- First uncached view in Playwright (390 px viewport): **139 requests**, **about 6,301 KB transferred**. 125 requests went to the origin; the rest went to fonts.googleapis/gstatic, translate.google.com/googleapis (GTranslate) and empiresystems.io. A reload with a warm cache transferred about 210 KB across 142 requests. — Playwright Performance API
- HTML document: 217,722 bytes uncompressed and 52,649 bytes compressed. TTFB was 0.49–0.61 s for cached pages from the test machine. — curl (2026-11-09)
- Sum of all statically referenced homepage assets, including srcset variants: about 5.1 MB compressed. The largest single files are the GIF icons, the hero JPEG and the portrait JPEGs (see section 3). — curl size sweep
- Full-page screenshots at 1440 px show everything below the hero and the three USP tiles as blank. Content is hidden until scroll-triggered entrance animations fire (WOW.js / Elementor `elementor-invisible`), and the site also runs the Preloader Plus overlay. — Playwright screenshots of [Home](https://raulcabreraabogado.com/)
- The PageSpeed Insights API (`/pagespeedonline/v5/runPagespeed`) returned HTTP 429 "Quota exceeded for quota metric 'Queries'… 'Queries per day'" for both strategies, so official PSI and CrUX field data could not be retrieved. — [PSI API](https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fraulcabreraabogado.com%2F&strategy=mobile)

### Inferences
- A 15–17 s lab LCP is far outside "good" (≤2.5 s). Even if field LCP is lower for repeat visitors thanks to the 1-year asset cache, first-time mobile visitors on 4G, who are the typical "me han detenido / me han citado" searchers, get a slow, blank-looking page.
- Quick wins inside the current site would be: convert the hero to an AVIF/WebP image of about 150 KB, preloaded as `<img fetchpriority="high">`; replace the GIF icons with SVG; remove RevSlider, the preloader and the WOW animations; and trim Google Font weights. A rebuild on a static or islands architecture would fix all of it structurally.
- A low-traffic local site this new very likely has no CrUX origin data. This is an assumption, because CrUX could not be queried.

### Gaps
- No CrUX field data (LCP/INP/CLS p75) was retrieved because of the PSI quota error; it needs a re-run with an API key. INP is a field-only metric and was not measured.
- Lighthouse runs were local lab runs with simulated throttling from the test machine, not Google's PSI infrastructure, so absolute numbers may differ from PSI.

## 5. UX, conversion and accessibility

### Takeaway
Contact paths exist: a phone number in the top bar, a floating WhatsApp button, a "Solicitar consulta" header button and CF7 forms. Trust and proof are thin. The site shows no Google reviews (despite a 5.0 GBP), no colegiado number, no case types or results, and generic stock imagery. The look is a dated 2020-era ThemeForest template (navy, black and orange, sliders, animated GIF icons, preloader) with template-quality copy and several untranslated English strings.

### Cited Findings
- CTAs: the header has "Solicitar consulta" → /contacto/. The hero has "Conocer más" → /sobre-mi/. Other buttons are "Conóceme" → /sobre-mi/, "Más servicios" → /servicios/ and "Contactar" → /contacto/. The homepage form block is headed "¡Contáctame Hoy Mismo!… recibirás una respuesta rápida y directa". — [Home](https://raulcabreraabogado.com/)
- Phone: the top bar shows "Llámanos: 676882221" with `href="tel:676882221"` (no +34 prefix). In the 390 px mobile render, the top-bar tel link is hidden (`visible:false`), and the next visible tel link sits about 10,700 px down the page, in the footer. — Playwright on [Home](https://raulcabreraabogado.com/)
- WhatsApp: a floating button (`whatsapp_floating_btn1`) links to `https://api.whatsapp.com/send?phone=34676882221` with no prefilled message. — [Home](https://raulcabreraabogado.com/)
- Email: `mailto:info@raulcabreraabogado.com` in the header and footer. — [Home](https://raulcabreraabogado.com/)
- Forms: Contact Form 7 with fields Nombre (text-305), Correo electrónico (email-805), Mensaje (textarea-909) and a privacy acceptance checkbox. There is no phone field, no case-type selector and no urgency option. Inputs rely on placeholders: only one `<label>` exists per form (for the acceptance checkbox). The "Únete al equipo" form adds a file upload for the CV. — crawl of [Contacto](https://raulcabreraabogado.com/contacto/) and [Home](https://raulcabreraabogado.com/)
- Booking: no online booking or calendar tool. — crawl
- The contact page embeds a Google Maps iframe (`maps.google.com/maps?q=C%2F%20Carmen%20Llopis…&output=embed`). There are no opening hours on the site, although GBP shows "Cierre: 19:00". — [Contacto](https://raulcabreraabogado.com/contacto/); [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
- Trust signals present: two portrait photos (uploaded 2025-10, alt empty), the "7 Años de Experiencia" counter, the ICALPA mention in prose, and values (Responsabilidad, Integridad, Disciplina) with mission and vision. Absent: reviews or testimonials, colegiado number, education, press, case studies, FAQs per service, and any badges. A row of five client/partner logos (`l1.png`–`l5.png`, alt empty) appears with no explanation. — [Home](https://raulcabreraabogado.com/); [Sobre mí](https://raulcabreraabogado.com/sobre-mi/)
- Copy and template defects: "Read More" in English on home and blog teasers (3× each); "Locación" (anglicism) on Contacto; "Intéres" (typo) as a footer heading; "Llámanos" (plural) for a solo lawyer; "Valores que nos Definen" (plural); "Aleman" missing its accent in the language switcher; teaser excerpts truncated mid-sentence ("…en situaciones extremas o."). — crawl of [Home](https://raulcabreraabogado.com/), [Contacto](https://raulcabreraabogado.com/contacto/)
- Mobile at 390 px: no horizontal overflow (scrollWidth 390). The CookieYes banner covers roughly the bottom 40% of the first screen. The accessibility-toolbar trigger floats on the left edge over the hero. — Playwright on [Home](https://raulcabreraabogado.com/)
- Accessibility: Lighthouse a11y 94 (mobile and desktop). Observed problems: no H1 on home; empty alt on logos and portraits; empty `<h3>` elements on legal pages; form fields without labels; content hidden until scroll animations fire; a third-party accessibility overlay (pojo-accessibility) with controls "Aumentar texto, Escala de grises, Alto contraste, Contraste negativo…". The overlay's SVG `<title>` elements are parsed into the head title by naive parsers. — crawl; Lighthouse MCP run

### Inferences
- For a criminal-defence practice, the critical conversion is an urgent phone or WhatsApp contact ("detenido ahora", "citación para declarar"). The mobile page hides the tel link and has no sticky call bar, no "asistencia al detenido 24h" message (if he offers it), and no prefilled WhatsApp text. These are the biggest conversion leaks.
- The GBP's 5.0 rating from 10 reviews is not shown on the site, which is an easy trust win (review widget or schema-free text quotes with attribution).
- The design reads as a generic purchased lawyer template: stock "pen + scales of justice" hero, slider, animated GIFs and a preloader. A bespoke, fast, text-first design with a real portrait, credentials and clear "qué hacer si…" guidance would differentiate him from Las Palmas competitors.

### Gaps
- No screen-reader or keyboard-only testing was done, and contrast ratios were not measured (beyond Lighthouse's automated checks).
- Form deliverability, auto-replies and spam protection could not be tested because forms were not submitted, per the constraints.

## 6. Legal pages and cookie consent

### Takeaway
All four legal pages exist and were updated on 2026-03-17. The Aviso legal, however, omits the data LSSI art. 10.1.d requires of a regulated profession (colegio, nº colegiado, título, normas deontológicas) and has the owner's surnames reversed. The cookie banner (CookieYes) offers accept, reject and configure, and no analytics loads before consent. In fact no analytics loads at all, which contradicts the cookie policy's claim that Google Analytics is used.

### Cited Findings
- Aviso legal identifies "Titular: Raúl Santana Cabrera; Nombre comercial: Raúl Cabrera Abogado; NIF/CIF; Domicilio social; email; teléfono; Actividad: Servicio de abogacía". It does **not** mention the Colegio de Abogados, nº colegiado (6555), the professional title or the applicable professional rules. — [Aviso legal](https://raulcabreraabogado.com/aviso-legal/)
- LSSI art. 10.1.d requires providers who practise a regulated profession to publish the professional association and membership number, the official academic or professional title, the EU/EEA state that issued it, and the applicable professional rules and how to access them. — [Ley 34/2002 (BOE consolidated)](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- Aviso legal and the cookie policy state "se utilizan… Google Analytics… Google Search Console… Elementor". Section 3 of the cookie policy lists only generic categories ("Cookies técnicas… (WordPress)", "Google Analytics: cookies analíticas…") and no cookie names or durations. — [Aviso legal](https://raulcabreraabogado.com/aviso-legal/); [Política de cookies](https://raulcabreraabogado.com/politica-de-cookies/)
- The homepage HTML contains no GA4/UA/GTM IDs (no `gtag(`, `G-XXXX`, `GTM-`), and Playwright saw no requests to google-analytics.com or googletagmanager.com before consent. — [Home HTML](https://raulcabreraabogado.com/); Playwright network log
- The cookie banner is CookieYes (plugin `cookie-law-info`), box at bottom-left. Spanish text: "Valoramos tu privacidad… Personalizar / Rechazar todo / Aceptar todo", with three equal-weight buttons. The initial cookie value is `cookieyes-consent=…consent:no,…necessary:yes,functional:no,analytics:no,performance:no,advertisement:no`. — Playwright on [Home](https://raulcabreraabogado.com/)
- Before any consent choice, the page loads Google Fonts from fonts.googleapis.com / fonts.gstatic.com and the Google Translate widget (translate.google.com, translate.googleapis.com, translate-pa.googleapis.com). The contact page embeds a Google Maps iframe. GTranslate sets `googtrans` and `gt_auto_switch` cookies. — Playwright network/cookie inspection of [Home](https://raulcabreraabogado.com/)
- The privacy policy has 14 numbered sections (responsable, data, purposes including "comunicaciones comerciales… (si existe consentimiento)", legal bases, rights, AEPD). A "Términos y condiciones" page also exists. — [Política de privacidad](https://raulcabreraabogado.com/politica-de-privacidad/); [Términos](https://raulcabreraabogado.com/terminos-y-condiciones/)
- The banner's "Política de cookies" read-more link is configured with `"meta":{"url":"#"}` and its status is `false` (disabled). — `_ckyConfig` in [Home HTML](https://raulcabreraabogado.com/)

### Inferences
- The missing colegio and colegiado data is a compliance gap and also a lost trust signal. Adding "Colegiado nº 6555 del Ilustre Colegio de la Abogacía de Las Palmas" plus a link to the Código Deontológico is a zero-cost quick win.
- Without analytics, the client has no data on traffic or leads. Any proposal should include consent-aware measurement (GA4 with Consent Mode, or a cookieless tool) so the redesign's ROI can be shown.
- Loading Google Fonts, Google Translate and Maps before consent passes the user's IP to Google. This is a common Spanish/EU GDPR complaint point (AEPD and German case law on Google Fonts). Self-hosting fonts and click-to-load maps would fix it.

### Gaps
- No legal opinion was formed on whether the published personal NIF or the specific cookie wording fully meet AEPD guidance. Those are flagged only as observations.

## 7. Off-site presence (GBP, directories, social, NAP, backlinks)

### Takeaway
There is a Google Business Profile, "Raúl Cabrera Abogado" (category Abogado, 5.0 stars from 10 reviews, linked to the site), and one elAbogado listing. Nothing else surfaced: no social profiles, LinkedIn, press or other directories. Name formats are inconsistent across sources (Raúl Cabrera / Raúl Santana Cabrera / Raul Cabrera Santana), and the backlink profile looks near-zero.

### Cited Findings
- Google knowledge panel for "raúl cabrera abogado" on google.es: "Raúl Cabrera Abogado · 5,0 · 10 reseñas · Abogado en Las Palmas de Gran Canaria · Sitio web · Dirección: C. Carmen Llopis, 7, Piso 4, 35003 Las Palmas de Gran Canaria, Las Palmas · Teléfono: 676 88 22 21 · Horario: Abierto · Cierre: 19:00". Owner description: "Abogado. Derecho Penal." The panel also shows the line "¿Eres el propietario de esta empresa?". Sample reviews: Grzegorz Roman (5/5, "Hace un año"): "Un abogado excelente, muy creativo y profesional…"; Alejandro Márquez (5/5, "Hace 2 meses"): "Cercanía, rigor y honestidad…"; Stefanie Ana Höra Trujillo (5/5, "Hace 11 meses"). — [Google SERP, brand query](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
- elAbogado profile: "Raul Cabrera Santana · Especialista en: Penal y Lesiones · Otras especialidades: Reclamaciones de cantidad, Seguros, Herencias y Testamentos · Idiomas: Español · Calle Carmen Llopis, nº7, 4º 35003 Las Palmas de Gran Canaria · 676882221". It has no opinions ("Opiniones sobre Raul Cabrera Santana — Opinar") and routes leads through elAbogado's own call centre (604 560 408). He also appears in elAbogado category pages (penal, fraude, juicios rápidos, tráfico de drogas, desahucio de inquilinos in Las Palmas). — [elAbogado profile](https://www.elabogado.com/abogados/raul-cabrera-santana/); [elAbogado penal Gran Canaria](https://www.elabogado.com/penal:gran-canaria/)
- CGAE census address: "Carmen Llopis, nº7, 4º", 35003, with phone and fax fields empty. — [CGAE Censo](https://censo.abogacia.es/ecensofront/html/homeColegiados.iface?env=www.abogacia.es)
- NAP comparison:
  - Site: "C/ Carmen Llopis Nº 7, Piso 4º 35003", phone 676882221.
  - GBP: "C. Carmen Llopis, 7, Piso 4, 35003", phone 676 88 22 21.
  - elAbogado: "Calle Carmen Llopis, nº7, 4º 35003", phone 676882221.
  - Census: "Carmen Llopis, nº7, 4º".
  - Address and phone are consistent across all four. The person's name varies: "RAÚL CABRERA" / "Raúl Santana Cabrera" (site legal pages), "Raúl Cabrera Abogado" (GBP), "Raul Cabrera Santana" (elAbogado and census).
  - Sources: [Contacto](https://raulcabreraabogado.com/contacto/); [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es); [elAbogado](https://www.elabogado.com/abogados/raul-cabrera-santana/)
- Social media: the site links to no social profiles. Its only outbound links are WhatsApp and averon.es. Searches for Instagram/LinkedIn/Facebook profiles returned only other people (e.g., Facebook "Raul Hernandez Cabrera", LinkedIn "Raúl Cabrera Alarcón" in Mexico). — [Home](https://raulcabreraabogado.com/); [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
- Directories checked through web search with no listing found: TrustLocal (lists competitors and Pedro J. Quintana Rodríguez at the same street address), asesor.legal (lists other Las Palmas penalistas), LexGoApp and bestlawyers.com. Avvo results for "Raul Cabrera" are an unrelated Tampa, FL attorney. — [TrustLocal](https://trustlocal.es/las-palmas/las-palmas-de-gran-canaria/abogado/abogado-pedro-j-quintana-rodriguez/); [asesor.legal](https://asesor.legal/?p=94894); [Avvo (unrelated)](https://www.avvo.com/attorneys/33605-fl-raul-cabrera-1294686.html)
- Press mentions: none found.

### Inferences
- The GBP is his strongest asset: perfect rating and recent reviews. Ten reviews is still far below map-pack leaders for "abogado penalista Las Palmas" (333 and 407 reviews; see section 8), so a review-generation workflow should be part of the proposal.
- The "¿Eres el propietario de esta empresa?" prompt can mean the profile is unclaimed or unverified. The owner-written description "Abogado. Derecho Penal." suggests someone manages it. Status must be confirmed with the client. The description and categories (only "Abogado", not "Abogado penalista") are under-optimised.
- Name inconsistency across sources (and the AI Overview repeating "Raúl Santana Cabrera") weakens entity reconciliation. A rebuild should standardise on "Raúl Cabrera Santana – Raúl Cabrera Abogado" everywhere and add `sameAs` links.
- The backlink profile is likely limited to the GBP website link, elAbogado (which may not link out) and the template/agency footer relationship.

### Gaps
- No backlink tool (Ahrefs/Moz/Semrush/Common Crawl) was queried, so referring-domain counts are unknown.
- Páginas Amarillas, Infoabogados, Doctrina, iAbogado, Abogados365, Legálitas, Bing Places, Apple Business Connect and Facebook/Instagram were not checked individually beyond web searches. The absence of listings there is unconfirmed.
- GBP details beyond the panel (secondary categories, photos count, posts, Q&A, services list) and the full review list could not be read.

## 8. Search visibility (traditional and AI search)

### Takeaway
He is visible only for his own brand, and there only through the GBP knowledge panel and an AI Overview that cites his site. The site does not appear in the classic top organic results even for "raúl cabrera abogado". For non-brand queries ("abogado penalista Las Palmas de Gran Canaria", "abogado violencia de género Las Palmas de Gran Canaria") he is absent from the organic top 10, the local pack and the AI Overviews. Those positions go to competitors with strong review counts and dedicated local landing pages, and to directories.

### Cited Findings
- **Brand query** "raúl cabrera abogado" (google.es):
  - An AI Overview ("Vista creada con IA") appears and says: "Raúl Santana Cabrera es un abogado ejerciente colegiado en el Ilustre Colegio de Abogados de Las Palmas, especializado principalmente en Derecho Penal… Derecho Civil: reclamaciones de cantidad, desahucios y procedimientos de familia… Ubicación: Calle Carmen Llopis, nº 7, Piso 4º". It cites raulcabreraabogado.com (home and /sobre-mi/).
  - The cited homepage snippet is **in English**: "Raúl Cabrera is a lawyer specializing in Criminal Law with an office in Las Palmas de Gran Canaria. He offers personalized attenti…".
  - The GBP knowledge panel shows on the right.
  - The first 8 classic organic results are unrelated: pardogeijo.com ×3 (Raúl Pardo-Geijo), a Facebook post about Dr. Alonso Raúl Peña Cabrera, Facebook "Raul Hernandez Cabrera", LinkedIn "Raúl Cabrera Alarcón", a podcast, and another colegio post. raulcabreraabogado.com appears only in the AI Overview sources, the image pack and the GBP "Sitio web" link.
  - Source: [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
- **"abogado penalista las palmas de gran canaria"** (google.es):
  - 2 ads.
  - AI Overview lists Rafael Jiménez de Oliva ("30 años de experiencia"), Barral Abogados Penalistas ("más de 20 años"), Roque Esteban García Aguiar ("asistencia penal 24 horas, 365 días"), González Torres Abogados, Mayor Abogados and the LexGoApp directory, plus fee ranges ("entre 500 € y 5.000 € por procedimiento").
  - Local pack: Alejandro Pérez Abogado 5.0 (333), RAFAEL JIMENEZ DE OLIVA 5.0 (407, category "Abogado penalista"), Reyes & Rodríguez Abogados 4.8 (77).
  - Organic top 10: barralabogados.com, lexgoapp.com, rafaeljimenezdeoliva.com, elabogado.com (penal: Las Palmas), roqueestebanabogado.com, gonzaleztorresabogados.com, abogadoalejandroperez.com/derecho-penal, pardogeijo.com (Las Palmas landing page), vokseabogados.com, seoanepedreira.com.
  - No mention of Raúl Cabrera anywhere on the page.
  - Source: [Google SERP](https://www.google.es/search?q=abogado+penalista+las+palmas+de+gran+canaria&hl=es&gl=es&num=20)
- **"abogado violencia de género las palmas de gran canaria"** (google.es):
  - AI Overview present.
  - Local pack: Abogada Dolores Quintana Hidalgo 4.6 (91), Alejandro Pérez Abogado 5.0 (333), Álvaro Esteva 5.0 (108).
  - Organic top 10: joseluismartinezabogado.com/servicios, abogadoalejandroperez.com/servicios/violencia…, lexgoapp.com, lidiadenizabogada.com, leonorlopezabogada.com, melendos.es, abogadosreyesrodriguezlaspalmas.com, elabogado.com, henriquezycarneroabogados.es, easyoffer.es.
  - Raúl Cabrera is absent.
  - Source: [Google SERP](https://www.google.es/search?q=abogado+violencia+de+g%C3%A9nero+las+palmas+de+gran+canaria&hl=es&gl=es)
- **`site:raulcabreraabogado.com`**: shows "10 resultados". Listed are Términos y condiciones, Mapa del sitio, 5 service pages and the 3 blog posts. The homepage is not among the 10 shown. — [Google SERP](https://www.google.es/search?q=site%3Araulcabreraabogado.com&hl=es&gl=es&num=50)
- A US-index web search tool for "Raúl Cabrera abogado Las Palmas" and "raulcabreraabogado.com" did not return the site at all, only the unrelated Avvo Tampa attorney and other Cabreras. An extended search for "Raúl Cabrera Abogado" Gran Canaria did surface the site, its aviso legal and elAbogado. — [WebSearch: elAbogado result](https://www.elabogado.com/abogados/raul-cabrera-santana/); [Avvo (unrelated)](https://www.avvo.com/attorneys/33605-fl-raul-cabrera-1294686.html)
- Competitor patterns visible in the SERPs: dedicated city landing pages ("Abogado Penalista en Las Palmas", "Abogado de Violencia de Género en Gran Canaria"), explicit years of experience, 24/7 detainee assistance claims, and hundreds of Google reviews. — [Google SERP](https://www.google.es/search?q=abogado+penalista+las+palmas+de+gran+canaria&hl=es&gl=es&num=20)

### Inferences
- Google's AI Overviews already dominate both the brand and non-brand SERPs and take their entities from on-site text. His site feeds the brand AI Overview, but it also leaked the reversed surname and an English machine-translated snippet. The English snippet suggests Google indexed the GTranslate auto-switched rendering; this is plausible but not proven. Clean, structured, Spanish-first entity data is therefore a priority for AI search.
- For non-brand queries the gap is structural. He has no page targeting "abogado penalista Las Palmas de Gran Canaria", no per-crime landing pages (violencia de género, alcoholemia, delitos leves, asistencia al detenido, juicio rápido), no fresh content, and too few reviews for the map pack. Directories (elAbogado, LexGoApp, asesor.legal) fill the space, along with competitors who have 77–407 reviews.
- The 3 existing blog posts are generic, are attributed to "admin", have no schema and have not been refreshed since April 2025. They are unlikely to earn AI citations. An automated, lawyer-reviewed blog targeting procedural "qué hacer si…" questions with local specifics (Juzgados de Instrucción de Las Palmas, Ciudad de la Justicia, guardia) would address both classic and AI search.

### Gaps
- SERP checks came from one unknown test location (not geolocated to Las Palmas), were unpersonalised and were limited to 4 queries before Google returned HTTP 403. Rankings beyond the first page, mobile SERPs, and queries for alcoholemia, juicio rápido, asistencia al detenido and English-language queries were not checked.
- ChatGPT search, Perplexity, Bing Copilot and Gemini answers were not tested directly.
- No keyword volumes were retrieved.

## 9. Concrete strengths, weaknesses and quick wins (synthesis)

### Takeaway
The baseline is a cheap Kit Digital template that has been neglected since spring 2025. Its real assets are the 5.0 GBP, the colegiación facts and a clear criminal-law niche across the Canary Islands. Its liabilities are demo content, no on-page SEO, no schema, very slow LCP, broken auto-translation, an incomplete LSSI notice, no analytics and a dead blog. Together these strongly justify a from-scratch rebuild rather than incremental fixes.

### Cited Findings
- **Strengths**:
  - Clean HTTPS/non-www redirects and a true 404 — curl
  - Self-canonicals on most pages and a core sitemap — [wp-sitemap.xml](https://raulcabreraabogado.com/wp-sitemap.xml)
  - Crawlable by all search and AI bots — [robots.txt](https://raulcabreraabogado.com/robots.txt)
  - Mobile layout has no horizontal overflow; TBT and CLS are fine on mobile — Lighthouse run
  - WhatsApp and phone CTAs exist — [Home](https://raulcabreraabogado.com/)
  - A consent banner with equal accept/reject buttons and no tracking before consent — Playwright
  - GBP rated 5.0 from 10 reviews with recent reviews — [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
  - Verified colegiación (ICALPA 6555, since 2018) — [CGAE Censo](https://censo.abogacia.es/ecensofront/html/homeColegiados.iface?env=www.abogacia.es)
  - Brand AI Overview already cites the site — [Google SERP](https://www.google.es/search?q=ra%C3%BAl+cabrera+abogado&hl=es&gl=es)
- **Weaknesses**:
  - 9 lorem-ipsum demo team pages with a Los Angeles address, indexed and in the sitemap — [team page](https://raulcabreraabogado.com/team/destinee-erdman/)
  - No H1 on home; brand-only titles; zero meta descriptions, OG tags or JSON-LD — crawl
  - LCP of 15.7 s mobile / 17.0 s desktop; 139 requests and about 6.3 MB — Lighthouse/Playwright
  - GTranslate auto-switch garbles the hero for English-locale visitors — Playwright
  - Aviso legal lacks colegio and nº colegiado and reverses the surnames — [Aviso legal](https://raulcabreraabogado.com/aviso-legal/)
  - Cookie policy claims GA but no analytics is installed — [Política de cookies](https://raulcabreraabogado.com/politica-de-cookies/)
  - Blog dead since 2025-04-25, with posts by "admin" — [feed](https://raulcabreraabogado.com/feed/)
  - No reviews or credentials on site; template copy with English leftovers — [Home](https://raulcabreraabogado.com/)
  - "admin" username exposed via REST; no security headers — [users endpoint](https://raulcabreraabogado.com/wp-json/wp/v2/users)
  - Invisible for non-brand local queries — [Google SERP](https://www.google.es/search?q=abogado+penalista+las+palmas+de+gran+canaria&hl=es&gl=es&num=20)

### Inferences
Quick wins, achievable even before the rebuild launches:
1. Unpublish or 410 the 9 `/team/*` pages and the 3 `/aeen_team_category/*` archives, and drop them from the sitemap.
2. Add an H1 to the homepage. Rewrite titles and meta descriptions, e.g. "Abogado Penalista en Las Palmas de Gran Canaria | Raúl Cabrera".
3. Add LegalService + Person JSON-LD with ICALPA nº 6555, the address, geo, the phone in +34 format and `sameAs` (GBP, elAbogado).
4. Fix the Aviso legal (name order, colegio, nº colegiado, título, deontological rules).
5. Turn off GTranslate auto-switch, or remove the widget.
6. Replace the 1.18 MB hero JPEG and the 2.17 MB of GIFs; remove the preloader and RevSlider.
7. Add a sticky mobile call/WhatsApp bar using `tel:+34676882221` and a prefilled WhatsApp message.
8. Show the GBP rating on site, and start a review-request routine.
9. Make post authorship "Raúl Cabrera Santana" with a bio, and close comments.
10. Install consent-aware analytics and align the cookie policy.
11. Add `/llms.txt` and an explicit robots.txt policy for AI crawlers (allow OAI-SearchBot, PerplexityBot and Google-Extended per the client's choice).
12. Optimise the GBP: add the "Abogado penalista" category, services, photos and posts, and confirm ownership.

### Gaps
- Business goals, lead volumes, current client sources (turno de oficio vs. private), willingness to claim 24h detainee assistance, English-language service capacity and budget are unknown. They need a client interview before the proposal is finalised.
