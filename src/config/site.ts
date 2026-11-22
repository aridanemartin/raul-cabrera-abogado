// Única fuente de verdad de la identidad del despacho. Cualquier dato de Raúl
// (nombre, colegiación, dirección, teléfono) se lee de aquí, nunca se reescribe.

import { WHATSAPP_NUMBER } from './whatsapp';

export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  url: 'https://raulcabreraabogado.com',
  name: 'Raúl Cabrera Abogado',
  lawyer: {
    fullName: 'Raúl Cabrera Santana',
    nif: '54092607B',
    // Pendiente de que Raúl confirme si es Licenciado o Graduado y la universidad.
    degree: 'Graduado en Derecho',
    colegiado: '6555',
    colegio: 'Ilustre Colegio de la Abogacía de Las Palmas',
    colegioShort: 'ICALPA',
    since: 2018,
    sinceDate: '2018-05-16',
  },
  address: {
    street: 'C/ Carmen Llopis 7, 4º',
    postalCode: '35003',
    locality: 'Las Palmas de Gran Canaria',
    region: 'Las Palmas',
    country: 'ES',
  },
  phone: {
    display: '676 88 22 21',
    e164: '+34676882221',
  },
  whatsapp: WHATSAPP_NUMBER,
  email: 'info@raulcabreraabogado.com',
  google: {
    rating: '5,0',
    reviews: 10,
    // Se rellena cuando Raúl confirme que el perfil de Google está a su nombre.
    profileUrl: null as string | null,
  },
  sameAs: ['https://www.elabogado.com/abogados/raul-cabrera-santana/'] as string[],
  // Foto de Raúl para compartir enlaces y para los datos estructurados (en public/).
  ogImage: {
    path: '/og-raul-cabrera.jpg',
    width: 1200,
    height: 630,
    alt: 'Raúl Cabrera Santana, abogado penalista, en su despacho de Las Palmas de Gran Canaria',
  },
  nav: [
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Sobre Raúl', href: '/sobre-raul/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contacto', href: '/contacto/' },
  ] as NavItem[],
} as const;

export const FOOTER_IDENTITY = `${SITE.lawyer.fullName} · Abogado · Colegiado nº ${SITE.lawyer.colegiado} del ${SITE.lawyer.colegio}`;

export const FULL_ADDRESS = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.locality}`;
