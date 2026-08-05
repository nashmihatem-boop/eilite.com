import type { Metadata } from "next";
import { PhoneCall, Users, Zap, ShieldCheck, PhoneOff, Clock, Ban, TrendingDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceProblem } from "@/components/marketplace/MarketplaceProblem";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buy Warm Transfers",
  description: "Buy live warm transfers across legal, financial, home services, and insurance — pre-qualified prospects connected to your team in real time.",
  alternates: { canonical: "/buy-warm-transfers" },
};

const faqs: FAQItem[] = [
  {
    q: "What's the difference between a warm transfer and a lead?",
    a: "A warm transfer is a live phone call with a pre-qualified prospect, connected in real time. A lead is a web-form submission you follow up on afterward.",
  },
  {
    q: "Which industries offer warm transfers?",
    a: "Legal, financial, home services, and insurance — anywhere speed to contact drives conversion.",
  },
  {
    q: "How is transfer quality verified?",
    a: "Every transfer runs through the same validation pipeline as our leads: fraud screening, consent verification, and TCPA/DNC compliance checks.",
  },
  {
    q: "Can I set volume limits?",
    a: "Yes. Our team works with you to scale transfer volume up or down based on your team's capacity.",
  },
];

export default function BuyWarmTransfersPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Buy Warm Transfers",
          description: metadata.description as string,
          url: `${siteConfig.url}/buy-warm-transfers`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Advertisers"
        headline="Buy Live"
        highlight="Warm Transfers"
        subheadline="Connect directly with ready-to-convert customers in real time. No cold outreach, no delay between interest and conversation."
        ctaLabel="Book a Demo Call"
      />
      <MarketplaceProblem
        headline="What Most Warm Transfer Buyers Are"
        highlight="Fighting Against"
        subheadline="Most 'warm transfers' on the market aren't actually warm. That's not how serious buyers scale."
        items={[
          {
            icon: PhoneOff,
            title: "Fake Warm Transfers",
            detail: "Calls labeled 'warm' that are really cold outreach with no real screening beforehand.",
          },
          {
            icon: Ban,
            title: "Unqualified Callers",
            detail: "Prospects connected without confirming real intent, wasting your team's time on dead-end calls.",
          },
          {
            icon: Clock,
            title: "Delayed Connections",
            detail: "A 'live' transfer that sits on hold or drops before it ever reaches your team.",
          },
          {
            icon: Users,
            title: "Shared Transfers",
            detail: "The same prospect connected to multiple buyers at once, undercutting your close rate.",
          },
          {
            icon: ShieldCheck,
            title: "No Compliance Screening",
            detail: "Transfers with no TCPA or DNC checks, exposing your business to real legal risk.",
          },
          {
            icon: TrendingDown,
            title: "Paying for Connections, Not Conversations",
            detail: "Buyers pay per transfer regardless of whether a real conversation ever happens.",
          },
        ]}
      />
      <MarketplaceOverview
        eyebrow="Performance Marketing"
        heading="Performance-Based Warm Transfers for Advertisers"
        paragraphs={[
          "Live warm transfers have become one of the most effective acquisition channels for advertisers who need conversations, not just contacts. When a prospect is already on the line, speed to conversation decides who wins the sale.",
          "Eilite connects advertisers across legal, financial, home services, and insurance with pre-qualified, screened callers — routed live from a nationwide network of publishers, backed by real-time compliance screening on every transfer.",
          "Whether you're running a single campaign or a full transfer program, our team gives you the routing flexibility, quality controls, and reporting to scale with confidence.",
        ]}
        benefitsHeading="Benefits for Advertisers"
        benefits={[
          "Connect with pre-qualified prospects while intent is highest",
          "Reduce wasted outreach with performance-based pricing",
          "Scale distribution across a vetted publisher network",
          "Protect call quality with real-time compliance screening",
          "Track every transfer with transparent, real-time reporting",
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Buy From Eilite"
        heading="Built for"
        highlight="Speed to Contact"
        tone="white"
        items={[
          {
            icon: PhoneCall,
            title: "Live, Not Static",
            detail: "The prospect is on the phone, already screened, before the call ever reaches you.",
          },
          {
            icon: Zap,
            title: "No Delay",
            detail: "No form sitting in an inbox — the transfer happens while intent is highest.",
          },
          {
            icon: Users,
            title: "Pre-Qualified Interest",
            detail: "Every transfer is screened for genuine interest before it's connected.",
          },
          {
            icon: ShieldCheck,
            title: "Compliance Built In",
            detail: "Every call runs through TCPA and DNC screening before it connects.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA
        heading="Ready to Start Taking Live Warm Transfers?"
        subheading="Tell us your industry, target volume, and call capacity — transfers connect live, pre-qualified, and exclusive to your sales team."
        getStartedText="Most warm transfer campaigns can launch within days."
      />
      <Footer />
    </>
  );
}
