import type { Metadata } from "next";
import { FileCheck, ShieldCheck, Ban, Layers, Users, Recycle, Map, TrendingDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceProblem } from "@/components/marketplace/MarketplaceProblem";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Buy Leads",
  description: "Buy exclusive, verified leads across legal, financial, home services, and insurance — vetted before they ever reach you.",
  alternates: { canonical: "/buy-leads" },
};

const faqs: FAQItem[] = [
  {
    q: "What industries can I buy leads for?",
    a: "Legal (MVA, accidents), financial (loans, debt consolidation), home services (solar, roofing, HVAC), and insurance (auto, health, Medicare).",
  },
  {
    q: "Are leads exclusive to me?",
    a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors.",
  },
  {
    q: "How are leads verified?",
    a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy before delivery.",
  },
  {
    q: "Can I combine leads with warm transfers?",
    a: "Yes. Many advertisers use a mix of web-form leads and live warm transfers to balance volume with conversion speed.",
  },
];

export default function BuyLeadsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Advertisers"
        headline="Buy Exclusive,"
        highlight="Verified Leads"
        subheadline="Get access to high-intent leads tailored to your industry — vetted, targeted, and delivered once, never resold to your competitors."
        ctaLabel="Book a Demo Call"
      />
      <MarketplaceProblem
        headline="What Most Lead Buyers Are"
        highlight="Fighting Against"
        subheadline="Most businesses buying leads are stuck fighting shared contacts and stale data. That's not how serious buyers scale."
        items={[
          {
            icon: Users,
            title: "Shared Leads",
            detail: "The same lead sold to 5 buyers simultaneously. By the time you call, they've already spoken to your competitors.",
          },
          {
            icon: Ban,
            title: "Fake Contact Info",
            detail: "Unverified phone numbers and emails that bounce or never pick up — you pay for leads that go nowhere.",
          },
          {
            icon: FileCheck,
            title: "Low-Intent Submissions",
            detail: "Generic form fills from people who clicked an ad and never seriously considered your service.",
          },
          {
            icon: Recycle,
            title: "Recycled Inventory",
            detail: "Old leads repackaged and resold months after the prospect already moved on.",
          },
          {
            icon: Map,
            title: "No Exclusivity",
            detail: "Without exclusivity, every dollar you spend sharpens your competitor's edge too.",
          },
          {
            icon: TrendingDown,
            title: "Paying for Volume, Not Value",
            detail: "Buyers end up paying for lead count instead of real opportunities that convert.",
          },
        ]}
      />
      <MarketplaceOverview
        eyebrow="Performance Marketing"
        heading="Performance-Based Leads for Advertisers"
        paragraphs={[
          "Performance marketing has become essential for advertisers who need predictable customer acquisition at scale — with full control over cost, volume, and quality.",
          "Eilite gives advertisers across legal, financial, home services, and insurance access to verified, high-intent lead flow — validated in real time before it ever reaches your team.",
          "From fixed-volume buys to flexible delivery, our team works with you to connect the right traffic to your business while meeting the compliance standards your industry demands.",
        ]}
        benefitsHeading="Benefits for Lead Buyers"
        benefits={[
          "Access verified, high-intent leads across every industry we serve",
          "Leads validated in real time before they ever reach you",
          "Monitor performance with transparent, real-time reporting",
          "Scale volume up or down as your business grows",
          "Work with a network built for TCPA and DNC compliance",
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Buy From Eilite"
        heading="Leads Built to"
        highlight="Maximize ROI"
        tone="white"
        items={[
          {
            icon: FileCheck,
            title: "Confirmed Before Delivery",
            detail: "Every lead is confirmed by our call center before it ever reaches your team.",
          },
          {
            icon: ShieldCheck,
            title: "TCPA & DNC Compliant",
            detail: "Screened against Jornaya, TrustedForm, and DNC litigator lists before delivery.",
          },
          {
            icon: Ban,
            title: "Never Resold",
            detail: "Each lead is sold once — to you. No bulk resale, no shared contacts.",
          },
          {
            icon: Layers,
            title: "Every Industry We Serve",
            detail: "Legal, financial, home services, and insurance leads from one trusted hub.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA />
      <Footer />
    </>
  );
}
