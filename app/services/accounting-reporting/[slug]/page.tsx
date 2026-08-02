import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";

import { accountingSubPages } from "@/lib/content";
import { IconMotif } from "@/components/ui/IconMotif";

const siteUrl = "https://contetra.com";

function getPage(slug: string) {
  return accountingSubPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return accountingSubPages.map((page) => ({ slug: page.slug }));
}

interface AccountingSubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AccountingSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};

  const pagePath = `/services/accounting-reporting/${page.slug}`;
  const { title, description } = page.meta;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pagePath },
    openGraph: { title, description, url: pagePath, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AccountingSubPage({ params }: AccountingSubPageProps) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const pagePath = `/services/accounting-reporting/${page.slug}`;

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
      name: "Accounting and Reporting Consulting",
      url: `${siteUrl}/services/accounting-reporting`,
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
          { label: "Accounting & Reporting", href: "/services/accounting-reporting" },
        ]}
        motif={<IconMotif icon={page.motifIcon} label={page.motifLabel} />}
      />
    </>
  );
}
