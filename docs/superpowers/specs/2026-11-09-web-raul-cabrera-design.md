# Web nueva de Raúl Cabrera, abogado penalista — diseño

Fecha: 2026-11-09 · Proyecto 1 de 3 (web nueva). El proyecto 2 (blog asistido por IA) y el 3 (trabajo mensual de SEO/GEO) quedan fuera de este documento.

Fuente de contexto: `reports/Propuesta web Raúl Cabrera abogado.md` (investigación del 2026-11-09). Este documento resume lo que hace falta para construir; el informe tiene las fuentes.

## 1. Intención

Raúl Cabrera Santana es abogado penalista en solitario en Las Palmas de Gran Canaria (ICALPA nº 6555, colegiado desde el 16/05/2018) y quiere **que la web le traiga clientes**. Hoy no le trae ninguno. La web actual, una plantilla WordPress del Kit Digital, no aparece en Google para «abogado penalista Las Palmas», tarda 15,7 s en mostrar el contenido principal en móvil, esconde el teléfono en móvil, tiene 9 fichas de abogados ficticios indexadas, invierte sus apellidos («Santana Cabrera»), error que ya repite la IA de Google, e incumple la LSSI.

El usuario tipo es **alguien angustiado buscando desde el móvil**: un familiar detenido, una citación como investigado, un juicio rápido mañana. Necesita en segundos confiar (abogado real y colegiado), entender qué le va a pasar y contactar ya. El segundo perfil es quien se informa con calma («qué pasa si me denuncian por…») y puede ser cliente más tarde.

Éxito = **contactos medidos** (WhatsApp, llamada, formulario), no visitas. Raúl lo verá en un informe de Google Analytics que le llega al correo.

## 2. Objetivos, no objetivos y anti-objetivos

**Objetivos**
- Web nueva, rápida y accesible, alojada en Vercel, que sustituya a la actual en `raulcabreraabogado.com`.
- Contacto por **WhatsApp como canal principal**, con el teléfono como segundo canal, siempre a un toque en móvil.
- SEO tradicional completo de base: títulos, descripciones, H1, datos estructurados, sitemap, redirecciones desde las URLs antiguas.
- Preparación para buscadores con IA y agentes: HTML semántico y accesible, entidad coherente (nombre, colegiación, dirección, teléfono idénticos en todas partes), política explícita de robots para bots de IA y `llms.txt` como extra.
- Google Analytics 4 con medición de contactos e **informe programado por correo a Raúl**.
- `README-RAUL.md`: registro vivo, en lenguaje no técnico, de todas las mejoras que se van haciendo, y de lo que Raúl tiene que confirmar o hacer.
- Estructura de blog lista (colección de contenido), aunque vacía o casi vacía al lanzar.

**No objetivos (en este proyecto)**
- El pipeline del blog asistido por IA (proyecto 2).
- Programa de reseñas, directorios y monitor de IA (proyecto 3).
- Videoconsulta de pago, reservas o pasarela de pago.
- Chatbot de IA (desaconsejado por secreto profesional y Ley de IA art. 50).
- Sección en inglés (pendiente de que Raúl confirme que atiende en inglés; ver §6).

**Anti-objetivos (sería un fracaso aunque funcione)**
- Publicar **precios**: el cliente no quiere. Ninguna cifra de honorarios en la web.
- Prometer lo que no se puede verificar: atención 24 h, idiomas, «especialista», «el mejor», porcentajes de éxito, casos ganados, testimonios con nombre. Lo prohíbe el Código Deontológico (arts. 6–7) y Raúl responde de ello (art. 7.3.c).
- Cargar Google (Analytics, Fonts, Maps, Translate) **antes del consentimiento**.
- Volver a una web lenta: sliders, GIFs, preloaders, animaciones de entrada.
- Texto legal inventado: toda referencia normativa debe ser real y enlazar al BOE; nada de jurisprudencia citada sin verificar.

## 3. Restricciones

