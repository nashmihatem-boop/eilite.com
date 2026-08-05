import { LayoutTemplate, Phone, Paintbrush, Radio } from "lucide-react";

const options = [
  {
    icon: LayoutTemplate,
    title: "Proprietary Funnels",
    detail: "Use our funnels, optimized across every industry for the highest conversions.",
  },
  {
    icon: Phone,
    title: "Trackable Phone Numbers",
    detail: "Get numbers from your dashboard that route straight to our owned call center.",
  },
  {
    icon: Paintbrush,
    title: "Custom-Branded Funnels",
    detail: "Match your site's look and feel with custom funnels, available upon request.",
  },
  {
    icon: Radio,
    title: "Dynamic Ping/Post",
    detail: "Real-time ping/post integrations for high-volume, programmatic traffic.",
  },
];

export function AffiliateSetupOptions() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">Flexibility</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            A Wide Range of <span className="text-[var(--color-brand)]">Setup Options</span>
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            From plug-and-play funnels to fully custom integrations — pick the setup that fits how you drive
            traffic.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6 text-center shadow-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
                <o.icon className="h-6 w-6 text-[var(--color-brand)]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-[var(--color-ink)]">{o.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{o.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
