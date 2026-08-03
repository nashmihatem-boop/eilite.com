const partners = [
  { name: "Jornaya", role: "Consent & intent tracking" },
  { name: "TrustedForm", role: "Lead certification" },
  { name: "Anura", role: "Ad fraud detection" },
  { name: "MaxMind", role: "IP & identity fraud" },
  { name: "Xverify", role: "Contact verification" },
  { name: "IPQualityScore", role: "Real-time fraud scoring" },
  { name: "TCPA Litigator List", role: "Litigator screening" },
  { name: "DNC.com", role: "Do-Not-Call scrubbing" },
];

export function ComplianceStrip() {
  return (
    <section id="compliance" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Compliance</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Verified by the Industry&apos;s <span className="text-[var(--color-brand)]">Compliance Leaders</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--color-ink-soft)]">
          Every lead runs through automatic, real-time validation with these technology partners before it ever
          reaches you.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] px-4 py-6"
            >
              <div className="font-heading text-base font-bold text-[var(--color-ink)]">{partner.name}</div>
              <div className="mt-1 text-xs text-[var(--color-ink-soft)]">{partner.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
