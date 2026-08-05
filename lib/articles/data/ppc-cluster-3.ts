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
    updatedDate: "2026-08-05",
    relatedSlugs: ppcRelated3,
    content: [
      {
        type: "paragraph",
        text: "Bidding on a competing firm's brand name — so your ad appears when someone searches for a specific competitor — is a legal, widely used PPC tactic generally referred to as competitor conquesting. It's also one of the more ethically and strategically nuanced tactics available, and worth thinking through carefully before launching a campaign built around it.",
      },
      {
        type: "heading",
        text: "Why Firms Run These Campaigns",
      },
      {
        type: "paragraph",
        text: "A searcher typing a specific competitor's name has already demonstrated legal need and is actively comparing options — arguably a more qualified audience than a generic keyword searcher. A well-crafted ad offering a genuine point of differentiation can capture some share of that already-motivated traffic, particularly in markets where one or two firms dominate branded search volume.",
      },
      {
        type: "heading",
        text: "Bar Association Considerations",
      },
      {
        type: "paragraph",
        text: "While bidding on a competitor's name is generally legal under trademark law (using a competitor's name as a keyword trigger is different from using it in your actual ad text, which can raise separate concerns), state bar advertising rules and professional conduct expectations vary, and some attorneys view the tactic as unprofessional even where it's technically permitted. It's worth considering your own comfort level and your state bar's general guidance before proceeding, and documenting that review internally in case the campaign is ever questioned.",
      },
      {
        type: "heading",
        text: "The Legal Distinction Between Keyword Bidding and Ad Text",
      },
      {
        type: "paragraph",
        text: "Courts have generally held that using a trademarked competitor name purely as a keyword trigger — invisible to the searcher, simply telling the ad platform when to show your ad — is meaningfully different from displaying that competitor's name in your visible ad copy, which raises separate trademark infringement and consumer confusion concerns. Most successful conquesting campaigns rely entirely on the former and scrupulously avoid the latter.",
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
          "Send conquesting traffic to a landing page built around genuine differentiation, not a generic homepage — the searcher already has a specific competitor in mind and needs a specific reason to reconsider.",
        ],
      },
      {
        type: "heading",
        text: "Setting a Realistic Budget for Conquesting Campaigns",
      },
      {
        type: "paragraph",
        text: "Because click-through and conversion rates on competitor-name campaigns typically run well below branded or high-intent generic campaigns, most firms allocate a modest, capped budget to conquesting rather than treating it as a primary spend category. Monitoring cost-per-lead on this campaign type specifically, separate from the rest of the account, prevents a low-performing conquesting effort from quietly draining budget that would perform better elsewhere.",
      },
      {
        type: "heading",
        text: "Protecting Your Own Brand Terms Too",
      },
      {
        type: "paragraph",
        text: "If competitor conquesting is common in your market, competitors may be bidding on your firm's name as well. Running your own branded campaign — bidding on your own firm name — ensures you maintain top placement for searches that are already specifically looking for you, rather than ceding that space to a competitor's ad. Branded campaigns are also typically the cheapest, highest-converting traffic in an entire PPC account, making this defensive spend well worth the modest cost.",
      },
      {
        type: "heading",
        text: "Whether This Tactic Is Worth Pursuing",
      },
      {
        type: "paragraph",
        text: "Competitor conquesting tends to work best as a smaller, supplementary part of a broader PPC strategy rather than a primary tactic, given its generally lower conversion rates relative to intent-driven generic searches. For the foundational campaign work that should come first, see our guide to [PPC campaign structure for law firms](/learning-center/pay-per-click-for-law-firms).",
      },
      {
        type: "heading",
        text: "Measuring Results Separately From the Rest of the Account",
      },
      {
        type: "paragraph",
        text: "Because conquesting campaigns behave so differently from generic keyword campaigns, it's worth tracking their cost-per-lead and cost-per-signed-case in a separate campaign or at minimum a clearly labeled ad group, rather than blending the results into the account's overall averages. This isolation makes it possible to fairly judge whether the tactic is earning its budget on its own terms, rather than letting a strong-performing generic campaign mask a weak conquesting effort riding along beside it.",
      },
      {
        type: "heading",
        text: "How Competitors May Respond",
      },
      {
        type: "paragraph",
        text: "In markets where conquesting becomes common, competing firms sometimes escalate — bidding more aggressively on each other's names, or responding with their own conquesting campaigns in return. It's worth going in with a clear sense of whether this tactic is likely to trigger an ongoing bidding conflict with a specific competitor, and whether the marginal lead volume gained is worth that dynamic for your specific market.",
      },
    ],
    faqs: [
      {
        q: "Is it legal to bid on a competitor law firm's name in Google Ads?",
        a: "Generally yes — using a competitor's name purely as a keyword trigger is legally distinct from using it in visible ad text, though state bar advertising rules and professional norms still vary and are worth reviewing separately from the trademark question.",
      },
      {
        q: "Can I mention a competitor's name directly in my ad copy?",
        a: "This is much riskier and generally not recommended — it raises separate trademark and consumer confusion concerns beyond simple keyword targeting, and most successful campaigns avoid it entirely.",
      },
      {
        q: "How much should a firm budget for competitor conquesting campaigns?",
        a: "A modest, capped amount relative to the rest of the PPC account is typical, since conversion rates on this campaign type run meaningfully lower than branded or high-intent generic search campaigns.",
      },
      {
        q: "Should every firm run competitor conquesting campaigns?",
        a: "Not necessarily — it works best as a supplementary tactic once foundational branded and generic keyword campaigns are already well established, rather than as a firm's primary PPC strategy.",
      },
      {
        q: "What should the landing page look like for a competitor conquesting campaign?",
        a: "It should speak directly to genuine points of differentiation — specific experience, results, or service offerings — rather than a generic homepage, since the visitor already has a specific alternative firm in mind.",
      },
      {
        q: "How do I know if a competitor conquesting campaign is actually working?",
        a: "Track cost-per-lead and cost-per-signed-case for that campaign specifically, separate from the rest of the account, over a fair evaluation period rather than judging it against the performance of unrelated generic keyword campaigns.",
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
    updatedDate: "2026-08-05",
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
        text: "Static Pool vs. Dynamic Number Insertion",
      },
      {
        type: "paragraph",
        text: "A static pool of tracking numbers assigns a fixed number to each channel (one for PPC, one for organic, one for a print ad), which is simpler to set up but loses keyword-level detail. Dynamic number insertion goes further, assigning a session-specific number that ties a call all the way back to the individual keyword and ad that drove the click — the level of granularity most legal PPC accounts actually need to optimize spend effectively.",
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
          "Time of day and day of week patterns, which can reveal when your highest-quality calls actually come in.",
        ],
      },
      {
        type: "heading",
        text: "Connecting Call Data Back to Ad Spend Decisions",
      },
      {
        type: "paragraph",
        text: "Once call tracking is in place, the real value comes from actually using the data — pausing or reducing bids on keywords generating high call volume but poor outcomes, and increasing investment in keywords quietly producing strong results that raw click data alone would never reveal. Without this step, even the best tracking setup is just generating reports nobody acts on.",
      },
      {
        type: "heading",
        text: "Common Setup Mistakes to Avoid",
      },
      {
        type: "paragraph",
        text: "Firms new to call tracking often make a handful of avoidable mistakes: forgetting to install tracking numbers consistently across every landing page a PPC campaign might send traffic to, failing to train intake staff to log call outcomes accurately, and treating call tracking as a one-time setup rather than an ongoing part of account management. Each of these gaps quietly reintroduces the same blind spot the tracking was meant to solve.",
      },
      {
        type: "heading",
        text: "Getting Started",
      },
      {
        type: "paragraph",
        text: "Most major call tracking platforms integrate directly with Google Ads, feeding call conversion data back into the platform's own optimization algorithms — meaning better tracking doesn't just inform your decisions, it can improve Google's own automated bidding as well. For the campaign structure this data should inform, see our guide to [PPC campaign structure for law firms](/learning-center/pay-per-click-for-law-firms).",
      },
      {
        type: "heading",
        text: "Training Intake Staff to Support Accurate Attribution",
      },
      {
        type: "paragraph",
        text: "Call tracking software can tell you a call happened and roughly how long it lasted, but only a human can confirm whether it actually resulted in a booked consultation or a signed case. Training intake staff to consistently log call outcome — not just take the call — closes the loop between raw call data and the business outcomes that actually matter, and is often the single highest-leverage step in getting real value out of a call tracking investment.",
      },
      {
        type: "heading",
        text: "Combining Call Tracking With Form and Chat Attribution",
      },
      {
        type: "paragraph",
        text: "Phone calls are typically the largest conversion category in legal PPC, but not the only one — web forms and live chat also contribute, and a complete attribution picture requires tracking all three consistently by source. Firms that build out call tracking but leave form and chat attribution as an afterthought still end up with meaningful blind spots in their overall PPC performance data.",
      },
    ],
    faqs: [
      {
        q: "Why does call tracking matter more for law firms than for many other businesses?",
        a: "Because most legal PPC conversions happen by phone rather than web form, a firm without call tracking is missing attribution data on its single largest conversion category, making standard web analytics alone insufficient to optimize spend.",
      },
      {
        q: "What's the difference between static pool and dynamic number insertion?",
        a: "A static pool assigns one fixed number per channel, giving channel-level attribution, while dynamic number insertion assigns a session-specific number tied to the individual keyword and ad, giving much more granular attribution.",
      },
      {
        q: "Does call tracking require replacing the phone number on my website permanently?",
        a: "No — the tracking number is displayed dynamically to visitors based on how they arrived, while your firm's primary number can remain unchanged in other contexts like print materials or business cards.",
      },
      {
        q: "How does call tracking data actually improve Google Ads performance?",
        a: "When integrated directly, call outcome data feeds back into Google's own automated bidding algorithms, helping the platform optimize toward keywords that produce genuine phone conversions rather than just clicks.",
      },
      {
        q: "What's the most common mistake firms make when setting up call tracking?",
        a: "Inconsistent installation across every landing page a campaign might drive traffic to, and failing to train intake staff to log call outcomes accurately — both of which quietly undermine the attribution the tracking was meant to provide.",
      },
      {
        q: "Is call tracking worth the additional monthly software cost for a smaller firm?",
        a: "For most firms running any meaningful PPC budget, yes — the cost of the software is typically small relative to the wasted spend it helps identify and eliminate once keyword-level phone attribution is in place.",
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
    updatedDate: "2026-08-05",
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
        text: "Building a Negative Keyword List That Actually Sticks",
      },
      {
        type: "paragraph",
        text: "Beyond one-time search term reviews, maintaining a running negative keyword list — covering job-seeker terms (\"attorney jobs near me\"), free-information searches (\"how to file a claim myself\"), and unrelated practice areas your firm doesn't handle — prevents the same categories of wasted clicks from recurring campaign after campaign. Applying this list at the account level, rather than rebuilding it for every new campaign, saves significant recurring audit time.",
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
        text: "Checking Ad Schedule and Time-of-Day Performance",
      },
      {
        type: "paragraph",
        text: "Legal PPC conversion rates often vary meaningfully by time of day and day of week — a campaign running around the clock may be spending steadily during hours when almost no one is converting. Reviewing performance by hour and adjusting ad scheduling to concentrate budget during historically stronger windows, while reducing or pausing spend during consistently weak ones, is a frequently overlooked source of recoverable budget.",
      },
      {
        type: "heading",
        text: "Making Audits a Regular Habit",
      },
      {
        type: "paragraph",
        text: "A wasted spend audit isn't a one-time fix — new inefficiencies accumulate continuously as search behavior shifts. Building this review into a monthly or quarterly routine, alongside the call tracking data covered in our guide to [PPC attribution](/learning-center/pay-per-click-advertising-for-lawyers), keeps a legal PPC account running efficiently over time rather than degrading quietly.",
      },
      {
        type: "heading",
        text: "Reviewing Quality Score as an Early Warning Sign",
      },
      {
        type: "paragraph",
        text: "A declining Quality Score on core keywords often signals a mismatch between ad copy, landing page relevance, and searcher intent — and low Quality Scores directly increase cost-per-click, compounding wasted spend beyond just the irrelevant clicks themselves. Reviewing Quality Score trends alongside the search terms report gives a more complete picture of where an account's structural inefficiencies are actually coming from.",
      },
      {
        type: "heading",
        text: "Setting Up Automated Alerts for Budget Anomalies",
      },
      {
        type: "paragraph",
        text: "Beyond scheduled manual audits, many ad platforms support automated rules or alerts that flag a sudden spike in cost-per-click, a sharp drop in conversion rate, or budget exhausted unusually early in the day. These automated guardrails catch acute problems — like a competitor suddenly bidding up a shared keyword — between scheduled audit cycles, preventing several days of wasted spend before the next manual review would have caught it.",
      },
      {
        type: "heading",
        text: "Documenting Audit Findings Over Time",
      },
      {
        type: "paragraph",
        text: "Keeping a simple running log of what each audit found and what changed as a result — which negative keywords were added, which device bids were adjusted, which geographic areas were excluded — makes each subsequent audit faster and helps distinguish a genuinely new problem from one that was already addressed and has simply resurfaced. This kind of institutional record becomes especially valuable if account management ever changes hands.",
      },
    ],
    faqs: [
      {
        q: "How often should a law firm run a wasted spend audit on its PPC account?",
        a: "Weekly search term reviews for a new campaign, tapering to monthly for a mature one, with a more thorough full-account audit — covering devices, placements, geography, and scheduling — on a quarterly basis.",
      },
      {
        q: "What's the fastest source of wasted spend to fix in most legal PPC accounts?",
        a: "Irrelevant search terms surfaced in the search terms report are usually the quickest win, since adding them as negative keywords takes minutes and immediately stops future spend on those queries.",
      },
      {
        q: "Should the Display Network ever be used for legal PPC campaigns?",
        a: "Generally not for high-intent lead generation campaigns — Display tends to generate low-intent clicks for legal services, and most firms see better results keeping campaigns restricted to Search only.",
      },
      {
        q: "How much of a typical PPC budget is lost to preventable waste?",
        a: "It varies significantly by account maturity and how recently an audit was performed, but accounts that haven't been audited in several months commonly recover a meaningful share of spend once negative keywords, device bids, and geographic targeting are tightened.",
      },
      {
        q: "Can ad scheduling really make a measurable difference in a legal PPC account?",
        a: "Yes — many legal practice areas see conversion rates vary substantially by hour and day, so concentrating budget during historically higher-converting windows, rather than spending evenly around the clock, often improves overall efficiency.",
      },
      {
        q: "Who should be responsible for running these audits — an in-house team or an agency?",
        a: "Either can work well as long as there's clear ownership and a consistent schedule; the more important factor is that someone is actually reviewing the data regularly rather than which team performs the review.",
      },
    ],
  },
];
