const brands = [
  { name: "EverLawyer.com", tag: "Legal Leads", href: "https://everlawyer.com" },
  { name: "EverFinancier.com", tag: "Financial Leads", href: "https://everfinancier.com" },
  { name: "EverContractor.com", tag: "Home Services Leads", href: "https://evercontractor.com" },
  { name: "EverInsurer.com", tag: "Insurance Leads", href: "https://everinsurer.com" },
];

export function BrandsStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-surface-alt)] py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Our Brands</span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          Premium Owned &amp; Operated <span className="text-[var(--color-brand)]">Brands</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          Dedicated brands powering growth across law, finance, home services, and insurance.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand)]/50 hover:shadow-md"
            >
              <div className="font-heading text-lg font-bold text-[var(--color-ink)]">{brand.name}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                {brand.tag}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
