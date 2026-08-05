import type { Article } from "@/lib/articles/types";

const ppcRelated = ["ppc-for-lawyers", "attorney-ppc-advertising", "pay-per-lead-vs-pay-per-click"];

export const ppcClusterArticles: Article[] = [
  {
    slug: "pay-per-click-for-law-firms",
    title: "Pay-Per-Click for Law Firms: Getting Campaign Structure Right",
    metaTitle: "PPC Campaign Structure for Law Firms",
    excerpt:
      "Before ad copy or bidding strategy, campaign structure determines whether a legal PPC account can actually be optimized. Here's how to organize campaigns and ad groups correctly from the start.",
    metaDescription: "Before ad copy or bidding strategy, campaign structure determines whether a legal PPC account can actually be optimized.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated,
    content: [
      {
        type: "paragraph",
        text: "Poor campaign structure is one of the most common, least visible reasons legal PPC accounts underperform. It's not something a prospect ever sees, but it determines whether an account can actually be optimized over time — a badly structured account produces confusing data that makes every other optimization decision harder.",
      },
      {
        type: "heading",
        text: "Separate Campaigns by Practice Area, Not Just Ad Groups",
      },
      {
        type: "paragraph",
        text: "Running personal injury and family law keywords in the same campaign, differentiated only by ad group, makes budget control and performance analysis unnecessarily difficult. Separate campaigns by practice area allow independent budget allocation and bid strategy, since a firm may reasonably want to spend very differently across practice areas with different case values.",
      },
      {
        type: "heading",
        text: "Use Tightly Themed Ad Groups",
      },
      {
        type: "list",
        items: [
          "Group closely related keywords together — \"car accident lawyer\" and \"car accident attorney\" in one group, \"truck accident lawyer\" in a separate group — rather than mixing broad and specific terms.",
          "Tightly themed ad groups allow more relevant ad copy for each specific search, which improves click-through rate and quality score.",
          "Aim for enough keyword overlap within a group that a single ad genuinely serves all of them well, rather than forcing unrelated terms together for convenience.",
        ],
      },
      {
        type: "heading",
        text: "Separate Campaigns by Match Type When Volume Justifies It",
      },
      {
        type: "paragraph",
        text: "For high-volume practice areas, separating broad match and exact match keywords into different campaigns allows more precise budget control — exact match campaigns can be funded aggressively once proven, while broad match campaigns used for discovery can run on a smaller, controlled budget specifically for finding new converting search terms.",
      },
      {
        type: "heading",
        text: "Geographic Structure Matters for Multi-Location Firms",
      },
      {
        type: "paragraph",
        text: "Firms serving multiple cities or regions generally get better results from separate campaigns per location rather than one campaign targeting an entire multi-city area, since this allows location-specific budgets, ad copy, and landing pages rather than a one-size-fits-all approach across meaningfully different markets.",
      },
      {
        type: "heading",
        text: "Why Getting This Right Early Saves Significant Money Later",
      },
      {
        type: "paragraph",
        text: "Restructuring a poorly organized account after months of running ads means losing accumulated performance history that Google's algorithms use for optimization. Building the right structure from the outset avoids this costly rebuild. For guidance on the messaging within each ad group, see our guide to [PPC for lawyers](/learning-center/ppc-for-lawyers).",
      },
    ],
  },
  {
    slug: "pay-per-click-for-lawyers",
    title: "Pay-Per-Click for Lawyers: Writing Ad Copy That Actually Converts",
    metaTitle: "PPC Ad Copy for Lawyers That Converts",
    excerpt:
      "With such high costs per click, every word in a legal ad needs to earn its place. Here's what specifically makes attorney ad copy convert better.",
    metaDescription:
      "With such high costs per click, every word in a legal ad needs to earn its place. Here's what specifically makes attorney PPC ad copy convert better.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated,
    content: [
      {
        type: "paragraph",
        text: "Given how expensive legal clicks are, ad copy carries more weight per word than in almost any other industry — a weak ad wastes an expensive click on a visitor who bounces immediately, while a strong one pre-qualifies the searcher before they even land on your site.",
      },
      {
        type: "heading",
        text: "Lead With Specificity, Not Generic Claims",
      },
      {
        type: "paragraph",
        text: "\"Experienced attorneys ready to help\" says nothing a competitor's ad doesn't also claim. Specific details — years handling a particular case type, a notable result (compliantly presented), a specific service like free consultations or no-fee-unless-you-win — differentiate an ad in a crowded results page far more effectively than generic confidence language.",
      },
      {
        type: "heading",
        text: "Match Ad Copy Tightly to Search Intent",
      },
      {
        type: "list",
        items: [
          "An ad targeting \"car accident lawyer near me\" should speak directly to that urgency, not use the same generic copy as an ad targeting broader personal injury terms.",
          "Include the searched term or a close variant in the headline where natural, since this improves both relevance score and perceived match for the searcher.",
          "Use ad copy that filters rather than attracts everyone — being specific about who you help can reduce wasted clicks from poor-fit searchers.",
        ],
      },
      {
        type: "heading",
        text: "Use Every Extension Available",
      },
      {
        type: "paragraph",
        text: "Call extensions, location extensions, sitelink extensions to specific practice area pages, and structured snippets all give an ad more visual real estate and more ways for a searcher to engage — clicking to call directly, for instance, rather than navigating through a website first.",
      },
      {
        type: "heading",
        text: "Test Systematically, Not Randomly",
      },
      {
        type: "paragraph",
        text: "Run multiple ad variations within each ad group and let them accumulate enough data before drawing conclusions — judging a test after a handful of clicks typically leads to the wrong decision. Testing one variable at a time (headline, then description, then call-to-action) produces clearer, more actionable results than changing everything at once.",
      },
      {
        type: "heading",
        text: "Where Copywriting Fits Into the Bigger Picture",
      },
      {
        type: "paragraph",
        text: "Strong ad copy only pays off if it's supported by the right campaign structure and a landing page that follows through on what the ad promised. For the structural foundation, see our guide to [PPC campaign structure for law firms](/learning-center/pay-per-click-for-law-firms).",
      },
    ],
  },
  {
    slug: "ppc-management-for-lawyers",
    title: "PPC Management for Lawyers: In-House vs. Agency, Which Fits Your Firm?",
    metaTitle: "PPC Management for Lawyers: In-House vs. Agency",
    excerpt:
      "Managing legal PPC well requires real ongoing attention. Here's an honest comparison of handling it in-house versus hiring an agency, and how to tell which fits your firm's situation.",
    metaDescription: "Managing legal PPC well requires real ongoing attention. Here's an honest comparison of handling it in-house versus hiring an agency.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: [...ppcRelated, "pay-per-click-for-law-firms"],
    content: [
      {
        type: "paragraph",
        text: "PPC isn't a set-it-and-forget-it channel — legal keyword costs shift constantly, and an account left unmanaged for weeks at a time typically bleeds budget on underperforming keywords. Deciding whether to manage this in-house or hire a specialized agency is one of the more consequential operational decisions a firm makes about its marketing.",
      },
      {
        type: "heading",
        text: "What In-House Management Requires",
      },
      {
        type: "paragraph",
        text: "Managing PPC well in-house requires a dedicated person with real expertise, not a part-time responsibility bolted onto an office manager's existing workload. Given how quickly legal keyword auctions shift, an under-resourced in-house effort often underperforms a competent agency, even accounting for the agency's fee.",
      },
      {
        type: "heading",
        text: "What to Look for in a Legal PPC Agency",
      },
      {
        type: "list",
        items: [
          "Specific experience with legal clients, since the compliance landscape and cost structure differ meaningfully from other industries.",
          "Transparent reporting that shows actual cost-per-lead and, ideally, cost-per-signed-case, not just clicks and impressions.",
          "Clear communication about how much of your budget goes to actual ad spend versus management fees.",
          "A willingness to share account access directly, rather than managing everything through an opaque, firm-controlled account.",
        ],
      },
      {
        type: "heading",
        text: "Red Flags in Agency Relationships",
      },
      {
        type: "paragraph",
        text: "Be cautious of agencies that resist sharing direct account access, that can't clearly explain their optimization strategy, or that report only vanity metrics like impressions and clicks without connecting performance to actual consultations and cases. A firm should always retain ownership of and access to its own advertising accounts.",
      },
      {
        type: "heading",
        text: "A Hybrid Approach Often Works Well",
      },
      {
        type: "paragraph",
        text: "Some firms handle strategy and oversight in-house while outsourcing the tactical, day-to-day account management to a specialist — getting the benefit of dedicated expertise without fully ceding control of strategic decisions. This works particularly well for firms large enough to justify a marketing director but not large enough to build a full internal PPC team.",
      },
      {
        type: "heading",
        text: "Making the Decision for Your Firm",
      },
      {
        type: "paragraph",
        text: "The right answer generally comes down to budget size and internal marketing capacity. Smaller budgets often don't justify a dedicated in-house hire, making a competent agency the more efficient choice; larger, sustained budgets can eventually justify bringing management in-house. For the fundamentals of campaign structure regardless of who manages it, see our guide to [PPC campaign structure](/learning-center/pay-per-click-for-law-firms).",
      },
    ],
  },
  {
    slug: "ppc-for-attorneys",
    title: "PPC for Attorneys: Understanding Quality Score",
    metaTitle: "PPC Quality Score for Attorneys Explained",
    excerpt:
      "Two firms bidding the same amount can pay very different prices per click, based on quality score. Here's what it is and how attorneys can improve it.",
    metaDescription:
      "Two firms bidding the same amount can pay very different prices per click based on quality score. Here's what it is and how attorneys can improve it.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: ppcRelated,
    content: [
      {
        type: "paragraph",
        text: "Quality score is one of the least understood factors in legal PPC, despite directly affecting how much a firm pays per click. Two firms bidding the same maximum amount for the same keyword can pay meaningfully different actual prices, and rank differently, based on how Google scores the quality and relevance of their ads and landing pages.",
      },
      {
        type: "heading",
        text: "What Quality Score Actually Measures",
      },
      {
        type: "paragraph",
        text: "Google evaluates expected click-through rate, ad relevance to the keyword, and landing page experience to arrive at a quality score. A higher score generally means lower cost per click and better ad position for the same bid — which, given how expensive legal keywords are, can represent meaningful savings at scale.",
      },
      {
        type: "heading",
        text: "Why Legal Accounts Often Struggle With Quality Score",
      },
      {
        type: "list",
        items: [
          "Broad campaigns mixing many different practice areas or intents under one ad group produce lower relevance scores than tightly themed campaigns.",
          "Sending traffic to a general homepage instead of a dedicated, relevant landing page hurts landing page experience scoring.",
          "Slow-loading landing pages directly reduce quality score, compounding the cost impact of a technical issue.",
        ],
      },
      {
        type: "heading",
        text: "Practical Ways to Improve Quality Score",
      },
      {
        type: "list",
        items: [
          "Tighten ad groups around closely related keywords so ad copy can speak directly and specifically to the search.",
          "Build dedicated landing pages matching the ad's language and offer, rather than routing to a general site page.",
          "Improve page load speed, particularly on mobile, since slow pages directly hurt both quality score and conversion rate.",
          "Continuously test and refine ad copy to improve actual and expected click-through rate over time.",
        ],
      },
      {
        type: "heading",
        text: "The Compounding Effect Over Time",
      },
      {
        type: "paragraph",
        text: "Quality score improvements compound — a better score lowers cost per click, which allows more clicks for the same budget, which generates more data for further optimization. Firms that treat quality score as an ongoing discipline rather than a one-time setup task consistently see their effective cost per lead decline over time, even as competitors' costs rise.",
      },
      {
        type: "heading",
        text: "Where This Fits Into Overall PPC Strategy",
      },
      {
        type: "paragraph",
        text: "Quality score is one lever among several, alongside campaign structure and ad copy, that together determine PPC efficiency. For the structural and copywriting fundamentals, see our guides to [PPC campaign structure](/learning-center/pay-per-click-for-law-firms) and [ad copy that converts](/learning-center/pay-per-click-for-lawyers).",
      },
    ],
  },
];
