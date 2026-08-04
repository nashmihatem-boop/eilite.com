const spokes = [
  { label: "Lead Capture" },
  { label: "Fraud Screening" },
  { label: "TCPA Scrubbing" },
  { label: "Real-Time Routing" },
  { label: "Warm Transfer" },
  { label: "DNC Compliance" },
  { label: "Reporting" },
  { label: "API Delivery" },
];

const steps = [
  { step: "1", title: "Capture", detail: "A prospect submits interest through an owned or partner site." },
  { step: "2", title: "Screen", detail: "Anura and MaxMind filter bots, fraud, and duplicate submissions." },
  { step: "3", title: "Validate", detail: "Jornaya and TrustedForm certify consent and intent in real time." },
  { step: "4", title: "Comply", detail: "Every contact is scrubbed against TCPA and DNC litigator lists." },
  { step: "5", title: "Route", detail: "Delivered as a verified lead, ping post, or live warm transfer." },
  { step: "6", title: "Report", detail: "Real-time delivery reporting and dedicated account support." },
];

const RX = 42;
const RY = 36;

function pointFor(index: number) {
  const angle = (-90 + index * 45) * (Math.PI / 180);
  const x = 50 + RX * Math.cos(angle);
  const y = 50 + RY * Math.sin(angle);
  return { left: `${x}%`, top: `${y}%` };
}

export function PlatformHub() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">The Platform</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          One Platform for Every Stage of <span className="text-[var(--color-brand)]">Lead Generation</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
          Eilite captures interest, screens for fraud, validates compliance, and routes the result — all from
          one connected pipeline.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-linear-to-br from-[var(--color-surface-tint)] via-white to-white p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative hidden h-[380px] lg:block">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {spokes.map((_, i) => {
                  const p = pointFor(i);
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={parseFloat(p.left)}
                      y2={parseFloat(p.top)}
                      stroke="#f0a82c"
                      strokeOpacity="0.35"
                      strokeWidth="0.4"
                      strokeDasharray="1.5 1.5"
                    />
                  );
                })}
                <circle cx="50" cy="50" r={RY} fill="none" stroke="#f0a82c" strokeOpacity="0.2" strokeWidth="0.3" />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                  Eilite
                </span>
                <span className="text-xs font-semibold text-[var(--color-ink)]">Hub</span>
              </div>

              {spokes.map((spoke, i) => {
                const p = pointFor(i);
                return (
                  <div
                    key={spoke.label}
                    style={{ left: p.left, top: p.top }}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                    <span className="text-xs font-semibold text-[var(--color-ink)]">{spoke.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {spokes.map((spoke) => (
                <div
                  key={spoke.label}
                  className="flex items-start gap-1.5 rounded-2xl border border-[var(--color-line)] bg-white px-3 py-2 shadow-sm"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-xs font-semibold text-[var(--color-ink)]">{spoke.label}</span>
                </div>
              ))}
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Capture &middot; Validate &middot; Route &middot; Convert
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
                Built to cover the whole lead lifecycle.
              </h3>
              <p className="mt-4 text-[var(--color-ink-soft)]">
                Start with real-time capture, layer in fraud and compliance screening, then route as a verified
                lead or live warm transfer — all connected through one pipeline as your volume grows.
              </p>
            </div>
          </div>

          <div className="relative mt-14 border-t border-[var(--color-line)] pt-10">
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
              <div className="absolute left-4 right-4 top-4 hidden h-px bg-[var(--color-line)] lg:block" />
              {steps.map((s) => (
                <div key={s.step} className="relative">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] font-heading text-xs font-bold text-white">
                    {s.step}
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-[var(--color-ink)]">{s.title}</h4>
                  <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
