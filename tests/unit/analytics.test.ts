// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';

type Analytics = typeof import('../../src/lib/analytics');
type LeadTracking = typeof import('../../src/scripts/lead-tracking');

const DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
};
const GTAG_SRC = 'https://www.googletagmanager.com/gtag/js?id=G-TEST';

let analytics: Analytics;
let leadTracking: LeadTracking;

const win = window as unknown as { dataLayer?: IArguments[]; gtag?: unknown };
const calls = () => (win.dataLayer ?? []).map((args) => Array.from(args));
const gtagScripts = () => document.querySelectorAll('script[src*="googletagmanager"]');

beforeEach(async () => {
  localStorage.clear();
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  delete win.dataLayer;
  delete win.gtag;
  vi.resetModules();
  analytics = await import('../../src/lib/analytics');
  leadTracking = await import('../../src/scripts/lead-tracking');
});

describe('initAnalytics', () => {
  it('sin consentimiento no carga Google y deja todo denegado', () => {
    analytics.initAnalytics('G-TEST');
    expect(gtagScripts()).toHaveLength(0);
    expect(calls()).toContainEqual(['consent', 'default', DENIED]);
    expect(analytics.isAnalyticsEnabled()).toBe(false);
  });

  it('sin ID no inyecta nada aunque haya consentimiento guardado', async () => {
    const { writeConsent } = await import('../../src/lib/consent');
    writeConsent(true);
    expect(() => analytics.initAnalytics(undefined)).not.toThrow();
    expect(gtagScripts()).toHaveLength(0);
    expect(win.dataLayer).toBeUndefined();
  });

  it('con consentimiento guardado carga Analytics al iniciar', async () => {
    const { writeConsent } = await import('../../src/lib/consent');
    writeConsent(true);
    analytics.initAnalytics('G-TEST');
    expect(gtagScripts()).toHaveLength(1);
    expect(analytics.isAnalyticsEnabled()).toBe(true);
  });
});

describe('enableAnalytics', () => {
  it('inyecta un único script aunque se llame dos veces', () => {
    analytics.initAnalytics('G-TEST');
    analytics.enableAnalytics('G-TEST');
    analytics.enableAnalytics('G-TEST');
    const scripts = gtagScripts();
    expect(scripts).toHaveLength(1);
    expect(scripts[0].getAttribute('src')).toBe(GTAG_SRC);
    expect(calls()).toContainEqual(['consent', 'update', { analytics_storage: 'granted' }]);
    expect(calls().filter((c) => c[0] === 'config' && c[1] === 'G-TEST')).toHaveLength(1);
  });

  it('el consentimiento por defecto va antes que la actualización', () => {
    analytics.enableAnalytics('G-TEST');
    const list = calls();
    const def = list.findIndex((c) => c[0] === 'consent' && c[1] === 'default');
    const upd = list.findIndex((c) => c[0] === 'consent' && c[1] === 'update');
    expect(def).toBeGreaterThanOrEqual(0);
    expect(def).toBeLessThan(upd);
  });
});

describe('trackLead', () => {
  it('sin consentimiento no envía nada', () => {
    analytics.initAnalytics('G-TEST');
    const before = calls().length;
    analytics.trackLead('whatsapp', 'barra');
    expect(calls()).toHaveLength(before);
  });

  it('con consentimiento envía generate_lead', () => {
    analytics.initAnalytics('G-TEST');
    analytics.enableAnalytics('G-TEST');
    analytics.trackLead('whatsapp', 'barra');
    expect(calls()).toContainEqual(['event', 'generate_lead', { lead_method: 'whatsapp', lead_location: 'barra' }]);
  });
});

describe('disableAnalytics', () => {
  it('deniega, desactiva el envío y borra las cookies de Google Analytics', () => {
    analytics.initAnalytics('G-TEST');
    analytics.enableAnalytics('G-TEST');
    document.cookie = '_ga=GA1.1.123; path=/';
    document.cookie = '_ga_TEST=GS1.1.456; path=/';
    document.cookie = 'otra=1; path=/';
    analytics.disableAnalytics();
    expect(calls()).toContainEqual(['consent', 'update', { analytics_storage: 'denied' }]);
    expect(analytics.isAnalyticsEnabled()).toBe(false);
    expect((window as unknown as Record<string, unknown>)['ga-disable-G-TEST']).toBe(true);
    expect(document.cookie).not.toMatch(/_ga/);
    expect(document.cookie).toContain('otra=1');
    const before = calls().length;
    analytics.trackLead('telefono', 'hero');
    expect(calls()).toHaveLength(before);
  });
});

describe('bindLeadTracking', () => {
  it('mide los clics en enlaces de contacto y el envío del formulario', () => {
    analytics.initAnalytics('G-TEST');
    analytics.enableAnalytics('G-TEST');
    document.body.innerHTML = `<a href="tel:+34676882221" data-lead="telefono" data-lead-location="hero"><span>Llamar</span></a>`;
    leadTracking.bindLeadTracking(document);
    document.querySelector('span')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    document.dispatchEvent(new CustomEvent('rc:lead', { detail: { method: 'formulario', location: 'contacto' } }));
    expect(calls()).toContainEqual(['event', 'generate_lead', { lead_method: 'telefono', lead_location: 'hero' }]);
    expect(calls()).toContainEqual(['event', 'generate_lead', { lead_method: 'formulario', lead_location: 'contacto' }]);
  });
});
