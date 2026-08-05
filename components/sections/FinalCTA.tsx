import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function FinalCTA({
  heading = "Ready to See What Your Pipeline Could Look Like?",
  subheading = "Tell us your vertical, target volume, and delivery preferences — leads, warm transfers, or inbound calls — and our team will follow up to confirm availability.",
  getStartedText = "Getting started takes just a few minutes.",
  primaryCta = "Book a Demo Call",
  primaryIndustry,
}: {
  heading?: string;
  subheading?: string;
  getStartedText?: string;
  primaryCta?: string;
  primaryIndustry?: string;
}) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-[var(--color-line)] shadow-sm sm:grid-cols-2">
          <div className="relative overflow-hidden bg-[var(--color-ink)] px-8 py-12 sm:p-12">
            <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Next Step
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  Eilite
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-4 text-sm text-white/70">{subheading}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[var(--color-surface-alt)] px-8 py-12 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Get Started
            </span>
            <p className="mt-4 font-heading text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
              {getStartedText}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <DemoTriggerButton
                industry={primaryIndustry}
                className="rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]"
              >
                {primaryCta}
              </DemoTriggerButton>
              <DemoTriggerButton className="rounded-full border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)]/40">
                Contact Us
              </DemoTriggerButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
