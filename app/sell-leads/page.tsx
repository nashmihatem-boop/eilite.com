import type { Metadata } from "next";
import { DollarSign, LayoutDashboard, Layers, Headset } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sell Leads",
  description: "Sell your lead traffic to Eilite — the industry's biggest buyer across legal, financial, home services, and insurance.",
  alternates: { canonical: "/sell-leads" },
};

const faqs: FAQItem[] = [
  {
    q: "What kind of lead traffic can I sell?",
    a: "Legal, financial, home services, and insurance lead traffic — form submissions and ping/post feeds.",
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
];

export default function SellLeadsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Sell Leads",
          description: metadata.description as string,
          url: `${siteConfig.url}/sell-leads`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Affiliates"
        headline="Sell Your Leads to"
        highlight="the Biggest Buyer"
        subheadline="Monetize your lead traffic across legal, financial, home services, and insurance — with competitive payouts and real-time reporting."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="/affiliates#apply"
      />
      <MarketplaceOverview
        eyebrow="Affiliate Program"
        heading="Affiliate Program for Lead Sellers"
        paragraphs={[
          "Eilite gives affiliates a direct path to buyer demand across legal, financial, home services, and insurance — without juggling separate relationships for every vertical.",
          "Our Ping/Post and direct integration options give you routing flexibility and real-time delivery, so your traffic is matched with the right buyer the moment a lead is captured.",
          "We support affiliates with onboarding, campaign matching, and ongoing optimization — so you can focus on traffic quality while we handle buyer demand.",
        ]}
        benefitsHeading="Why Lead Sellers Choose Eilite"
        benefits={[
          "Buyer demand across every industry we serve",
          "Ping/Post and direct integration to maximize lead value",
          "Transparent reporting, caps, and payout tracking",
          "Dedicated affiliate support and account management",
          "Compliance monitoring across every submission",
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Sell to Eilite"
        heading="Higher Payouts,"
        highlight="Every Vertical"
        tone="white"
        items={[
          {
            icon: DollarSign,
            title: "Competitive Payouts",
            detail: "We offer strong payouts and EPLs through relationships with thousands of buyers.",
          },
          {
            icon: LayoutDashboard,
            title: "Transparent Reporting",
            detail: "24/7 access to your account, performance data, and exports.",
          },
          {
            icon: Layers,
            title: "One Account, Four Verticals",
            detail: "Send lead traffic across legal, financial, home services, and insurance from a single account.",
          },
          {
            icon: Headset,
            title: "Dedicated Support",
            detail: "Our affiliate team helps you optimize conversion rate and revenue per lead.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA
        heading="Ready to Start Monetizing Your Traffic?"
        subheading="Tell us your traffic source, industry, and volume — we'll match you with buyers ready to pay for compliant, high-converting leads."
        getStartedText="Most affiliate accounts are approved within days."
      />
      <Footer />
    </>
  );
}
