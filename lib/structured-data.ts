import { siteConfig } from "@/lib/constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eilite",
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    telephone: "+1-302-244-7240",
    email: "info@eilite.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1111B S Governors Ave STE 21889",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19904",
      addressCountry: "US",
    },
    sameAs: ["https://everlawyer.com", "https://everfinancier.com", "https://evercontractor.com", "https://everinsurer.com"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Eilite",
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function articleJsonLd(article: {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  updatedDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    author: { "@type": "Organization", name: "Eilite", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "Eilite",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/learning-center/${article.slug}` },
  };
}

// Service, not Product: Eilite brokers a B2B lead-generation service, not a physical
// or packaged digital good, so Product/Offer schema (which expects a price/SKU) doesn't
// fit — Service is the schema.org type Google's own docs point to for this category.
export function serviceJsonLd(service: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} | Eilite`,
    description: service.description,
    url: service.url,
    provider: { "@type": "Organization", name: "Eilite", url: siteConfig.url },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
