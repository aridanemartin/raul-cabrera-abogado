import { buildContactMessage, buildWhatsAppUrl } from '../lib/whatsapp';

const FIELDS = ['nombre', 'asunto', 'urgencia'] as const;
type Field = (typeof FIELDS)[number];

const ERRORS: Record<Field, string> = {
  nombre: 'Escribe tu nombre.',
  asunto: 'Elige el tipo de asunto.',
  urgencia: 'Elige cómo de urgente es.',
};

type FormField = HTMLInputElement | HTMLSelectElement;

function showError(form: HTMLFormElement, field: FormField, name: Field, message: string): void {
  const error = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
  if (!error) return;
  if (message) {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', error.id);
    error.textContent = message;
    error.hidden = false;
  } else {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    error.textContent = '';
    error.hidden = true;
  }
}

export function bindContactForm(
  form: HTMLFormElement,
  navigate: (url: string) => void = (url) => window.location.assign(url),
): void {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = { nombre: '', asunto: '', urgencia: '' };
    let firstInvalid: FormField | null = null;

    for (const name of FIELDS) {
      const field = form.elements.namedItem(name) as FormField | null;
      if (!field) continue;
      values[name] = field.value.trim();
      showError(form, field, name, values[name] ? '' : ERRORS[name]);
      if (!values[name] && !firstInvalid) firstInvalid = field;
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const location = form.dataset.leadLocation ?? 'pagina';
    form.dispatchEvent(new CustomEvent('rc:lead', { bubbles: true, detail: { method: 'formulario', location } }));
    navigate(buildWhatsAppUrl(buildContactMessage(values)));
  });
}
