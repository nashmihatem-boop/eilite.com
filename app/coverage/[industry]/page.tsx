import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { CoverageSolutionCards } from "@/components/coverage/CoverageSolutionCards";
import { StateCoverageGrid } from "@/components/coverage/StateCoverageGrid";
import { CoverageArticles } from "@/components/coverage/CoverageArticles";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { MarketplaceFAQ } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import { coverageIndustries, getCoverageIndustry } from "@/lib/coverage";
import { getArticlesByCategories } from "@/lib/articles";

export function generateStaticParams() {
  return coverageIndustries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getCoverageIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.label} Leads, Transfers & Calls by State`,
    description: `${industry.subheadline} Nationwide coverage across all 50 states + DC.`,
    alternates: { canonical: `/coverage/${industry.slug}` },
  };
}

export default async function CoverageIndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getCoverageIndustry(slug);
  if (!industry) notFound();

  const relatedArticles = getArticlesByCategories(industry.articleCategories, 6);

  return (
    <>
      <JsonLd data={faqJsonLd(industry.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Coverage", url: `${siteConfig.url}/coverage` },
          { name: industry.label, url: `${siteConfig.url}/coverage/${industry.slug}` },
        ])}
      />
      <Navbar />
      <MarketplaceHero
        eyebrow={`${industry.label} Coverage`}
        headline={industry.tagline}
        highlight={industry.highlight}
        subheadline={industry.subheadline}
        ctaLabel="Book a Demo Call"
        ctaIndustry={industry.demoIndustry}
        chips={industry.searchChips}
      />

      <StateCoverageGrid industryLabel={industry.label} />

      <MarketplaceOverview
        eyebrow="Where Volume Comes From"
        heading="Owned properties. Vetted partners."
        paragraphs={industry.sourcingParagraphs}
        benefitsHeading={`Benefits for ${industry.label} Buyers`}
        benefits={industry.sourcingBenefits}
      />

      <CoverageSolutionCards industryLabel={industry.label} />

      <ComplianceStrip />

      <CoverageArticles articles={relatedArticles} industryLabel={industry.label} />

      <MarketplaceFAQ faqs={industry.faqs} />

      <FinalCTA
        heading={`Ready to Grow Your ${industry.label} Pipeline?`}
        subheading={`Tell us your target states, volume, and delivery preferences — leads, warm transfers, or inbound calls — and our team will confirm current availability for ${industry.label.toLowerCase()}.`}
        getStartedText={`Nationwide ${industry.label.toLowerCase()} coverage, state by state.`}
        primaryIndustry={industry.demoIndustry}
      />
      <Footer />
    </>
  );
}
