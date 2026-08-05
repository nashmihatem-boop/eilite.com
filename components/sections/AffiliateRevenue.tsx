import { TrendingUp, Map, PhoneCall } from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    title: "Maximize Your Revenue",
    detail:
      "Eilite has direct relationships with thousands of service providers across law, finance, home services, and insurance — from local providers to enterprise clients. We also work with lead providers, wholesalers, and agencies, giving affiliates the opportunity for higher payouts across every vertical.",
  },
  {
    icon: Map,
    title: "Widest Nationwide Coverage",
    detail:
      "We constantly expand our buyer network across all 50 states, helping you monetize every lead and call you generate, regardless of industry or geography.",
  },
  {
    icon: PhoneCall,
    title: "High Conversions",
    detail:
      "Our owned and operated call center agents are trained to convert the quality calls you send our way. Our affiliate team works with you to improve conversions across every service and location.",
  },
];

export function AffiliateRevenue() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
                <p.icon className="h-6 w-6 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-[var(--color-ink)]">{p.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
