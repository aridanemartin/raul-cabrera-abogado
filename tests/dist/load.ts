import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { parse, type HTMLElement } from 'node-html-parser';

export const DIST = join(process.cwd(), 'dist');

export interface Page {
  /** Ruta pública con barra final, p. ej. `/servicios/` o `/404/`. */
  path: string;
  html: string;
  root: HTMLElement;
}

export async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : Promise.resolve([full]);
    }),
  );
  return files.flat();
}

function toPath(file: string): string {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  return '/' + rel.replace(/index\.html$/, '');
}

export async function loadPages(): Promise<Page[]> {
  const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
  return Promise.all(
    files.map(async (file) => {
      const html = await readFile(file, 'utf8');
      return { path: toPath(file), html, root: parse(html) };
    }),
  );
}
