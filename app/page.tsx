import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandsStrip } from "@/components/sections/BrandsStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { ResultsBand } from "@/components/sections/ResultsBand";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { PlatformHub } from "@/components/sections/PlatformHub";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { AudienceGrid } from "@/components/sections/AudienceGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";
import { homeFaqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Navbar />
      <Hero />
      <BrandsStrip />
      <ProblemSection />
      <ProductSplit />
      <ResultsBand />
      <WhoWeAre />
      <PlatformHub />
      <ComplianceStrip />
      <TrustPillars />
      <AudienceGrid />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </>
  );
}
