// Convención del blog (la usa el proyecto 2): un artículo es
// src/content/blog/<slug>.md. Se publica si no es borrador y su fecha ya ha llegado.

export const CLUSTERS = {
  detenido: 'Detenciones y comisaría',
  'juicio-rapido': 'Juicios rápidos',
  violencia: 'Violencia de género y doméstica',
  'delitos-leves': 'Lesiones, amenazas y delitos leves',
  sentencia: 'Sentencias, recursos y antecedentes',
  extranjeros: 'Personas extranjeras y derecho penal',
} as const;

export type Cluster = keyof typeof CLUSTERS;

// En el servidor de desarrollo (`showDrafts`) también se ven los borradores, para diseñar con ellos.
export function isPublished(
  entry: { data: { draft: boolean; datePublished: Date } },
  now: Date = new Date(),
  { showDrafts = false }: { showDrafts?: boolean } = {},
): boolean {
  return (showDrafts || !entry.data.draft) && entry.data.datePublished.getTime() <= now.getTime();
}

const WORDS_PER_MINUTE = 200;

/** Minutos de lectura del Markdown, sin contar las URLs de los enlaces de referencia. */
export function readingMinutes(body: string): number {
  const text = body.replace(/^\[[^\]]+\]:\s*\S+.*$/gm, '').replace(/\]\([^)]*\)/g, ']');
  const words = text.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

type Relatable = { id: string; data: { cluster: string; datePublished: Date } };

/** Otros artículos para «Sigue leyendo»: primero los del mismo tema; dentro de cada grupo, los más nuevos. */
export function relatedPosts<T extends Relatable>(current: T, all: T[], limit: number): T[] {
  const sameTopic = (post: T) => (post.data.cluster === current.data.cluster ? 0 : 1);
  return all
    .filter((post) => post.id !== current.id)
    .sort((a, b) => sameTopic(a) - sameTopic(b) || b.data.datePublished.getTime() - a.data.datePublished.getTime())
    .slice(0, limit);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    date,
  );
}
