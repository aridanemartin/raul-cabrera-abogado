import { trackLead } from '../lib/analytics';

// Cuenta como contacto cada toque en un enlace con `data-lead` y cada envío
// válido del formulario (evento `rc:lead`). Si no hay consentimiento,
// trackLead no envía nada.
export function bindLeadTracking(doc: Document): void {
  doc.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('a[data-lead]');
    if (!link) return;
    const method = link.getAttribute('data-lead');
    if (method !== 'whatsapp' && method !== 'telefono') return;
    trackLead(method, link.getAttribute('data-lead-location') ?? 'pagina');
  });

  doc.addEventListener('rc:lead', (event) => {
    const detail = (event as CustomEvent<{ method?: string; location?: string }>).detail;
    if (detail?.method !== 'formulario') return;
    trackLead('formulario', detail.location ?? 'pagina');
  });
}
