import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Dynamics 365 Implementation Services | Contetra",
  description:
    "Plan your Microsoft Dynamics 365 implementation with Contetra\u2019s finance-led ERP consulting for better reporting, controls, operations and ROI.",
  alternates: {
    canonical: "https://contetra.com/erp/microsoft-dynamics",
  },
  openGraph: {
    title: `Microsoft Dynamics 365 ERP Consulting Services | Contetra`,
    description: `Work with a Microsoft Dynamics 365 consultant to improve finance, operations, supply chain, reporting visibility and ERP adoption.`,
  },
};

export default function MicrosoftDynamicsLayout({
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
        "@id": "https://contetra.com/erp/microsoft-dynamics#webpage",
        url: "https://contetra.com/erp/microsoft-dynamics",
        name: "Microsoft Dynamics 365 Implementation Services | Contetra",
        description:
          "Contetra helps growing businesses plan, implement and optimise Microsoft Dynamics 365 with a finance-led approach through business process mapping, ERP scope definition, module planning, data readiness, UAT, reporting design and post-go-live optimisation.",
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
        about: {
          "@id": "https://contetra.com/erp/microsoft-dynamics#service",
        },
        breadcrumb: {
          "@id": "https://contetra.com/erp/microsoft-dynamics#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/erp/microsoft-dynamics#service",
        name: "Microsoft Dynamics 365 Implementation Services",
        serviceType:
          "Microsoft Dynamics 365 ERP Implementation and Functional Consulting",
        provider: {
          "@id": "https://contetra.com/#organization",
        },
        description:
          "Contetra provides finance-led Microsoft Dynamics 365 implementation services including ERP scope definition, business process mapping, module planning, data migration support, UAT, implementation governance, reporting design, and post-go-live optimisation.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: "https://contetra.com/erp/microsoft-dynamics",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/erp/microsoft-dynamics#breadcrumb",
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
            name: "Microsoft Dynamics 365 Implementation Services",
            item: "https://contetra.com/erp/microsoft-dynamics",
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
