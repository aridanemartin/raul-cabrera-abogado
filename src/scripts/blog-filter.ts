// Filtro por tema del índice del blog. Sin JavaScript los botones no se muestran
// (data-requires-js) y se ven todos los artículos.
export function bindBlogFilter(root: HTMLElement): void {
  const chips = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-cluster]'));
  const status = root.querySelector<HTMLElement>('[data-filter-status]');

  const apply = (topic: string) => {
    let shown = 0;
    for (const card of cards) {
      card.hidden = topic !== 'todos' && card.dataset.cluster !== topic;
      if (!card.hidden) shown++;
    }
    for (const chip of chips) chip.setAttribute('aria-pressed', String(chip.dataset.filter === topic));
    if (status) status.textContent = `${shown} ${shown === 1 ? 'artículo' : 'artículos'}`;
  };

  for (const chip of chips) chip.addEventListener('click', () => apply(chip.dataset.filter ?? 'todos'));
}
