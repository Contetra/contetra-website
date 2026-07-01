import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "ERPNext Implementation Services | Contetra",
  description:
    "Plan your ERPNext implementation with Contetra\u2019s finance-led ERP consulting for better processes, reporting, controls and business visibility.",
  alternates: {
    canonical: "https://contetra.com/erp/erpnext",
  },
   openGraph: {
    title: `ERPNext Implementation Services for Growing Businesses | Contetra`,
    description: `Work with an ERPNext consultant in India to improve finance, inventory, manufacturing, reporting and business process visibility.`,
  },
};

export default function ErpNextImplementationServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/erp/erpnext#webpage",
        url: "https://contetra.com/erp/erpnext",
        name: "ERPNext Implementation Services | Contetra",
        description:
          "Contetra provides ERPNext implementation services, functional consulting, process mapping, ERP governance, data migration support, UAT, reporting design and post-go-live optimization for growing businesses.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/erpnext#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/erpnext#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/erpnext#service",
        name: "ERPNext Implementation Services",
        serviceType: "ERPNext Implementation and ERP Functional Consulting Services",
        provider: {
          "@type": "Organization",
          "@id": "https://contetra.com/#organization",
          name: "Contetra Private Limited",
          url: "https://contetra.com",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Contetra helps businesses plan, implement and optimize ERPNext through process mapping, ERP scope definition, functional consulting, data migration support, UAT coordination, reporting design, implementation governance and post-go-live optimization.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/erpnext#breadcrumb",
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
            name: "ERPNext Implementation Services",
            item: "https://contetra.com/erp/erpnext",
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
