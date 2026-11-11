import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { DIST, loadPages, type Page } from './load';

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
