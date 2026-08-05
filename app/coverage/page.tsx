import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import { coverageIndustries } from "@/lib/coverage";

export const metadata: Metadata = {
  title: "Coverage by Industry & State",
  description:
    "Browse where Eilite sources and delivers web form leads, warm transfers, and inbound calls — by industry, nationwide.",
  alternates: { canonical: "/coverage" },
};

export default function CoveragePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Coverage", url: `${siteConfig.url}/coverage` },
        ])}
      />
      <Navbar />
      <MarketplaceHero
        eyebrow="Coverage"
        headline="Coverage by"
        highlight="industry and state"
        subheadline="Pick an industry to see nationwide coverage for web form leads, warm transfers, and inbound calls."
        ctaLabel="Book a Demo Call"
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Browse by Industry
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Explore state-by-state <span className="text-[var(--color-brand)]">coverage</span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {coverageIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/coverage/${industry.slug}`}
                className="group rounded-2xl border border-[var(--color-line)] bg-white p-8 shadow-sm transition-colors hover:border-[var(--color-brand)]/40"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                  All 50 States + DC
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold text-[var(--color-ink)]">{industry.label}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{industry.subheadline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] group-hover:text-[var(--color-brand-dark)]">
                  View Coverage
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-xs text-[var(--color-muted)]">
            Campaign availability, targeting options, and qualification criteria vary by vertical, geography, buyer
            requirements, and applicable regulations.
          </p>
        </div>
      </section>

      <ComplianceStrip />

      <FinalCTA
        heading="Ready to Check Coverage in Your Market?"
        subheading="Tell us your industry, target states, and volume — we'll confirm current availability and delivery options for your area."
        getStartedText="Nationwide coverage, confirmed state by state."
      />
      <Footer />
    </>
  );
}
