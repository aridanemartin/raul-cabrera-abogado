// Elección de cookies del visitante. Todo acceso a localStorage va protegido:
// en modo privado o con el almacenamiento bloqueado, la web sigue funcionando
// y la elección se aplica solo a la visita actual.

export const CONSENT_KEY = 'rc-consent';

export type ConsentChoice = { analytics: boolean; ts: string; v: 1 };

const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export function readConsent(now: Date = new Date()): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<ConsentChoice> | null;
    if (!data || data.v !== 1 || typeof data.analytics !== 'boolean' || typeof data.ts !== 'string') return null;
    const age = now.getTime() - new Date(data.ts).getTime();
    if (Number.isNaN(age) || age > MAX_AGE_MS) return null;
    return { analytics: data.analytics, ts: data.ts, v: 1 };
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean, now: Date = new Date()): ConsentChoice {
  const choice: ConsentChoice = { analytics, ts: now.toISOString(), v: 1 };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
  } catch {
    // Sin almacenamiento: la elección vale para esta visita.
  }
  return choice;
}
