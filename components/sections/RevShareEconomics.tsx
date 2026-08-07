import { Send, ShieldCheck, PhoneForwarded, Percent, ChevronRight } from "lucide-react";

const pipeline = [
  { icon: Send, label: "Your Unsold Leads" },
  { icon: ShieldCheck, label: "Compliance Scrub" },
  { icon: PhoneForwarded, label: "Warm Transfer" },
  { icon: Percent, label: "40% Revenue Share" },
];

export function RevShareEconomics() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">The Economics</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            You Keep <span className="text-[var(--color-brand)]">40%</span> of Every Sale
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Revenue share is paid on every warm transfer or call we successfully sell from your submitted leads —
            not on leads submitted — so you only ever share in real, completed sales.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-2">
          {pipeline.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] px-5 py-4 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <step.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
                </span>
                <span className="text-xs font-bold text-[var(--color-ink)]">{step.label}</span>
              </div>
              {i < pipeline.length - 1 && (
                <ChevronRight className="hidden h-5 w-5 shrink-0 text-[var(--color-brand)] sm:block" strokeWidth={2.5} />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[var(--color-line)] bg-[var(--color-ink)] p-8 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Example</p>
          <p className="mt-3 text-sm text-white/70">Warm transfer sold for</p>
          <p className="mt-1 font-heading text-4xl font-bold">$100</p>
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="font-heading text-2xl font-bold text-[var(--color-brand)]">$40</p>
              <p className="mt-1 text-xs text-white/60">Your revenue share (40%)</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-white">$60</p>
              <p className="mt-1 text-xs text-white/60">Eilite</p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-md text-center text-xs text-[var(--color-muted)]">
          Illustrative example — actual sale price and payout vary by vertical, lead quality, and buyer demand.
          Final revenue share terms are confirmed per partner agreement.
        </p>
      </div>
    </section>
  );
}
