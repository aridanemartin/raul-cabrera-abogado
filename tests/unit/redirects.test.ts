import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

type Redirect = { source: string; destination: string; statusCode?: number; permanent?: boolean };

const config = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
  trailingSlash?: boolean;
  redirects?: Redirect[];
  headers?: { source: string; headers: { key: string; value: string }[] }[];
};

const MAP: Record<string, string> = {
  '/sobre-mi/': '/sobre-raul/',
  '/politica-de-privacidad/': '/privacidad/',
  '/politica-de-cookies/': '/cookies/',
  '/terminos-y-condiciones/': '/aviso-legal/',
  '/mapa-del-sitio/': '/',
  '/servicio/defensa-penal-personalizada/': '/servicios/',
  '/servicio/asistencia-en-investigaciones/': '/servicios/asistencia-detenido-investigado/',
  '/servicio/delitos-de-violencia/': '/servicios/violencia-genero-domestica/',
  '/servicio/delitos-menores/': '/servicios/lesiones-amenazas-delitos-leves/',
  '/servicio/proteccion-de-derechos/': '/servicios/',
  '/servicio/revision-de-sentencias/': '/servicios/recursos-antecedentes/',
  '/como-saber-si-necesitas-un-abogado-penalista/': '/como-trabajo/',
  '/que-hacer-si-te-ves-envuelto-en-un-proceso-penal/': '/servicios/asistencia-detenido-investigado/',
  '/conocer-tus-derechos-una-herramienta-para-la-vida/': '/te-han-detenido/',
};

describe('vercel.json', () => {
  it('fuerza la barra final', () => {
    expect(config.trailingSlash).toBe(true);
  });

  it.each(Object.entries(MAP))('%s redirige con 301 a %s', (source, destination) => {
    const rule = config.redirects?.find((r) => r.source === source);
    expect(rule, source).toBeDefined();
    expect(rule!.destination).toBe(destination);
    expect(rule!.statusCode).toBe(301);
  });

  it('las páginas de demostración no redirigen: dan 404', () => {
    const demo = /^\/(team|aeen_team_category|unete-al-equipo|feed)(\/|$)/;
    for (const rule of config.redirects ?? []) {
      expect(rule.source, rule.source).not.toMatch(demo);
    }
  });

  it('envía las cabeceras de seguridad en todas las rutas', () => {
    const all = config.headers?.find((h) => h.source === '/(.*)');
    const headers = Object.fromEntries((all?.headers ?? []).map((h) => [h.key, h.value]));
    expect(headers['X-Content-Type-Options']).toBe('nosniff');
    expect(headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['Permissions-Policy']).toBe('camera=(), microphone=(), geolocation=()');
  });
});
