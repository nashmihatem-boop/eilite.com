import Link from "next/link";
import { FileCheck, ShieldCheck, PhoneCall, Users, ArrowRight, Check } from "lucide-react";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

const products = [
  {
    eyebrow: "Premium Leads",
    icons: [FileCheck, ShieldCheck],
    title: "Exclusive, High-Intent Leads",
    highlight: "Vetted in real-time · Never resold to competitors",
    description:
      "Get access to exclusive, high-intent leads tailored to your industry. Every lead we deliver is vetted, targeted, and built to maximize your ROI.",
    tiers: [
      { name: "Verified", detail: "Confirmed by our call center before delivery" },
      { name: "Ping Post", detail: "Real-time from trusted landing pages" },
      { name: "Exclusive", detail: "Delivered once, never resold" },
    ],
    cta: "See lead options",
    href: "/buy-leads",
  },
  {
    eyebrow: "Warm Transfers",
    icons: [PhoneCall, Users],
    title: "Live, Ready-to-Convert Calls",
    highlight: "Connected in real-time · Pre-qualified interest",
    description:
      "Connect directly with ready-to-convert customers in real time. Our warm transfers put your sales team in front of live prospects who are prepared to take action.",
    tiers: [
      { name: "Live", detail: "Real-time phone connection, no delay" },
      { name: "Screened", detail: "Pre-qualified by our call center" },
      { name: "Direct", detail: "Routed straight to your sales line" },
    ],
    cta: "See transfer options",
    href: "/contact-us",
    isModal: true,
  },
];

export function ProductSplit() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">What We Offer</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Our Core <span className="text-[var(--color-brand)]">Services</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          Most providers only do leads or only do transfers. We do both, backed by real-time validation, all
          from one hub.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const [IconA, IconB] = product.icons;
            return (
              <div
                key={product.title}
                className="rounded-3xl border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white p-8 sm:p-10"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/40 bg-white px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    {product.eyebrow}
                  </span>
                </span>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <IconA className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
                  </span>
                  <ArrowRight className="h-4 w-4 text-[var(--color-ink-soft)]" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <IconB className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
                  </span>
                  <ArrowRight className="h-4 w-4 text-[var(--color-ink-soft)]" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand)]">
                    <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-ink)]">{product.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[var(--color-brand)]">{product.highlight}</p>
                <p className="mt-3 text-[var(--color-ink-soft)]">{product.description}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {product.tiers.map((tier) => (
                    <div key={tier.name} className="rounded-xl border border-[var(--color-line)] bg-white p-3">
                      <div className="text-sm font-bold text-[var(--color-ink)]">{tier.name}</div>
                      <div className="mt-1 text-xs text-[var(--color-ink-soft)]">{tier.detail}</div>
                    </div>
                  ))}
                </div>

                {product.isModal ? (
                  <DemoTriggerButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]">
                    {product.cta}
                    <ArrowRight className="h-4 w-4" />
                  </DemoTriggerButton>
                ) : (
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
