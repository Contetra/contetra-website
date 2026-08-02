import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";
import { agenticAiSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";

const siteUrl = "https://contetra.com";

function getPage(slug: string) {
  return agenticAiSubPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return agenticAiSubPages.map((page) => ({ slug: page.slug }));
}

interface AgenticAiSubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AgenticAiSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};

  const pagePath = `/services/agentic-ai-automation/${page.slug}`;
  const { title, description } = page.meta;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pagePath },
    openGraph: { title, description, url: pagePath, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AgenticAiSubPage({ params }: AgenticAiSubPageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const pagePath = `/services/agentic-ai-automation/${page.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.jsonLdName,
    serviceType: page.jsonLdName,
    provider: {
      "@type": "Organization",
      name: "Contetra Private Limited",
      url: siteUrl,
    },
    url: `${siteUrl}${pagePath}`,
    description: page.meta.description,
    isPartOf: {
      "@type": "Service",
      name: "Agentic AI and Business Workflow Automation",
      url: `${siteUrl}/services/agentic-ai-automation`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SubPageTemplate
        content={page}
        secondaryCtaHref={page.secondaryCtaHref}
        breadcrumbTrail={[
          { label: "Services", href: "/services" },
          { label: "Agentic AI Automation", href: "/services/agentic-ai-automation" },
        ]}
        motif={<IconMotif icon={page.motifIcon} label={page.motifLabel} />}
      />
    </>
  );
}
