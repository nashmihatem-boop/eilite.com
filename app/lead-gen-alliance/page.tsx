import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { CommunityPartnerPaths } from "@/components/sections/CommunityPartnerPaths";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Partner With Eilite — Lead Gen Alliance",
  description:
    "Buy exclusive leads, sell the volume you can't place, or do both — across legal, financial, home services, insurance, and healthcare.",
  alternates: { canonical: "/lead-gen-alliance" },
};

const faqs: FAQItem[] = [
  {
    q: "Can I both buy and sell through one account?",
    a: "Yes. Many affiliates work both sides — buying leads in one vertical while selling excess volume in another — all from a single account and dashboard.",
  },
  {
    q: "Which verticals does Eilite cover?",
    a: "Legal, financial, home services, insurance, and healthcare — the same core categories most Alliance members are already working in.",
  },
  {
    q: "Is there a cost to apply?",
    a: "No. Applying and setting up your account is free — you only pay for leads you buy, or get paid for leads you sell.",
  },
  {
    q: "How fast can I get set up?",
    a: "Most affiliate accounts are approved within days.",
  },
  {
    q: "Do I need to be exclusive to Eilite?",
    a: "No. Many affiliates work with Eilite alongside other buyers and sellers, and use us to maximize their overall payout or lead quality.",
  },
];

export default function LeadGenAlliancePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Lead Gen Alliance Members"
        headline="Built for the"
        highlight="Lead Gen Alliance"
        subheadline="Buy exclusive leads, sell the volume you can't place, or do both — across legal, financial, home services, insurance, and healthcare. Real compliance screening, real payouts, one account."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="/affiliates#apply"
      />

      <CommunityPartnerPaths />

      <MarketplaceOverview
        eyebrow="For Lead Gen Alliance Members"
        heading="A Partner Built for People Already Doing the Work"
        paragraphs={[
          "Eilite works with independent agents, contractors, agencies, and lead providers across legal, financial, home services, insurance, and healthcare — the same categories most of the Alliance is already active in.",
          "Whether you're optimizing acquisition, sitting on leads you can't place, or running both sides of the business, our marketplace connects real buyer demand with real, compliant supply — no black box, no guesswork.",
          "Every lead and transfer runs through the same fraud, consent, and compliance screening regardless of which side of the marketplace you're on, so the standards this community cares about are built into how we operate, not bolted on after the fact.",
        ]}
        benefitsHeading="Why Alliance Members Choose Eilite"
        benefits={[
          "Buy, sell, or both — one account across every vertical",
          "Compliance screening (TCPA, DNC, consent) built into every transaction",
          "Transparent, real-time reporting from your dashboard",
          "No long-term contract or exclusivity requirement",
          "Dedicated support from a team that knows the industry",
        ]}
      />

      <ComplianceStrip />

      <MarketplaceFAQ faqs={faqs} />

      <FinalCTA
        heading="Ready to Partner With Eilite?"
        subheading="Tell us whether you're buying, selling, or both — our team will confirm availability for your vertical and volume."
        getStartedText="Most affiliate accounts are approved within days."
      />
      <Footer />
    </>
  );
}