- **Alojamiento: Vercel** (decisión del usuario). Repositorio en GitHub conectado a Vercel.
- **Identidad (fuente: censo CGAE)**: «Raúl Cabrera Santana», Abogado, colegiado nº 6555 del Ilustre Colegio de la Abogacía de Las Palmas, desde 2018. Despacho: C/ Carmen Llopis 7, 4º, 35003 Las Palmas de Gran Canaria. Teléfono: 676 88 22 21. El NIF solo en el aviso legal, tomado del aviso legal actual.
- **LSSI art. 10.1.d / Código Deontológico art. 21.3.a**: Colegio y número de colegiado visibles (pie de página en todas las páginas) y aviso legal con título, Estado que lo expidió y enlaces a las normas profesionales.
- **Cookies (AEPD)**: Google Analytics necesita consentimiento previo, con botones «Aceptar» y «Rechazar» equivalentes.
- **Reseñas (TRLGDCU art. 20.4 tras Ley 10/2025)**: mostrar solo la nota como texto («5,0 en Google · 10 reseñas») con enlace al perfil y una nota sobre cómo se gestionan; sin reseñas incrustadas con nombre y sin marcado `aggregateRating` propio.
- **Rendimiento**: LCP < 2,5 s, INP < 200 ms, CLS < 0,1; Lighthouse móvil ≥ 90 en rendimiento y ≥ 95 en accesibilidad, SEO y buenas prácticas.
- **Accesibilidad**: WCAG 2.2 AA (no obligatorio para una microempresa, pero recomendado, y los agentes de IA navegan por el árbol de accesibilidad).
- Voz: **tuteo**, cercano y claro, como en la web actual («Te explico qué va a pasar y qué podemos hacer»).

## 4. Decidido por el usuario

1. Alojamiento en **Vercel**.
2. **Google Analytics** incrustado, con informes que lleguen **directamente al correo de Raúl**.
3. **WhatsApp** como canal preferido para recibir contactos.
4. Dirección visual **C · «Atlántico claro»**: fondo blanco luminoso, azul océano/verde azulado como acento, tipografía sin serifa, cercano y moderno, menos solemne. Referencia de la maqueta: fondo `#FFFFFF`, tinta `#0E2A3B`, acento `#0F7C8C`, superficie suave `#EEF6F7`, texto secundario `#41596A`, Manrope (titulares 800 con `letter-spacing:-.02em`).
5. Recorrido de contacto: barra fija inferior en móvil con «WhatsApp» y «Llamar» en todas las páginas; formulario corto (nombre, tipo de asunto, urgencia) que **al enviarse abre WhatsApp con el mensaje ya redactado**, sin guardar datos en la web; cada toque cuenta como contacto en Analytics.
6. **Mapa del sitio aprobado** (§5), **sin precios**.
7. `README-RAUL.md` con todas las mejoras, escrito para un cliente no técnico.

## 5. Mapa del sitio al lanzar

