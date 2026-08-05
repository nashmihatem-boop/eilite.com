import type { Article } from "@/lib/articles/types";

const campaignRelated = ["lead-generation-for-lawyers", "how-do-attorney-leads-work", "buy-verified-legal-leads"];

export const leadCampaignBasicsArticles: Article[] = [
  {
    slug: "gen-strategies",
    title: "Lead Generation Strategies for Attorneys: A Quick-Reference Guide",
    metaTitle: "Attorney Lead Generation Strategies Quick Guide",
    excerpt:
      "A condensed reference covering the core lead generation strategies available to attorneys, organized by speed to results and typical investment level.",
    metaDescription:
      "A condensed reference covering the core lead generation strategies available to attorneys, organized by speed to results and typical investment level.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-05",
    relatedSlugs: campaignRelated,
    content: [
      {
        type: "paragraph",
        text: "Attorneys evaluating lead generation options often need a quick way to compare strategies against each other before committing time or budget to any single one. This is a condensed reference organized by how quickly each strategy typically produces results and what it generally requires to execute well.",
      },
      {
        type: "heading",
        text: "Fast Results, Ongoing Cost",
      },
      {
        type: "list",
        items: [
          "Pay-per-click advertising: results within days, cost scales directly with volume, requires ongoing management to stay efficient.",
          "Vetted [pay-per-lead or warm transfer programs](/buy-leads): results within days to weeks, cost per contact varies by exclusivity and case type.",
          "Local Service Ads (Google Screened): results within days once approved, priced per qualified lead rather than per click.",
        ],
      },
      {
        type: "heading",
        text: "Slower Results, Compounding Value",
      },
      {
        type: "list",
        items: [
          "Search engine optimization: results typically take months to mature, but cost per lead trends downward over time as rankings stabilize.",
          "Content marketing: builds trust and search visibility simultaneously, compounding in value as a content library grows.",
          "Referral systems: bounded by existing network size, but converts at a high rate once relationships are established.",
        ],
      },
      {
        type: "heading",
        text: "Low Direct Cost, High Time Investment",
      },
      {
        type: "list",
        items: [
          "Social media presence: low direct cost but requires consistent content creation to build any real audience.",
          "Networking and community involvement: minimal direct spend, significant time investment, slow but durable payoff.",
          "Speaking and media appearances: builds credibility efficiently once opportunities are secured, but requires ongoing outreach to find them.",
        ],
      },
      {
        type: "heading",
        text: "Choosing Where to Start",
      },
      {
        type: "paragraph",
        text: "Firms needing volume immediately generally start with paid channels while building slower, more durable channels in parallel. Firms with more runway and less urgent capacity needs can prioritize SEO and referral-building first, adding paid channels later to smooth out any remaining gaps.",
      },
      {
        type: "heading",
        text: "Building a Complete Strategy From These Pieces",
      },
      {
        type: "paragraph",
        text: "Most successful firms don't rely on a single strategy from this list — they combine two or three based on their specific timeline, budget, and capacity constraints. For a deeper breakdown of each channel, see our complete guide to [lead generation for lawyers](/learning-center/lead-generation-for-lawyers).",
      },
      {
        type: "heading",
        text: "Estimating Realistic Cost Ranges by Channel",
      },
      {
        type: "table",
        headers: ["Strategy", "Typical Monthly Investment", "Ramp-Up Time"],
        rows: [
          ["PPC advertising", "$1,500–$15,000+", "Days to 2 weeks"],
          ["Pay-per-lead / warm transfer", "$1,000–$10,000+", "Days to 2 weeks"],
          ["SEO content", "$1,000–$5,000", "3–9 months"],
          ["Referral cultivation", "Minimal direct spend", "6+ months"],
        ],
      },
      {
        type: "heading",
        text: "How Practice Area Should Influence Channel Selection",
      },
      {
        type: "paragraph",
        text: "High-urgency practice areas — personal injury, criminal defense, DUI — tend to see the strongest early returns from paid channels like PPC and purchased leads, since prospects are actively searching with immediate intent and often contact multiple firms within the same day. Slower-decision practice areas like estate planning, business formation, or complex civil litigation typically see better long-term returns from SEO content and referral relationships, since these prospects research more deliberately over weeks or months before choosing a firm. Attorneys should weigh their own practice area's typical decision timeline heavily when choosing where to start.",
      },
      {
        type: "heading",
        text: "A Sample 90-Day Channel Rollout",
      },
      {
        type: "list",
        items: [
          "Days 1–14: Launch a [pay-per-lead or PPC test](/buy-leads) at modest budget while auditing existing Google Business Profile and website fundamentals.",
          "Days 15–45: Analyze early conversion data, adjust targeting or messaging, and begin building foundational SEO content.",
          "Days 46–90: Scale the paid channel that's performing best, continue content publication, and formalize a referral outreach cadence.",
        ],
      },
      {
        type: "heading",
        text: "Common Sequencing Mistakes to Avoid",
      },
      {
        type: "paragraph",
        text: "The most frequent mistake isn't choosing the wrong strategy — it's launching too many channels simultaneously without enough budget or staff capacity to execute any of them well, or abandoning a slower-building channel like SEO after only a month or two because it hasn't yet produced visible results. Sequencing channels deliberately, starting with one or two and adding more as capacity and budget allow, produces more reliable results than attempting everything at once.",
      },
      {
        type: "heading",
        text: "Matching Channels to Firm Size and Stage",
      },
      {
        type: "paragraph",
        text: "A solo practitioner just opening their doors has fundamentally different needs than an established 20-attorney firm looking to add a new practice area. Newer, smaller firms typically benefit most from fast, measurable channels — purchased leads and PPC — that produce revenue quickly enough to sustain the business while slower channels mature. Larger, established firms with existing referral networks and content libraries often get more marginal value from doubling down on SEO and thought leadership, since they've already captured much of the easy paid-channel opportunity in their market and are competing more on differentiation than raw visibility.",
      },
    ],
    faqs: [
      {
        q: "Which lead generation strategy produces results fastest?",
        a: "PPC advertising and purchased lead or warm transfer programs typically produce results within days, making them the fastest options for firms needing volume quickly, though both require ongoing budget to sustain.",
      },
      {
        q: "How much should a solo attorney budget for lead generation monthly?",
        a: "This varies by practice area and market, but many solo and small firm attorneys start with $1,000 to $3,000 monthly across one or two channels, scaling up as they identify what converts well for their specific practice.",
      },
      {
        q: "Is SEO worth the investment if it takes months to show results?",
        a: "For most firms, yes — SEO's cost per lead tends to decline over time as rankings mature, and the resulting visibility compounds in value in a way paid channels don't, making it a strong complement to faster paid channels.",
      },
      {
        q: "Can a firm rely on referrals alone without any paid marketing?",
        a: "Some established firms do, but this generally requires years of relationship-building and works best for firms with a strong existing network, since referral volume alone is often insufficient for firms actively trying to grow.",
      },
      {
        q: "Should a new firm start with paid or organic channels?",
        a: "Most new firms benefit from starting with a paid channel for immediate volume and cash flow, while simultaneously building SEO content and referral relationships that will produce more durable results as the paid channel matures or budget shifts.",
      },
      {
        q: "How many lead generation channels should a firm run at once?",
        a: "Most firms manage two or three effectively; running more than that without dedicated marketing staff often spreads attention too thin to optimize any single channel, producing mediocre results across the board rather than strong results anywhere.",
      },
      {
        q: "Do established firms still need paid lead generation?",
        a: "Many do, particularly to smooth out seasonal dips in referral or organic volume, expand into a new practice area, or maintain growth momentum once existing organic channels have plateaued.",
      },
    ],
  },
  {
    slug: "lead-campaigns",
    title: "Running Effective Attorney Lead Campaigns: Planning and Execution",
    metaTitle: "Running Effective Attorney Lead Campaigns",
    excerpt:
      "A lead campaign is more than turning on ads — it requires planning around capacity, tracking, and a clear definition of success before it launches. Here's how to structure one properly.",
    metaDescription: "A lead campaign is more than turning on ads — it requires planning around capacity, tracking, and a clear definition of success before it launches.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-05",
    relatedSlugs: campaignRelated,
    content: [
      {
        type: "paragraph",
        text: "Many attorney lead campaigns are launched reactively — a slow month prompts a quick decision to \"try some ads\" or \"buy some leads\" without a clear plan for capacity, measurement, or what success actually looks like. Campaigns planned deliberately, even briefly, consistently outperform reactive ones.",
      },
      {
        type: "heading",
        text: "Define Success Before Launch",
      },
      {
        type: "paragraph",
        text: "Decide upfront what a successful campaign actually looks like — a target cost-per-signed-case, a specific volume goal, a defined testing period — rather than launching and deciding afterward whether the results were good. This prevents both premature abandonment of a promising channel and continued investment in an underperforming one.",
      },
      {
        type: "heading",
        text: "Confirm Capacity Before Turning on New Volume",
      },
      {
        type: "list",
        items: [
          "Verify your intake team can handle the anticipated volume without response times degrading.",
          "Confirm case-handling capacity exists for the practice area and volume you're targeting before generating leads you can't actually serve well.",
          "Consider whether additional staffing needs to be part of the campaign plan, not an afterthought once volume arrives.",
        ],
      },
      {
        type: "heading",
        text: "Set Up Tracking Before, Not After, Launch",
      },
      {
        type: "paragraph",
        text: "Call tracking, CRM source tagging, and clear intake logging should all be in place before a campaign generates its first lead — retrofitting tracking after the fact means losing valuable early data that could inform decisions later.",
      },
      {
        type: "heading",
        text: "Run a Defined Test Before Scaling",
      },
      {
        type: "paragraph",
        text: "Whether the campaign is PPC, SEO content, or a [pay-per-lead program](/buy-leads), starting with a modest, time-bound test provides real performance data before committing significant ongoing budget, reducing the risk of a large investment based on assumption alone.",
      },
      {
        type: "heading",
        text: "Reviewing and Iterating After Launch",
      },
      {
        type: "paragraph",
        text: "Build in a specific review point — 30, 60, or 90 days depending on the channel's typical conversion cycle — to assess results against the goals set before launch, and make a deliberate decision to scale, adjust, or discontinue rather than letting a campaign run indefinitely on autopilot.",
      },
      {
        type: "heading",
        text: "Setting a Realistic Budget Before Launch",
      },
      {
        type: "paragraph",
        text: "A campaign budget should be grounded in your target cost-per-signed-case and how many new cases you actually want to generate, not simply \"whatever feels affordable this month.\" Working backward from a target case volume — say, five new signed cases — through your expected conversion rate at each funnel stage produces a far more realistic budget than picking a round number and hoping it produces good results. Firms new to a channel should also budget explicitly for a learning period, since early performance data is rarely representative of steady-state results once targeting and messaging are refined.",
      },
      {
        type: "heading",
        text: "Choosing the Right Lead Source Partner",
      },
      {
        type: "list",
        items: [
          "Request a small trial batch before committing to significant monthly volume, and track it through your full intake process.",
          "Ask specifically how leads are generated and what consent language prospects encountered.",
          "Confirm exclusivity terms and how many other firms, if any, receive the same lead.",
          "Verify the provider offers a clear policy for invalid, duplicate, or clearly mismatched leads.",
        ],
      },
      {
        type: "heading",
        text: "Common Reasons Campaigns Underperform in the First 30 Days",
      },
      {
        type: "paragraph",
        text: "New campaigns often look worse in their first few weeks than they will once fully optimized, and mistaking this normal ramp-up period for a fundamentally failed strategy is one of the most common — and costly — campaign management mistakes. Ad platforms and [lead sources](/buy-leads) both typically need a data-gathering period before targeting stabilizes, intake staff need time to develop scripts specific to the new source, and early volume is often lower than steady-state levels while systems calibrate. Firms that panic and cancel a campaign at day 10 or 15 rarely get a fair read on whether it would have worked.",
      },
      {
        type: "heading",
        text: "Documenting Your Campaign Plan",
      },
      {
        type: "paragraph",
        text: "A brief written plan — covering budget, target cost-per-case, review date, and the specific person responsible for monitoring results — prevents a campaign from drifting without oversight once the initial excitement of launch fades. This documentation also makes post-campaign review far more useful, since you're comparing actual results against a specific, pre-defined target rather than a vague sense of whether things \"felt like they went well.\"",
      },
      {
        type: "heading",
        text: "Aligning Your Team Before Volume Arrives",
      },
      {
        type: "paragraph",
        text: "A campaign plan is only as good as the team executing it. Before launch, confirm everyone involved in intake understands where this specific volume is coming from, what makes it different from a referral or walk-in inquiry, and how it should be logged and followed up. Firms that skip this alignment step often see otherwise well-planned campaigns underperform simply because front-line staff weren't prepared to recognize and prioritize the new lead source appropriately alongside their existing workload.",
      },
      {
        type: "heading",
        text: "Adjusting Mid-Campaign Without Starting Over",
      },
      {
        type: "paragraph",
        text: "Not every underperforming signal requires scrapping a campaign entirely. Targeting can often be narrowed, ad creative refreshed, or lead criteria tightened without abandoning the channel altogether. Treating early data as an input for refinement, rather than a pass/fail verdict on the entire strategy, generally produces better long-run results than repeatedly launching and canceling new campaigns from scratch.",
      },
    ],
    faqs: [
      {
        q: "How should I calculate a realistic budget for a new lead campaign?",
        a: "Start from your target number of new signed cases, work backward through your expected conversion rate at each funnel stage, and add a buffer for the learning period most new channels require before performance stabilizes.",
      },
      {
        q: "How long should a campaign run before judging its results?",
        a: "Most channels need at least 30 to 90 days, depending on typical conversion cycle length, before performance data is reliable enough to make a scaling or cancellation decision with confidence.",
      },
      {
        q: "What should be in a lead campaign's written plan?",
        a: "At minimum: target budget, target cost-per-signed-case, a defined review date, and a specific person responsible for monitoring performance and making adjustment decisions along the way.",
      },
      {
        q: "Why do new campaigns often look weak in the first two weeks?",
        a: "Ad platforms and lead sources typically need a data-gathering period to optimize targeting, and intake staff need time to develop effective scripts for the new source — both factors that improve naturally with time rather than indicating failure.",
      },
      {
        q: "Should intake capacity be confirmed before or after launching a campaign?",
        a: "Always before — launching a campaign that generates more volume than your team can respond to promptly wastes budget and produces frustrated prospects, undermining the campaign's actual results regardless of lead quality.",
      },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting a Struggling Attorney Lead Generation Campaign",
    metaTitle: "Troubleshooting Attorney Lead Generation Problems",
    excerpt:
      "When a lead channel underperforms, the fix usually isn't switching providers — it's diagnosing which specific stage of the funnel is actually broken. Here's a systematic approach.",
    metaDescription: "When a lead channel underperforms, the fix usually isn't switching providers — it's diagnosing which specific stage of the funnel is actually broken.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-05",
    relatedSlugs: [...campaignRelated, "how-to-improve-law-firm-intake-7-proven-strategies"],
    content: [
      {
        type: "paragraph",
        text: "When a lead generation channel isn't producing expected results, the instinctive response is often to switch providers or abandon the channel entirely — but the actual problem frequently lies somewhere else in the funnel, and switching sources without diagnosing the real issue just moves the same problem to a new provider.",
      },
      {
        type: "heading",
        text: "Step 1: Confirm Leads Are Actually Being Delivered as Promised",
      },
      {
        type: "paragraph",
        text: "Before assuming a quality problem, verify volume, timing, and targeting match what was agreed — delivery delays or mismatched targeting criteria are common, fixable issues that get mistaken for a fundamental lead quality problem.",
      },
      {
        type: "heading",
        text: "Step 2: Check Speed to First Contact",
      },
      {
        type: "paragraph",
        text: "A surprising share of \"bad lead\" complaints trace back to slow internal response time rather than the lead source itself. Reviewing actual time-to-first-contact data, not assumed response time, often reveals the real bottleneck.",
      },
      {
        type: "heading",
        text: "Step 3: Review Intake Call Quality",
      },
      {
        type: "list",
        items: [
          "Listen to actual intake calls (with appropriate disclosure) rather than assuming the script and approach are working well.",
          "Check whether intake staff are appropriately trained for the specific lead source's typical prospect profile.",
          "Confirm scheduling and follow-up processes aren't introducing unnecessary friction between contact and consultation.",
        ],
      },
      {
        type: "heading",
        text: "Step 4: Verify You're Measuring the Right Metric",
      },
      {
        type: "paragraph",
        text: "A channel that looks poor on cost-per-lead might actually be strong on cost-per-signed-case, or vice versa. Confirming which metric you're actually evaluating against — and whether it's the right one for the decision you're trying to make — can change the entire conclusion.",
      },
      {
        type: "heading",
        text: "Step 5: Isolate Whether It's the Source or the Process",
      },
      {
        type: "paragraph",
        text: "If intake speed, call quality, and measurement all check out and the channel still underperforms, then the source itself genuinely may be the issue — but working through this sequence first prevents unnecessarily abandoning a fundamentally good [lead source](/buy-leads) due to an internal process problem. For the intake-side fixes that resolve a large share of these issues, see our guide to [improving law firm intake](/learning-center/how-to-improve-law-firm-intake-7-proven-strategies).",
      },
      {
        type: "heading",
        text: "Step 6: Audit Delivery Consistency Over Time",
      },
      {
        type: "paragraph",
        text: "A source that performed well initially can quietly degrade over time — delivery volume drifting below agreed levels, targeting criteria loosening, or lead freshness slipping as a provider scales. Comparing performance data month over month, rather than only checking in when something feels obviously wrong, catches this kind of gradual decline early. A provider that was genuinely strong six months ago isn't guaranteed to still be strong today, particularly if their own traffic sources or partner network has changed.",
      },
      {
        type: "heading",
        text: "Red Flags That Indicate a Genuinely Bad Source",
      },
      {
        type: "list",
        items: [
          "Consistent, unexplained gaps between agreed delivery volume and what actually arrives.",
          "A pattern of leads with disconnected numbers, invalid contact information, or clearly fabricated details.",
          "Resistance to sharing basic information about how leads are generated when asked directly.",
          "No meaningful improvement in conversion despite documented fixes to intake speed and call quality.",
        ],
      },
      {
        type: "heading",
        text: "When to Escalate to the Provider vs. Fix Internally",
      },
      {
        type: "paragraph",
        text: "Once internal factors are ruled out through Steps 1 through 4, bring specific, documented data to the provider rather than a general complaint — exact delivery timestamps, sample lead records, and conversion figures give a legitimate provider something concrete to investigate or explain. A provider unwilling to engage substantively with specific data, or one that responds only with generic reassurances, is itself a signal about whether the relationship is worth continuing.",
      },
      {
        type: "heading",
        text: "Building a Recurring Troubleshooting Cadence",
      },
      {
        type: "paragraph",
        text: "Rather than troubleshooting only when a channel feels broken, reviewing this same five-step sequence on a regular monthly or quarterly cadence — even when performance looks fine — catches emerging problems before they become significant enough to notice on gut feel alone. Firms that build this review into a standing process tend to make fewer reactive, poorly-informed decisions about switching lead sources than firms that only investigate once a channel has clearly gone downhill.",
      },
      {
        type: "heading",
        text: "Separating a Bad Batch From a Bad Source",
      },
      {
        type: "paragraph",
        text: "Even a genuinely strong lead source will occasionally deliver a rough week or a batch of leads that underperform for reasons outside anyone's control — seasonal fluctuations, a temporary ad platform issue, or simple statistical variance in a small sample. Judging an entire source based on a short, unusually poor stretch risks abandoning a channel that would have reverted to its normal performance level. Looking at trends over a meaningful sample size, rather than reacting to any single bad week, produces more accurate conclusions about whether a real problem exists.",
      },
      {
        type: "heading",
        text: "Keeping a Simple Troubleshooting Log",
      },
      {
        type: "paragraph",
        text: "Recording what was checked, what was found, and what changed each time a channel gets reviewed — even briefly — builds an institutional record that survives staff turnover and prevents the same diagnostic steps from being repeated from scratch every time a concern comes up. Over time, this log often reveals patterns, such as a specific lead source consistently underperforming during a particular season, that wouldn't be obvious from any single troubleshooting session alone.",
      },
    ],
    faqs: [
      {
        q: "My lead source used to work well but has gotten worse. What should I check first?",
        a: "Compare current delivery volume, timing, and lead data quality against what you received when the source was performing well — gradual drift in any of these areas often explains a decline that feels sudden but developed slowly.",
      },
      {
        q: "How much data should I bring to a provider when raising a concern?",
        a: "As much specific detail as possible — delivery timestamps, sample lead records, and conversion figures — since vague complaints are much harder for a legitimate provider to investigate and resolve than concrete, documented examples.",
      },
      {
        q: "Is it ever right to switch lead providers without troubleshooting first?",
        a: "If a provider is unresponsive, evasive about lead sourcing, or clearly delivering fabricated or invalid contact information despite being confronted with evidence, switching may be reasonable without further internal troubleshooting.",
      },
      {
        q: "How often should a firm review its lead generation performance?",
        a: "Monthly reviews catch problems early without becoming burdensome, while a deeper quarterly review is a reasonable cadence for reassessing whether a channel still deserves its current budget allocation.",
      },
      {
        q: "What's the most commonly overlooked cause of underperforming legal leads?",
        a: "Slow internal response time is one of the most frequently overlooked culprits — many firms blame lead quality for a problem that's actually rooted in how quickly, or slowly, their own team follows up after a lead arrives.",
      },
    ],
  },
];
