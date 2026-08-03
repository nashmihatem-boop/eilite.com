import type { LucideIcon } from "lucide-react";

export type BenefitItem = { icon: LucideIcon; title: string; detail: string };

export function MarketplaceBenefits({
  eyebrow,
  heading,
  highlight,
  items,
  tone = "alt",
}: {
  eyebrow: string;
  heading: string;
  highlight: string;
  items: BenefitItem[];
  tone?: "alt" | "white";
}) {
  const sectionBg = tone === "white" ? "bg-white" : "bg-[var(--color-surface-alt)]";
  const cardBg = tone === "white" ? "bg-[var(--color-surface-alt)]" : "bg-white";

  return (
    <section className={`${sectionBg} py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            {heading} <span className="text-[var(--color-brand)]">{highlight}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className={`rounded-2xl border border-[var(--color-line)] ${cardBg} p-6 shadow-sm`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
                <item.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
