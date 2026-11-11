// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CONSENT_KEY, readConsent, writeConsent } from '../../src/lib/consent';

const DAY = 24 * 60 * 60 * 1000;

describe('consentimiento', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it('sin dato devuelve null', () => {
    expect(readConsent()).toBeNull();
  });

  it('con JSON corrupto devuelve null', () => {
    localStorage.setItem(CONSENT_KEY, '{no es json');
    expect(readConsent()).toBeNull();
  });

  it('una elección de hace más de 365 días caduca', () => {
    const then = new Date('2025-01-01T10:00:00Z');
    writeConsent(true, then);
    expect(readConsent(new Date(then.getTime() + 364 * DAY))).not.toBeNull();
    expect(readConsent(new Date(then.getTime() + 366 * DAY))).toBeNull();
  });

  it('guarda y lee la elección', () => {
    writeConsent(true);
    expect(readConsent()).toMatchObject({ analytics: true, v: 1 });
    writeConsent(false);
    expect(readConsent()).toMatchObject({ analytics: false, v: 1 });
  });

  it('si localStorage lanza, nada se rompe', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('bloqueado');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('bloqueado');
    });
    expect(() => readConsent()).not.toThrow();
    expect(readConsent()).toBeNull();
    expect(writeConsent(true)).toMatchObject({ analytics: true, v: 1 });
  });
});
