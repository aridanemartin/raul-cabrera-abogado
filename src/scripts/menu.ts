// Menú del móvil: el botón de hamburguesa abre la navegación a pantalla completa.
// Mientras está abierto, el resto de la página queda inerte y no se desplaza.
const BLOCKED = 'main, footer, [data-contact-bar]';

export function bindMenu(header: HTMLElement, desktop: MediaQueryList = matchMedia('(min-width: 900px)')): void {
  const doc = header.ownerDocument;
  const button = header.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = doc.getElementById(button?.getAttribute('aria-controls') ?? '');
  if (!button || !nav) return;

  button.hidden = false;
  nav.dataset.collapsible = '';

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';
  const setOpen = (open: boolean) => {
    if (open) {
      // El círculo con el que se abre el menú sale del centro del botón.
      const rect = button.getBoundingClientRect();
      nav.style.setProperty('--menu-x', `${rect.left + rect.width / 2}px`);
      nav.style.setProperty('--menu-y', `${rect.top + rect.height / 2}px`);
    }
    button.setAttribute('aria-expanded', String(open));
    header.toggleAttribute('data-menu-open', open);
    doc.documentElement.classList.toggle('menu-open', open);
    doc.querySelectorAll<HTMLElement>(BLOCKED).forEach((el) => (el.inert = open));
  };

  button.addEventListener('click', () => setOpen(!isOpen()));
  nav.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) setOpen(false);
  });
  doc.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen()) return;
    setOpen(false);
    button.focus();
  });
  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
  // Al volver con «Atrás», el navegador puede restaurar la página con el menú abierto.
  doc.defaultView?.addEventListener('pageshow', () => setOpen(false));
}
