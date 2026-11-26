// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest';
import { bindBlogFilter } from '../../src/scripts/blog-filter';

let root: HTMLElement;
const chip = (topic: string) => root.querySelector<HTMLButtonElement>(`[data-filter="${topic}"]`)!;
const visible = () =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-cluster]'))
    .filter((card) => !card.hidden)
    .map((card) => card.id);

beforeEach(() => {
  document.body.innerHTML = `
    <div data-blog-filter>
      <div role="group">
        <button type="button" data-filter="todos" aria-pressed="true">Todos</button>
        <button type="button" data-filter="detenido" aria-pressed="false">Detenciones</button>
        <button type="button" data-filter="violencia" aria-pressed="false">Violencia</button>
      </div>
      <p data-filter-status></p>
      <ul>
        <li id="a" data-cluster="detenido"></li>
        <li id="b" data-cluster="violencia"></li>
        <li id="c" data-cluster="detenido"></li>
      </ul>
    </div>`;
  root = document.querySelector('[data-blog-filter]')!;
  bindBlogFilter(root);
});

describe('bindBlogFilter', () => {
  it('al pulsar un tema deja solo sus artículos y marca el botón', () => {
    chip('detenido').click();
    expect(visible()).toEqual(['a', 'c']);
    expect(chip('detenido').getAttribute('aria-pressed')).toBe('true');
    expect(chip('todos').getAttribute('aria-pressed')).toBe('false');
  });

  it('«Todos» vuelve a mostrarlos todos', () => {
    chip('violencia').click();
    chip('todos').click();
    expect(visible()).toEqual(['a', 'b', 'c']);
  });

  it('anuncia cuántos artículos quedan', () => {
    chip('violencia').click();
    expect(root.querySelector('[data-filter-status]')!.textContent).toBe('1 artículo');
    chip('todos').click();
    expect(root.querySelector('[data-filter-status]')!.textContent).toBe('3 artículos');
  });
});
