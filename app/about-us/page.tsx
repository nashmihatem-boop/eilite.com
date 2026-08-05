import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { StatStrip } from "@/components/sections/StatStrip";
import { AboutStory } from "@/components/sections/AboutStory";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { BrandsStrip } from "@/components/sections/BrandsStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Eilite has connected law firms, insurers, financial brands, and contractors with verified leads and live warm transfers since 2010 — real people, exclusive leads, transparent reporting.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <MarketplaceHero
        eyebrow="About Eilite"
        headline="The Hub Behind"
        highlight="Four Industries' Growth"
        subheadline="Since 2010, Eilite has connected law firms, insurers, financial brands, and contractors with real, high-intent customers — through premium leads and live warm transfers, all vetted, verified, and built to convert."
        ctaLabel="Book a Demo Call"
      />
      <StatStrip />
      <AboutStory />
      <TrustPillars />
      <BrandsStrip />
      <FinalCTA
        heading="Ready to Work With a Real Team?"
        subheading="Tell us your industry and volume — you'll get a named account manager, not a support ticket queue, from the first conversation."
        getStartedText="Most accounts are onboarded within days."
      />
      <Footer />
    </>
  );
}
