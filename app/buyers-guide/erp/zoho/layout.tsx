import type { Metadata } from "next";
import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Zoho ERP Implementation Partners Guide for Growing Businesses | Contetra",
  description:
    "Learn how to choose the right Zoho ERP implementation partner with this buyer's guide covering consulting, pricing, implementation and best practices.",
  alternates: {
    canonical: "https://contetra.com/buyers-guide/erp/oracle",
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
        "@id": "https://contetra.com/buyers-guide/erp/oracle#article",
        headline:
          "Zoho ERP Implementation & Consulting Partners: A Buyer's Guide for Growing Businesses",
        description:
          "Learn how to choose the right Zoho ERP implementation partner with this buyer's guide covering consulting, pricing, implementation and best practices.",
        author: {
          "@type": "Organization",
          "@id": "https://contetra.com/#organization",
          name: "Contetra Private Limited",
          url: "https://contetra.com",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://contetra.com/#organization",
          name: "Contetra Private Limited",
          url: "https://contetra.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/buyers-guide/erp/oracle#breadcrumb",
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
            name: "Zoho ERP Implementation & Consulting Partners: A Buyer's Guide for Growing Businesses",
            item: "https://contetra.com/buyers-guide/erp/oracle",
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
