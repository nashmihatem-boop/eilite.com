export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate?: string;
  relatedSlugs?: string[];
  content: ArticleBlock[];
};
