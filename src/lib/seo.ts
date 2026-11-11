// Datos estructurados (JSON-LD). Sin aggregateRating: las reseñas solo se
// muestran como texto con enlace al perfil de Google (TRLGDCU art. 20.4).
import { SITE } from '../config/site';

const PERSON_ID = `${SITE.url}/#raul`;
const OFFICE_ID = `${SITE.url}/#despacho`;

export function absoluteUrl(path: string): string {
  const href = new URL(path, SITE.url).href;
  return href.endsWith('/') ? href : `${href}/`;
}

export function buildSiteGraph(): Record<string, unknown> {
  const officeSameAs = [SITE.google.profileUrl].filter((url): url is string => Boolean(url));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': OFFICE_ID,
        name: SITE.name,
        url: absoluteUrl('/'),
        telephone: SITE.phone.e164,
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        areaServed: { '@type': 'AdministrativeArea', name: 'Canarias' },
        knowsLanguage: 'es',
        founder: { '@id': PERSON_ID },
        employee: { '@id': PERSON_ID },
        ...(officeSameAs.length ? { sameAs: officeSameAs } : {}),
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.lawyer.fullName,
        jobTitle: 'Abogado',
        url: absoluteUrl('/sobre-raul/'),
        identifier: {
          '@type': 'PropertyValue',
          propertyID: `Número de colegiado (${SITE.lawyer.colegioShort})`,
          value: SITE.lawyer.colegiado,
        },
        memberOf: {
          '@type': 'Organization',
          name: SITE.lawyer.colegio,
          alternateName: SITE.lawyer.colegioShort,
        },
        worksFor: { '@id': OFFICE_ID },
        knowsAbout: ['Derecho penal', 'Asistencia al detenido', 'Juicios rápidos', 'Delitos contra la seguridad vial'],
        sameAs: SITE.sameAs,
      },
    ],
  };
}

export function buildBreadcrumbs(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildArticle(input: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
}): Record<string, unknown> {
  const url = absoluteUrl(input.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'es',
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    author: { '@type': 'Person', '@id': PERSON_ID, name: SITE.lawyer.fullName, url: absoluteUrl('/sobre-raul/') },
    publisher: { '@id': OFFICE_ID },
  };
}
