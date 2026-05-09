import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `IPO Readiness Assessment India: Mainboard & SME Specialists`,
  description: `Contetra: Mainboard IPO financial restructuring, LODR compliance preparation, NSE BSE listing & IPO readiness gap analysis for SME/Mainboard India. `,
  keywords: `working capital optimization for IPO, NSE BSE listing readiness, IPO readiness gap analysis, LODR compliance preparation, DRHP documentation support, IPO governance framework setup, Ind AS/GAAP, restated financials for IPO, mainboard IPO financial restructuring, SME and mainboard IPOs, LODR compliance, IPO readiness assessment in India, LODR compliance preparation, SME and mainboard IPOs`,
  alternates: {
    canonical: "https://contetra.com/ipo-readiness",
  },
  openGraph: {
    title: `IPO Readiness Services for Structured Growth`,
    description: `Prepare your business for IPO with strong financial systems, compliance, and investor-ready reporting.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: String(metadata.title ?? "Service"),
    provider: {
      "@type": "Organization",
      name: "Contetra",
      url: "https://contetra.com/",
    },
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
