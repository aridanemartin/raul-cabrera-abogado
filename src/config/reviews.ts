// Reseñas públicas de Google. Se publican tal cual, con solo las iniciales del
// autor (inicial del nombre + inicial del primer apellido) para no exponer su
// nombre completo. No las seleccionamos ni las modificamos (TRLGDCU art. 20.4).
//
// Fuente: panel de reseñas de Google de «Raúl Cabrera Abogado», Las Palmas de
// Gran Canaria (10 reseñas, valoración 5,0). Solo se muestran las que tienen
// texto; el resto aparecen en el perfil de Google.
export interface GoogleReview {
  /** Iniciales del autor, p. ej. «A. M.». */
  initials: string;
  /** Valoración, de 1 a 5 estrellas. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Texto de la reseña. */
  text: string;
}

export const REVIEWS: GoogleReview[] = [
  {
    initials: 'A. M.',
    rating: 5,
    text: 'Cercanía, rigor y honestidad. Raúl Cabrera es un excelente profesional que entiende que el acompañamiento personal es tan importante como el asesoramiento jurídico. Destaco especialmente su trato humano, su claridad y la confianza que transmite durante todo el proceso. Sin duda, lo recomiendo. 👌🏻',
  },
  {
    initials: 'S. A.',
    rating: 5,
    text: 'Un abogado excepcional. Profesional, riguroso y siempre disponible, ha llevado mi caso con una dedicación y claridad impecable. Logrando un gran resultado. Totalmente recomendable para quien busque confianza y eficacia real.',
  },
  {
    initials: 'A. C.',
    rating: 5,
    text: 'Sin dudas un abogado excelente, capaz y muy profesional. Con una alta gama de conocimiento en su profesión. Desde mi experiencia puedo afirmarlo. Me representó en dos casos netamente distintos y los resultados muy satisfactorios. Muy agradecida con su trabajo, sin exagerar un ápice de nada.',
  },
  {
    initials: 'G. R.',
    rating: 5,
    text: 'Un abogado excelente, muy creativo y profesional, siempre atento y con mente abierta. Recomendamos.',
  },
  {
    initials: 'J. C.',
    rating: 5,
    text: 'El trabajo que yo le encomendé, le pedí que me representara judicialmente y así lo hizo. Muy bueno en su profesión, muy buen profesional y, como persona, muy humano y muy buena gente. Gracias.',
  },
  {
    initials: 'S. H.',
    rating: 5,
    text: 'Raúl es un abogado excelente. Muy buen servicio de un gran profesional, lo recomendamos 100 %.',
  },
  {
    initials: 'Y. O.',
    rating: 5,
    text: 'Excelente abogado.',
  },
];
