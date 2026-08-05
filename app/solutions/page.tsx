import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import { solutionVerticals } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Lead Generation Solutions by Industry",
  description:
    "Exclusive, verified leads and live warm transfers for home service contractors, insurance agents, and B2B software companies — browse solutions by industry.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Solutions", url: `${siteConfig.url}/solutions` },
        ])}
      />
      <Navbar />
      <MarketplaceHero
        eyebrow="Solutions"
        headline="Lead Generation Built"
        highlight="for Your Industry"
        subheadline="From roofing crews to insurance agents to B2B software teams — every solution below is exclusive leads, verified before delivery, filtered to the work you actually want."
        ctaLabel="Book a Demo Call"
      />
      <SolutionsGrid verticals={solutionVerticals} />
      <FinalCTA />
      <Footer />
    </>
  );
}
