import Link from "next/link";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function MarketplaceHero({
  eyebrow,
  headline,
  highlight,
  subheadline,
  ctaLabel,
  ctaHref,
  ctaIndustry,
  chips,
}: {
  eyebrow: string;
  headline: string;
  highlight: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaIndustry?: string;
  chips?: string[];
}) {
  return (
    <section className="bg-[var(--color-ink)] pb-20 pt-16 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">{eyebrow}</span>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          {headline} <span className="text-[var(--color-brand)]">{highlight}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">{subheadline}</p>

        {chips?.length ? (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/60"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-9 flex items-center justify-center">
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              {ctaLabel}
            </Link>
          ) : (
            <DemoTriggerButton
              industry={ctaIndustry}
              className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              {ctaLabel}
            </DemoTriggerButton>
          )}
        </div>
      </div>
    </section>
  );
}
