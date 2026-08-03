import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { AffiliateBenefits } from "@/components/sections/AffiliateBenefits";
import { AffiliateRevenue } from "@/components/sections/AffiliateRevenue";
import { AffiliateSetupOptions } from "@/components/sections/AffiliateSetupOptions";
import { AffiliateCategories } from "@/components/sections/AffiliateCategories";
import { AffiliateApplyForm } from "@/components/sections/AffiliateApplyForm";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Join Eilite's pay-per-lead and pay-per-call affiliate program across legal, financial, home services, and insurance — not just one industry.",
  alternates: { canonical: "/affiliates" },
};

export default function AffiliatesPage() {
  return (
    <>
      <Navbar />
      <MarketplaceHero
        eyebrow="Pay-Per-Lead & Pay-Per-Call Affiliate Program"
        headline="Join the Top-Paying Affiliate Program Across"
        highlight="Every Industry We Serve"
        subheadline="Generating quality leads or calls in legal, financial, home services, or insurance? Our network of buyers helps you get better monetization on your traffic — across every vertical, not just one."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="#apply"
      />
      <AffiliateBenefits />
      <AffiliateRevenue />
      <AffiliateSetupOptions />
      <AffiliateCategories />
      <AffiliateApplyForm />
      <Footer />
    </>
  );
}
