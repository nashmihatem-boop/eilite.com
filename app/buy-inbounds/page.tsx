import type { Metadata } from "next";
import { Phone, Radio, ShieldCheck, TrendingUp, Bot, Clock4, Recycle, TrendingDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceProblem } from "@/components/marketplace/MarketplaceProblem";
import { MarketplaceOverview } from "@/components/marketplace/MarketplaceOverview";
import { SolutionHowItWorks } from "@/components/solutions/SolutionHowItWorks";
import { MarketplaceBenefits } from "@/components/marketplace/MarketplaceBenefits";
import { MarketplaceFAQ, type FAQItem } from "@/components/marketplace/MarketplaceFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buy Inbounds",
  description: "Buy live inbound calls across legal, financial, home services, and insurance — validated before they ever reach your line.",
  alternates: { canonical: "/buy-inbounds" },
};

const faqs: FAQItem[] = [
  {
    q: "How is call quality measured?",
    a: "We track duration, caller intent signals, and fraud scoring to ensure only genuine, engaged calls reach your line.",
  },
  {
    q: "What industries can I buy calls for?",
    a: "Legal, financial, home services, and insurance — anywhere consumers are searching and ready to talk.",
  },
  {
    q: "Do you offer ping/post integrations?",
    a: "Yes, for advertisers running high-volume or programmatic call campaigns.",
  },
  {
    q: "How do you prevent fraudulent calls?",
    a: "Every call runs through IPQualityScore and Anura-style fraud detection before it's routed to you.",
  },
];

export default function BuyInboundsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Buy Inbounds",
          description: metadata.description as string,
          url: `${siteConfig.url}/buy-inbounds`,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <MarketplaceHero
        eyebrow="For Advertisers"
        headline="Buy Live"
        highlight="Inbounds"
        subheadline="Pay for engaged conversations, not clicks. Connect directly with callers who are actively searching for your service."
        ctaLabel="Book a Demo Call"
      />
      <MarketplaceProblem
        headline="What Most Inbound Buyers Are"
        highlight="Fighting Against"
        subheadline="Most inbound call traffic is riddled with fraud and dead air. That's not how serious buyers scale."
        items={[
          {
            icon: Bot,
            title: "Bot & Fraudulent Calls",
            detail: "Automated or fake calls designed to burn through your budget without a real caller on the line.",
          },
          {
            icon: Clock4,
            title: "Short, Padded-Duration Calls",
            detail: "Calls stretched to hit a minimum duration with no real conversation taking place.",
          },
          {
            icon: ShieldCheck,
            title: "No DNC/TCPA Screening",
            detail: "Calls routed without compliance checks, putting your business at legal risk.",
          },
          {
            icon: Recycle,
            title: "Recycled Call Traffic",
            detail: "The same caller routed to multiple buyers, diluting your return on every call.",
          },
          {
            icon: Radio,
            title: "Delayed Routing",
            detail: "Calls that sit in a queue instead of connecting the moment a consumer dials in.",
          },
          {
            icon: TrendingDown,
            title: "Paying for Volume, Not Engagement",
            detail: "Buyers pay per call regardless of whether the caller ever actually engages.",
          },
        ]}
      />
      <MarketplaceOverview
        eyebrow="Performance Marketing"
        heading="Performance-Based Inbound Calls for Advertisers"
        paragraphs={[
          "Pay-per-call has become one of the most effective acquisition channels for advertisers who need measurable, intent-driven customers — not just traffic. When a consumer picks up the phone, they've already decided to act.",
          "Eilite connects advertisers across insurance, home services, financial, and legal verticals with live, screened inbound calls from a nationwide network of publishers — backed by real-time fraud and compliance screening on every call.",
          "Whether you're running a single campaign or a full call program, our team gives you the routing flexibility, quality controls, and reporting to scale with confidence.",
        ]}
        benefitsHeading="Benefits for Advertisers"
        benefits={[
          "Pay for engaged conversations, not raw call volume",
          "Reduce acquisition costs with performance-based pricing",
          "Scale distribution across a vetted publisher network",
          "Protect lead quality with real-time fraud and compliance screening",
          "Track every call with transparent, real-time reporting",
        ]}
      />
      <SolutionHowItWorks
        heading="From Dialed Number to Ringing Line"
        subheading="A straightforward pipeline built around your call criteria — you tell us what you want, we screen and route."
        demoIndustry=""
        steps={[
          {
            title: "Tell Us Your Line & Criteria",
            detail: "Give us the industry, geography, and call volume you want to receive — we route around your existing phone setup.",
          },
          {
            title: "We Screen for Fraud & Compliance",
            detail: "Every call runs through IPQualityScore-style fraud detection and DNC/TCPA screening before it's routed.",
          },
          {
            title: "Calls Ring Your Line Live",
            detail: "Genuine callers connect to your team the moment they dial in — no queue, no delay.",
          },
          {
            title: "Pay for Engagement, Not Volume",
            detail: "Billing is tied to real call duration and quality, tracked transparently in your dashboard.",
          },
        ]}
      />
      <MarketplaceBenefits
        eyebrow="Why Buy From Eilite"
        heading="Inbounds Built to"
        highlight="Actually Convert"
        tone="white"
        items={[
          {
            icon: Phone,
            title: "Real-Time Delivery",
            detail: "Calls are routed to your line the moment a consumer dials in.",
          },
          {
            icon: ShieldCheck,
            title: "Fraud & Compliance Screened",
            detail: "IPQualityScore and DNC scrubbing run before every call connects.",
          },
          {
            icon: Radio,
            title: "Ping/Post Options",
            detail: "Dynamic routing available for high-volume, programmatic call flow.",
          },
          {
            icon: TrendingUp,
            title: "Pay for Engagement",
            detail: "Billing tied to genuine call duration and quality, not raw volume.",
          },
        ]}
      />
      <MarketplaceFAQ faqs={faqs} />
      <FinalCTA
        heading="Ready to Start Taking Inbound Calls?"
        subheading="Tell us your industry, target volume, and call handling capacity — inbound calls route straight to your team from consumers already reaching out."
        getStartedText="Most inbound campaigns can launch within days."
      />
      <Footer />
    </>
  );
}
