import { Users, PhoneOff, Frown, Recycle, Map, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Shared Leads",
    detail: "The same lead sold to 5 buyers simultaneously. By the time you call, they've already spoken to your competitors.",
  },
  {
    icon: PhoneOff,
    title: "Fake Phone Numbers",
    detail: "Aggregator leftovers with unverified contact info. You pay for leads that simply don't pick up — ever.",
  },
  {
    icon: Frown,
    title: "Low-Intent Submissions",
    detail: "Generic form submissions from people who clicked an ad and never seriously considered your service.",
  },
  {
    icon: Recycle,
    title: "Recycled Inventory",
    detail: "Old leads repackaged and resold. Prospects who submitted months ago and have long since moved on.",
  },
  {
    icon: Map,
    title: "No Territory Control",
    detail: "No market exclusivity means every dollar you spend sharpens your competitor's edge too.",
  },
  {
    icon: TrendingDown,
    title: "Paying for Volume, Not Value",
    detail: "Businesses end up paying for lead count instead of real opportunities that actually convert.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">The Problem</span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
            What Most Growing Businesses Are
            <br />
            <span className="text-[var(--color-brand)]">Fighting Against</span>
          </h2>
          <p className="mx-auto mt-5 text-[var(--color-ink-soft)]">
            Whether you&apos;re a law firm, a lender, a contractor, or an insurer — most businesses trying to
            grow are competing for the same recycled leads. That&apos;s not how serious businesses scale.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white p-8 sm:p-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-tint)]">
                  <p.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[var(--color-ink)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
