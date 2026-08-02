import type { Metadata } from "next";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";
import { misReportingDashboardsPage } from "@/app/services/fractional-cfo-fpa/mis-reporting-dashboards/content";
import { primaryCta as bookingCta } from "@/lib/nav";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/mis-reporting-dashboards";
const { title, description } = misReportingDashboardsPage.meta;

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
  name: misReportingDashboardsPage.jsonLdName,
  serviceType: misReportingDashboardsPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};

export default function MisReportingDashboardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SubPageTemplate
        content={misReportingDashboardsPage}
        secondaryCtaHref={bookingCta.href}
        breadcrumbTrail={[
          { label: "Services", href: "/services" },
          { label: "Fractional CFO & FP&A", href: "/services/fractional-cfo-fpa" },
        ]}
      />
    </>
  );
}
