import Link from "next/link";
import { Check } from "lucide-react";

const values = [
  { text: "Real people, not bots, on every lead we validate" },
  { text: "Plain reporting, never a black box" },
  { text: "Honest pricing — no bulk filler, quality only" },
  {
    text: "TCPA and DNC compliance on every delivery",
    href: "/lead-validation-partners",
    linkLabel: "see how we validate",
  },
  { text: "Nationwide coverage, any industry, any budget" },
];

export function WhoWeAre() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">About Eilite</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Who We <span className="text-[var(--color-brand)]">Are</span>
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--color-ink-soft)]">
          We are Eilite.com. For over a decade, real people on our team have connected law firms, insurers,
          financial brands, and contractors with real, high-intent customers.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-[var(--color-ink-soft)]">
            <p>
              Every lead is yours. When a prospect submits interest or picks up the phone, it&apos;s a real
              opportunity — because it&apos;s vetted, targeted, and built to convert before it ever reaches you.
            </p>
            <p>
              Today, businesses across law, finance, insurance, and home services trust Eilite as their hub for
              premium leads and live warm transfers. Our team reviews and routes every submission, backed by
              years of experience and industry-leading validation technology.
            </p>
            <p>
              We speak plain terms, not sales jargon. You know exactly what you&apos;re getting, what it costs,
              and how it was verified — before you ever pay.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-line)] border-l-4 border-l-[var(--color-brand)] bg-white p-8 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[var(--color-ink)]">What we stand for</h3>
            <ul className="mt-5 space-y-4">
              {values.map((value) => (
                <li key={value.text} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" strokeWidth={2.5} />
                  <span className="text-sm text-[var(--color-ink)]">
                    {value.text}
                    {value.href && (
                      <>
                        {" "}
                        <Link href={value.href} className="text-[var(--color-brand)] underline">
                          {value.linkLabel}
                        </Link>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
