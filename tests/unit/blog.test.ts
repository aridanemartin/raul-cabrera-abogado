import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { isPublished } from '../../src/lib/blog';

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
