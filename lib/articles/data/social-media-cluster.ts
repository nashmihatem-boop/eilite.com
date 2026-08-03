import type { Article } from "@/lib/articles/types";

const socialRelated = ["social-media-marketing-for-law-firms", "content-marketing", "online-reputation-management-for-lawyers-key-tactics"];

export const socialMediaClusterArticles: Article[] = [
  {
    slug: "lawyers-and-social-media",
    title: "Lawyers and Social Media: Navigating the Ethics Rules",
    metaTitle: "Lawyers and Social Media: Ethics Guide",
    excerpt:
      "Before posting, most attorneys should understand where bar advertising rules actually apply to social content. Here's a practical walkthrough of the common gray areas.",
    metaDescription: "Before posting, most attorneys should understand where bar advertising rules actually apply to social content.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: socialRelated,
    content: [
      {
        type: "paragraph",
        text: "Social media platforms move fast, and it's easy for a firm's marketing team to post content without stopping to consider whether state bar advertising rules apply the same way they would to a billboard or a TV ad. In most states, they do — social media posts by or on behalf of an attorney are generally treated as attorney advertising, subject to the same rules as any other marketing channel.",
      },
      {
        type: "heading",
        text: "Common Areas Where Rules Apply",
      },
      {
        type: "list",
        items: [
          "Client testimonials and case result claims often carry specific disclosure or disclaimer requirements that vary by state.",
          "Claims of specialization or expertise can be restricted unless backed by actual board certification recognized by your state bar.",
          "Comparative claims (\"the best,\" \"the top\") can run afoul of rules against unverifiable or misleading superiority claims.",
          "Solicitation rules governing direct outreach to potential clients can apply to unsolicited direct messages, not just public posts.",
        ],
      },
      {
        type: "heading",
        text: "The \"Attorney Advertising\" Disclosure Question",
      },
      {
        type: "paragraph",
        text: "Many states require an \"attorney advertising\" disclaimer on marketing materials, and the application of this requirement to individual social media posts (versus a bio or general profile) can be genuinely unclear and varies by jurisdiction. Confirming your specific state bar's current guidance, rather than assuming a national standard applies uniformly, is worth the time given how much marketing content moves through social channels.",
      },
      {
        type: "heading",
        text: "Personal vs. Professional Accounts",
      },
      {
        type: "paragraph",
        text: "Attorneys sometimes assume a personal account carries fewer restrictions than an official firm account, but if the content discusses legal services or invites potential clients to reach out, bar rules can still apply regardless of which account it's posted from. Being genuinely clear internally about what content belongs on personal versus firm accounts helps avoid inadvertent compliance issues.",
      },
      {
        type: "heading",
        text: "Employee and Associate Social Media Use",
      },
      {
        type: "paragraph",
        text: "Firms with multiple attorneys and staff members active on social media benefit from a simple, written social media policy — not to stifle genuine engagement, but to ensure everyone understands where the compliance lines are, particularly around case discussion, client confidentiality, and advertising claims.",
      },
      {
        type: "heading",
        text: "Building Compliant Content Habits",
      },
      {
        type: "paragraph",
        text: "None of this should discourage a firm from being active on social media — it should simply inform how content gets created and reviewed. For the broader strategy of what makes social media actually effective within these bounds, see our guide to [social media marketing for law firms](/learning-center/social-media-marketing-for-law-firms).",
      },
    ],
  },
  {
    slug: "social-media-for-law-firms",
    title: "Social Media for Law Firms: Choosing the Right Platforms for Your Practice Area",
    metaTitle: "Best Social Media Platforms for Law Firms",
    excerpt:
      "Not every platform serves every practice area equally. Here's a practical breakdown of where LinkedIn, Facebook, Instagram, and short-form video each perform best for legal marketing.",
    metaDescription: "Not every platform serves every practice area equally. Here's a practical breakdown of where LinkedIn, Facebook, Instagram.",
    category: "Law Firm Marketing",
    readTime: "7 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: socialRelated,
    content: [
      {
        type: "paragraph",
        text: "Trying to maintain an active, high-quality presence across every social platform simultaneously usually produces mediocre results everywhere rather than strong results anywhere. Matching platform choice to practice area and audience is a more efficient use of limited marketing time and budget.",
      },
      {
        type: "heading",
        text: "LinkedIn for Business, Employment, and Estate Planning",
      },
      {
        type: "paragraph",
        text: "LinkedIn's professional audience skews toward exactly the demographic that needs business law, employment law, and estate planning services — working professionals and business owners. Content addressing workplace legal issues, business formation, and wealth transfer planning tends to perform well here, and LinkedIn's networking features support B2B-style referral relationships with other professionals as well.",
      },
      {
        type: "heading",
        text: "Facebook for Personal Injury and Family Law",
      },
      {
        type: "paragraph",
        text: "Facebook's broad, community-oriented user base and local group features make it particularly effective for consumer-facing practice areas like personal injury and family law, where community trust and local visibility matter significantly. Local community groups can also be a valuable, low-cost source of visibility when engaged with authentically rather than purely promotionally.",
      },
      {
        type: "heading",
        text: "Instagram and Short-Form Video for Personal Branding",
      },
      {
        type: "list",
        items: [
          "Attorney-forward content — quick legal tips, day-in-the-life posts, case result celebrations (compliantly presented) — tends to perform well in short-form video formats.",
          "This format requires genuine, ongoing content investment to build an audience; sporadic posting rarely gains traction.",
          "Works particularly well for attorneys building an individual personal brand alongside their firm's overall marketing.",
        ],
      },
      {
        type: "heading",
        text: "Where Not to Overinvest",
      },
      {
        type: "paragraph",
        text: "Platforms that don't clearly match your practice area's audience or your firm's content capacity are usually better left minimal — a stagnant, rarely-updated profile can actually undermine credibility more than having no presence on that platform at all.",
      },
      {
        type: "heading",
        text: "Building a Sustainable Platform Strategy",
      },
      {
        type: "paragraph",
        text: "Choosing one or two platforms to genuinely commit to, rather than spreading thin effort across five, tends to produce better results for most firms. For guidance on the compliance considerations that apply across every platform, see our guide to [lawyers and social media ethics](/learning-center/lawyers-and-social-media).",
      },
    ],
  },
  {
    slug: "linkedin-marketing-for-lawyers",
    title: "LinkedIn Marketing for Lawyers: Building B2B Referral Relationships",
    metaTitle: "LinkedIn Marketing for Lawyers",
    excerpt:
      "LinkedIn works differently than consumer platforms for attorneys — it's less about direct client acquisition and more about building the professional network that produces referrals.",
    metaDescription: "LinkedIn works differently than consumer platforms for attorneys — it's about building the professional network that produces referrals.",
    category: "Law Firm Marketing",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    relatedSlugs: [...socialRelated, "referral-programs"],
    content: [
      {
        type: "paragraph",
        text: "LinkedIn rarely produces a direct \"call now\" client inquiry the way a well-targeted Google ad might. What it does exceptionally well is build and maintain the kind of professional network — other attorneys, financial advisors, business owners, potential referral partners — that produces a steady stream of introductions and referrals over time.",
      },
      {
        type: "heading",
        text: "Optimizing a Personal Profile, Not Just the Firm Page",
      },
      {
        type: "paragraph",
        text: "Individual attorney profiles typically drive more engagement and network growth than a firm's company page alone. A complete, detailed profile — credentials, notable experience, a clear description of who you help — makes a stronger impression on the professional connections most likely to refer business.",
      },
      {
        type: "heading",
        text: "Content That Performs Well for Attorneys on LinkedIn",
      },
      {
        type: "list",
        items: [
          "Commentary on legal or industry developments relevant to your practice area, demonstrating ongoing engagement with your field.",
          "Case results and notable outcomes (compliantly presented), which build credibility with a professional audience.",
          "Genuine thought leadership — a considered opinion on a trend or issue, rather than generic motivational content.",
        ],
      },
      {
        type: "heading",
        text: "Actively Building Your Referral Network",
      },
      {
        type: "paragraph",
        text: "LinkedIn makes it easy to identify and connect with professionals who serve a similar client base — financial advisors, accountants, other attorneys in adjacent practice areas. A genuine, ongoing effort to build and nurture these connections, rather than simply accumulating passive connections, is what actually converts LinkedIn activity into referral relationships.",
      },
      {
        type: "heading",
        text: "Using LinkedIn for Business Development, Not Just Visibility",
      },
      {
        type: "paragraph",
        text: "Beyond posting content, direct, personalized outreach to relevant professional connections — congratulating a new role, commenting thoughtfully on their posts, occasionally checking in — builds the kind of relationship that eventually produces a referral, far more effectively than passive profile maintenance alone.",
      },
      {
        type: "heading",
        text: "Where LinkedIn Fits Into a Broader Referral Strategy",
      },
      {
        type: "paragraph",
        text: "LinkedIn works best as one component of a broader, deliberate referral-building effort. For the complete framework, see our guide to [referral programs for law firms](/learning-center/referral-programs).",
      },
    ],
  },
];
