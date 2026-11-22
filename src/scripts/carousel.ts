// Carrusel de reseñas: las flechas mueven la fila una tarjeta y el contador dice cuáles se ven.
// Sin JavaScript la fila se sigue pudiendo deslizar; solo faltan las flechas y el contador.
export function bindCarousel(
  root: HTMLElement,
  reduceMotion: MediaQueryList = matchMedia('(prefers-reduced-motion: reduce)'),
): void {
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const count = root.querySelector<HTMLElement>('[data-carousel-count]');
  const items = track ? Array.from(track.children) as HTMLElement[] : [];
  if (!track || !prev || !next || !count || items.length === 0) return;

  // Lo que avanza la fila de una tarjeta a la siguiente: su ancho más el hueco.
  const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth);

  const update = () => {
    const distance = step();
    if (distance <= 0) return;
    const gap = distance - items[0].offsetWidth;
    const first = Math.min(Math.round(track.scrollLeft / distance), items.length - 1);
    const visible = Math.max(1, Math.round((track.clientWidth + gap) / distance));
    const last = Math.min(first + visible, items.length);
    count.textContent = `${visible > 1 ? `${first + 1}–${last}` : first + 1} de ${items.length}`;
    // Un par de píxeles de margen: el ajuste del desplazamiento no siempre cae en el píxel exacto.
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  };

  const move = (direction: 1 | -1) =>
    track.scrollBy({ left: direction * step(), behavior: reduceMotion.matches ? 'auto' : 'smooth' });

  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, { passive: true });
  root.ownerDocument.defaultView?.addEventListener('resize', update);
  update();
}
