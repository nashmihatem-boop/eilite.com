import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">404</span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[var(--color-ink-soft)]">
            The page you're looking for doesn't exist or may have moved. Try heading back home, or browse our
            Learning Center for guides on leads, warm transfers, and compliance.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              Back to Home
            </Link>
            <Link
              href="/learning-center"
              className="rounded-full border border-[var(--color-line)] px-8 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)]/40"
            >
              Browse Learning Center
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
