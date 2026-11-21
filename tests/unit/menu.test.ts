// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest';
import { bindMenu } from '../../src/scripts/menu';

interface FakeQuery {
  matches: boolean;
  listener?: (event: { matches: boolean }) => void;
  addEventListener(type: 'change', listener: (event: { matches: boolean }) => void): void;
}

let header: HTMLElement;
let button: HTMLButtonElement;
let nav: HTMLElement;
let desktop: FakeQuery;

const isOpen = () => button.getAttribute('aria-expanded') === 'true';
const blocked = () =>
  ['main', 'footer', '[data-contact-bar]'].map((selector) => document.querySelector<HTMLElement>(selector)!.inert);

beforeEach(() => {
  document.documentElement.className = '';
  document.body.innerHTML = `
    <header class="site-header">
      <a href="/">Raúl Cabrera</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" hidden>Menú</button>
      <nav id="site-nav"><ul><li><a href="/servicios/">Servicios</a></li></ul></nav>
    </header>
    <main></main>
    <footer></footer>
    <div data-contact-bar></div>`;
  header = document.querySelector('header')!;
  button = header.querySelector('button')!;
  nav = header.querySelector('nav')!;
  desktop = {
    matches: false,
    addEventListener(_type, listener) {
      this.listener = listener;
    },
  };
  bindMenu(header, desktop as unknown as MediaQueryList);
});

describe('bindMenu', () => {
  it('muestra el botón y deja el menú plegado', () => {
    expect(button.hidden).toBe(false);
    expect(isOpen()).toBe(false);
    expect(nav.hasAttribute('data-collapsible')).toBe(true);
  });

  it('al pulsar abre el menú a pantalla completa y bloquea el resto de la página', () => {
    button.click();
    expect(isOpen()).toBe(true);
    expect(header.hasAttribute('data-menu-open')).toBe(true);
    expect(document.documentElement.classList.contains('menu-open')).toBe(true);
    expect(blocked()).toEqual([true, true, true]);
  });

  it('el círculo de la animación sale del botón, esté donde esté', () => {
    button.getBoundingClientRect = () => ({ left: 330, top: 12, width: 48, height: 48 }) as DOMRect;
    button.click();
    expect(nav.style.getPropertyValue('--menu-x')).toBe('354px');
    expect(nav.style.getPropertyValue('--menu-y')).toBe('36px');
  });

  it('al volver a pulsar lo cierra y devuelve la página', () => {
    button.click();
    button.click();
    expect(isOpen()).toBe(false);
    expect(header.hasAttribute('data-menu-open')).toBe(false);
    expect(document.documentElement.classList.contains('menu-open')).toBe(false);
    expect(blocked()).toEqual([false, false, false]);
  });

  it('Escape lo cierra y devuelve el foco al botón', () => {
    button.click();
    nav.querySelector('a')!.focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(isOpen()).toBe(false);
    expect(document.activeElement).toBe(button);
  });

  it('elegir un enlace cierra el menú', () => {
    button.click();
    document.addEventListener('click', (event) => event.preventDefault(), { once: true });
    nav.querySelector('a')!.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(isOpen()).toBe(false);
  });

  it('se cierra al pasar a pantalla de ordenador, donde no hay menú desplegable', () => {
    button.click();
    desktop.listener!({ matches: true });
    expect(isOpen()).toBe(false);
    expect(blocked()).toEqual([false, false, false]);
  });

  it('se cierra al volver a la página con el botón Atrás del navegador', () => {
    button.click();
    window.dispatchEvent(new Event('pageshow'));
    expect(isOpen()).toBe(false);
  });
});
