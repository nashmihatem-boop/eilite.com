import Link from "next/link";
import { FileText, PhoneCall, Phone } from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Web Form Leads",
    detail: "Real-time submissions from owned-and-operated properties and vetted publishers.",
    href: "/buy-leads",
  },
  {
    icon: PhoneCall,
    title: "Warm Transfers",
    detail: "Live, pre-qualified calls handed directly to your team in real time.",
    href: "/buy-warm-transfers",
  },
  {
    icon: Phone,
    title: "Inbound Calls",
    detail: "Paid-search generated calls routed to your line the moment they connect.",
    href: "/buy-inbounds",
  },
];

export function CoverageSolutionCards({ industryLabel }: { industryLabel: string }) {
  return (
    <section className="bg-[var(--color-surface-alt)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            02 Available Solutions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Choose your <span className="text-[var(--color-brand)]">delivery model</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm transition-colors hover:border-[var(--color-brand)]/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
                <item.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[var(--color-ink)]">
                {item.title} in {industryLabel}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{item.detail}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-brand-dark)]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
