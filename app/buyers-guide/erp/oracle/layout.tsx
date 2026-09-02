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
        "@id":
          "https://contetra.com/buyers-guide/erp/oracle#article",
        headline:
          "Oracle ERP Implementation: A Buyer's Guide for Growing Businesses",
        description:
          "Evaluate Oracle ERP implementation partners, compare Fusion Cloud, NetSuite and EBS, understand costs, timelines and choose the right ERP consulting partner.",
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
        "@id":
          "https://contetra.com/buyers-guide/erp/oracle#breadcrumb",
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
            name: "Oracle ERP Implementation: A Buyer's Guide for Growing Businesses",
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
