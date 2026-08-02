import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Single data-access module for the Insights (blog) section.
 *
 * Today this reads local MDX files from `content/insights/`. If the source
 * ever changes (e.g. a headless CMS or the old site's backend API), only
 * this file needs to change — every page imports exclusively from here.
 * See `content/insights/README.md` for the planned migration paths.
 */

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  /** ISO date string */
  date: string;
  author: string;
  category: string;
  service?: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
  /** Original URL on the old site, if this post is migrated content */
  canonical?: string;
  /** Raw MDX/Markdown body (frontmatter stripped) */
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

function computeReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function readPostFile(filename: string): BlogPost {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const slug = (data.slug as string) || filename.replace(/\.mdx?$/, "");

  return {
    title: (data.title as string) ?? slug,
    slug,
    excerpt: (data.excerpt as string) ?? "",
    date: (data.date as string) ?? new Date().toISOString(),
    author: (data.author as string) ?? "Contetra",
    category: (data.category as string) ?? "General",
    service: data.service as string | undefined,
    tags: (data.tags as string[]) ?? [],
    coverImage: data.coverImage as string | undefined,
    readingTime: (data.readingTime as string) || computeReadingTime(content),
    canonical: data.canonical as string | undefined,
    content: content.trim(),
  };
}

let postsCache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (postsCache) return postsCache;
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !/^readme\.mdx?$/i.test(f));
  const posts = files.map(readPostFile);
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  postsCache = posts;
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((post) => post.category))).sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** The five curated categories the Insights nav dropdown links to today. */
export const PRIMARY_CATEGORIES = [
  "CFO & FP&A",
  "ERP",
  "Accounting Standards",
  "AI Automation",
  "IPO Readiness",
] as const;
