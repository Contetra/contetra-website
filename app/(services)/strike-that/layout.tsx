import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

import { STRIKE_THAT_FAQ_ITEMS } from "./components/strike-that-faq-items";
export const metadata: Metadata = {
  title: `MCA Struck Off Companies List & Company Strike Off Status`,
  description: `Check MCA struck off company status in bulk using just GST or PAN numbers. No CIN needed. AI-powered tool with 48-hr turnaround. Schedule III compliant.`,
  keywords: `How Do YOU Search for MCA Struck-off Vendors?, mca struck off companies, strike off company mca, MCA Struck Off Vendors, list of struck off companies, List of Companies struck off by ROC, Struck Off Companies List, roc strike off company, struck off companies, Search for MCA Struck Off Companies, How to check company strike off status?, strike off listed company status, list of struck off companies, struck off companies list, strike off company list, mca strike off list, list of strike off companies, struck off companies, strike off companies list, mca struck off companies, strike off company mca`,
  alternates: {
    canonical: "https://contetra.com/strike-that",
  },
  openGraph: {
    title: `Find the List of MCA Struck Off Vendors`,
    description: `Checkout MCA struck off companies & its status in bulk using just GST or PAN numbers`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: String(metadata.title ?? "Service"),
        provider: {
          "@type": "Organization",
          name: "Contetra",
          url: "https://contetra.com/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: STRIKE_THAT_FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={structuredData} />      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
