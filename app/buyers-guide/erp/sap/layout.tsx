import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "SAP ERP Companies: How to Choose the Right Implementation Partner in 2026",
  description:
    "How the SAP ERP partner landscape breaks down, how to evaluate anyone on your shortlist, what to budget, and where the most common rollout mistakes happen.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/sap",
  },
  openGraph: {
    title: "SAP ERP Companies: How to Choose the Right Implementation Partner in 2026",
    description:
      "How the SAP ERP partner landscape breaks down, how to evaluate anyone on your shortlist, what to budget, and where the most common rollout mistakes happen.",
  },
};

export default function SapBuyersGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://contetra.com/buyers-guide/erp/sap#article",
        url: "https://contetra.com/buyers-guide/erp/sap",
        headline:
          "SAP ERP Companies: How to Choose the Right Implementation Partner in 2026",
        description:
          "A practical buyer's guide to evaluating SAP ERP implementation companies, partner models, implementation approaches, costs, risks and post-go-live support.",
        author: {
          "@id": "https://contetra.com#organization",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        mainEntityOfPage: {
          "@id": "https://contetra.com/buyers-guide/erp/sap#webpage",
        },
        about: [
          {
            "@type": "Thing",
            name: "SAP ERP",
          },
          {
            "@type": "Thing",
            name: "SAP ERP Implementation Partners",
          },
          {
            "@type": "Thing",
            name: "SAP ERP Companies",
          },
        ],
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/buyers-guide/erp/sap#webpage",
        url: "https://contetra.com/buyers-guide/erp/sap",
        name: "SAP ERP Companies: How to Choose the Right Implementation Partner in 2026",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        mainEntity: {
          "@id": "https://contetra.com/buyers-guide/erp/sap#article",
        },
        breadcrumb: {
          "@id": "https://contetra.com/buyers-guide/erp/sap#breadcrumb",
        },
        hasPart: {
          "@id": "https://contetra.com/buyers-guide/erp/sap#faq",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/sap#breadcrumb",
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
            name: "SAP ERP Buyer's Guide",
            item: "https://contetra.com/buyers-guide/erp/sap",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com/buyers-guide/erp/sap#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I choose the right SAP ERP implementation partner?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Match the partner category to your company's scale and how much of the project you want to own. Then evaluate every candidate using the same criteria, including references from businesses of a similar size.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an SAP ERP implementation typically take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A focused mid-market single-entity implementation can run from a few months to around a year. Multi-entity and multi-country rollouts commonly take 12 to 24 months or longer.",
            },
          },
          {
            "@type": "Question",
            name: "How much does SAP ERP implementation typically cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The guide's industry benchmarks range from roughly $150,000 for a lean mid-market deployment to more than $750,000 for complex multi-entity rollouts, before licensing.",
            },
          },
          {
            "@type": "Question",
            name: "What industries benefit most from SAP ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Manufacturing, retail and consumer goods, professional services, logistics and financial services often benefit because they depend on close integration between finance, supply-chain and operations data.",
            },
          },
          {
            "@type": "Question",
            name: "How is a functional partner different from a technical vendor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A technical vendor sells or configures SAP. A functional partner represents finance and operations by writing requirements, negotiating scope, designing controls and managing change alongside the technical team.",
            },
          },
          {
            "@type": "Question",
            name: "Does Contetra replace the SAP technical vendor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Contetra works alongside the technical vendor, owning requirements, negotiation and change management while the vendor handles configuration, infrastructure and technical execution.",
            },
          },
          {
            "@type": "Question",
            name: "Which systems does Contetra support besides SAP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contetra's ERP practice is ERP-agnostic and also supports Microsoft Dynamics, ERPNext and Odoo.",
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
