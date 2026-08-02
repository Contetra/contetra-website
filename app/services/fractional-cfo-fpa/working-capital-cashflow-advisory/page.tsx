import type { Metadata } from "next";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";
import { workingCapitalCashflowPage } from "@/app/services/fractional-cfo-fpa/working-capital-cashflow-advisory/content";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/working-capital-cashflow-advisory";
const { title, description } = workingCapitalCashflowPage.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pagePath },
  openGraph: { title, description, url: pagePath, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: workingCapitalCashflowPage.jsonLdName,
  serviceType: workingCapitalCashflowPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};

export default function WorkingCapitalCashflowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SubPageTemplate
        content={workingCapitalCashflowPage}
        secondaryCtaHref={bookingCta.href}
        breadcrumbTrail={[
          { label: "Services", href: "/services" },
          { label: "Fractional CFO & FP&A", href: "/services/fractional-cfo-fpa" },
        ]}
      />
    </>
  );
}
