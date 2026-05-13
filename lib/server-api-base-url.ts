/**
 * Absolute base URL for server-side fetch (sitemap, generateMetadata, etc.).
 * - If NEXT_PUBLIC_API_URL is already absolute (http/https), use it as-is.
 * - If it is a path prefix like "/api", join with NEXT_PUBLIC_API_ORIGIN (required in prod),
 *   e.g. origin https://contetra.co.in + /api → https://contetra.co.in/api
 */
export function resolveApiBaseUrlForFetch(): string | null {
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
 * Optional override so local dev / build can use production API when
 * NEXT_PUBLIC_API_URL points at localhost. Same as sitemap blog list.
 */
export function resolveBlogListApiBase(): string | null {
  const explicit =
    process.env.SITEMAP_API_BASE_URL?.trim() ??
    process.env.NEXT_PUBLIC_SITEMAP_API_BASE?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  return resolveApiBaseUrlForFetch();
}
