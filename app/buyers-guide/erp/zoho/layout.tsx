import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Zoho ERP Implementation Partners Guide for Growing Businesses | Contetra",
  description:
    "Learn how to choose the right Zoho ERP implementation partner with this buyer's guide covering consulting, pricing, implementation and best practices.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/zoho",
  },
  openGraph: {
    title:
      "Zoho ERP Implementation & Consulting Partners: A Buyer's Guide for Growing Businesses",
    description:
      "Learn how to choose the right Zoho ERP implementation partner with this buyer's guide covering consulting, pricing, implementation and best practices.",
  },
};

export default function ZohoBuyersGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://contetra.com/buyers-guide/erp/zoho#article",
        url: "https://contetra.com/buyers-guide/erp/zoho",
        headline: "Zoho ERP Implementation Partners Guide for Growing Businesses",
        description:
          "A buyer's guide for growing businesses evaluating Zoho ERP implementation partners and consulting services.",
        author: {
          "@id": "https://contetra.com#organization",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        mainEntityOfPage: {
          "@id": "https://contetra.com/buyers-guide/erp/zoho#webpage",
        },
        about: [
          {
            "@type": "Thing",
            name: "Zoho ERP",
          },
          {
            "@type": "Thing",
            name: "Zoho ERP Implementation Partners",
          },
          {
            "@type": "Thing",
            name: "Zoho ERP Consulting",
          },
        ],
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/buyers-guide/erp/zoho#webpage",
        url: "https://contetra.com/buyers-guide/erp/zoho",
        name: "Zoho ERP Implementation Partners Guide for Growing Businesses | Contetra",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        mainEntity: {
          "@id": "https://contetra.com/buyers-guide/erp/zoho#article",
        },
        breadcrumb: {
          "@id": "https://contetra.com/buyers-guide/erp/zoho#breadcrumb",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/zoho#breadcrumb",
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
            name: "Zoho ERP Buyer's Guide",
            item: "https://contetra.com/buyers-guide/erp/zoho",
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
