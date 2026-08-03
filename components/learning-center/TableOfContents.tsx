import type { TocItem } from "@/lib/articles/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mt-8 rounded-2xl border border-[var(--color-line)] border-l-4 border-l-[var(--color-brand)] bg-[var(--color-surface-alt)] p-6"
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">On This Page</span>
      <ol className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2.5 text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
            >
              <span className="shrink-0 font-semibold text-[var(--color-brand)]">{i + 1}.</span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
