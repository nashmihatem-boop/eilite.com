import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eilite Holding Group collects, uses, discloses, and safeguards your information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information We May Collect",
    body: "We may collect information about you in a variety of ways. The information we may collect on the Site includes:",
    subsections: [
      {
        title: "1. Personal Data",
        body: "Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, and preferences, that you voluntarily give to us when you register on the Site or when you choose to participate in various activities related to the Site, such as online chat or message boards.",
      },
      {
        title: "2. Derivative Data",
        body: "Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.",
      },
      {
        title: "3. Data from Social Networks",
        body: "User information from social networking sites, such as Facebook, Instagram, LinkedIn, Twitter, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.",
      },
    ],
  },
  {
    title: "Use of Your Information",
    body: "Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we may use the information we collect about you via the Site to:",
    list: [
      "Create and manage your account.",
      "Process your transactions and send you confirmations.",
      "Send administrative information, such as information about your account, or updates to policies.",
      "Improve the Site's functionality and user experience.",
      "Send you marketing and promotional communications if you've opted in.",
      "Enable user-to-user communication.",
      "Respond to customer service requests and support needs.",
      "Conduct research and analysis for business insights and product development.",
    ],
  },
  {
    title: "Disclosure of Your Information",
    body: "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:",
    subsections: [
      {
        title: "1. By Law or to Protect Rights",
        body: "If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.",
      },
      {
        title: "2. Third-Party Service Providers",
        body: "We may share your information with third-party service providers that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.",
      },
      {
        title: "3. Business Transfers",
        body: "We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
      },
    ],
  },
  {
    title: "Tracking Technologies",
    subsections: [
      {
        title: "1. Cookies",
        body: "We may use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are used to help improve your experience by remembering your preferences, login status, and other relevant data.",
      },
      {
        title: "2. Web Beacons",
        body: "We may also use web beacons (also known as pixel tags) to monitor your navigation through the Site. These technologies allow us to better understand your preferences and improve your experience.",
      },
      {
        title: "3. Third-Party Analytics",
        body: "We may use third-party service providers to monitor and analyze the use of our Site.",
      },
    ],
  },
  {
    title: "Security of Your Information",
    body: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
  },
  {
    title: "Your Data Protection Rights",
    body: "Depending on your location, you may have the following rights under data protection laws:",
    list: [
      "Access: You can request a copy of your personal data we hold about you.",
      "Rectification: You have the right to request that we correct any inaccuracies.",
      "Erasure: You have the right to request the deletion of your data under certain conditions.",
      "Restrict Processing: You can request that we limit the processing of your personal data in certain situations.",
      "Data Portability: You may request that we transfer your data to another organization or directly to you.",
      "Object to Processing: You have the right to object to our processing of your personal data in certain circumstances.",
    ],
    footer: "To exercise any of these rights, please contact us using the contact details provided below.",
  },
  {
    title: "Changes to this Privacy Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting the personal information we collect.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm font-medium text-[var(--color-brand)]">Last updated: August 1, 2026</p>

          <p className="mt-8 text-[var(--color-ink-soft)]">
            Eilite Holding Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website{" "}
            <a href="https://eilite.com" className="font-medium text-[var(--color-brand)] underline">
              eilite.com
            </a>{" "}
            (the &ldquo;Site&rdquo;). Please read this Privacy Policy carefully. If you do not agree with the
            terms of this Privacy Policy, please do not access the Site.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-2xl font-bold text-[var(--color-ink)]">{section.title}</h2>
                {section.body && <p className="mt-3 text-[var(--color-ink-soft)]">{section.body}</p>}

                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[var(--color-ink-soft)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="mt-5 space-y-5">
                    {section.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="font-heading text-base font-bold text-[var(--color-ink)]">{sub.title}</h3>
                        <p className="mt-1.5 text-sm text-[var(--color-ink-soft)]">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.footer && <p className="mt-4 text-[var(--color-ink-soft)]">{section.footer}</p>}
              </div>
            ))}

            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--color-ink)]">Contact Us</h2>
              <p className="mt-3 text-[var(--color-ink-soft)]">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:contact@eilite.com"
                  className="font-medium text-[var(--color-brand)] underline"
                >
                  contact@eilite.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
