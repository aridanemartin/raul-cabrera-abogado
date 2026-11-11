// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { bindContactForm } from '../../src/scripts/contact-form';
import { ASUNTOS, URGENCIAS, buildContactMessage, buildWhatsAppUrl } from '../../src/lib/whatsapp';

function renderForm(): HTMLFormElement {
  document.body.innerHTML = `
    <form data-contact-form data-lead-location="contacto" novalidate>
      <label for="cf-nombre">Tu nombre</label>
      <input id="cf-nombre" name="nombre" type="text" />
      <p id="cf-nombre-error" data-error-for="nombre" hidden></p>
      <label for="cf-asunto">Tipo de asunto</label>
      <select id="cf-asunto" name="asunto">
        <option value="">Elige una opción</option>
        ${ASUNTOS.map((a) => `<option>${a}</option>`).join('')}
      </select>
      <p id="cf-asunto-error" data-error-for="asunto" hidden></p>
      <label for="cf-urgencia">Urgencia</label>
      <select id="cf-urgencia" name="urgencia">
        <option value="">Elige una opción</option>
        ${URGENCIAS.map((u) => `<option>${u}</option>`).join('')}
      </select>
      <p id="cf-urgencia-error" data-error-for="urgencia" hidden></p>
      <button type="submit">Enviar por WhatsApp</button>
    </form>`;
  return document.querySelector('form')!;
}

function fill(form: HTMLFormElement, values: { nombre: string; asunto: string; urgencia: string }) {
  (form.elements.namedItem('nombre') as HTMLInputElement).value = values.nombre;
  (form.elements.namedItem('asunto') as HTMLSelectElement).value = values.asunto;
  (form.elements.namedItem('urgencia') as HTMLSelectElement).value = values.urgencia;
}

const valid = { nombre: 'Ana López', asunto: ASUNTOS[1], urgencia: URGENCIAS[0] };

describe('bindContactForm', () => {
  let form: HTMLFormElement;

  beforeEach(() => {
    localStorage.clear();
    form = renderForm();
  });

  it('con los tres campos rellenos abre WhatsApp con el mensaje', () => {
    const navigate = vi.fn();
    bindContactForm(form, navigate);
    fill(form, valid);
    form.requestSubmit();
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(buildWhatsAppUrl(buildContactMessage(valid)));
  });

  it('un envío válido despacha un único rc:lead antes de navegar', () => {
    const order: string[] = [];
    const leads: CustomEvent[] = [];
    document.addEventListener('rc:lead', (event) => {
      order.push('lead');
      leads.push(event as CustomEvent);
    });
    bindContactForm(form, () => order.push('navigate'));
    fill(form, valid);
    form.requestSubmit();
    expect(leads).toHaveLength(1);
    expect(leads[0].detail).toEqual({ method: 'formulario', location: 'contacto' });
    expect(order).toEqual(['lead', 'navigate']);
  });

  it('con el nombre vacío no navega y marca el error junto al campo', () => {
    const navigate = vi.fn();
    const lead = vi.fn();
    document.addEventListener('rc:lead', lead);
    bindContactForm(form, navigate);
    fill(form, { ...valid, nombre: '   ' });
    form.requestSubmit();
    expect(navigate).not.toHaveBeenCalled();
    expect(lead).not.toHaveBeenCalled();
    const input = form.querySelector<HTMLInputElement>('#cf-nombre')!;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    const describedBy = input.getAttribute('aria-describedby')!;
    const error = document.getElementById(describedBy)!;
    expect(error.hidden).toBe(false);
    expect(error.textContent!.length).toBeGreaterThan(0);
  });

  it('funciona sin consentimiento de cookies ni Analytics', () => {
    const navigate = vi.fn();
    expect(localStorage.getItem('rc-consent')).toBeNull();
    expect((window as unknown as { dataLayer?: unknown }).dataLayer).toBeUndefined();
    bindContactForm(form, navigate);
    fill(form, valid);
    form.requestSubmit();
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