| Sección | Página | URL propuesta | Contenido clave |
|---|---|---|---|
| Inicio | Inicio | `/` | H1 «Abogado penalista en Las Palmas de Gran Canaria»; ruta de urgencia «¿Te han detenido o tienes un juicio rápido?» → WhatsApp; servicios; cómo trabajo (resumen); confianza (colegiación, nota de Google); contacto |
| Urgencia | ¿Te han detenido? | `/te-han-detenido/` | Qué pasa en las primeras horas (plazo de 72 h, art. 17 CE y art. 520 LECrim), derechos del detenido, qué hacer ahora, WhatsApp arriba |
| Urgencia | ¿Tienes un juicio rápido? | `/juicio-rapido/` | Qué es (arts. 795 y ss. LECrim), conformidad, cómo prepararlo en Las Palmas |
| Servicios | Índice de servicios | `/servicios/` | Tarjetas a las seis páginas |
| Servicios | Asistencia al detenido e investigado | `/servicios/asistencia-detenido-investigado/` | Comisaría, declaración como investigado, juzgado de guardia |
| Servicios | Alcoholemia y delitos de tráfico | `/servicios/alcoholemia-delitos-trafico/` | Alcoholemia (art. 379 CP), conducir sin carnet (art. 384 CP), juicio rápido |
| Servicios | Violencia de género y doméstica | `/servicios/violencia-genero-domestica/` | Denuncias, órdenes de alejamiento, Secciones de Violencia sobre la Mujer de Las Palmas |
| Servicios | Lesiones, amenazas y delitos leves | `/servicios/lesiones-amenazas-delitos-leves/` | Delitos leves, lesiones, amenazas, multirreincidencia (LO 1/2026) |
| Servicios | Acusación particular | `/servicios/acusacion-particular/` | Para víctimas que quieren personarse |
| Servicios | Recursos y antecedentes | `/servicios/recursos-antecedentes/` | Apelación, suspensión de la condena, cancelación de antecedentes (art. 136 CP) |
| Confianza | Sobre Raúl | `/sobre-raul/` | Colegiación desde 2018, islas y juzgados donde actúa, foto |
| Confianza | Cómo trabajo | `/como-trabajo/` | Del primer WhatsApp a la sentencia; **presupuesto previo por escrito (hoja de encargo, LO 5/2024)** sin cifras; justicia gratuita |
| Confianza | Preguntas frecuentes | `/preguntas-frecuentes/` | Dudas frecuentes reales; marcadas para que Raúl las revise |
| Contacto | Contacto | `/contacto/` | Formulario → WhatsApp, teléfono, dirección, mapa solo tras clic |
| Blog | Blog | `/blog/` | Índice por temas (clusters del informe); 0–3 artículos al lanzar |
| Legal | Aviso legal | `/aviso-legal/` | Corregido: nombre, Colegio, nº 6555, título, normas |
| Legal | Privacidad | `/privacidad/` | RGPD/LOPDGDD; el formulario no guarda datos (va a WhatsApp) |
| Legal | Cookies | `/cookies/` | GA4 tras consentimiento; botón para cambiar la elección |
| Sistema | 404 | `/404` | Con accesos a urgencia y contacto |

Desaparecen: fichas `/team/*`, archivos de categorías demo, «Únete al equipo», selector de 8 idiomas, `/wp-json` y similares.

## 6. Decisiones del constructor (mis decisiones, revisables)

