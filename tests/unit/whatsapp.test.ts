import { describe, expect, it } from 'vitest';
import { ASUNTOS, URGENCIAS, buildContactMessage, buildWhatsAppUrl } from '../../src/lib/whatsapp';

const PREFIX = 'https://wa.me/34676882221?text=';

describe('buildWhatsAppUrl', () => {
  it('codifica tildes, símbolos y emojis sin perder nada', () => {
    const text = 'Hola & adiós? #1 😀';
    const url = buildWhatsAppUrl(text);
    expect(url.startsWith(PREFIX)).toBe(true);
    expect(decodeURIComponent(url.slice(PREFIX.length))).toBe(text);
    expect(() => new URL(url)).not.toThrow();
  });
});

describe('buildContactMessage', () => {
  it('usa la plantilla exacta y limpia espacios del nombre', () => {
    expect(
      buildContactMessage({
        nombre: '  Ana  López ',
        asunto: 'Juicio rápido, alcoholemia o tráfico',
        urgencia: 'Es urgente (hoy o mañana)',
      }),
    ).toBe(
      'Hola Raúl, soy Ana López. Te escribo desde tu web por un asunto de: Juicio rápido, alcoholemia o tráfico. Urgencia: Es urgente (hoy o mañana).',
    );
  });

  it('recorta un nombre de 200 caracteres a 80', () => {
    const message = buildContactMessage({ nombre: 'a'.repeat(200), asunto: ASUNTOS[0], urgencia: URGENCIAS[0] });
    expect(message).toContain(`soy ${'a'.repeat(80)}.`);
    expect(message).not.toContain('a'.repeat(81));
  });

  it('no parte un emoji que cae justo en el límite del nombre', () => {
    const message = buildContactMessage({ nombre: `${'a'.repeat(79)}😀😀`, asunto: ASUNTOS[0], urgencia: URGENCIAS[0] });
    expect(message).toContain(`soy ${'a'.repeat(79)}😀.`);
    expect(() => buildWhatsAppUrl(message)).not.toThrow();
  });
});
