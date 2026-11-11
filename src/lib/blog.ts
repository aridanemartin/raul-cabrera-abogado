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

export function isPublished(entry: { data: { draft: boolean; datePublished: Date } }, now: Date = new Date()): boolean {
  return !entry.data.draft && entry.data.datePublished.getTime() <= now.getTime();
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    date,
  );
}
