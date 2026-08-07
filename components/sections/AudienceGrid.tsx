import { Scale, ShieldCheck, Landmark, Hammer, Stethoscope, Briefcase, Headset, Megaphone, Network, ArrowRight } from "lucide-react";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

const audiences = [
  {
    tag: "Legal",
    icon: Scale,
    title: "Law Firms",
    detail: "Personal injury and mass tort attorneys connecting with verified, high-intent claimants.",
    industry: "Legal",
  },
  {
    tag: "Insurance",
    icon: ShieldCheck,
    title: "Insurance Providers",
    detail: "Auto, health, and Medicare carriers reaching consumers actively shopping for coverage.",
    industry: "Insurance",
  },
  {
    tag: "Financial",
    icon: Landmark,
    title: "Financial Institutions",
    detail: "Lenders and debt consolidators matched with qualified, ready-to-talk borrowers.",
    industry: "Financial Services",
  },
  {
    tag: "Home Services",
    icon: Hammer,
    title: "Home Service Contractors",
    detail: "Solar, roofing, and remodeling pros filling their pipeline with in-market homeowners.",
    industry: "Home Services",
  },
  {
    tag: "Healthcare",
    icon: Stethoscope,
    title: "Healthcare & Medicare Agents",
    detail: "Independent agents and FMOs connecting with beneficiaries actively comparing Medicare and final expense coverage.",
    industry: "Healthcare",
  },
  {
    tag: "Agencies",
    icon: Briefcase,
    title: "Advertising & Marketing Agencies",
    detail: "Agencies managing lead generation for multiple clients across industries, from a single dashboard.",
    industry: undefined,
  },
  {
    tag: "Call Centers",
    icon: Headset,
    title: "Call Centers & Telesales Teams",
    detail: "High-volume telesales operations that need a steady stream of dial-ready, verified leads to keep agents talking.",
    industry: undefined,
  },
  {
    tag: "Traffic Sources",
    icon: Megaphone,
    title: "Affiliates & Publishers",
    detail: "Traffic sources monetizing consumer intent through compliant, high-converting offers.",
    industry: undefined,
  },
  {
    tag: "Partners",
    icon: Network,
    title: "Aggregators & Lead Providers",
    detail: "Partners who meet our compliance bar, plugged into the industry's biggest buyer.",
    industry: undefined,
  },
];

export function AudienceGrid() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Our Audience</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Who Uses <span className="text-[var(--color-brand)]">Eilite?</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          From law firms to lead providers, Eilite is the hub where every side of the industry connects to grow.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-sm"
            >
              <div className="h-1 bg-[var(--color-brand)]" />
              <div className="p-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/40 bg-white px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                    {audience.tag}
                  </span>
                </span>

                <div className="mt-4 flex h-24 items-center justify-center rounded-xl bg-[var(--color-surface-tint)]">
                  <audience.icon className="h-9 w-9 text-[var(--color-brand)]" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-[var(--color-ink)]">{audience.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{audience.detail}</p>

                <DemoTriggerButton
                  industry={audience.industry}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)]"
                >
                  Reach out to us
                  <ArrowRight className="h-3.5 w-3.5" />
                </DemoTriggerButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
