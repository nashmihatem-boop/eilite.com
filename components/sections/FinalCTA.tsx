import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function FinalCTA() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white px-8 py-16 text-center shadow-sm sm:px-16 sm:py-20">
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Let&apos;s Get Started
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Ready to Grow <span className="text-[var(--color-brand)]">With Eilite?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-soft)]">
              Whether you need premium leads or live warm transfers, getting started takes just a few minutes.
            </p>
            <div className="mt-9 flex items-center justify-center">
              <DemoTriggerButton className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]">
                Book a Demo Call
              </DemoTriggerButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
