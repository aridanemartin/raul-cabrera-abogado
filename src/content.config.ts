import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const title = z.string().max(65);
const description = z.string().min(70).max(160);

const servicios = defineCollection({
  loader: glob({ base: './src/content/servicios', pattern: '**/*.md' }),
  schema: z.object({
    title,
    description,
    h1: z.string(),
    cardTitle: z.string(),
    summary: z.string(),
    // Una línea corta para el índice de la portada.
    cardHook: z.string().max(80),
    order: z.number(),
    legalRefs: z
      .array(z.object({ label: z.string(), url: z.string().startsWith('https://www.boe.es/') }))
      .min(1),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).min(3).max(5),
  }),
});

// Un artículo = src/content/blog/<slug>.md. Con `draft: true` no se publica.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title,
    description,
    h1: z.string(),
    lead: z.string().optional(),
    // Para artículos urgentes: tarjeta de WhatsApp arriba del todo, con este título.
    urgencyTitle: z.string().optional(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    cluster: z.enum(['detenido', 'juicio-rapido', 'violencia', 'delitos-leves', 'sentencia', 'extranjeros']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, blog };
