import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const maxChars = 22;
export const truncateLabel = (label: string) => {
  if (label?.length > maxChars) {
    return label?.slice(0, maxChars) + "...";
  }
  return label;
};

/** Public URL path for a blog post under `/blog/...`. */
export function slugToBlogPostHref(slug: string | undefined | null): string {
  if (!slug?.trim()) return "/blog";
  const t = slug.trim();
  if (/^https?:\/\//i.test(t)) return t;
  let p = t.replace(/^\/+|\/+$/g, "");
  if (p.toLowerCase().startsWith("blog/")) {
    p = p.slice(5);
  }
  return `/blog/${p}`;
}

