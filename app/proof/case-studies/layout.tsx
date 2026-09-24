
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Finance Transformation Case Studies: ERP, CFO & AI | Contetra`,
  description: `Explore Contetra case studies across ERP implementation, CFO & FP&A advisory, accounting and reporting, and AI automation, with real business challenges and outcomes.`,
  alternates: {
    canonical: "https://contetra.com/proof/case-studies",
  },
  openGraph: {
    title: `Finance Transformation Case Studies: ERP, CFO & AI | Contetra`,
    description: `Explore real Contetra engagements across ERP, CFO & FP&A, accounting and AI automation, including business challenges and outcomes`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com/#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://contetra.com/proof/case-studies#webpage",
      url: "https://contetra.com/proof/case-studies",
      name: "Finance Transformation Case Studies: ERP, CFO & AI | Contetra",
      description:
        "Explore Contetra case studies across ERP implementation, CFO and FP&A advisory, accounting and reporting, and AI automation, with real business challenges and outcomes.",
      inLanguage: "en-IN",
      about: [
        {
          "@type": "Thing",
          name: "Finance Transformation",
        },
        {
          "@type": "Thing",
          name: "ERP Implementation",
        },
        {
          "@type": "Thing",
          name: "CFO Advisory and FP&A",
        },
        {
          "@type": "Thing",
          name: "Accounting and Reporting Advisory",
        },
        {
          "@type": "Thing",
          name: "Agentic AI and Process Automation",
        },
      ],
      publisher: {
        "@id": "https://contetra.com/#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/proof/case-studies#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/proof/case-studies#breadcrumb",
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
          name: "Case Studies",
          item: "https://contetra.com/proof/case-studies",
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
