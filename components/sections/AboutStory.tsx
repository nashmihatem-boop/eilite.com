const locations = [
  { city: "Dover, DE", note: "Headquarters" },
  { city: "New York, NY", note: "East Coast operations" },
  { city: "Abu Dhabi, UAE", note: "International operations" },
];

export function AboutStory() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Our Story</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Built by People Who Actually <span className="text-[var(--color-brand)]">Answer the Phone</span>
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-[var(--color-ink-soft)]">
            <p>
              Eilite started in 2010 with a simple frustration: too much of the lead generation industry was
              built around volume, not outcomes. Recycled contact lists, shared leads sold five times over, and
              vague reporting that made it impossible to know what was actually working. We set out to build the
              opposite — a hub where every lead and warm transfer is exclusive, verified, and backed by real
              people who can explain exactly where it came from.
            </p>
            <p>
              Over the years, that focus grew into four dedicated brands — EverLawyer, EverFinancier,
              EverContractor, and EverInsurer — each built for the specific compliance requirements, buyer
              behavior, and sales cycle of its industry, all connected through the same validation pipeline and
              account team.
            </p>
            <p>
              Today Eilite operates out of Dover, Delaware, with additional teams in New York and Abu Dhabi,
              serving law firms, insurers, financial brands, and home service contractors nationwide. We&apos;re
              still a real team, not an automated dashboard — every account gets a named point of contact who
              knows their business, not a rotating queue of support tickets.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] border-l-4 border-l-[var(--color-brand)] bg-white p-8 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[var(--color-ink)]">Where we operate</h3>
            <ul className="mt-5 space-y-4">
              {locations.map((loc) => (
                <li key={loc.city} className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-4 last:border-0 last:pb-0">
                  <span className="font-semibold text-[var(--color-ink)]">{loc.city}</span>
                  <span className="text-sm text-[var(--color-ink-soft)]">{loc.note}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-heading text-lg font-bold text-[var(--color-ink)]">How we work</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-ink-soft)]">
              <li>Every lead sold once — never resold or shared across buyers.</li>
              <li>Real-time fraud, identity, and compliance screening on every submission.</li>
              <li>A named account manager for every buyer, not a support ticket queue.</li>
              <li>Plain, transparent reporting — you see exactly what you paid for and how it was verified.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
