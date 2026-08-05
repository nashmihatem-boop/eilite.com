import { ArrowRight } from "lucide-react";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";
import type { SolutionBenefitAudience } from "@/lib/solutions";

export function SolutionWhoBenefits({
  heading,
  subheading,
  audiences,
}: {
  heading: string;
  subheading: string;
  audiences: SolutionBenefitAudience[];
}) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Who Benefits</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">{subheading}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

                <h3 className="mt-5 font-heading text-base font-bold text-[var(--color-ink)]">{audience.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{audience.detail}</p>

                <DemoTriggerButton className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-dark)]">
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