- **Stack**: Astro 7 (última estable) en **salida estática**, sin adaptador (no hace falta para un sitio estático en Vercel). TypeScript. CSS propio con variables (tokens de diseño) y estilos con ámbito en componentes; sin Tailwind ni framework de UI. JavaScript mínimo: barra de contacto, formulario → WhatsApp, banner de consentimiento y eventos de Analytics.
- **Tipografía**: Manrope **autoalojada** (`@fontsource-variable/manrope`), no Google Fonts, para no enviar la IP a Google antes del consentimiento.
- **Contenido** en Markdown/MDX con colecciones de contenido para servicios, preguntas frecuentes y blog, de modo que el proyecto 2 publique como archivos en Git.
- **Google Analytics 4 en «modo de consentimiento básico»**: `gtag.js` no se carga hasta que el usuario acepta. Consent Mode v2 con todo `denied` por defecto y `analytics_storage: granted` solo al aceptar; `ad_storage`, `ad_user_data` y `ad_personalization` siempre `denied`. Inconveniente aceptado: no se cuentan las visitas ni los contactos de quien rechaza. ID de medición en variable de entorno `PUBLIC_GA_ID`; si falta, no se carga nada.
- **Eventos**: `generate_lead` con parámetro `method` = `whatsapp` | `telefono` | `formulario` y `location` (barra, hero, página). En GA4 se marca `generate_lead` como **evento clave**.
- **Informe por correo**: un informe en GA4 «Contactos de la web» (contactos por método y por página, más usuarios y canales), programado con **Compartir → Programar correo**, mensual, el día 4 (los datos tardan hasta 72 h), en PDF y en español. Requisito de GA4: el destinatario debe tener acceso a la propiedad y solo un administrador puede programarlo. Se añade a Raúl como usuario (Lector) con su Gmail. Opcional: informe semanal.
- **Formulario → WhatsApp**: enlace `https://wa.me/34676882221?text=…` con nombre, tipo de asunto y urgencia, sin backend y sin almacenamiento. Aviso junto al botón: «Se abrirá WhatsApp con tu mensaje; no guardamos tus datos en la web». Recordatorio al usuario de no incluir detalles del caso. Si en la web actual el número de WhatsApp fuera otro, prevalece el de la web actual.
- **Mapa**: en contacto, imagen estática o enlace «Ver en Google Maps»; nada de iframe sin clic.
- **Robots y bots de IA**: permitir todos los bots de búsqueda e IA (incluidos los de entrenamiento) por defecto, porque el objetivo es la visibilidad; queda en el README como decisión que Raúl puede cambiar. `llms.txt` escrito a mano con identidad, servicios y URLs clave. Nota de lanzamiento: Vercel no bloquea bots de IA por defecto (el problema del informe era Cloudflare).
- **Datos estructurados (JSON-LD)**: `LegalService` (despacho) + `Person` (Raúl) con `identifier` nº 6555, `memberOf` ICALPA, `address`, `telephone`, `areaServed` (Canarias), `sameAs` (perfil de Google y elAbogado), `BreadcrumbList` en páginas interiores, `Article` en el blog. Sin `aggregateRating` ni `FAQPage` como promesa de resultado enriquecido (las FAQ sí van en HTML).
- **Redirecciones**: mapa 301 en `vercel.json` desde las URLs antiguas de WordPress (`/sobre-mi/`, `/preguntas-frecuentes/`, `/contacto/`, `/servicio/*`, los 3 posts y demás páginas reales) a su equivalente nuevo. Las URLs demo (`/team/*`, categorías demo) devuelven **404** (suficiente para desindexar; un 410 sería algo más rápido pero exige middleware y no compensa).
- **Honorarios**: sin página propia y sin cifras; una sección en «Cómo trabajo» explica el presupuesto previo por escrito y la justicia gratuita.
- **Inglés**: fuera del lanzamiento; queda como pregunta en el README.
- **Fotos**: reutilizar fotos de la web actual **solo si se ve en ellas a Raúl** (optimizadas a AVIF/WebP). Si no las hay, un retrato provisional neutro (iniciales o ilustración sobria) y la sesión de fotos queda pedida en el README. Nunca imágenes generadas por IA de Raúl ni de «clientes», ni mazos ni balanzas de banco de imágenes.
- **Textos**: los redacta el constructor con datos verificados y normas citadas con enlace al BOE; todas las páginas de contenido jurídico quedan marcadas en el README como «pendiente de revisión por Raúl» hasta que las apruebe. Sin jurisprudencia citada.
- **Pruebas**: `astro check`, compilación y un script de verificación sobre `dist/` que compruebe por página: `<title>`, meta description, un único H1, canonical, JSON-LD válido, ningún recurso de Google (`googletagmanager`, `google-analytics`, `fonts.googleapis`, `maps.google`) en el HTML inicial, enlaces internos sin 404, y que el pie lleve «Colegiado nº 6555». Más una prueba de navegador del banner y de los eventos en el despliegue de vista previa. Lighthouse móvil sobre la vista previa.

## 7. README-RAUL.md

Documento en la raíz, para Raúl, en español llano, sin jerga (o con la jerga explicada en una frase). Se actualiza **en cada mejora**. Estructura:

1. **Qué es esta web nueva y por qué** (3–4 frases).
2. **Mejoras hechas**, por fecha, cada una en el formato «Qué hemos hecho → Para qué te sirve». Ejemplos: «Tu web carga en menos de 2,5 segundos en el móvil → quien busca abogado con prisa no se va»; «Hemos corregido tu nombre y número de colegiado → cumples la ley y Google deja de equivocarse».
3. **Cómo te llegan los clientes** (WhatsApp, llamada, formulario → WhatsApp).
4. **Tu informe mensual por correo**: qué es, cuándo llega (día 4 de cada mes), cómo leerlo (contactos por WhatsApp, llamada y formulario), qué hacer si no llega.
5. **Lo que necesitamos de ti**: lista de comprobación (foto, revisar textos, confirmar idiomas, confirmar si atiende urgencias fuera de horario, aceptar el acceso a Analytics, verificar el perfil de Google, acceso al dominio).
6. **Decisiones que puedes cambiar** (bots de IA, inglés, etc.).
7. **Qué viene después** (blog asistido y trabajo mensual), en una línea cada uno.

