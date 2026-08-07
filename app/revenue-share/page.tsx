import type { Metadata } from "next";
import { Layers, ShieldCheck, LayoutDashboard, Repeat } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { RevShareEconomics } from "@/components/sections/RevShareEconomics";
import { SolutionHowItWorks } from "@/components/solutions/SolutionHowItWorks";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { ComplianceStrip } from "@/components/sections/ComplianceStrip";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "40% Revenue Share Program",
  description:
    "Send unsold leads to Eilite. We scrub them for compliance, work them through our call center, and pay you 40% revenue share on every sale.",
  alternates: { canonical: "/revenue-share" },
};

const faqs: FAQItem[] = [
  {
    q: "What counts as an \"unsold\" lead?",
    a: "Any lead you generated but couldn't place — rejected by a buyer, outside your current campaigns, or just excess volume you don't have a home for.",
  },
  {
    q: "Do I get paid if a lead never converts?",
    a: "No. Revenue share is paid only on completed sales — a warm transfer or call we successfully sell to a buyer — never on leads simply submitted.",
  },
  {
    q: "Is this a separate account from my regular affiliate account?",
    a: "No. Revenue share runs through the same affiliate account and dashboard you already use — no separate signup or new integration.",
  },
  {
    q: "How is compliance handled?",
    a: "Every lead is screened against Jornaya, TrustedForm, MaxMind, the TCPA Litigator List, and DNC.com before it's ever worked by an agent.",
  },
  {
    q: "Which industries qualify?",
    a: "Legal, financial, home services, insurance, and healthcare — the same verticals we buy across everywhere else on Eilite.",
  },
];

export default function RevenueSharePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "40% Revenue Share Program",
          description: metadata.description as string,
          url: `${siteConfig.url}/revenue-share`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Affiliates"
        headline="Your Unsold Leads,"
        highlight="Turned Into Revenue"
        subheadline="Send us the leads you couldn't sell or use. We scrub them for compliance, work them through our own call center, and pay you 40% revenue share on every warm transfer or call we close."
        ctaLabel="Apply Now — Start Earning"
        ctaHref="/affiliates#apply"
      />

      <RevShareEconomics />

      <SolutionHowItWorks
        heading="From Unsold Lead to Paid Transfer"
        subheading="A straightforward pipeline for your excess or unsold leads — you send them, we do the rest."
        demoIndustry="Revenue Share"
        steps={[
          {
            title: "Send Us Your Unsold Leads",
            detail: "Route the leads you can't sell or use to us — no minimum volume, no separate integration to build.",
          },
          {
            title: "We Scrub for Compliance",
            detail: "Every lead is checked against consent, TCPA, and Do-Not-Call records before an agent ever touches it, so your unsold inventory doesn't become a liability.",
          },
          {
            title: "Our Team Works the Leads",
            detail: "Cleared leads are routed into our own call center, where trained agents make contact and complete warm transfers into active buyer campaigns.",
          },
          {
            title: "Track Results in Your Dashboard",
            detail: "Every completed transfer shows up in your affiliate dashboard, so you can monitor outcomes and payouts in real time — never a black box.",
          },
        ]}
      />

      <MarketplaceBenefits
        eyebrow="Why Partner With Us"
        heading="Built for Affiliates Sitting on"
        highlight="Unsold Volume"
        tone="alt"
        items={[
          {
            icon: Layers,
            title: "Monetize What You'd Otherwise Write Off",
            detail: "Turn leads that didn't convert or that you couldn't use into a new, ongoing revenue line — without changing how you generate them.",
          },
          {
            icon: ShieldCheck,
            title: "Compliance Handled Before It's Worked",
            detail: "Consent and Do-Not-Call scrubbing happens before any lead reaches a calling agent, reducing your exposure on inventory you've already tried to sell.",
          },
          {
            icon: LayoutDashboard,
            title: "Full Visibility, Not a Black Box",
            detail: "Your affiliate dashboard shows exactly what's happening with your leads — call outcomes, transfer status, and payout — as it happens.",
          },
          {
            icon: Repeat,
            title: "Runs Through Your Existing Account",
            detail: "No separate application or new integration — revenue share runs through the same affiliate account you already use.",
          },
        ]}
      />

      <ComplianceStrip />

      <MarketplaceFAQ faqs={faqs} />

      <FinalCTA
        heading="Ready to Monetize Your Unsold Leads?"
        subheading="Tell us your vertical and volume — our team will walk you through onboarding and revenue share terms."
        getStartedText="Most affiliate accounts are approved within days."
        primaryCta="Apply Now — Start Earning"
      />
      <Footer />
    </>
  );
}
