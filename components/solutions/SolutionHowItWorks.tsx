import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";
import type { SolutionHowItWorksStep } from "@/lib/solutions";

export function SolutionHowItWorks({
  heading,
  subheading,
  steps,
  demoIndustry,
}: {
  heading: string;
  subheading: string;
  steps: SolutionHowItWorksStep[];
  demoIndustry: string;
}) {
  return (
    <section className="bg-[var(--color-ink)] py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
              The Eilite Advantage
            </span>
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-white/70">{subheading}</p>
          <DemoTriggerButton
            industry={demoIndustry}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            Contact Us
          </DemoTriggerButton>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-tint)] font-heading text-sm font-bold text-[var(--color-brand)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-ink)]">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
