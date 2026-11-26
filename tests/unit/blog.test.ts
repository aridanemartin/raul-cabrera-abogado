import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { isPublished, readingMinutes, relatedPosts } from '../../src/lib/blog';

function fixtureEntry() {
  const raw = readFileSync('tests/fixtures/blog/ejemplo.md', 'utf8');
  const frontmatter = raw.split('---')[1];
  const field = (key: string) => frontmatter.match(new RegExp(`^${key}: (.+)$`, 'm'))![1].trim();
  return {
    data: {
      datePublished: new Date(field('datePublished')),
      draft: field('draft') === 'true',
    },
  };
}

const NOW = new Date('2026-11-11T12:00:00Z');

describe('isPublished', () => {
  it('publica el artículo de ejemplo', () => {
    expect(isPublished(fixtureEntry(), NOW)).toBe(true);
  });

  it('no publica borradores', () => {
    const entry = fixtureEntry();
    entry.data.draft = true;
    expect(isPublished(entry, NOW)).toBe(false);
  });

  it('no publica artículos con fecha futura', () => {
    const entry = fixtureEntry();
    entry.data.datePublished = new Date('2026-12-01');
    expect(isPublished(entry, NOW)).toBe(false);
  });
});

describe('isPublished con borradores visibles (servidor de desarrollo)', () => {
  it('muestra borradores si se pide', () => {
    const entry = fixtureEntry();
    entry.data.draft = true;
    expect(isPublished(entry, NOW, { showDrafts: true })).toBe(true);
  });

  it('sigue ocultando artículos con fecha futura', () => {
    const entry = fixtureEntry();
    entry.data.datePublished = new Date('2026-12-01');
    expect(isPublished(entry, NOW, { showDrafts: true })).toBe(false);
  });
});

describe('readingMinutes', () => {
  it('cuenta unas 200 palabras por minuto, como mínimo 1', () => {
    expect(readingMinutes('')).toBe(1);
    expect(readingMinutes('palabra '.repeat(150))).toBe(1);
    expect(readingMinutes('palabra '.repeat(900))).toBe(5);
  });

  it('no cuenta las URLs de los enlaces de referencia', () => {
    const body = 'texto '.repeat(200) + '\n[ref]: https://www.boe.es/una/url/muy/larga';
    expect(readingMinutes(body)).toBe(1);
  });
});

describe('relatedPosts', () => {
  const post = (id: string, cluster: string, date: string) => ({ id, data: { cluster, datePublished: new Date(date) } });
  const current = post('actual', 'detenido', '2026-11-10');
  const all = [
    current,
    post('otro-tema-reciente', 'violencia', '2026-11-09'),
    post('mismo-tema-viejo', 'detenido', '2026-10-01'),
    post('mismo-tema-nuevo', 'detenido', '2026-11-01'),
    post('otro-tema-viejo', 'sentencia', '2026-09-01'),
  ];

  it('excluye el artículo actual y pone primero los del mismo tema, del más nuevo al más viejo', () => {
    expect(relatedPosts(current, all, 3).map((p) => p.id)).toEqual([
      'mismo-tema-nuevo',
      'mismo-tema-viejo',
      'otro-tema-reciente',
    ]);
  });

  it('devuelve una lista vacía si no hay otros artículos', () => {
    expect(relatedPosts(current, [current], 3)).toEqual([]);
  });
});
