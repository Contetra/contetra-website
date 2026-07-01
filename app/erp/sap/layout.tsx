import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP S/4HANA Implementation Services",
  description:
    "Turn SAP S/4HANA into a Business Transformation Engine, Not Just Another ERP Project",
  alternates: {
    canonical: "https://contetra.com/erp/sap",
  },
  openGraph: {
    title: `SAP ERP Consultant for Business Transformation | Contetra`,
    description: `Plan your SAP ERP implementation with Contetra’s finance-led consulting for better finance processes, reporting visibility and measurable ERP ROI.`,
  },
};

export default function SapLayout({ children }: { children: React.ReactNode }) {
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
        "@id": "https://contetra.com/erp/sap#webpage",
        url: "https://contetra.com/erp/sap",
        name: "SAP S/4HANA Implementation Services | Contetra",
        description:
          "Contetra helps growing and mid-market businesses plan, implement and optimise SAP S/4HANA through finance-led process mapping, ERP scope definition, FRD preparation, PMO support, data readiness, UAT coordination, reporting design and post-go-live optimisation.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/sap#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/sap#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/sap#service",
        name: "SAP S/4HANA Implementation Services",
        serviceType:
          "SAP S/4HANA Implementation and ERP Functional Consulting",
        provider: {
          "@id": "https://contetra.com/#organization",
        },
        description:
          "Contetra provides finance-led SAP S/4HANA implementation services including ERP scope definition, business process mapping, FRD preparation, PMO governance, master data readiness, UAT support, reporting design, change management and post-go-live optimisation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: "https://contetra.com/erp/sap",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/sap#breadcrumb",
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
            name: "SAP S/4HANA Implementation Services",
            item: "https://contetra.com/erp/sap",
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
