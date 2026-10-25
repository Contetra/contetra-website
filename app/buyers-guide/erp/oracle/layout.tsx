import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Oracle ERP Implementation Partners & Consulting Services | Contetra",
  description:
    "Evaluate Oracle ERP implementation partners, compare Fusion Cloud, NetSuite and EBS, understand costs, timelines and choose the right ERP consulting partner.",
  alternates: {
    canonical:
      "https://contetra.com/buyers-guide/erp/oracle",
  },
  openGraph: {
    title: "Oracle ERP Implementation: A Buyer's Guide for Growing Businesses",
    description:
      "Evaluate Oracle ERP implementation partners, compare Fusion Cloud, NetSuite and EBS, understand costs, timelines and choose the right ERP consulting partner.",
  },
};

export default function OracleErpBuyersGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://contetra.com/buyers-guide/erp/oracle#article",
        url: "https://contetra.com/buyers-guide/erp/oracle",
        headline:
          "Oracle ERP Implementation: A Buyer's Guide for Growing Businesses",
        description:
          "A practical guide for finance leaders and business owners evaluating Oracle ERP implementation partners, consulting models, implementation approaches, budgets and long-term ROI.",
        author: {
          "@id": "https://contetra.com#organization",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        mainEntityOfPage: {
          "@id": "https://contetra.com/buyers-guide/erp/oracle#webpage",
        },
        about: [
          {
            "@type": "Thing",
            name: "Oracle ERP Implementation",
          },
          {
            "@type": "Thing",
            name: "Oracle ERP Implementation Partners",
          },
          {
            "@type": "Thing",
            name: "Oracle ERP Consulting",
          },
        ],
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/buyers-guide/erp/oracle#webpage",
        url: "https://contetra.com/buyers-guide/erp/oracle",
        name: "Oracle ERP Implementation Partners & Consulting Services | Contetra",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        mainEntity: {
          "@id": "https://contetra.com/buyers-guide/erp/oracle#article",
        },
        breadcrumb: {
          "@id": "https://contetra.com/buyers-guide/erp/oracle#breadcrumb",
        },
        hasPart: {
          "@id": "https://contetra.com/buyers-guide/erp/oracle#faq",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/oracle#breadcrumb",
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
            name: "Oracle ERP Buyer's Guide",
            item: "https://contetra.com/buyers-guide/erp/oracle",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com/buyers-guide/erp/oracle#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I choose the right Oracle ERP implementation partner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Evaluate whether the partner understands your industry, provides senior consultant involvement, follows a structured implementation methodology and offers strong post-go-live support.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an Oracle ERP implementation typically take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Implementation timelines depend on scope, modules, business complexity and organisational readiness. A focused single-entity implementation may take four to nine months, while larger multi-entity or multi-country programmes may take 12 to 24 months or longer.",
            },
          },
          {
            "@type": "Question",
            name: "What industries benefit most from Oracle ERP implementation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Industries such as manufacturing, distribution, retail, professional services, real estate, logistics, healthcare and financial services can benefit from integrated financial management and operational visibility.",
            },
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
