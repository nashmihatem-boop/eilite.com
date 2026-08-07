import { ShieldCheck, ChevronRight, Gavel, PhoneOutgoing, Circle } from "lucide-react";

export function CoverageHowItWorks({ industryLabel }: { industryLabel: string }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            How Leads Move
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            What happens after a <span className="text-[var(--color-brand)]">{industryLabel}</span> lead is
            submitted?
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            A prospect fills out a form, we run it through validation and routing, and a licensed buyer is on the
            phone before the moment passes. Here&apos;s the full sequence.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-4 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4">
            {/* Step 1 — Landing Page */}
            <div className="flex-1 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <StepHeader index={1} title="Landing Page" subtitle="Lead gets created" />

              <div className="mt-5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-ink)]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-brand)]" strokeWidth={2} />
                    {industryLabel} Lead Form
                  </span>
                  <span className="rounded-full bg-[var(--color-brand)]/15 px-2 py-0.5 text-[10px] font-bold text-[var(--color-brand-dark)]">
                    Consent captured
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <MockField label="First name" value="Jane" />
                  <MockField label="Last name" value="Doe" />
                  <MockField label="Phone" value="(555) 123-4567" />
                  <MockField label="State" value="CA" />
                </div>
                <div className="mt-2">
                  <MockField label="Zip code" value="94107" />
                </div>

                <div className="mt-3 rounded-lg bg-[var(--color-brand)] py-2 text-center text-xs font-semibold text-white">
                  Continue
                </div>
                <p className="mt-2 text-[10px] leading-snug text-[var(--color-ink-soft)]">
                  Submitting this form means the prospect agrees to be contacted by a licensed agent, with consent
                  logged and timestamped for compliance records.
                </p>
              </div>

              <p className="mt-4 rounded-lg bg-[var(--color-surface-tint)] p-3 text-xs text-[var(--color-ink-soft)]">
                From here, Eilite verifies the details and starts routing the lead immediately — no manual review,
                no delay.
              </p>
            </div>

            <ArrowDivider />

            {/* Step 2 — Bidding Process */}
            <div className="flex-1 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <StepHeader index={2} title="Bidding Process" subtitle="Happens in seconds" />

              <div className="mt-5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-ink)]">
                  <Circle className="h-2 w-2 fill-[var(--color-brand)] text-[var(--color-brand)]" />
                  Live auction
                </span>

                <div className="mt-3 space-y-2">
                  {[
                    { bid: "$25", label: `${industryLabel} Buyer 1`, winning: true },
                    { bid: "$24", label: `${industryLabel} Buyer 2`, winning: false },
                    { bid: "$22", label: `${industryLabel} Buyer 3`, winning: false },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${
                        row.winning
                          ? "border-[var(--color-brand)] bg-[var(--color-brand)]/10"
                          : "border-[var(--color-line)] bg-white"
                      }`}
                    >
                      <span className="flex items-center gap-2 font-semibold text-[var(--color-ink)]">
                        <Gavel className="h-3.5 w-3.5 text-[var(--color-ink-soft)]" strokeWidth={2} />
                        {row.bid} <span className="font-normal text-[var(--color-ink-soft)]">{row.label}</span>
                      </span>
                      {row.winning && (
                        <span className="rounded-full bg-[var(--color-ink)] px-2 py-0.5 text-[10px] font-bold text-white">
                          Winning bid
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 rounded-lg bg-[var(--color-surface-tint)] p-3 text-xs text-[var(--color-ink-soft)]">
                Bid weight isn&apos;t just price — Eilite factors in each buyer&apos;s historical conversion rate and
                other performance data before declaring a winner.
              </p>
            </div>

            <ArrowDivider />

            {/* Step 3 — Buyer Outreach */}
            <div className="flex-1 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <StepHeader index={3} title="Buyer Outreach" subtitle="Outbound call starts" />

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-alt)] p-4">
                <PhoneOutgoing className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" strokeWidth={2} />
                <p className="text-xs leading-relaxed text-[var(--color-ink-soft)]">
                  The winning bidder&apos;s team receives the lead instantly and places the outbound call —
                  typically while the prospect is still near their phone, well before interest has a chance to cool
                  off.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-[var(--color-surface-tint)] p-3">
                  <p className="text-xs font-bold text-[var(--color-ink)]">Behind the scenes</p>
                  <p className="mt-1 text-xs text-[var(--color-ink-soft)]">
                    Eilite manages the pricing and routing logic — tuned by market, buyer capacity, past
                    performance, and time of day — so every lead lands with a buyer built to close it.
                  </p>
                </div>
                <div className="rounded-lg bg-[var(--color-surface-tint)] p-3">
                  <p className="text-xs font-bold text-[var(--color-ink)]">The payoff</p>
                  <p className="mt-1 text-xs text-[var(--color-ink-soft)]">
                    Buyers spend less time chasing and more time closing, with a pipeline built on fit rather than
                    luck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepHeader({ index, title, subtitle }: { index: number; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-tint)] font-heading text-xs font-bold text-[var(--color-brand)]">
        {index}
      </span>
      <h3 className="mt-2 font-heading text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="text-xs font-medium text-[var(--color-ink-soft)]">{subtitle}</p>
    </div>
  );
}

function MockField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[var(--color-line)] bg-white px-2 py-1.5">
      <div className="text-[9px] font-semibold text-[var(--color-muted)]">{label}</div>
      <div className="text-[11px] font-medium text-[var(--color-ink)]">{value}</div>
    </div>
  );
}

function ArrowDivider() {
  return (
    <div className="hidden shrink-0 items-center justify-center lg:flex">
      <ChevronRight className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2.5} />
    </div>
  );
}
