import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Odoo Implementation Partner & ERP Consulting Services | Contetra`,
  description: `Plan your Odoo ERP implementation with Contetra’s finance-led consulting for better inventory, manufacturing, reporting, controls and ROI.`,
  alternates: {
    canonical: "https://contetra.com/erp/odoo",
  },
  openGraph: {
    title: `Odoo Consulting Services for Growing Businesses | Contetra`,
    description: `Contetra is an Odoo service provider supporting ERP requirements, data migration, implementation, reporting and post-go-live optimization.`,
  },
};

export default function LayoutKyc({
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
        "@id": "https://contetra.com/erp/odoo#webpage",
        url: "https://contetra.com/erp/odoo",
        name: "Odoo ERP Implementation Services | Contetra",
        description:
          "Contetra helps growing businesses plan, implement and optimise Odoo ERP through business process mapping, ERP scope definition, module planning, data migration readiness, UAT support, reporting design and post-go-live optimisation.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/odoo#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/odoo#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/odoo#service",
        name: "Odoo ERP Implementation Services",
        serviceType: "Odoo ERP Implementation and Functional Consulting",
        provider: {
          "@id": "https://contetra.com/#organization",
        },
        description:
          "Contetra provides finance-led Odoo ERP implementation services including ERP scope definition, business process mapping, module planning, data migration readiness, UAT support, implementation governance, reporting design, and post-go-live optimisation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: "https://contetra.com/erp/odoo",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/odoo#breadcrumb",
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
            name: "Odoo ERP Implementation Services",
            item: "https://contetra.com/erp/odoo",
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
