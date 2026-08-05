import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { SolutionHowItWorks } from "@/components/solutions/SolutionHowItWorks";
import { SolutionWhoBenefits } from "@/components/solutions/SolutionWhoBenefits";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { CoverageArticles } from "@/components/coverage/CoverageArticles";
import { MarketplaceFAQ } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import { solutionVerticals, getSolutionVertical } from "@/lib/solutions";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return solutionVerticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = getSolutionVertical(slug);
  if (!vertical) return {};

  return {
    title: `${vertical.label} Lead Generation`,
    description: vertical.subheadline,
    alternates: { canonical: `/solutions/${vertical.slug}` },
  };
}

function getRelatedArticles(keywords: string[], limit = 4) {
  const lower = keywords.map((k) => k.toLowerCase());
  return articles
    .filter((a) => lower.some((k) => a.slug.includes(k) || a.title.toLowerCase().includes(k)))
    .slice(0, limit);
}

export default async function SolutionVerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical: slug } = await params;
  const vertical = getSolutionVertical(slug);
  if (!vertical) notFound();

  const relatedArticles = getRelatedArticles(vertical.keywords);

  return (
    <>
      <JsonLd data={faqJsonLd(vertical.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Solutions", url: `${siteConfig.url}/solutions` },
          { name: vertical.label, url: `${siteConfig.url}/solutions/${vertical.slug}` },
        ])}
      />
      <Navbar />
      <MarketplaceHero
        eyebrow={`${vertical.label} Lead Generation`}
        headline={vertical.tagline}
        highlight={vertical.highlight}
        subheadline={vertical.subheadline}
        ctaLabel="Book a Demo Call"
        ctaIndustry={vertical.demoIndustry}
        chips={vertical.searchChips}
      />

      <MarketplaceOverview
        eyebrow={vertical.overviewEyebrow}
        heading={vertical.overviewHeading}
        paragraphs={vertical.overviewParagraphs}
        benefitsHeading={vertical.benefitsHeading}
        benefits={vertical.benefits}
      />

      <SolutionHowItWorks
        heading={vertical.howItWorksHeading}
        subheading={vertical.howItWorksSubheading}
        steps={vertical.howItWorksSteps}
        demoIndustry={vertical.demoIndustry}
      />

      <SolutionWhoBenefits
        heading={vertical.whoBenefitsHeading}
        subheading={vertical.whoBenefitsSubheading}
        audiences={vertical.whoBenefits}
      />

      <ComplianceStrip />

      {relatedArticles.length > 0 && <CoverageArticles articles={relatedArticles} industryLabel={vertical.label} />}

      <MarketplaceFAQ faqs={vertical.faqs} />

      <FinalCTA
        heading={`Ready to Grow Your ${vertical.label} Pipeline?`}
        subheading={`Tell us your target volume and delivery preferences — ${vertical.label.toLowerCase()} leads, live warm transfers, or inbound calls — and our team will follow up to confirm availability.`}
        getStartedText={`Most ${vertical.label} campaigns can launch within days.`}
        primaryIndustry={vertical.demoIndustry}
      />
      <Footer />
    </>
  );
}
