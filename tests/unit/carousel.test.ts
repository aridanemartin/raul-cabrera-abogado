// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { bindCarousel } from '../../src/scripts/carousel';

// happy-dom no calcula el diseño: se fija a mano el tamaño de la fila y de cada tarjeta.
const CARD = 350;
const GAP = 20;

let root: HTMLElement;
let track: HTMLElement;
let prev: HTMLButtonElement;
let next: HTMLButtonElement;
let count: HTMLElement;
let reduceMotion: { matches: boolean };

function layout(trackWidth: number, scrollLeft: number) {
  const items = Array.from(track.children) as HTMLElement[];
  items.forEach((item, index) => {
    Object.defineProperty(item, 'offsetLeft', { configurable: true, value: index * (CARD + GAP) });
    Object.defineProperty(item, 'offsetWidth', { configurable: true, value: CARD });
  });
  Object.defineProperty(track, 'clientWidth', { configurable: true, value: trackWidth });
  Object.defineProperty(track, 'scrollWidth', { configurable: true, value: items.length * CARD + (items.length - 1) * GAP });
  track.scrollLeft = scrollLeft;
}

beforeEach(() => {
  document.body.innerHTML = `
    <section data-carousel>
      <ul data-carousel-track>${'<li></li>'.repeat(7)}</ul>
      <p data-carousel-count></p>
      <button type="button" data-carousel-prev>Anterior</button>
      <button type="button" data-carousel-next>Siguiente</button>
    </section>`;
  root = document.querySelector('section')!;
  track = root.querySelector('ul')!;
  prev = root.querySelector('[data-carousel-prev]')!;
  next = root.querySelector('[data-carousel-next]')!;
  count = root.querySelector('p')!;
  reduceMotion = { matches: false };
});

describe('bindCarousel', () => {
  it('al empezar cuenta las tarjetas que se ven y no deja ir hacia atrás', () => {
    layout(720, 0);
    bindCarousel(root, reduceMotion as MediaQueryList);
    expect(count.textContent).toBe('1–2 de 7');
    expect(prev.disabled).toBe(true);
    expect(next.disabled).toBe(false);
  });

  it('con una sola tarjeta a la vista, el contador da solo su número', () => {
    layout(375, 0);
    bindCarousel(root, reduceMotion as MediaQueryList);
    expect(count.textContent).toBe('1 de 7');
  });

  it('al llegar al final no deja seguir', () => {
    layout(720, 7 * CARD + 6 * GAP - 720);
    bindCarousel(root, reduceMotion as MediaQueryList);
    expect(count.textContent).toBe('6–7 de 7');
    expect(prev.disabled).toBe(false);
    expect(next.disabled).toBe(true);
  });

  it('las flechas mueven la fila una tarjeta, sin animar si se pide menos movimiento', () => {
    layout(720, CARD + GAP);
    track.scrollBy = vi.fn();
    reduceMotion.matches = true;
    bindCarousel(root, reduceMotion as MediaQueryList);
    next.click();
    expect(track.scrollBy).toHaveBeenLastCalledWith({ left: CARD + GAP, behavior: 'auto' });
    prev.click();
    expect(track.scrollBy).toHaveBeenLastCalledWith({ left: -(CARD + GAP), behavior: 'auto' });
  });

  it('el contador se actualiza al deslizar', () => {
    layout(720, 0);
    bindCarousel(root, reduceMotion as MediaQueryList);
    track.scrollLeft = 2 * (CARD + GAP);
    track.dispatchEvent(new Event('scroll'));
    expect(count.textContent).toBe('3–4 de 7');
  });
});
