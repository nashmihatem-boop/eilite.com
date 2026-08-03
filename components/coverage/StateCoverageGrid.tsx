import { US_STATES } from "@/lib/states";

export function StateCoverageGrid({ industryLabel }: { industryLabel: string }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          01 Select a State
        </span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          {industryLabel} coverage in all 50 states + DC
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {US_STATES.map((state) => (
            <span key={state} className="text-sm text-[var(--color-ink-soft)]">
              {state}
            </span>
          ))}
        </div>

        <p className="mt-8 text-xs text-[var(--color-muted)]">
          Campaign availability, targeting options, and qualification criteria vary by state, buyer requirements,
          and applicable regulations.
        </p>
      </div>
    </section>
  );
}
