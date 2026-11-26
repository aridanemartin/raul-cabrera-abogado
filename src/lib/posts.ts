// Lectura de artículos para las páginas (usa astro:content; la lógica pura está en blog.ts).
import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import defaultCover from '../assets/blog-portada-por-defecto.webp';
import { isPublished } from './blog';

export type Post = CollectionEntry<'blog'>;

/** Artículos publicados, del más nuevo al más viejo. En `astro dev` incluye los borradores. */
export async function getPublishedPosts(): Promise<Post[]> {
  return (await getCollection('blog'))
    .filter((post) => isPublished(post, new Date(), { showDrafts: import.meta.env.DEV }))
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime());
}

/** Portada del artículo; sin imagen propia, la portada por defecto (scripts/blog-portada-por-defecto.mjs). */
export function coverOf(post: Post): { src: ImageMetadata; alt: string; isDefault: boolean } {
  if (post.data.image) return { src: post.data.image, alt: post.data.imageAlt ?? '', isDefault: false };
  return { src: defaultCover, alt: 'Raúl Cabrera, abogado penalista', isDefault: true };
}
