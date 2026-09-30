import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ERP Implementation & Diagnostic Review Services | Contetra`,
  description: `Independent ERP implementation and diagnostic review services covering ERP selection, process design, PMO, data readiness, testing, change management and post-go-live optimisation.`,
  alternates: {
    canonical: "https://contetra.com/services/digital-transformation",
  },
  openGraph: {
    title: `ERP Implementation & Diagnostic Review Services | Contetra`,
    description: `Improve ERP outcomes with independent support across ERP selection, process design, implementation PMO, diagnostics, testing and post-go-live optimisation.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation#service",
      name: "ERP Implementation and Diagnostic Review Services",
      url: "https://contetra.com/services/digital-transformation",
      description:
        "Independent ERP implementation and diagnostic review services covering ERP selection, process design, PMO, data readiness, testing, change management and post-go-live optimisation.",
      serviceType: [
        "ERP Implementation Consulting",
        "ERP Diagnostic Review",
        "ERP Selection and Evaluation",
        "ERP Functional Consulting",
        "ERP Programme Management Office",
        "ERP Process and Solution Design",
        "ERP Data Readiness and Migration Advisory",
        "ERP Testing and UAT Support",
        "ERP Change Management",
        "ERP Project Rescue",
        "ERP Post-Go-Live Optimisation",
        "ERP Governance and Controls Advisory",
      ],
      category: "ERP Consulting and Digital Transformation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs and Finance Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "ERP Programme Sponsors",
        },
        {
          "@type": "Audience",
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "ERP Diagnostic Review and Health Check",
          url: "https://contetra.com/services/digital-transformation/erp-diagnostic-review-and-health-check",
        },
        {
          "@type": "Service",
          name: "ERP Selection and Evaluation Advisory",
          url: "https://contetra.com/services/digital-transformation/erp-selection-and-evaluation-advisory",
        },
        {
          "@type": "Service",
          name: "ERP Implementation PMO and Functional Consulting",
          url: "https://contetra.com/services/digital-transformation/erp-implementation-pmo-and-functional-consulting",
        },
        {
          "@type": "Service",
          name: "ERP Project Rescue and Post-Go-Live Optimisation",
          url: "https://contetra.com/services/digital-transformation/erp-project-rescue-and-post-go-live-optimisation",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://contetra.com/services/digital-transformation#webpage",
      url: "https://contetra.com/services/digital-transformation",
      name: "ERP Implementation & Diagnostic Review Services | Contetra",
      description:
        "Independent ERP implementation and diagnostic review services covering ERP selection, process design, PMO, data readiness, testing, change management and post-go-live optimisation.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/digital-transformation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation#breadcrumb",
      },
      publisher: {
        "@id": "https://contetra.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/digital-transformation#breadcrumb",
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
          name: "ERP Implementation & Diagnostic Review",
          item: "https://contetra.com/services/digital-transformation",
        },
      ],
    },
  ],
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
