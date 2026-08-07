export type CoverageIndustry = {
  slug: string;
  label: string;
  highlight: string;
  tagline: string;
  subheadline: string;
  searchChips: string[];
  demoIndustry: string;
  articleCategories: string[];
  sourcingParagraphs: string[];
  sourcingBenefits: string[];
  faqs: { q: string; a: string }[];
};

export const coverageIndustries: CoverageIndustry[] = [
  {
    slug: "legal",
    label: "Legal",
    highlight: "state by state",
    tagline: "Legal leads, transfers & calls,",
    subheadline: "Mass tort, personal injury, and consumer legal intake across high-value case types.",
    searchChips: ["car accident lawyer near me", "personal injury attorney", "workers comp claim help"],
    demoIndustry: "Legal",
    articleCategories: ["Legal Leads", "Personal Injury", "Personal Injury Marketing", "Divorce & Family Law", "Family Law", "Immigration Law"],
    sourcingParagraphs: [
      "Legal demand across the country is captured on our owned-and-operated landing pages, sourced from a limited set of vetted top-tier publishers, or generated directly through paid-search campaigns targeting active legal intent — never aggregators or resold lists.",
      "Every campaign is configured against your specific practice area, case criteria, and target states before a single lead is delivered.",
    ],
    sourcingBenefits: [
      "Access verified, high-intent legal leads across every practice area we serve",
      "Leads validated in real time before they ever reach your intake team",
      "Scale volume up or down as your firm's capacity changes",
      "Work with a network built for TCPA and DNC compliance",
    ],
    faqs: [
      { q: "Do you have legal coverage nationwide?", a: "Yes. We source legal leads, warm transfers, and inbound calls across all 50 states and DC, subject to current campaign availability in each market." },
      { q: "Are legal leads exclusive to me?", a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors." },
      { q: "How fast is delivery?", a: "Web form leads are delivered in real time as they're generated. Warm transfers and inbound calls connect live, the moment a prospect is ready to talk." },
      { q: "Can I target specific states or case types?", a: "Yes. Campaigns are configured around your specific states, case types, and volume needs before launch." },
      { q: "How are leads verified?", a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy." },
      { q: "How do I get started?", a: "Book a demo call and our team will confirm current availability for your target states and case types." },
    ],
  },
  {
    slug: "financial",
    label: "Financial",
    highlight: "state by state",
    tagline: "Financial leads, transfers & calls,",
    subheadline: "Debt relief, mortgage, and personal lending consumers actively seeking a qualified provider.",
    searchChips: ["debt relief help", "refinance my mortgage", "personal loan online"],
    demoIndustry: "Financial Services",
    articleCategories: ["Financial Leads"],
    sourcingParagraphs: [
      "Financial demand across the country is captured on our owned-and-operated landing pages, sourced from a limited set of vetted top-tier publishers, or generated directly through paid-search campaigns targeting active financial intent — never aggregators or resold lists.",
      "Every campaign is configured against your specific product line, credit criteria, and target states before a single lead is delivered.",
    ],
    sourcingBenefits: [
      "Access verified, high-intent financial leads across debt, lending, and mortgage products",
      "Leads validated in real time before they ever reach your team",
      "Scale volume up or down as your business grows",
      "Work with a network built for TCPA and DNC compliance",
    ],
    faqs: [
      { q: "Do you have financial coverage nationwide?", a: "Yes. We source financial leads, warm transfers, and inbound calls across all 50 states and DC, subject to current campaign availability in each market." },
      { q: "Are financial leads exclusive to me?", a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors." },
      { q: "How fast is delivery?", a: "Web form leads are delivered in real time as they're generated. Warm transfers and inbound calls connect live, the moment a prospect is ready to talk." },
      { q: "Can I target specific states or products?", a: "Yes. Campaigns are configured around your specific states, product lines, and volume needs before launch." },
      { q: "How are leads verified?", a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy." },
      { q: "How do I get started?", a: "Book a demo call and our team will confirm current availability for your target states and products." },
    ],
  },
  {
    slug: "insurance",
    label: "Insurance",
    highlight: "state by state",
    tagline: "Insurance leads, transfers & calls,",
    subheadline: "Auto, home, health, and Medicare shoppers ready to compare quotes and switch carriers.",
    searchChips: ["auto insurance quotes", "medicare advantage plans", "life insurance quote"],
    demoIndustry: "Insurance",
    articleCategories: ["Insurance", "Medicare Leads"],
    sourcingParagraphs: [
      "Insurance demand across the country is captured on our owned-and-operated landing pages, sourced from a limited set of vetted top-tier publishers, or generated directly through paid-search campaigns targeting active insurance intent — never aggregators or resold lists.",
      "Every campaign is configured against your specific product line, licensing states, and target volume before a single lead is delivered.",
    ],
    sourcingBenefits: [
      "Access verified, high-intent insurance leads across auto, home, health, and Medicare",
      "Leads validated in real time before they ever reach your agents",
      "Scale volume up or down as your book of business grows",
      "Work with a network built for TCPA and DNC compliance",
    ],
    faqs: [
      { q: "Do you have insurance coverage nationwide?", a: "Yes. We source insurance leads, warm transfers, and inbound calls across all 50 states and DC, subject to current campaign availability and your licensing footprint." },
      { q: "Are insurance leads exclusive to me?", a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors." },
      { q: "How fast is delivery?", a: "Web form leads are delivered in real time as they're generated. Warm transfers and inbound calls connect live, the moment a prospect is ready to talk." },
      { q: "Can I target specific states or product lines?", a: "Yes. Campaigns are configured around your specific licensed states, product lines, and volume needs before launch." },
      { q: "How are leads verified?", a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy." },
      { q: "How do I get started?", a: "Book a demo call and our team will confirm current availability for your licensed states and product lines." },
    ],
  },
  {
    slug: "home-services",
    label: "Home Services",
    highlight: "state by state",
    tagline: "Home services leads, transfers & calls,",
    subheadline: "Roofing, solar, HVAC, and remodeling homeowners ready to talk to a contractor.",
    searchChips: ["roof replacement near me", "solar panel installation", "hvac repair emergency"],
    demoIndustry: "Home Services",
    articleCategories: ["Home Services Marketing", "Home Services"],
    sourcingParagraphs: [
      "Home services demand across the country is captured on our owned-and-operated landing pages, sourced from a limited set of vetted top-tier publishers, or generated directly through paid-search campaigns targeting active homeowner intent — never aggregators or resold lists.",
      "Every campaign is configured against your specific trade, service area, and target volume before a single lead is delivered.",
    ],
    sourcingBenefits: [
      "Access verified, high-intent home services leads across every trade we serve",
      "Leads validated in real time before they ever reach your crew",
      "Scale volume up or down as your business grows",
      "Work with a network built for TCPA and DNC compliance",
    ],
    faqs: [
      { q: "Do you have home services coverage nationwide?", a: "Yes. We source home services leads, warm transfers, and inbound calls across all 50 states and DC, subject to current campaign availability in each market." },
      { q: "Are home services leads exclusive to me?", a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors." },
      { q: "How fast is delivery?", a: "Web form leads are delivered in real time as they're generated. Warm transfers and inbound calls connect live, the moment a prospect is ready to talk." },
      { q: "Can I target specific states or trades?", a: "Yes. Campaigns are configured around your specific service area, trade, and volume needs before launch." },
      { q: "How are leads verified?", a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy." },
      { q: "How do I get started?", a: "Book a demo call and our team will confirm current availability for your service area and trade." },
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    highlight: "state by state",
    tagline: "Healthcare leads, transfers & calls,",
    subheadline: "Medicare, final expense, and senior care shoppers ready to enroll or talk to an agent.",
    searchChips: ["medicare advantage plans near me", "final expense insurance quote", "senior home care services"],
    demoIndustry: "Healthcare",
    articleCategories: ["Medicare Leads"],
    sourcingParagraphs: [
      "Healthcare demand across the country is captured on our owned-and-operated landing pages, sourced from a limited set of vetted top-tier publishers, or generated directly through paid-search campaigns targeting active healthcare intent — never aggregators or resold lists.",
      "Every campaign is configured against your specific product line, licensing states, and target volume before a single lead is delivered.",
    ],
    sourcingBenefits: [
      "Access verified, high-intent healthcare leads across Medicare, final expense, and senior care",
      "Leads validated in real time before they ever reach your agents",
      "Scale volume up or down around enrollment periods like AEP",
      "Work with a network built for TCPA, DNC, and CMS marketing guideline compliance",
    ],
    faqs: [
      { q: "Do you have healthcare coverage nationwide?", a: "Yes. We source healthcare leads, warm transfers, and inbound calls across all 50 states and DC, subject to current campaign availability and your licensing footprint." },
      { q: "Are healthcare leads exclusive to me?", a: "Yes. Every lead we deliver is sold once, to a single buyer — never resold or shared with competitors." },
      { q: "How fast is delivery?", a: "Web form leads are delivered in real time as they're generated. Warm transfers and inbound calls connect live, the moment a prospect is ready to talk." },
      { q: "Can I target specific states or product lines?", a: "Yes. Campaigns are configured around your specific licensed states, product lines, and volume needs before launch." },
      { q: "How are leads verified?", a: "Every lead runs through fraud detection, TCPA compliance checks, and real-time validation for phone, email, and address accuracy." },
      { q: "How do I get started?", a: "Book a demo call and our team will confirm current availability for your licensed states and product lines." },
    ],
  },
];

export function getCoverageIndustry(slug: string): CoverageIndustry | undefined {
  return coverageIndustries.find((i) => i.slug === slug);
}
