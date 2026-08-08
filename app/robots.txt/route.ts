const SITE_URL = "https://contetra.com";

export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /services/ipo-readiness/finance-maturity-arc",
      "Disallow: /proof$",
      "Disallow: /proof/about-contetra",
      "Disallow: /proof/experts",
      `Sitemap: ${SITE_URL}/sitemap.xml`,
      `Host: ${SITE_URL}`,
      `LLMS: ${SITE_URL}/llms.txt`,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
}
