import type { LucideIcon } from "lucide-react";

export type ProblemItem = { icon: LucideIcon; title: string; detail: string };

export function MarketplaceProblem({
  headline,
  highlight,
  subheadline,
  items,
}: {
  headline: string;
  highlight: string;
  subheadline: string;
  items: ProblemItem[];
}) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">The Problem</span>
        <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
          {headline}
          <br />
          <span className="text-[var(--color-brand)]">{highlight}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[var(--color-ink-soft)]">{subheadline}</p>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white p-8 sm:p-12">
          <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-tint)]">
                  <item.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
