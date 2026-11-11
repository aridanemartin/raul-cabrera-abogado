// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type Banner = typeof import('../../src/scripts/consent-banner');
type Analytics = typeof import('../../src/lib/analytics');

let banner: Banner;
let analytics: Analytics;
const win = window as unknown as { dataLayer?: unknown; gtag?: unknown };

function renderBanner(): HTMLElement {
  document.body.innerHTML = `
    <section data-consent-banner hidden>
      <button type="button" data-consent="accept">Aceptar</button>
      <button type="button" data-consent="reject">Rechazar</button>
    </section>`;
  return document.querySelector<HTMLElement>('[data-consent-banner]')!;
}

const gtagScripts = () => document.querySelectorAll('script[src*="googletagmanager"]');

beforeEach(async () => {
  localStorage.clear();
  document.head.innerHTML = '';
  delete win.dataLayer;
  delete win.gtag;
  vi.resetModules();
  analytics = await import('../../src/lib/analytics');
  banner = await import('../../src/scripts/consent-banner');
});

afterEach(() => vi.restoreAllMocks());

describe('bindConsentBanner', () => {
  it('se muestra si no hay elección y aceptar activa Analytics', () => {
    const el = renderBanner();
    analytics.initAnalytics('G-TEST');
    banner.bindConsentBanner(el, 'G-TEST');
    expect(el.hidden).toBe(false);
    el.querySelector<HTMLButtonElement>('[data-consent="accept"]')!.click();
    expect(el.hidden).toBe(true);
    expect(gtagScripts()).toHaveLength(1);
    expect(localStorage.getItem('rc-consent')).toContain('"analytics":true');
  });

  it('rechazar oculta el banner sin cargar Google', () => {
    const el = renderBanner();
    analytics.initAnalytics('G-TEST');
    banner.bindConsentBanner(el, 'G-TEST');
    el.querySelector<HTMLButtonElement>('[data-consent="reject"]')!.click();
    expect(el.hidden).toBe(true);
    expect(gtagScripts()).toHaveLength(0);
    expect(localStorage.getItem('rc-consent')).toContain('"analytics":false');
  });

  it('no se muestra si ya hay una elección guardada', async () => {
    const { writeConsent } = await import('../../src/lib/consent');
    writeConsent(false);
    const el = renderBanner();
    banner.bindConsentBanner(el, 'G-TEST');
    expect(el.hidden).toBe(true);
  });

  it('no se muestra si no hay Analytics configurado', () => {
    const el = renderBanner();
    banner.bindConsentBanner(el, undefined);
    expect(el.hidden).toBe(true);
  });

  it('con localStorage bloqueado aparece y la elección se aplica en esta visita', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('bloqueado');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('bloqueado');
    });
    const el = renderBanner();
    analytics.initAnalytics('G-TEST');
    banner.bindConsentBanner(el, 'G-TEST');
    expect(el.hidden).toBe(false);
    expect(() => el.querySelector<HTMLButtonElement>('[data-consent="accept"]')!.click()).not.toThrow();
    expect(el.hidden).toBe(true);
    expect(analytics.isAnalyticsEnabled()).toBe(true);
  });
});
