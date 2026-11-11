import { WHATSAPP_NUMBER } from '../config/whatsapp';

export const DEFAULT_WHATSAPP_TEXT = 'Hola Raúl, te escribo desde tu web.';

export const ASUNTOS: readonly string[] = [
  'Detención o citación como investigado',
  'Juicio rápido, alcoholemia o tráfico',
  'Violencia de género o doméstica',
  'Lesiones, amenazas o delito leve',
  'Soy víctima y quiero personarme',
  'Recurso o antecedentes penales',
  'Otro asunto',
];

export const URGENCIAS: readonly string[] = ['Es urgente (hoy o mañana)', 'Esta semana', 'Solo quiero informarme'];

const MAX_NAME_LENGTH = 80;

const clean = (value: string) => value.replace(/\s+/g, ' ').trim();

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildContactMessage(input: { nombre: string; asunto: string; urgencia: string }): string {
  // Se recorta por caracteres completos para no partir un emoji por la mitad,
  // que haría fallar a encodeURIComponent.
  const nombre = Array.from(clean(input.nombre)).slice(0, MAX_NAME_LENGTH).join('').trim();
  return `Hola Raúl, soy ${nombre}. Te escribo desde tu web por un asunto de: ${clean(input.asunto)}. Urgencia: ${clean(input.urgencia)}.`;
}
