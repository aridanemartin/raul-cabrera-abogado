// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';

type Settings = typeof import('../../src/scripts/cookie-settings');
type Analytics = typeof import('../../src/lib/analytics');

let settings: Settings;
let analytics: Analytics;
const win = window as unknown as { dataLayer?: unknown; gtag?: unknown; 'ga-disable-G-TEST'?: boolean };

function render(): HTMLElement {
  document.body.innerHTML = `
    <section data-consent-banner>
      <button type="button" data-consent="accept">Aceptar</button>
      <button type="button" data-consent="reject">Rechazar</button>
    </section>
    <div data-cookie-settings>
      <p data-cookie-status>Sin JavaScript, Google Analytics no se activa.</p>
      <div data-cookie-controls hidden>
        <button type="button" data-cookie-choice="accept">Aceptar</button>
        <button type="button" data-cookie-choice="reject">Rechazar</button>
      </div>
    </div>`;
  return document.querySelector<HTMLElement>('[data-cookie-settings]')!;
}

const status = () => document.querySelector('[data-cookie-status]')!.textContent ?? '';
const controls = () => document.querySelector<HTMLElement>('[data-cookie-controls]')!;
const banner = () => document.querySelector<HTMLElement>('[data-consent-banner]')!;
const choose = (choice: 'accept' | 'reject') =>
  document.querySelector<HTMLButtonElement>(`[data-cookie-choice="${choice}"]`)!.click();
const gtagScripts = () => document.querySelectorAll('script[src*="googletagmanager"]');

beforeEach(async () => {
  localStorage.clear();
  document.head.innerHTML = '';
  delete win.dataLayer;
  delete win.gtag;
  delete win['ga-disable-G-TEST'];
  vi.resetModules();
  analytics = await import('../../src/lib/analytics');
  settings = await import('../../src/scripts/cookie-settings');
});

describe('bindCookieSettings', () => {
  it('sin elección guardada lo dice en texto y muestra los botones', () => {
    settings.bindCookieSettings(render(), 'G-TEST');
    expect(status()).toContain('Todavía no has elegido');
    expect(controls().hidden).toBe(false);
  });

  it('«Aceptar» activa Analytics con el ID de la web y guarda la elección', () => {
    settings.bindCookieSettings(render(), 'G-TEST');
    choose('accept');
    expect(gtagScripts()).toHaveLength(1);
    expect(gtagScripts()[0].getAttribute('src')).toContain('id=G-TEST');
    expect(analytics.isAnalyticsEnabled()).toBe(true);
    expect(localStorage.getItem('rc-consent')).toContain('"analytics":true');
    expect(status()).toContain('Has aceptado');
  });

  it('«Rechazar» desactiva Analytics, borra sus cookies y guarda la elección', async () => {
    const { writeConsent } = await import('../../src/lib/consent');
    writeConsent(true);
    analytics.initAnalytics('G-TEST');
    document.cookie = '_ga=GA1.1.123.456; path=/';
    settings.bindCookieSettings(render(), 'G-TEST');
    expect(status()).toContain('Has aceptado');
    choose('reject');
    expect(analytics.isAnalyticsEnabled()).toBe(false);
    expect(win['ga-disable-G-TEST']).toBe(true);
    expect(document.cookie).not.toContain('_ga=');
    expect(localStorage.getItem('rc-consent')).toContain('"analytics":false');
    expect(status()).toContain('Has rechazado');
  });

  it('sin Analytics configurado explica que no hay cookies y oculta los botones', () => {
    settings.bindCookieSettings(render(), undefined);
    expect(status()).toContain('no está activado');
    expect(controls().hidden).toBe(true);
  });

  it('elegir aquí oculta el banner de cookies', () => {
    settings.bindCookieSettings(render(), 'G-TEST');
    choose('reject');
    expect(banner().hidden).toBe(true);
  });

  it('elegir en el banner actualiza el estado mostrado', () => {
    settings.bindCookieSettings(render(), 'G-TEST');
    banner().querySelector<HTMLButtonElement>('[data-consent="reject"]')!.click();
    expect(status()).toContain('Has rechazado');
  });
});
