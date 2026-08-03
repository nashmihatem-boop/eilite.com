import type { Metadata } from "next";
import { DollarSign, PhoneCall, ShieldCheck, Headset } from "lucide-react";
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
  title: "Sell Warm Transfers",
  description: "Sell your warm transfer traffic to Eilite — get paid for real, live conversations across every industry we serve.",
  alternates: { canonical: "/sell-warm-transfers" },
};

const faqs: FAQItem[] = [
  {
    q: "What makes a transfer 'warm'?",
    a: "The caller has already expressed genuine interest and is connected live, rather than being a cold or recycled contact.",
  },
  {
    q: "Which industries can I sell transfers for?",
    a: "Legal, financial, home services, and insurance — anywhere live conversation drives conversion.",
  },
  {
    q: "Do you provide the phone infrastructure?",
    a: "Yes. Trackable phone numbers are available from your dashboard and route to our call center or buyer network.",
  },
  {
    q: "How is transfer quality tracked?",
    a: "Call duration, outcome, and compliance are all tracked to ensure fair, transparent payouts.",
  },
];

export default function SellWarmTransfersPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Publishers"
        headline="Sell Warm Transfers,"
        highlight="Get Paid for Real Calls"
        subheadline="Route your qualified, live phone traffic to Eilite and get paid for genuine conversations — not just clicks or form fills."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="/affiliates#apply"
      />
      <MarketplaceOverview
        eyebrow="Affiliate Program"
        heading="Affiliate Program for Warm Transfer Sellers"
        paragraphs={[
          "Eilite connects publishers routing live, qualified calls with buyer demand across legal, financial, home services, and insurance — so you get paid for real conversations, not just connected calls.",
          "Our owned call center and buyer network give your live transfers the highest chance of converting, backed by real-time compliance screening on every call.",
          "We support publishers with onboarding, transfer quality feedback, and ongoing optimization — helping you grow revenue per transfer over time.",
        ]}
        benefitsHeading="Why Publishers Choose Eilite"
        benefits={[
          "Get paid for real, engaged conversations",
          "Route to our owned call center or wider buyer network",
          "Transparent reporting on every transfer",
          "Compliance handled so your traffic stays protected",
          "Dedicated affiliate support to improve transfer quality",
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Sell to Eilite"
        heading="Revenue for"
        highlight="Real Conversations"
        tone="white"
        items={[
          {
            icon: DollarSign,
            title: "Paid for Quality",
            detail: "Get paid for genuine, engaged transfers — not just call volume.",
          },
          {
            icon: PhoneCall,
            title: "Owned Call Center",
            detail: "Route to our owned call center for the highest conversion on your traffic.",
          },
          {
            icon: ShieldCheck,
            title: "Compliance Handled",
            detail: "We manage TCPA and DNC screening so your traffic stays protected.",
          },
          {
            icon: Headset,
            title: "Affiliate Support",
            detail: "Our team helps you improve transfer quality and revenue per call.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}
