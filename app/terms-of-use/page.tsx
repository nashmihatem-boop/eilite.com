import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { termsOfUseIntro, termsOfUseSections } from "@/lib/terms-of-use-content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing your use of the Eilite website and services.",
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">Terms of Use</h1>
          <p className="mt-3 text-sm font-medium text-[var(--color-brand)]">Last updated: August 3, 2026</p>

          <div className="mt-8 space-y-5">
            {termsOfUseIntro.map((paragraph, i) => (
              <p key={i} className="whitespace-pre-line text-[var(--color-ink-soft)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {termsOfUseSections.map((section, i) => (
              <div key={section.heading ?? i}>
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-ink)]">{section.heading}</h2>
                )}
                <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="whitespace-pre-line text-[var(--color-ink-soft)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
