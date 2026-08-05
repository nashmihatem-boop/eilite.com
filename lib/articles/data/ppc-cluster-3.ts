import type { Article } from "@/lib/articles/types";

const ppcRelated3 = ["pay-per-click-for-law-firms", "law-firm-ppc-advertising", "lawyer-ppc-advertising"];

export const ppcCluster3Articles: Article[] = [
  {
    slug: "ppc-marketing-for-attorneys",
    title: "PPC Marketing for Attorneys: Competitor Conquesting Campaigns",
    metaTitle: "PPC Competitor Conquesting for Attorneys",
    excerpt:
      "Bidding on a competitor's firm name is legal and common, but it carries ethical and strategic considerations attorneys should think through before launching this type of campaign.",
    metaDescription: "Bidding on a competitor's firm name is legal and common, but it carries ethical and strategic considerations worth thinking through first.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated3,
    content: [
      {
        type: "paragraph",
        text: "Bidding on a competing firm's brand name — so your ad appears when someone searches for a specific competitor — is a legal, widely used PPC tactic generally referred to as competitor conquesting. It's also one of the more ethically and strategically nuanced tactics available, and worth thinking through carefully before launching.",
      },
      {
        type: "heading",
        text: "Why Firms Run These Campaigns",
      },
      {
        type: "paragraph",
        text: "A searcher typing a specific competitor's name has already demonstrated legal need and is actively comparing options — arguably a more qualified audience than a generic keyword searcher. A well-crafted ad offering a genuine point of differentiation can capture some share of that already-motivated traffic.",
      },
      {
        type: "heading",
        text: "Bar Association Considerations",
      },
      {
        type: "paragraph",
        text: "While bidding on a competitor's name is generally legal under trademark law (using a competitor's name as a keyword trigger is different from using it in your actual ad text, which can raise separate concerns), state bar advertising rules and professional conduct expectations vary, and some attorneys view the tactic as unprofessional even where it's technically permitted. It's worth considering your own comfort level and your state bar's general guidance before proceeding.",
      },
      {
        type: "heading",
        text: "How to Do This Without Looking Desperate or Petty",
      },
      {
        type: "list",
        items: [
          "Never use a competitor's actual name in your ad text — target their name as a keyword, but keep your ad copy focused on your own firm's genuine strengths.",
          "Lead with real differentiation (a specific specialty, a distinct service like free consultations, a notable track record) rather than disparaging the competitor implicitly or explicitly.",
          "Expect a lower click-through rate on these campaigns than on your own branded or generic keyword campaigns, and budget accordingly.",
        ],
      },
      {
        type: "heading",
        text: "Protecting Your Own Brand Terms Too",
      },
      {
        type: "paragraph",
        text: "If competitor conquesting is common in your market, competitors may be bidding on your firm's name as well. Running your own branded campaign — bidding on your own firm name — ensures you maintain top placement for searches that are already specifically looking for you, rather than ceding that space to a competitor's ad.",
      },
      {
        type: "heading",
        text: "Whether This Tactic Is Worth Pursuing",
      },
      {
        type: "paragraph",
        text: "Competitor conquesting tends to work best as a smaller, supplementary part of a broader PPC strategy rather than a primary tactic, given its generally lower conversion rates relative to intent-driven generic searches. For the foundational campaign work that should come first, see our guide to [PPC campaign structure for law firms](/learning-center/pay-per-click-for-law-firms).",
      },
    ],
  },
  {
    slug: "pay-per-click-advertising-for-lawyers",
    title: "Pay-Per-Click Advertising for Lawyers: Call Tracking Setup",
    metaTitle: "Call Tracking & Attribution for Lawyer PPC",
    excerpt:
      "Without proper call tracking, most of a legal PPC budget is being optimized based on incomplete data. Here's how to set up attribution that actually reflects what's working.",
    metaDescription: "Without proper call tracking, most of a legal PPC budget is being optimized based on incomplete data.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated3,
    content: [
      {
        type: "paragraph",
        text: "The majority of legal PPC conversions happen over the phone, not through a web form — which means without proper call tracking, a firm is essentially optimizing its PPC account blind to its most important conversion type. Setting this up correctly is one of the highest-leverage technical investments a firm can make in its paid advertising.",
      },
      {
        type: "heading",
        text: "Why Standard Analytics Miss Most of the Picture",
      },
      {
        type: "paragraph",
        text: "Default website analytics track form submissions and page views well, but a static phone number displayed on a landing page provides no way to connect a specific call back to the specific keyword, ad, or campaign that drove it. Without dynamic call tracking, a firm can see that PPC is generating traffic, but has no reliable way to know which keywords are actually producing calls that convert into clients.",
      },
      {
        type: "heading",
        text: "How Dynamic Number Insertion Works",
      },
      {
        type: "paragraph",
        text: "Call tracking software dynamically swaps the phone number displayed to each visitor based on how they arrived at the site — a unique tracking number tied to a specific campaign, keyword, or even individual ad. When that number is called, the system records which source generated it, giving genuine keyword-level attribution for phone conversions.",
      },
      {
        type: "heading",
        text: "What to Track Beyond Just Call Volume",
      },
      {
        type: "list",
        items: [
          "Call duration, since very short calls often indicate a poor-fit inquiry or a wrong number, not a real conversion.",
          "Call outcome, ideally logged by intake staff, to distinguish a genuine consultation booking from an unrelated inquiry.",
          "First-time vs. repeat caller status, to avoid double-counting the same prospect calling multiple times.",
        ],
      },
      {
        type: "heading",
        text: "Connecting Call Data Back to Ad Spend Decisions",
      },
      {
        type: "paragraph",
        text: "Once call tracking is in place, the real value comes from actually using the data — pausing or reducing bids on keywords generating high call volume but poor outcomes, and increasing investment in keywords quietly producing strong results that raw click data alone would never reveal.",
      },
      {
        type: "heading",
        text: "Getting Started",
      },
      {
        type: "paragraph",
        text: "Most major call tracking platforms integrate directly with Google Ads, feeding call conversion data back into the platform's own optimization algorithms — meaning better tracking doesn't just inform your decisions, it can improve Google's own automated bidding as well. For the campaign structure this data should inform, see our guide to [PPC campaign structure for law firms](/learning-center/pay-per-click-for-law-firms).",
      },
    ],
  },
  {
    slug: "ppc-advertising-for-lawyers",
    title: "PPC Advertising for Lawyers: Running a Wasted Spend Audit",
    metaTitle: "PPC Wasted Spend Audit for Law Firms",
    excerpt:
      "Most legal PPC accounts are quietly leaking budget on search terms, placements, or devices that never convert. Here's how to find and fix it.",
    metaDescription: "Most legal PPC accounts quietly leak budget on search terms, placements, and devices that never convert. Here's how to run a wasted spend audit and fix it.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated3,
    content: [
      {
        type: "paragraph",
        text: "Even well-structured legal PPC accounts tend to accumulate waste over time — search terms that trigger ads without genuine intent, underperforming placements, or device types that convert poorly but keep receiving budget by default. A periodic wasted spend audit catches this before it compounds into a meaningful drain on the marketing budget.",
      },
      {
        type: "heading",
        text: "Review the Search Terms Report Regularly",
      },
      {
        type: "paragraph",
        text: "The search terms report shows the actual queries triggering your ads, which often differ meaningfully from the keywords you deliberately targeted, especially under broad match. Reviewing this weekly in a new campaign, and monthly in a mature one, surfaces irrelevant queries that should be added as negative keywords before they accumulate significant wasted spend.",
      },
      {
        type: "heading",
        text: "Check Performance by Device Type",
      },
      {
        type: "list",
        items: [
          "Compare conversion rates across desktop, mobile, and tablet, since legal search behavior often skews heavily toward one device type per practice area.",
          "Adjust bids down for device types with meaningfully lower conversion rates, rather than bidding identically across all devices by default.",
          "Confirm your landing pages actually perform well on whichever device is generating the most traffic — a mobile-heavy campaign with a poor mobile landing page compounds the problem.",
        ],
      },
      {
        type: "heading",
        text: "Audit Placement and Network Settings",
      },
      {
        type: "paragraph",
        text: "Display network and partner placements are sometimes enabled by default in ways that don't serve a firm's actual goals, generating clicks with little genuine legal intent behind them. Confirming campaigns are running only in the intended networks — typically Search only for high-intent legal campaigns — prevents this common source of wasted spend.",
      },
      {
        type: "heading",
        text: "Review Geographic Targeting Precision",
      },
      {
        type: "paragraph",
        text: "Overly broad geographic targeting can generate clicks from areas outside your actual service radius. Tightening radius targeting around your actual practice area, and excluding regions you don't serve, prevents paying for clicks that were never going to become viable clients regardless of ad quality.",
      },
      {
        type: "heading",
        text: "Making Audits a Regular Habit",
      },
      {
        type: "paragraph",
        text: "A wasted spend audit isn't a one-time fix — new inefficiencies accumulate continuously as search behavior shifts. Building this review into a monthly or quarterly routine, alongside the call tracking data covered in our guide to [PPC attribution](/learning-center/pay-per-click-advertising-for-lawyers), keeps a legal PPC account running efficiently over time rather than degrading quietly.",
      },
    ],
  },
];
