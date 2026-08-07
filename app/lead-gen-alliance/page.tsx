import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { CommunityPartnerPaths } from "@/components/sections/CommunityPartnerPaths";
import { AffiliateRevenue } from "@/components/sections/AffiliateRevenue";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { AffiliateApplyForm } from "@/components/sections/AffiliateApplyForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import { OfferSelectionProvider } from "@/lib/offer-selection-context";

export const metadata: Metadata = {
  title: "Partner With Eilite — Lead Gen Alliance",
  description:
    "We're ready to help Lead Gen Alliance members monetize and grow — buy exclusive leads, sell what you can't place, or do both.",
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
      <JsonLd
        data={serviceJsonLd({
          name: "Lead Gen Alliance Partner Program",
          description: metadata.description as string,
          url: `${siteConfig.url}/lead-gen-alliance`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Lead Gen Alliance Members"
        headline="We're Ready to Help You"
        highlight="Monetize and Grow"
        subheadline="Whatever you're generating — leads, warm transfers, or inbound calls — we'll help you turn it into consistent profit. Buy, sell, or do both, across legal, financial, home services, insurance, and healthcare."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="#apply"
      />

      <OfferSelectionProvider>
        <CommunityPartnerPaths />

        <AffiliateRevenue />

        <ComplianceStrip />

        <MarketplaceFAQ faqs={faqs} />

        <AffiliateApplyForm />
      </OfferSelectionProvider>
      <Footer />
    </>
  );
}
