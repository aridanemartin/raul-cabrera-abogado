import { describe, expect, it } from 'vitest';
import { buildArticle, buildBreadcrumbs, buildSiteGraph } from '../../src/lib/seo';

type Node = Record<string, any>;

const graph = buildSiteGraph() as { '@context': string; '@graph': Node[] };
const byType = (type: string) => graph['@graph'].find((node) => node['@type'] === type)!;

describe('buildSiteGraph', () => {
  it('describe a Raúl con su colegiación', () => {
    const person = byType('Person');
    expect(person['@id']).toBe('https://raulcabreraabogado.com/#raul');
    expect(person.name).toBe('Raúl Cabrera Santana');
    expect(person.jobTitle).toBe('Abogado');
    expect(person.identifier).toEqual({
      '@type': 'PropertyValue',
      propertyID: 'Número de colegiado (ICALPA)',
      value: '6555',
    });
    expect(person.memberOf.name).toBe('Ilustre Colegio de la Abogacía de Las Palmas');
  });

  it('describe el despacho con dirección, teléfono y ámbito', () => {
    const office = byType('LegalService');
    expect(office['@id']).toBe('https://raulcabreraabogado.com/#despacho');
    expect(office.address.postalCode).toBe('35003');
    expect(office.telephone).toBe('+34676882221');
    expect(office.areaServed.name).toBe('Canarias');
    expect(office.founder).toEqual({ '@id': 'https://raulcabreraabogado.com/#raul' });
    expect(office.employee).toEqual({ '@id': 'https://raulcabreraabogado.com/#raul' });
  });

  it('lleva la foto de Raúl en la persona y en el despacho', () => {
    const image = 'https://raulcabreraabogado.com/og-raul-cabrera.jpg';
    expect(byType('Person').image).toBe(image);
    expect(byType('LegalService').image).toBe(image);
  });

  it('no publica enlaces vacíos ni valoraciones propias', () => {
    const json = JSON.stringify(graph);
    for (const node of graph['@graph']) {
      if (node.sameAs) expect(node.sameAs).not.toContain(null);
    }
    expect(json).not.toContain('aggregateRating');
    expect(json).not.toContain('null');
  });
});

describe('buildBreadcrumbs', () => {
  it('numera las migas y usa URLs absolutas con barra final', () => {
    const list = buildBreadcrumbs([
      { name: 'Inicio', path: '/' },
      { name: 'Servicios', path: '/servicios' },
      { name: 'Alcoholemia', path: '/servicios/alcoholemia-delitos-trafico/' },
    ]) as Node;
    expect(list['@type']).toBe('BreadcrumbList');
    expect(list.itemListElement.map((item: Node) => item.position)).toEqual([1, 2, 3]);
    expect(list.itemListElement.map((item: Node) => item.item)).toEqual([
      'https://raulcabreraabogado.com/',
      'https://raulcabreraabogado.com/servicios/',
      'https://raulcabreraabogado.com/servicios/alcoholemia-delitos-trafico/',
    ]);
  });
});

describe('buildArticle', () => {
  it('firma el artículo como Raúl con fechas ISO', () => {
    const article = buildArticle({
      title: 'Qué hacer si te detienen',
      description: 'Guía práctica.',
      path: '/blog/que-hacer-si-te-detienen/',
      datePublished: new Date('2026-11-01T00:00:00Z'),
    }) as Node;
    expect(article['@type']).toBe('Article');
    expect(article.headline).toBe('Qué hacer si te detienen');
    expect(article.url).toBe('https://raulcabreraabogado.com/blog/que-hacer-si-te-detienen/');
    expect(article.datePublished).toBe('2026-11-01T00:00:00.000Z');
    expect(article.dateModified).toBe('2026-11-01T00:00:00.000Z');
    expect(article.author['@id']).toBe('https://raulcabreraabogado.com/#raul');
  });
});
