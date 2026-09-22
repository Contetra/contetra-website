import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `ERP Diagnostic Review & System Health Check | Contetra`,
  description: `Identify ERP gaps, improve system performance and align business processes with Contetra's ERP diagnostic review and system health check services.`,
  alternates: {
    canonical: "https://contetra.com/services/digital-transformation/erp-diagnostic-review-and-health-check",
  },
  openGraph: {
    title: `ERP Diagnostic Review & Health Check | Contetra`,
    description: `Independent ERP diagnostic review and root-cause analysis, understand why your ERP is underperforming and get a stabilisation roadmap before you upgrade or replace.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com/#organization",
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/digital-transformation#service",
      name: "ERP Implementation and Diagnostic Review",
      url: "https://contetra.com/services/digital-transformation",
      description:
        "Independent ERP implementation and diagnostic review services covering ERP strategy and selection, process and solution design, programme governance, data readiness, testing, change management, project rescue and post-go-live optimisation.",
      serviceType: [
        "ERP Implementation Consulting",
        "ERP Diagnostic Review",
        "ERP Functional Consulting",
        "ERP Programme Governance and PMO",
      ],
      category: "ERP Consulting and Digital Transformation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, CFOs, finance teams, operations leaders, ERP programme sponsors and organisations implementing, upgrading, rescuing or optimising ERP systems",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
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
          name: "Services",
          item: "https://contetra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Transformation",
          item: "https://contetra.com/services/digital-transformation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/digital-transformation#webpage",
      url: "https://contetra.com/services/digital-transformation",
      name: "ERP Implementation and Diagnostic Review Led by Business Process and Finance Experts",
      description:
        "ERP implementation and diagnostic review services covering ERP selection, process design, functional consulting, programme governance, data migration readiness, testing, change management and post-go-live optimisation.",
      about: {
        "@id": "https://contetra.com/services/digital-transformation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/digital-transformation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between an ERP implementation partner and an independent ERP consultant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An implementation partner configures and deploys the selected platform. An independent consultant helps the business define requirements, evaluate options, govern design and implementation, challenge trade-offs and protect the business outcome. The two roles should collaborate but should not be confused.",
          },
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
      {children}

    </section>
  );
}
