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

La identidad del despacho (nombre, colegiación, dirección, teléfono, WhatsApp) vive solo en `src/config/site.ts`, salvo el número de WhatsApp, que está en `src/config/whatsapp.ts` para que el script del formulario no lleve al navegador el resto de datos (el NIF solo debe aparecer en el aviso legal). El pie de todas las páginas muestra «Raúl Cabrera Santana · Abogado · Colegiado nº 6555 del Ilustre Colegio de la Abogacía de Las Palmas» (LSSI art. 10.1.d).

## Despliegue en Vercel

1. Sube el repositorio a GitHub e impórtalo en Vercel como proyecto nuevo. Vercel detecta Astro; no hace falta adaptador porque la salida es estática (`dist/`). Cada rama genera su vista previa.
2. **Plan Pro.** El plan gratuito Hobby es solo para uso no comercial; la web de un despacho necesita Pro (o un equipo de pago del desarrollador). Es un coste recurrente que Raúl conoce por `README-RAUL.md`.
3. Variables de entorno (Settings → Environment Variables):

   | Variable | Production | Preview |
   |---|---|---|
   | `PUBLIC_GA_ID` | `G-…` | `G-…` (la misma; así se prueba el banner y DebugView en la vista previa) |
   | `PUBLIC_INDEXABLE` | `true` **solo tras el lanzamiento** | sin definir |

   Son variables de compilación (`import.meta.env`): después de cambiarlas hay que volver a desplegar.
4. Las vistas previas no se indexan por partida doble: la meta `robots` es `noindex, nofollow` mientras `PUBLIC_INDEXABLE` no sea `true`, y Vercel añade `x-robots-tag: noindex` a toda URL de vista previa. Se comprueba con `curl -sI <url-de-vista-previa> | grep -i x-robots-tag`.
5. `vercel.json` lleva `trailingSlash: true`, las redirecciones 301 de las URLs de WordPress y las cabeceras de seguridad. Las URLs de demo de la plantilla antigua (`/team/*`, categorías) dan 404 a propósito.

## Configuración de GA4

Hazlo con la cuenta de Google que vaya a ser la dueña de la propiedad (preferiblemente la de Raúl, con el desarrollador como administrador).

1. **Propiedad y flujo web.** En [analytics.google.com](https://analytics.google.com), Administrar → Crear → Propiedad: zona horaria España (Canarias), moneda euro. Crea un flujo de datos web para `https://raulcabreraabogado.com`. Copia el ID de medición (`G-…`) a `PUBLIC_GA_ID` en Vercel. En el flujo, deja activada la medición mejorada pero desactiva «Interacciones con formularios»: el formulario no envía nada a ningún servidor y ya se mide con `generate_lead`.
2. **Dimensiones personalizadas.** Administrar → Definiciones personalizadas → Crear dimensión personalizada, dos veces, con ámbito **Evento**:
   - Nombre «Método de contacto», parámetro `lead_method` (`whatsapp`, `telefono` o `formulario`).
   - Nombre «Lugar del contacto», parámetro `lead_location` (`barra`, `cabecera`, `urgencia`, `portada`, `contacto`, `pie`, `menu`, `blog`, el slug de la página…).
3. **Evento clave.** Cuando llegue el primer `generate_lead` (pruébalo en Administrar → DebugView desde la vista previa, tras aceptar las cookies), ve a Administrar → Eventos y márcalo como **evento clave**.
4. **Informe «Contactos de la web».** Informes → Biblioteca → Crear informe de detalle, a partir de «Eventos»: filtra `Nombre del evento = generate_lead`, dimensiones «Método de contacto» y «Ruta de la página y clase de pantalla», métricas «Recuento de eventos» y «Usuarios totales». Añade una tarjeta con «Grupo de canales predeterminado de la sesión» para ver de dónde llegan. Guárdalo y publícalo en una colección para que aparezca en el menú.
5. **Acceso de Raúl.** Administrar → Gestión del acceso a la propiedad → añadir su Gmail con el rol **Lector**. Raúl tiene que aceptar la invitación: sin acceso a la propiedad no puede recibir el correo.
6. **Correo programado.** Abre el informe → Compartir este informe → Programar correo: destinatario el Gmail de Raúl, frecuencia **mensual, día 4** (GA4 tarda hasta 72 h en completar los datos), formato **PDF**, idioma **español**. La programación caduca a los **12 meses**: pon un recordatorio para renovarla cada año. Solo un administrador puede programarlo.

Lo que envía la web: `generate_lead` con `lead_method` y `lead_location`, solo después de que el visitante pulse «Aceptar» (`src/lib/analytics.ts`, modo de consentimiento básico). Sin consentimiento no se descarga `gtag.js`.

## Migración del dominio

El dominio está registrado en GoDaddy y el DNS está en BanaHosting (`europe2124.banahosting.com` y `europe2125.banahosting.com`). Antes de tocar nada, haz captura o exportación de **todos** los registros DNS.

> **Cuidado con el correo `info@`.** El MX actual es `0 raulcabreraabogado.com.`: el correo vive en el mismo servidor compartido que la web y depende del registro A del dominio. Si se apunta el A a Vercel sin más, el correo deja de llegar.

Orden seguro:

1. Crea `mail.raulcabreraabogado.com` → A a la IP actual del hosting (204.93.189.151; compruébala antes con `dig +short raulcabreraabogado.com`).
2. Cambia el MX a `0 mail.raulcabreraabogado.com.` y ajusta el SPF (TXT `v=spf1 …`) para que siga autorizando ese servidor. Espera a que propague y **comprueba que el correo entra y sale** (envía uno a `info@` y responde desde él). La alternativa es migrar el correo a otro proveedor antes del cambio.
3. Añade el dominio en Vercel (Settings → Domains) y apunta `raulcabreraabogado.com` a Vercel con los registros que indique; `www` redirige al dominio sin `www`, como ahora. HTTPS es automático.
4. Vuelve a comprobar el correo después del cambio.
5. No borres el WordPress antiguo hasta confirmar que la web nueva funciona y el correo sigue llegando.

## Lanzamiento

La web **no se publica en el dominio real** hasta que:

- [ ] Raúl ha revisado y aprobado todos los textos de la lista de `README-RAUL.md` (responde de lo que dice la web; Código Deontológico, art. 7.3.c). La aprobación es global para el lanzamiento.
- [ ] Hay acceso al dominio y al DNS, y el correo se ha protegido como se explica arriba.
- [ ] `npm run verify` pasa y Lighthouse móvil cumple los umbrales (rendimiento ≥ 90; accesibilidad, buenas prácticas y SEO ≥ 95; LCP < 2,5 s; CLS < 0,1).

Después del lanzamiento:

1. `PUBLIC_INDEXABLE=true` solo en Production y redespliega.
2. Comprueba con `curl -sI` que las URLs antiguas dan 301 a su equivalente y que las de demo dan 404.
3. Da de alta la web en Google Search Console y Bing Webmaster Tools y envía `https://raulcabreraabogado.com/sitemap-index.xml`.
4. Si hace falta, actualiza la web del perfil de Google de Raúl y rellena `SITE.google.profileUrl` en `src/config/site.ts` cuando se confirme que el perfil es suyo.
