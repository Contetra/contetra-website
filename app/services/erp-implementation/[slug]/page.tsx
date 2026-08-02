import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";
import { erpSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";

const siteUrl = "https://contetra.com";

function getPage(slug: string) {
  return erpSubPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return erpSubPages.map((page) => ({ slug: page.slug }));
}

interface ErpSubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ErpSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};

  const pagePath = `/services/erp-implementation/${page.slug}`;
  const { title, description } = page.meta;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pagePath },
    openGraph: { title, description, url: pagePath, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ErpSubPage({ params }: ErpSubPageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const pagePath = `/services/erp-implementation/${page.slug}`;

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
      name: "ERP Implementation and Diagnostic Review",
      url: `${siteUrl}/services/erp-implementation`,
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
          { label: "ERP Transformation", href: "/services/erp-implementation" },
        ]}
        motif={<IconMotif icon={page.motifIcon} label={page.motifLabel} />}
      />
    </>
  );
}
