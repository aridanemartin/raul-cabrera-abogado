import { readConsent, writeConsent } from '../lib/consent';
import { disableAnalytics, enableAnalytics } from '../lib/analytics';

// Sin ID de Analytics no hay cookies que consentir, así que el banner no aparece.
export function bindConsentBanner(banner: HTMLElement, gaId: string | undefined): void {
  if (!gaId || readConsent()) {
    banner.hidden = true;
    return;
  }

  banner.hidden = false;

  banner.querySelector('[data-consent="accept"]')?.addEventListener('click', () => {
    writeConsent(true);
    banner.hidden = true;
    enableAnalytics(gaId);
  });

  banner.querySelector('[data-consent="reject"]')?.addEventListener('click', () => {
    writeConsent(false);
    banner.hidden = true;
    disableAnalytics();
  });
}