Además, un `README.md` técnico para el desarrollador: cómo arrancar, variables de entorno, despliegue, configuración de GA4 y del correo programado, y migración del dominio.

## 8. Despliegue y migración (pasos con terceros)

1. Repositorio en GitHub → proyecto en Vercel (vistas previas por rama).
2. GA4: crear la propiedad (preferiblemente en la cuenta de Google de Raúl, con el desarrollador como administrador; o al revés y añadiendo a Raúl), flujo web, `PUBLIC_GA_ID` en Vercel, `generate_lead` como evento clave, informe y correo programado.
3. Dominio (registrado en GoDaddy el 10/04/2025 durante el Kit Digital; DNS en BanaHosting, `europe2124/2125.banahosting.com`): antes de tocar nada, inventariar todos los registros. **Cuidado con el correo**: el MX actual es `0 raulcabreraabogado.com.`, es decir, el correo vive en el mismo servidor compartido y depende del registro A del dominio. Si se apunta el A a Vercel sin más, el correo `info@` deja de llegar. Antes del cambio: crear `mail.raulcabreraabogado.com` → IP actual (204.93.189.151), cambiar el MX a `mail.raulcabreraabogado.com` y ajustar el SPF; o migrar el correo. Después, apuntar `raulcabreraabogado.com` (y `www` → redirección al dominio sin www, como ahora) a Vercel; HTTPS automático.
4. Tras el lanzamiento: Google Search Console y Bing Webmaster Tools con el sitemap, comprobar redirecciones y que las URLs demo dan 404, y actualizar la web del perfil de Google si hace falta.
5. La web antigua de WordPress no se borra hasta comprobar que la nueva funciona y el correo sigue llegando.

**Alcance y puerta de publicación (decisión del constructor):** el cambio de dominio forma parte de este proyecto, como última fase. La web **no se publica en el dominio real hasta que Raúl haya revisado y aprobado los textos** (responde de ellos, CD art. 7.3.c) y se tenga acceso al dominio y al DNS. Hasta entonces vive en la vista previa de Vercel con `noindex` en toda la web (cabecera `X-Robots-Tag` y meta robots en las vistas previas). La aprobación es global para el lanzamiento; no se construye un sistema de aprobación por página.

**Vercel**: el plan gratuito Hobby es solo para uso no comercial; la web de un despacho necesita el plan Pro (de pago) o un equipo de pago del desarrollador. Debe figurar como coste recurrente en `README-RAUL.md`.

## 9. Criterios de aceptación

- Todas las páginas del §5 publicadas en la vista previa de Vercel con contenido real (nada de lorem ipsum) y el estilo C.
- En móvil, WhatsApp y Llamar visibles en la primera pantalla de todas las páginas.
- El formulario abre WhatsApp con el mensaje correcto y no envía datos a ningún servidor.
- Sin consentimiento: cero peticiones a dominios de Google. Tras aceptar: GA4 recibe `page_view` y `generate_lead` (comprobado en DebugView). Rechazar es tan fácil como aceptar, y la elección se puede cambiar desde `/cookies/`.
- El script de verificación pasa sin errores; Lighthouse móvil cumple los umbrales del §3.
- Las URLs antiguas redirigen con 301 a su equivalente; las demo dan 404.
- `robots.txt`, `sitemap-index.xml` y `llms.txt` publicados.
- `README-RAUL.md` describe todas las mejoras hechas y la lista de lo que necesitamos de Raúl.
- Lanzamiento (cuando Raúl apruebe los textos y haya acceso al dominio): dominio apuntando a Vercel con HTTPS, correo `info@` comprobado antes y después del cambio, sitemap enviado a Search Console y Bing, y `noindex` retirado solo en producción.
