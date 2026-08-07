import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { AffiliateBenefits } from "@/components/sections/AffiliateBenefits";
import { AffiliateRevenue } from "@/components/sections/AffiliateRevenue";
import { AffiliateSetupOptions } from "@/components/sections/AffiliateSetupOptions";
import { AffiliateCategories } from "@/components/sections/AffiliateCategories";
import { AffiliateApplyForm } from "@/components/sections/AffiliateApplyForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Join Eilite's pay-per-lead and pay-per-call affiliate program across legal, financial, home services, and insurance — not just one industry.",
  alternates: { canonical: "/affiliates" },
};

const faqs: FAQItem[] = [
  {
    q: "Which industries can I send traffic for?",
    a: "Legal, financial, home services, insurance, and healthcare — form submissions and ping/post feeds across every vertical we serve, all from one account.",
  },
  {
    q: "How quickly do I get paid?",
    a: "Payout schedules are set during onboarding and tracked in real time through your dashboard.",
  },
  {
    q: "Do I need to be exclusive to Eilite?",
    a: "No. Many affiliates work with Eilite alongside other buyers and use us to maximize their overall payout per lead.",
  },
  {
    q: "What compliance standards do I need to meet?",
    a: "Your traffic must meet TCPA and consent requirements. Our team will walk you through compliance during onboarding.",
  },
  {
    q: "Do I need an EIN to apply?",
    a: "No. We ask during the application because it helps us set your account up correctly, but you can apply without one.",
  },
  {
    q: "Can I apply if I'm outside the U.S.?",
    a: "Yes. Our application supports affiliates from any country — just select yours when you apply.",
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
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
      <MarketplaceFAQ faqs={faqs} />
      <AffiliateApplyForm />
      <Footer />
    </>
  );
}
