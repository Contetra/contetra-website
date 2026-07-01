import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oracle ERP Implementation Services | Contetra",
  description:
    "Plan Oracle ERP implementation with Contetra\u2019s finance-led consulting for better financial control, procurement, reporting, operations and ROI.",
  alternates: {
    canonical: "https://contetra.com/erp/oracle",
  },
  openGraph: {
    title: `Oracle ERP Consultant for Business Transformation`,
    description: `Looking for an Oracle ERP implementation partner? Contetra helps businesses improve finance processes, procurement, reporting, controls and ERP adoption.`,
  },
};

export default function OracleErpImplementationServicesLayout({
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
        "@id": "https://contetra.com/erp/oracle#webpage",
        url: "https://contetra.com/erp/oracle",
        name: "Oracle ERP Implementation Services | Contetra",
        description:
          "Contetra helps growing and mid-market businesses plan, implement and optimise Oracle ERP through business process mapping, ERP scope definition, module planning, FRD preparation, data readiness, UAT support, implementation governance, reporting design and post-go-live improvement.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/oracle#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/oracle#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/oracle#service",
        name: "Oracle ERP Implementation Services",
        serviceType: "Oracle ERP Implementation and Functional Consulting",
        provider: {
          "@id": "https://contetra.com/#organization",
        },
        description:
          "Contetra provides finance-led Oracle ERP implementation services including ERP scope definition, business process mapping, FRD preparation, module planning, data readiness, UAT support, implementation governance, reporting design, and post-go-live optimisation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: "https://contetra.com/erp/oracle",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/oracle#breadcrumb",
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
            name: "Oracle ERP Implementation Services",
            item: "https://contetra.com/erp/oracle",
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
