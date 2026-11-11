import { readConsent, writeConsent } from '../lib/consent';
import { disableAnalytics, enableAnalytics } from '../lib/analytics';

// Controles de la página de cookies: muestran la elección actual y dejan cambiarla.
export function bindCookieSettings(root: HTMLElement, gaId: string | undefined): void {
  const status = root.querySelector<HTMLElement>('[data-cookie-status]');
  const controls = root.querySelector<HTMLElement>('[data-cookie-controls]');
  const banner = document.querySelector<HTMLElement>('[data-consent-banner]');

  // Se guarda aquí además de en localStorage para que el estado sea correcto
  // aunque el almacenamiento esté bloqueado.
  let choice: boolean | null = readConsent()?.analytics ?? null;

  const render = () => {
    if (!status) return;
    if (!gaId) {
      status.textContent =
        'Google Analytics no está activado en esta web, así que no se instala ninguna cookie de análisis.';
    } else if (choice === null) {
      status.textContent = 'Todavía no has elegido. Mientras no aceptes, Google Analytics no se activa.';
    } else {
      status.textContent = choice
        ? 'Has aceptado las cookies de análisis.'
        : 'Has rechazado las cookies de análisis. Google Analytics no se activa.';
    }
  };

  if (controls) controls.hidden = !gaId;
  render();
  if (!gaId) return;

  root.querySelector('[data-cookie-choice="accept"]')?.addEventListener('click', () => {
    writeConsent(true);
    enableAnalytics(gaId);
    choice = true;
    if (banner) banner.hidden = true;
    render();
  });

  root.querySelector('[data-cookie-choice="reject"]')?.addEventListener('click', () => {
    writeConsent(false);
    disableAnalytics();
    choice = false;
    if (banner) banner.hidden = true;
    render();
  });

  // Si eligen en el banner estando en esta página, el estado se actualiza.
  banner?.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLElement>('[data-consent]');
    if (!button) return;
    choice = button.dataset.consent === 'accept';
    render();
  });
}
