import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Microsoft Dynamics 365 ERP Partners: How to Choose the Right Implementation Partner in 2026",
  description:
    "Evaluate Microsoft Dynamics 365 ERP partners, compare Business Central and Finance & Supply Chain Management, understand costs, timelines and how to choose the right implementation team.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365",
  },
  openGraph: {
    title: "Microsoft Dynamics 365 ERP Partners: A Buyer's Guide",
    description:
      "Evaluate Microsoft Dynamics 365 ERP partners, compare Business Central and Finance & Supply Chain Management, understand costs, timelines and how to choose the right implementation team.",
  },
};

export default function MicrosoftDynamics365ErpPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#service",
        name: "Microsoft Dynamics 365 Implementation Services",
        url: "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365",
        description:
          "Microsoft Dynamics 365 implementation services covering business process mapping, ERP scope definition, module planning, data readiness, UAT, vendor coordination, reporting design and post-go-live optimisation.",
        serviceType: [
          "Microsoft Dynamics 365 Implementation",
          "Microsoft Dynamics ERP Consulting",
          "Dynamics 365 Functional Consulting",
          "ERP Process Mapping",
          "ERP Data Readiness",
          "ERP UAT Support",
          "Power BI Reporting Design",
          "Post-Go-Live ERP Optimisation",
        ],
        provider: {
          "@id": "https://contetra.com#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        about: {
          "@type": "SoftwareApplication",
          name: "Microsoft Dynamics 365",
        },
        mainEntityOfPage: {
          "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#webpage",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#webpage",
        url: "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365",
        name: "Microsoft Dynamics 365 Implementation Services | Contetra",
        description:
          "Implement Microsoft Dynamics 365 around business processes, financial controls, data, reporting and measurable business outcomes.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#service",
        },
        mainEntity: {
          "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#breadcrumb",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Microsoft Dynamics 365 Implementation Services",
            item: "https://contetra.com/buyers-guide/erp/microsoft-dynamics-365",
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
