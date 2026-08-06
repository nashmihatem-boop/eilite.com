const partners = [
  {
    name: "Jornaya",
    role: "Consent & Intent Tracking",
    description:
      "Jornaya's LeadiD records a verifiable trail of consumer consent as a lead moves through a form or call flow, tagging every capture with a campaign key so both Eilite and the buyer have a defensible, source-specific record of when and how a prospect agreed to be contacted.",
  },
  {
    name: "TrustedForm",
    role: "Lead Certification",
    description:
      "Every form submission we deliver carries a TrustedForm certificate — a timestamped snapshot of exactly how consent was captured on the original page, so there's no ambiguity about what a prospect actually agreed to.",
  },
  {
    name: "Anura",
    role: "Ad Fraud Detection",
    description:
      "Anura screens incoming traffic for bots, click fraud, and automated submissions before a lead ever reaches our pipeline, filtering out fake activity that would otherwise waste a buyer's budget.",
  },
  {
    name: "MaxMind",
    role: "IP & Identity Fraud",
    description:
      "MaxMind's fraud scoring evaluates the IP address and device signals behind every submission, flagging proxies, VPN masking, and other identity red flags that suggest a lead isn't who it claims to be.",
  },
  {
    name: "Xverify",
    role: "Contact Verification",
    description:
      "Xverify checks that the phone number, email, and address on a submission are real and deliverable — catching typos, disconnected numbers, and fake contact details before they're ever passed to a buyer.",
  },
  {
    name: "IPQualityScore",
    role: "Real-Time Fraud Scoring",
    description:
      "IPQualityScore runs a real-time risk score against every submission, combining device fingerprinting and behavioral signals to catch fraud patterns that a single-point check like IP or email alone would miss.",
  },
  {
    name: "TCPA Litigator List",
    role: "Litigator Screening",
    description:
      "Before any number is dialed or texted, it's checked against the TCPA Litigator List — a database of known serial plaintiffs — protecting buyers from the costly lawsuits that a single bad number can trigger.",
  },
  {
    name: "DNC.com",
    role: "Do-Not-Call Scrubbing",
    description:
      "Every contact is scrubbed against the National Do-Not-Call Registry and applicable state-level lists through DNC.com before delivery, keeping outreach compliant with federal and state calling rules.",
  },
];

export function ValidationPartnersGrid() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Our Stack</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Eight Layers of <span className="text-[var(--color-brand)]">Independent Verification</span>
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--color-ink-soft)]">
          No single check catches everything. That&apos;s why every lead and warm transfer runs through this full
          stack — fraud detection, identity verification, consent certification, and compliance scrubbing — before
          it ever reaches a buyer.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-6"
            >
              <div className="font-heading text-lg font-bold text-[var(--color-ink)]">{partner.name}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-brand)]">
                {partner.role}
              </div>
              <p className="mt-3 flex-1 text-sm text-[var(--color-ink-soft)]">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
