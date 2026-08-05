import { DollarSign, LayoutDashboard, Repeat, Headset, Layers, Plug } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Higher Payouts",
    detail:
      "We offer competitive payouts and EPLs across legal, financial, home services, and insurance, via relationships with thousands of buyers, agencies, and wholesalers.",
  },
  {
    icon: LayoutDashboard,
    title: "Transparent Platform",
    detail: "24/7 access to your account, performance reports, activity logs, and exports.",
  },
  {
    icon: Repeat,
    title: "Every Vertical, One Account",
    detail:
      "Send traffic across legal, financial, home services, and insurance from a single affiliate account — no need to juggle separate networks per industry.",
  },
  {
    icon: Headset,
    title: "Dedicated Support Team",
    detail:
      "Our affiliate team works on expanding your revenue, offering custom suggestions and helping you optimize performance.",
  },
  {
    icon: Layers,
    title: "Multi-Industry Expertise",
    detail:
      "We live and breathe lead generation across four industries. We can give you specific advice on improving conversion rate, whatever vertical you target.",
  },
  {
    icon: Plug,
    title: "APIs, Funnels & Integrations",
    detail:
      "Integration options for every level of affiliate — use our proprietary funnels, or route calls to our owned call center for the highest conversions.",
  },
];

export function AffiliateBenefits() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Why Eilite</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            We Understand What Affiliates <span className="text-[var(--color-brand)]">Need to Succeed</span>
          </h2>
          <p className="mt-3 text-[var(--color-ink-soft)]">
            Built by people who know what it takes to turn traffic into revenue, across every vertical.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                <b.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[var(--color-ink)]">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
