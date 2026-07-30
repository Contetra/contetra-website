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
    "@type": "Article",
    headline: "SAP ERP Companies: How to Choose the Right Implementation Partner in 2026",
    description:
      "How the SAP ERP partner landscape breaks down, how to evaluate anyone on your shortlist, what to budget, and where the most common rollout mistakes happen.",
    url: "https://contetra.com/buyers-guide/erp/sap",
    dateModified: "2026-07",
    publisher: {
      "@id": "https://contetra.com#organization",
    },
    author: {
      "@id": "https://contetra.com#organization",
    },
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
