import { ShoppingCart, TrendingUp, Shuffle } from "lucide-react";

const paths = [
  {
    icon: ShoppingCart,
    title: "Buying Leads",
    detail:
      "Need reliable volume that actually converts? Buy exclusive, verified leads across legal, financial, home services, insurance, and healthcare — so every dollar spent turns into closed business, not wasted ad spend.",
  },
  {
    icon: TrendingUp,
    title: "Selling Leads or Calls",
    detail:
      "Generating more volume than you can place, or sitting on traffic you already trust? Turn it into a real, ongoing revenue stream — real-time reporting, no long-term contract.",
  },
  {
    icon: Shuffle,
    title: "Both",
    detail:
      "Plenty of Alliance members do both — buying to fill gaps in one vertical while turning overflow into extra profit in another, all from a single account.",
  },
];

export function CommunityPartnerPaths() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            How We Help You Profit
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Buy, Sell, or <span className="text-[var(--color-brand)]">Both</span> — However You Work
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <div key={path.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
                <path.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[var(--color-ink)]">{path.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{path.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
