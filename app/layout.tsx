import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/constants";
import { DemoModalProvider } from "@/lib/demo-modal-context";
import { DemoModal } from "@/components/sections/DemoModal";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Premium Leads & Live Warm Transfers | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `Premium Leads & Live Warm Transfers | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  // No title/description here on purpose — Next.js falls back to each page's own
  // resolved title/description when a child route doesn't set `twitter` itself.
  // Hardcoding them here meant every page on the site showed the homepage's
  // Twitter Card text instead of its own.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <DemoModalProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:shadow-lg"
          >
            Skip to main content
          </a>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  );
}
