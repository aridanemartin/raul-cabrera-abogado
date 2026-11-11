// Google Analytics 4 en modo de consentimiento básico: gtag.js no se descarga
// hasta que el visitante acepta. Los permisos publicitarios quedan siempre
// denegados y no se guarda ningún evento previo al consentimiento.
import { readConsent } from './consent';

export type LeadMethod = 'whatsapp' | 'telefono' | 'formulario';

type GtagWindow = {
  dataLayer?: IArguments[];
  gtag?: (...args: unknown[]) => void;
} & Record<`ga-disable-${string}`, boolean>;

const win = () => window as unknown as GtagWindow;

let defaultsSent = false;
let loadedId: string | null = null;
let enabled = false;

function gtag(...args: unknown[]): void {
  const w = win();
  if (!w.gtag) {
    w.dataLayer = w.dataLayer ?? [];
    // gtag.js necesita el objeto `arguments`, no un array.
    w.gtag = function () {
      w.dataLayer!.push(arguments);
    };
  }
  w.gtag(...args);
}

function sendDefaults(): void {
  if (defaultsSent) return;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  defaultsSent = true;
}

export function initAnalytics(gaId: string | undefined): void {
  if (!gaId) return;
  sendDefaults();
  if (readConsent()?.analytics) enableAnalytics(gaId);
}

export function enableAnalytics(gaId: string): void {
  sendDefaults();
  gtag('consent', 'update', { analytics_storage: 'granted' });
  win()[`ga-disable-${gaId}`] = false;
  if (loadedId !== gaId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(script);
    gtag('js', new Date());
    gtag('config', gaId);
    loadedId = gaId;
  }
  enabled = true;
}

function deleteGaCookies(): void {
  const host = location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^_ga(_|$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
}

export function disableAnalytics(): void {
  enabled = false;
  if (defaultsSent) gtag('consent', 'update', { analytics_storage: 'denied' });
  // Desactivación oficial de GA4: el script ya cargado deja de enviar datos.
  if (loadedId) win()[`ga-disable-${loadedId}`] = true;
  deleteGaCookies();
}

export function isAnalyticsEnabled(): boolean {
  return enabled;
}

export function trackLead(method: LeadMethod, location: string): void {
  if (!enabled) return;
  gtag('event', 'generate_lead', { lead_method: method, lead_location: location });
}
