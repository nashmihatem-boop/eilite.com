import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LearningCenterCTA } from "@/components/sections/LearningCenterCTA";
import { TableOfContents } from "@/components/learning-center/TableOfContents";
import { RelatedArticles } from "@/components/learning-center/RelatedArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { extractToc } from "@/lib/articles/toc";
import { renderRichText } from "@/lib/articles/rich-text";
import { getArticleCta } from "@/lib/articles/cta";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    alternates: { canonical: `/learning-center/${article.slug}` },
    openGraph: {
      title: article.metaTitle ?? article.title,
      description: article.metaDescription ?? article.excerpt,
      url: `${siteConfig.url}/learning-center/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate ?? article.publishedDate,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const toc = extractToc(article.content);
  const related = getRelatedArticles(article);
  const cta = getArticleCta(article);
  let headingIndex = 0;

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Learning Center", url: `${siteConfig.url}/learning-center` },
          { name: article.title, url: `${siteConfig.url}/learning-center/${article.slug}` },
        ])}
      />
      <Navbar />
      <article className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <Link
              href="/learning-center"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-dark)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Learning Center
            </Link>

            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-surface-tint)] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">
                {article.category}
              </span>
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(article.publishedDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>

          <TableOfContents items={toc} />

          <div className="mt-10 space-y-5">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                const item = toc[headingIndex++];
                return (
                  <h2
                    key={i}
                    id={item?.id}
                    className="scroll-mt-28 pt-2 font-heading text-2xl font-bold text-[var(--color-ink)]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[var(--color-ink-soft)]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                        <span>{renderRichText(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[var(--color-ink-soft)]">
                  {renderRichText(block.text)}
                </p>
              );
            })}
          </div>

          <RelatedArticles articles={related} />

          <div className="mt-14">
            <LearningCenterCTA
              title={cta.title}
              subtitle={cta.subtitle}
              buttonLabel={cta.buttonLabel}
              industry={cta.industry}
              href={cta.href}
            />
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
