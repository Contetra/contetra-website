import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Zoho ERP Implementation Services | Contetra",
  description:
    "Plan your Zoho ERP implementation with Contetra's finance-led consulting for better finance, inventory, sales, reporting, controls and business visibility.",
  alternates: {
    canonical: "https://contetra.com/erp/zoho",
  },
  openGraph: {
    title: "Zoho ERP Implementation Services | Contetra",
    description:
      "Plan your Zoho ERP implementation with Contetra's finance-led consulting for better finance, inventory, sales, reporting, controls and business visibility.",
  },
};

export default function ZohoImplementationServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://contetra.com/#website",
        url: "https://contetra.com/",
        name: "Contetra",
        publisher: {
          "@id": "https://contetra.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://contetra.com/#organization",
        name: "Contetra Private Limited",
        url: "https://contetra.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/logo.png",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/erp/zoho#webpage",
        url: "https://contetra.com/erp/zoho",
        name: "Zoho ERP Implementation Services | Contetra",
        description:
          "Contetra helps growing businesses plan, implement and optimise Zoho ERP through process mapping, ERP scope definition, module planning, BRD preparation, data migration support, UAT, reporting design and post-go-live optimisation.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/zoho#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/zoho#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/zoho#service",
        name: "Zoho ERP Implementation Services",
        serviceType: "Zoho ERP Implementation and Functional Consulting",
        provider: {
          "@id": "https://contetra.com/#organization",
        },
        description:
          "Contetra provides finance-led Zoho ERP implementation services including ERP scope definition, process mapping, BRD preparation, module fitment, data migration support, UAT, dashboard design, implementation governance and post-go-live optimisation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: "https://contetra.com/erp/zoho",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/zoho#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ERP",
            item: "https://contetra.com/erp",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Zoho ERP Implementation Services",
            item: "https://contetra.com/erp/zoho",
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
