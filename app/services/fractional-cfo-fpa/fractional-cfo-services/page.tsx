import type { Metadata } from "next";
import { SubPageTemplate } from "@/components/sections/cfo-fpa/SubPageTemplate";
import { fractionalCfoServicesPage } from "@/app/services/fractional-cfo-fpa/fractional-cfo-services/content";

const siteUrl = "https://contetra.com";
const pagePath = "/services/fractional-cfo-fpa/fractional-cfo-services";
const { title, description } = fractionalCfoServicesPage.meta;

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
  name: fractionalCfoServicesPage.jsonLdName,
  serviceType: fractionalCfoServicesPage.jsonLdName,
  provider: { "@type": "Organization", name: "Contetra Private Limited", url: siteUrl },
  url: `${siteUrl}${pagePath}`,
  description,
  isPartOf: {
    "@type": "Service",
    name: "Fractional CFO and FP&A Services",
    url: `${siteUrl}/services/fractional-cfo-fpa`,
  },
};

export default function FractionalCfoServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SubPageTemplate
        content={fractionalCfoServicesPage}
        secondaryCtaHref="/proof/case-studies"
        breadcrumbTrail={[
          { label: "Services", href: "/services" },
          { label: "Fractional CFO & FP&A", href: "/services/fractional-cfo-fpa" },
        ]}
      />
    </>
  );
}
