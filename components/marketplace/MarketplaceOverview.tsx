import { CheckCircle2 } from "lucide-react";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function MarketplaceOverview({
  eyebrow,
  heading,
  paragraphs,
  benefitsHeading,
  benefits,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  benefitsHeading: string;
  benefits: string[];
}) {
  return (
    <section className="bg-[var(--color-surface-alt)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">{eyebrow}</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">{heading}</h2>
            <div className="mt-4 space-y-4 text-[var(--color-ink-soft)]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] border-l-4 border-l-[var(--color-brand)] bg-white p-8 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[var(--color-ink)]">{benefitsHeading}</h3>
            <ul className="mt-5 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brand)]" strokeWidth={2} />
                  <span className="text-sm text-[var(--color-ink)]">{benefit}</span>
                </li>
              ))}
            </ul>
            <DemoTriggerButton className="mt-6 w-full rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]">
              Book a Consultation Call
            </DemoTriggerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
