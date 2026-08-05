import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

const results = [
  { value: "300%", label: "More pipeline" },
  { value: "70%", label: "More conversions" },
  { value: "60%", label: "Lower costs" },
];

export function ResultsBand() {
  return (
    <section className="bg-[var(--color-ink)] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">The Results</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Delivers What the Industry <span className="text-[var(--color-brand)]">Demands.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          As the biggest buyer and spender in lead generation, we specialize in premium leads and live warm
          transfers that fuel the entire industry.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {results.map((result) => (
            <div key={result.label}>
              <div className="font-heading text-4xl font-bold text-[var(--color-brand-light)] sm:text-5xl">
                {result.value}
              </div>
              <div className="mt-2 text-sm text-white/70 sm:text-base">{result.label}</div>
            </div>
          ))}
        </div>

        <DemoTriggerButton className="mt-12 inline-block rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]">
          Book a Demo Call
        </DemoTriggerButton>
      </div>
    </section>
  );
}
