import type { Metadata } from "next";
import { DollarSign, Radio, Phone, LayoutDashboard } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sell Inbounds",
  description: "Sell your inbound call traffic to Eilite — monetize every call across legal, financial, home services, and insurance.",
  alternates: { canonical: "/sell-inbounds" },
};

const faqs: FAQItem[] = [
  {
    q: "What call volume do I need to get started?",
    a: "There's no strict minimum — we work with publishers of every size across long-tail and high-volume traffic alike.",
  },
  {
    q: "Which industries can I sell calls for?",
    a: "Legal, financial, home services, and insurance, with coverage expanding regularly.",
  },
  {
    q: "How is call fraud handled?",
    a: "Every call is screened for fraud and duplicate activity before it's counted toward payout.",
  },
  {
    q: "Can I use my own call tracking?",
    a: "Yes. We support both our dashboard-issued numbers and integration with your existing call tracking setup.",
  },
];

export default function SellInboundsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Publishers"
        headline="Sell Your Inbound"
        highlight="Traffic to Eilite"
        subheadline="Monetize every inbound call you generate across legal, financial, home services, and insurance — with the widest buyer coverage in the industry."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="/affiliates#apply"
      />
      <MarketplaceOverview
        eyebrow="Affiliate Program"
        heading="Affiliate Program for Pay-Per-Call Publishers"
        paragraphs={[
          "Eilite operates one of the most active pay-per-call buyer networks in the industry. Publishers driving calls through search, social, display, or call center traffic are essential partners to the brands we serve.",
          "We invest in publisher success with real-time reporting, dedicated account support, and routing built to match your traffic with the right buyers across every vertical we serve.",
          "Whether you're just getting started or scaling an established call program, our team helps you optimize performance and grow revenue with brands that value quality and long-term partnerships.",
        ]}
        benefitsHeading="Why Publishers Choose Eilite"
        benefits={[
          "Access to live campaigns across every industry we serve",
          "Real-time tracking and reporting on every call",
          "Transparent performance metrics and payout visibility",
          "Monitored compliance systems that protect your traffic",
          "Dedicated account support to help you grow call volume",
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Sell to Eilite"
        heading="Monetize Every"
        highlight="Call You Generate"
        tone="white"
        items={[
          {
            icon: DollarSign,
            title: "Highest Payouts",
            detail: "Access thousands of buyers through one account for stronger per-call payouts.",
          },
          {
            icon: Radio,
            title: "Ping/Post Ready",
            detail: "Dynamic integrations available for high-volume, programmatic call traffic.",
          },
          {
            icon: Phone,
            title: "Trackable Numbers",
            detail: "Get call-tracking numbers straight from your dashboard.",
          },
          {
            icon: LayoutDashboard,
            title: "Real-Time Reporting",
            detail: "Monitor call volume, quality, and payouts as they happen.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}
