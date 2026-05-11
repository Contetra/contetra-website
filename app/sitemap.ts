import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://contetra.com";
const APP_DIR = path.join(process.cwd(), "app");
type BlogRouteItem = { route: string; lastModified?: Date };

/**
 * Builds an absolute base URL for server-side fetch (sitemap runs on the server).
 * - If NEXT_PUBLIC_API_URL is already absolute (http/https), use it as-is.
 * - If it is a path prefix like "/api", join with NEXT_PUBLIC_API_ORIGIN (required in prod),
 *   e.g. origin https://contetra.co.in + /api → https://contetra.co.in/api
 */
function resolveApiBaseUrlForFetch(): string | null {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) return null;

  const withoutTrailingSlash = raw.replace(/\/+$/, "");

  if (/^https?:\/\//i.test(withoutTrailingSlash)) {
    return withoutTrailingSlash;
  }

  if (withoutTrailingSlash.startsWith("/")) {
    const origin =
      process.env.NEXT_PUBLIC_API_ORIGIN?.trim().replace(/\/+$/, "") ??
      process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`
        : null);

    if (!origin) return null;

    return `${origin}${withoutTrailingSlash}`.replace(/([^:]\/)\/+/g, "$1");
  }

  return withoutTrailingSlash;
}

/**
 * Blog list for sitemap (server-only). Optional override so local dev can use
 * production API when NEXT_PUBLIC_API_URL points at localhost.
 * Example: SITEMAP_API_BASE_URL=https://contetra.co.in/api
 */
function resolveBlogListApiBase(): string | null {
  const explicit =
    process.env.SITEMAP_API_BASE_URL?.trim() ??
    process.env.NEXT_PUBLIC_SITEMAP_API_BASE?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  return resolveApiBaseUrlForFetch();
}

function normalizeBlogSlugToRoute(slug: string): string | null {
  let pathPart = slug.trim().replace(/\/+$/, "");
  if (!pathPart) return null;

  if (/^https?:\/\//i.test(pathPart)) {
    try {
      pathPart = new URL(pathPart).pathname.replace(/\/+$/, "");
    } catch {
      return null;
    }
  }

  if (!pathPart.startsWith("/")) {
    pathPart = `/${pathPart}`;
  }

  if (pathPart.startsWith("/blog/") || pathPart === "/blog") {
    return pathPart.replace(/\/+$/, "") || "/blog";
  }

  const dated = pathPart.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/);
  if (dated) {
    const tail = dated[4].replace(/\/+$/, "");
    return tail ? `/blog/${tail}` : null;
  }

  const tail = pathPart.replace(/^\/+/, "");
  return tail ? `/blog/${tail}` : null;
}

async function collectPageRoutes(
  dirPath: string,
  routeSegments: string[] = []
): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const routes: string[] = [];

  const hasPageFile = entries.some(
    (entry) => entry.isFile() && entry.name === "page.tsx"
  );

  if (hasPageFile) {
    const cleanSegments = routeSegments.filter(
      (segment) => !segment.startsWith("(") && !segment.endsWith(")")
    );
    const routePath = `/${cleanSegments.join("/")}`.replace(/\/+/g, "/");
    routes.push(routePath === "/" ? "/" : routePath.replace(/\/$/, ""));
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    if (entry.name.startsWith("[") || entry.name.startsWith("_")) {
      continue;
    }

    const childDir = path.join(dirPath, entry.name);
    const childRoutes = await collectPageRoutes(childDir, [
      ...routeSegments,
      entry.name,
    ]);
    routes.push(...childRoutes);
  }

  return routes;
}

async function getBlogPostRoutes(): Promise<BlogRouteItem[]> {
  const apiBaseUrl = resolveBlogListApiBase();
  if (!apiBaseUrl) return [];

  try {
    const blogAllUrl = `${apiBaseUrl}/posts/blog-all`.replace(/([^:]\/)\/+/g, "$1");

    const logSitemapFetch =
      process.env.NODE_ENV === "development" ||
      process.env.DEBUG_SITEMAP === "1";
    if (logSitemapFetch) {
      console.log("[sitemap] blog list API base:", apiBaseUrl);
      console.log("[sitemap] blog list full URL:", blogAllUrl);
    }

    const blogsRes = await fetch(blogAllUrl, {
      next: { revalidate: 3600 },
    });

    if (!blogsRes.ok) {
      if (logSitemapFetch) {
        console.log(
          "[sitemap] blog-all response not OK:",
          blogsRes.status,
          blogsRes.statusText
        );
      }
      return [];
    }

    const blogsJson = await blogsRes.json();
    const raw = blogsJson?.response;
    const blogsData = Array.isArray(raw)
      ? raw
      : Array.isArray(raw?.data)
        ? raw.data
        : Array.isArray(blogsJson?.data)
          ? blogsJson.data
          : [];

    return blogsData
      .map((post: { slug?: string; updated_at?: string }) => {
        const route = post?.slug ? normalizeBlogSlugToRoute(post.slug) : null;
        if (!route) return null;

        return {
          route,
          lastModified: post.updated_at ? new Date(post.updated_at) : undefined,
        };
      })
      .filter((item: BlogRouteItem | null): item is BlogRouteItem => Boolean(item));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = await collectPageRoutes(APP_DIR);
  const blogRoutes = await getBlogPostRoutes();
  const now = new Date();
  const routeMap = new Map<string, BlogRouteItem>();

  for (const route of staticRoutes) {
    routeMap.set(route, { route, lastModified: now });
  }

  for (const blogRoute of blogRoutes) {
    routeMap.set(blogRoute.route, {
      route: blogRoute.route,
      lastModified: blogRoute.lastModified ?? now,
    });
  }

  return Array.from(routeMap.values()).map(({ route, lastModified }) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}/`,
    lastModified: lastModified ?? now,
    changeFrequency: route.startsWith("/blog/") ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
