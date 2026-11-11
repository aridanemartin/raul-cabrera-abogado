// Única fuente de verdad de la identidad del despacho. Cualquier dato de Raúl
// (nombre, colegiación, dirección, teléfono) se lee de aquí, nunca se reescribe.

export interface NavItem {
  label: string;
  href: string;
}

export const SITE = {
  url: 'https://raulcabreraabogado.com',
  name: 'Raúl Cabrera Abogado',
  lawyer: {
    fullName: 'Raúl Cabrera Santana',
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
  whatsapp: '34676882221',
  email: 'info@raulcabreraabogado.com',
  google: {
    rating: '5,0',
    reviews: 10,
    // Se rellena cuando Raúl confirme que el perfil de Google está a su nombre.
    profileUrl: null as string | null,
  },
  sameAs: ['https://www.elabogado.com/abogados/raul-cabrera-santana/'] as string[],
  nav: [
    { label: 'Servicios', href: '/servicios/' },
    { label: '¿Te han detenido?', href: '/te-han-detenido/' },
    { label: 'Sobre Raúl', href: '/sobre-raul/' },
    { label: 'Cómo trabajo', href: '/como-trabajo/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contacto', href: '/contacto/' },
  ] as NavItem[],
} as const;

export const FOOTER_IDENTITY = `${SITE.lawyer.fullName} · Abogado · Colegiado nº ${SITE.lawyer.colegiado} del ${SITE.lawyer.colegio}`;

export const FULL_ADDRESS = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.locality}`;
