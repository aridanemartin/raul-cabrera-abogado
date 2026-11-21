import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { DIST, loadPages, walk, type Page } from './load';

const ORIGIN = 'https://raulcabreraabogado.com/';
const GOOGLE =
  /googletagmanager\.com|google-analytics\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|maps\.google|google\.com\/maps/i;
const FORBIDDEN =
  /especialista|\bel mejor\b|\bla mejor\b|garantiz|24\s?h\b|24\/7|24 horas (al|del) día|365 días|% de éxito|casos ganados|lorem|\d+\s?€|euros/i;

let pages: Page[] = [];
let content: Page[] = [];

beforeAll(async () => {
  pages = await loadPages();
  content = pages.filter((p) => p.path !== '/404/');
});

function visibleText(page: Page): string {
  const body = page.root.querySelector('body')!.clone() as typeof page.root;
  body.querySelectorAll('script, style').forEach((el) => el.remove());
  return body.textContent.replace(/\s+/g, ' ');
}

function builtCss(): string {
  return readdirSync(join(DIST, '_astro'))
    .filter((f) => f.endsWith('.css'))
    .map((f) => readFileSync(join(DIST, '_astro', f), 'utf8'))
    .join('\n');
}

/** Anchos mínimos (px) de las media queries cuyo bloque contiene `selector`. */
function minWidthsFor(css: string, selector: string): number[] {
  const widths = new Set<number>();
  for (const match of css.matchAll(/@media\s*\((?:min-width:\s*|width\s*>=\s*)(\d+)px\)\s*\{/g)) {
    const start = match.index + match[0].length;
    let depth = 1;
    let end = start;
    while (depth > 0 && end < css.length) {
      if (css[end] === '{') depth++;
      else if (css[end] === '}') depth--;
      end++;
    }
    if (css.slice(start, end).includes(selector)) widths.add(Number(match[1]));
  }
  return [...widths];
}

describe('todas las páginas', () => {
  it('hay páginas generadas', () => {
    expect(content.length).toBeGreaterThan(0);
  });

  it('título ≤ 65 caracteres y descripción entre 70 y 160', () => {
    for (const page of content) {
      const title = page.root.querySelector('title')?.textContent.trim() ?? '';
      const description =
        page.root.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
      expect(title.length, `${page.path} título`).toBeGreaterThan(0);
      expect(title.length, `${page.path} título «${title}»`).toBeLessThanOrEqual(65);
      expect(description.length, `${page.path} descripción`).toBeGreaterThanOrEqual(70);
      expect(description.length, `${page.path} descripción`).toBeLessThanOrEqual(160);
    }
  });

  it('exactamente un h1', () => {
    for (const page of content) {
      expect(page.root.querySelectorAll('h1').length, page.path).toBe(1);
    }
  });

  it('canonical absoluto con barra final', () => {
    for (const page of content) {
      const href = page.root.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';
      expect(href.startsWith(ORIGIN), `${page.path} canonical ${href}`).toBe(true);
      expect(href.endsWith('/'), `${page.path} canonical ${href}`).toBe(true);
    }
  });

  it('el pie identifica a Raúl y su colegiación', () => {
    for (const page of content) {
      const footer = page.root.querySelector('footer')?.textContent.replace(/\s+/g, ' ') ?? '';
      expect(footer, page.path).toContain('Colegiado nº 6555');
      expect(footer, page.path).toContain('Raúl Cabrera Santana');
    }
  });

  it('el pie muestra el código postal separado de la ciudad', () => {
    for (const page of pages) {
      const address = page.root.querySelector('footer address')?.textContent.replace(/\s+/g, ' ') ?? '';
      expect(address, page.path).toContain('35003 Las Palmas de Gran Canaria');
    }
  });

  it('nunca invierte los apellidos', () => {
    for (const page of pages) {
      expect(page.html, page.path).not.toContain('Santana Cabrera');
    }
  });

  it('sin PUBLIC_INDEXABLE todo es noindex, nofollow', () => {
    if (process.env.PUBLIC_INDEXABLE === 'true') return;
    for (const page of pages) {
      const robots = page.root.querySelector('meta[name="robots"]')?.getAttribute('content');
      expect(robots, page.path).toBe('noindex, nofollow');
    }
  });

  it('no carga nada de Google en el HTML servido', () => {
    for (const page of pages) {
      const refs = [
        ...page.root.querySelectorAll('script[src], iframe[src], img[src]').map((el) => el.getAttribute('src')),
        ...page.root.querySelectorAll('link[href]').map((el) => el.getAttribute('href')),
      ];
      for (const ref of refs) {
        expect(ref ?? '', page.path).not.toMatch(GOOGLE);
      }
    }
  });

  it('la barra de contacto lleva WhatsApp y Llamar como enlaces normales', () => {
    for (const page of pages) {
      const bar = page.root.querySelector('[data-contact-bar]');
      expect(bar, page.path).not.toBeNull();
      expect(bar!.querySelector('a[href^="https://wa.me/34676882221"]'), page.path).not.toBeNull();
      expect(bar!.querySelector('a[href="tel:+34676882221"]'), page.path).not.toBeNull();
    }
  });

  it('cada página lleva datos estructurados válidos', () => {
    for (const page of pages) {
      const blocks = page.root.querySelectorAll('script[type="application/ld+json"]');
      expect(blocks.length, page.path).toBeGreaterThan(0);
      for (const block of blocks) {
        expect(() => JSON.parse(block.textContent), page.path).not.toThrow();
      }
    }
  });

  it('precarga la fuente y declara un respaldo ajustado para que el cambio de fuente no mueva el texto', () => {
    const css = builtCss();
    for (const page of pages) {
      const preload = page.root.querySelector('head link[rel="preload"][as="font"][type="font/woff2"]');
      expect(preload, page.path).not.toBeNull();
      const inline = page.root.querySelectorAll('style').map((el) => el.textContent).join('\n');
      expect(inline + css, page.path).toMatch(/size-adjust/);
    }
  });

  it('ningún enlace usa un texto genérico como «Más información»', () => {
    const generic = /^(más información|leer más|saber más|más|aquí|pincha aquí|haz clic aquí|click aquí|ver más|enlace)$/i;
    for (const page of pages) {
      for (const a of page.root.querySelectorAll('a')) {
        const text = a.textContent.replace(/\s+/g, ' ').trim();
        expect(text, `${page.path} → ${a.getAttribute('href')}`).not.toMatch(generic);
      }
    }
  });

  it('cada página lleva la foto de Raúl para compartir el enlace', () => {
    for (const page of pages) {
      const meta = (property: string) =>
        page.root.querySelector(`meta[property="${property}"]`)?.getAttribute('content') ?? '';
      expect(meta('og:image'), page.path).toBe(`${ORIGIN}og-raul-cabrera.jpg`);
      expect(meta('og:image:width'), page.path).toBe('1200');
      expect(meta('og:image:height'), page.path).toBe('630');
      expect(meta('og:image:alt'), page.path).toContain('Raúl Cabrera');
    }
    expect(existsSync(join(DIST, 'og-raul-cabrera.jpg'))).toBe(true);
  });

  it('los retratos son la foto de Raúl en AVIF y WebP, con texto alternativo y medidas', () => {
    for (const path of ['/', '/sobre-raul/']) {
      const page = byPath(path)!;
      const pictures = page.root.querySelectorAll('main picture');
      expect(pictures.length, path).toBeGreaterThan(0);
      for (const picture of pictures) {
        expect(picture.querySelector('source[type="image/avif"]'), path).not.toBeNull();
        expect(picture.querySelector('source[type="image/webp"]'), path).not.toBeNull();
        const img = picture.querySelector('img')!;
        expect(img.getAttribute('alt'), path).toContain('Raúl Cabrera');
        expect(Number(img.getAttribute('width')), path).toBeGreaterThan(0);
        expect(Number(img.getAttribute('height')), path).toBeGreaterThan(0);
        expect(existsSync(join(DIST, img.getAttribute('src')!)), `${path} ${img.getAttribute('src')}`).toBe(true);
      }
      // Ya no queda el retrato provisional con las iniciales.
      expect(page.root.querySelectorAll('main *').filter((el) => el.textContent.trim() === 'RC'), path).toEqual([]);
    }
  });

  it('el menú del móvil es un botón de hamburguesa que abre la navegación con WhatsApp y teléfono', () => {
    for (const page of pages) {
      const button = page.root.querySelector('header button.menu-toggle[aria-controls="site-nav"][aria-expanded="false"]');
      expect(button, page.path).not.toBeNull();
      expect(button!.querySelectorAll('.menu-icon > span'), page.path).toHaveLength(3);
      expect(button!.querySelector('.visually-hidden')?.textContent.trim(), page.path).toBe('Menú');
      const nav = page.root.querySelector('header nav#site-nav')!;
      expect(nav.querySelector('a[href^="https://wa.me/"][data-lead-location="menu"]'), page.path).not.toBeNull();
      expect(nav.querySelector('a[href^="tel:"][data-lead-location="menu"]'), page.path).not.toBeNull();
    }
  });

  it('en ningún ancho de pantalla falta un botón de contacto a la vista', () => {
    const inline = pages.flatMap((p) => p.root.querySelectorAll('style').map((el) => el.textContent)).join('\n');
    const css = builtCss() + inline;
    const headerCta = minWidthsFor(css, '.header-cta');
    expect(headerCta).toHaveLength(1);
    // La barra se oculta justo cuando aparece el botón de la cabecera, y el aviso
    // de cookies deja de apoyarse encima de la barra en ese mismo ancho.
    expect(minWidthsFor(css, '.contact-bar')).toEqual(headerCta);
    expect(minWidthsFor(css, '.consent')).toEqual(headerCta);
  });

  it('cada enlace de WhatsApp o de teléfono cuenta como contacto', () => {
    const untracked: string[] = [];
    for (const page of pages) {
      for (const a of page.root.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"]')) {
        const href = a.getAttribute('href') ?? '';
        const method = href.startsWith('tel:') ? 'telefono' : 'whatsapp';
        if (a.getAttribute('data-lead') !== method || !a.getAttribute('data-lead-location')) {
          untracked.push(`${page.path} → ${href.slice(0, 30)}`);
        }
      }
    }
    expect(untracked).toEqual([]);
  });

  it('sin JavaScript el formulario se oculta y se ofrecen WhatsApp y el teléfono', () => {
    expect(builtCss()).toMatch(/html:not\(\.js\)\s*\[data-requires-js\]\s*\{display:none\s*!important\}/);
    const withForm = pages.filter((p) => p.root.querySelector('form[data-contact-form]'));
    expect(withForm.length).toBeGreaterThan(0);
    for (const page of withForm) {
      for (const form of page.root.querySelectorAll('form[data-contact-form]')) {
        expect(form.hasAttribute('data-requires-js'), page.path).toBe(true);
      }
      const fallback = page.root.querySelectorAll('noscript').map((el) => el.innerHTML).join('\n');
      expect(fallback, page.path).toContain('href="https://wa.me/34676882221');
      expect(fallback, page.path).toContain('href="tel:+34676882221"');
    }
  });

  it('el NIF solo aparece en el aviso legal', async () => {
    const leaks: string[] = [];
    for (const file of await walk(DIST)) {
      if (!/\.(html|js|css|txt|xml|json)$/.test(file)) continue;
      if (file === join(DIST, 'aviso-legal', 'index.html')) continue;
      if (readFileSync(file, 'utf8').includes('54092607B')) leaks.push(file.slice(DIST.length));
    }
    expect(leaks).toEqual([]);
  });

  it('no usa copy prohibido', () => {
    for (const page of pages) {
      const match = visibleText(page).match(FORBIDDEN);
      expect(match?.[0], `${page.path}: «${match?.[0]}»`).toBeUndefined();
    }
  });
});

describe('archivos para buscadores e IA', () => {
  it('el sitemap existe y no lista la página 404', () => {
    const files = readdirSync(DIST).filter((f) => /^sitemap-.*\.xml$/.test(f));
    expect(files).toContain('sitemap-index.xml');
    const all = files.map((f) => readFileSync(join(DIST, f), 'utf8')).join('\n');
    expect(all).toContain('<loc>https://raulcabreraabogado.com/</loc>');
    expect(all).not.toMatch(/\/404\/?</);
  });

  it('robots.txt permite todo y apunta al sitemap', () => {
    const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
    expect(robots).toMatch(/^User-agent: \*$/m);
    expect(robots).toMatch(/^Allow: \/$/m);
    expect(robots).toContain('Sitemap: https://raulcabreraabogado.com/sitemap-index.xml');
  });

  it('llms.txt presenta a Raúl con su colegiación', () => {
    const llms = readFileSync(join(DIST, 'llms.txt'), 'utf8');
    expect(llms.startsWith('# Raúl Cabrera Santana — Abogado penalista en Las Palmas de Gran Canaria')).toBe(true);
    expect(llms).toMatch(/^> .*6555/m);
    expect(llms).not.toContain('Santana Cabrera');
  });
});

const SERVICES = [
  '/servicios/asistencia-detenido-investigado/',
  '/servicios/alcoholemia-delitos-trafico/',
  '/servicios/violencia-genero-domestica/',
  '/servicios/lesiones-amenazas-delitos-leves/',
  '/servicios/acusacion-particular/',
  '/servicios/recursos-antecedentes/',
];

const byPath = (path: string) => pages.find((p) => p.path === path);

function jsonLdTypes(page: Page): string[] {
  return page.root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((el) => JSON.parse(el.textContent))
    .flatMap((data) => (data['@graph'] ?? [data]).map((node: { '@type': string }) => node['@type']));
}

describe('páginas de servicio', () => {
  it.each(SERVICES)('%s existe con migas, BOE, WhatsApp y texto suficiente', (path) => {
    const page = byPath(path);
    expect(page, path).toBeDefined();
    expect(jsonLdTypes(page!)).toContain('BreadcrumbList');
    expect(page!.root.querySelectorAll('a[href^="https://www.boe.es/"]').length).toBeGreaterThan(0);
    expect(page!.root.querySelector('main a[href^="https://wa.me/34676882221"]')).not.toBeNull();
    const body = page!.root.querySelector('[data-service-body]')?.textContent ?? '';
    const words = body.split(/\s+/).filter(Boolean).length;
    expect(words, `${path}: ${words} palabras`).toBeGreaterThanOrEqual(600);
  });

  it('el índice de servicios enlaza a las seis páginas', () => {
    const index = byPath('/servicios/');
    expect(index).toBeDefined();
    const hrefs = index!.root.querySelectorAll('main a').map((a) => a.getAttribute('href'));
    for (const path of SERVICES) expect(hrefs).toContain(path);
  });
});

describe('portada y urgencias', () => {
  it('la portada lleva el H1 y la entradilla exactos', () => {
    const home = byPath('/')!;
    expect(home.root.querySelector('h1')!.textContent.trim()).toBe('Abogado penalista en Las Palmas de Gran Canaria');
    expect(visibleText(home)).toContain(
      'Defensa penal desde la comisaría hasta la sentencia. Te explico qué va a pasar y qué podemos hacer.',
    );
  });

  it('la portada abre con la foto de Raúl a todo lo ancho, cargada con prioridad', () => {
    const hero = byPath('/')!.root.querySelector('main .hero');
    const picture = hero?.querySelector('picture');
    expect(picture, 'la cabecera de la portada no tiene foto').toBeTruthy();
    expect(picture!.querySelector('source[type="image/avif"]')?.getAttribute('srcset')).toContain('raul-cabrera-portada');
    const img = picture!.querySelector('img')!;
    expect(img.getAttribute('loading')).toBe('eager');
    expect(img.getAttribute('fetchpriority')).toBe('high');
    expect(img.getAttribute('sizes')).toBe('100vw');
    expect(hero!.querySelector('.portrait'), 'el retrato redondo sobra en la cabecera').toBeNull();
  });

  it('la portada tiene el formulario de contacto y enlaza a los seis servicios', () => {
    const home = byPath('/')!;
    expect(home.root.querySelector('main form[data-contact-form][data-lead-location="portada"]')).not.toBeNull();
    const hrefs = home.root.querySelectorAll('main a').map((a) => a.getAttribute('href'));
    for (const path of SERVICES) expect(hrefs).toContain(path);
  });

  it.each(['/te-han-detenido/', '/juicio-rapido/'])('%s enlaza al BOE y ofrece WhatsApp antes del primer h2', (path) => {
    const page = byPath(path);
    expect(page, path).toBeDefined();
    expect(page!.root.querySelectorAll('main a[href^="https://www.boe.es/"]').length).toBeGreaterThan(0);
    const main = page!.root.querySelector('main')!.innerHTML;
    const whatsapp = main.indexOf('https://wa.me/34676882221');
    const firstH2 = main.indexOf('<h2');
    expect(whatsapp).toBeGreaterThanOrEqual(0);
    expect(firstH2).toBeGreaterThan(whatsapp);
  });
});

describe('blog', () => {
  it('el índice existe y, sin artículos, invita a las guías de urgencia', () => {
    const blog = byPath('/blog/');
    expect(blog).toBeDefined();
    expect(blog!.root.querySelectorAll('h1')).toHaveLength(1);
    if (blog!.root.querySelector('[data-post-list]')) return;
    expect(visibleText(blog!)).toContain('Muy pronto publicaré aquí guías prácticas sobre derecho penal en Las Palmas.');
    const hrefs = blog!.root.querySelectorAll('main a').map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('/te-han-detenido/');
    expect(hrefs).toContain('/juicio-rapido/');
  });
});

describe('páginas legales', () => {
  const mainLinks = (page: Page) =>
    page.root.querySelectorAll('main a').map((a) => ({ href: a.getAttribute('href') ?? '', text: a.textContent }));

  it('el aviso legal da los datos de la LSSI con la colegiación y las normas profesionales', () => {
    const page = byPath('/aviso-legal/');
    expect(page).toBeDefined();
    const text = visibleText(page!);
    expect(text).toContain('Raúl Cabrera Santana');
    expect(text).toContain('54092607B');
    expect(text).toContain('6555');
    expect(text).toContain('Ilustre Colegio de la Abogacía de Las Palmas');
    expect(text).toMatch(/(Licenciado|Graduado) en Derecho/);
    const links = mainLinks(page!);
    expect(links.some((a) => a.href.includes('BOE-A-2021-4568'))).toBe(true);
    expect(links.some((a) => a.href.startsWith('https://www.abogacia.es/') && /Código Deontológico/.test(a.text))).toBe(
      true,
    );
  });

  it('la privacidad explica el formulario, WhatsApp, los proveedores y la AEPD', () => {
    const page = byPath('/privacidad/');
    expect(page).toBeDefined();
    const text = visibleText(page!);
    expect(text).toContain('no guarda');
    expect(text).toContain('WhatsApp');
    expect(text).toContain('secreto profesional');
    expect(text).toContain('Vercel');
    expect(text).toContain('Google Analytics');
    expect(mainLinks(page!).some((a) => a.href.startsWith('https://www.aepd.es/'))).toBe(true);
  });

  it('cookies lista _ga y _ga_<ID> con finalidad y duración, y tiene los controles', () => {
    const page = byPath('/cookies/');
    expect(page).toBeDefined();
    const rows = page!.root
      .querySelectorAll('main table tbody tr')
      .map((tr) => tr.querySelectorAll('td').map((td) => td.textContent.trim()));
    const ga = rows.find((cells) => cells[0] === '_ga');
    const gaId = rows.find((cells) => cells[0] === '_ga_<ID>');
    for (const row of [ga, gaId]) {
      expect(row, 'fila de la cookie').toBeDefined();
      expect(row![1].length, 'finalidad').toBeGreaterThan(10);
      expect(row![2], 'duración').toMatch(/año|mes|día/);
    }
    const headers = page!.root.querySelectorAll('main table thead th').map((th) => th.textContent.trim());
    for (const tr of page!.root.querySelectorAll('main table tbody tr')) {
      // En móvil la tabla se apila y cada celda muestra su columna.
      expect(tr.querySelectorAll('td').map((td) => td.getAttribute('data-label'))).toEqual(headers);
    }
    const buttons = page!.root.querySelectorAll('main [data-cookie-settings] button').map((b) => b.textContent.trim());
    expect(buttons).toContain('Aceptar');
    expect(buttons).toContain('Rechazar');
  });
});

describe('textos legales revisados', () => {
  it('juicio rápido: nombra el robo de uso de vehículos y condiciona la suspensión de la pena', () => {
    const text = visibleText(byPath('/juicio-rapido/')!);
    expect(text).toContain('hurto y robo de uso de vehículos');
    expect(text).not.toContain('hurto o robo de vehículos');
    expect(text).not.toContain('puede suspenderla en el mismo acto, y basta');
    expect(text).toContain('si se cumplen los requisitos del Código Penal');
    expect(text).toContain('que sea la primera vez que delinques y que la condena no pase de dos años');
  });

  it('violencia de género: separa la Sección de Violencia sobre la Mujer de la violencia doméstica', () => {
    const text = visibleText(byPath('/servicios/violencia-genero-domestica/')!);
    expect(text).not.toContain('estos asuntos los lleva la Sección de Violencia sobre la Mujer');
    expect(text).toMatch(/violencia doméstica[^.]*Sección de Instrucción/);
  });

  it('delitos leves: la multirreincidencia exige tres condenas previas, una de ellas leve', () => {
    const page = byPath('/servicios/lesiones-amenazas-delitos-leves/')!;
    expect(page.html).not.toContain('varios delitos leves de hurto');
    expect(visibleText(page)).toContain('si ya tienes tres condenas por delitos de la misma naturaleza, al menos una de ellas leve');
  });
});

describe('páginas de confianza, contacto y 404', () => {
  it.each(['/sobre-raul/', '/como-trabajo/', '/preguntas-frecuentes/', '/contacto/', '/404/'])('%s existe', (path) => {
    expect(byPath(path), path).toBeDefined();
  });

  it('contacto tiene el formulario, el teléfono y la dirección exacta, sin iframe', () => {
    const page = byPath('/contacto/')!;
    expect(page.root.querySelector('main form[data-contact-form][data-lead-location="contacto"]')).not.toBeNull();
    expect(page.root.querySelector('main a[href="tel:+34676882221"]')).not.toBeNull();
    expect(visibleText(page)).toContain('C/ Carmen Llopis 7, 4º, 35003 Las Palmas de Gran Canaria');
    const map = page.root.querySelector('main a[href^="https://www.google.com/maps/search/?api=1&query="]');
    expect(map?.textContent.trim()).toBe('Ver en Google Maps');
    expect(page.root.querySelectorAll('iframe')).toHaveLength(0);
  });

  it('cómo trabajo explica la hoja de encargo y la justicia gratuita', () => {
    const text = visibleText(byPath('/como-trabajo/')!);
    expect(text).toContain('hoja de encargo');
    expect(text).toContain('justicia gratuita');
  });

  it('la 404 lleva a la guía de urgencia y a contacto', () => {
    const hrefs = byPath('/404/')!.root.querySelectorAll('main a').map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('/te-han-detenido/');
    expect(hrefs).toContain('/contacto/');
  });

  it('todo enlace interno lleva a un archivo de dist/', () => {
    const broken: string[] = [];
    for (const page of pages) {
      const hrefs = page.root.querySelectorAll('a[href], link[href]').map((el) => el.getAttribute('href') ?? '');
      for (const href of hrefs) {
        const local = href.startsWith(ORIGIN) ? href.slice(ORIGIN.length - 1) : href;
        if (!local.startsWith('/') || local.startsWith('//')) continue;
        const path = decodeURIComponent(local.split(/[?#]/)[0]);
        const file = path.endsWith('/') ? join(DIST, path, 'index.html') : join(DIST, path);
        if (!existsSync(file)) broken.push(`${page.path} → ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });
});
