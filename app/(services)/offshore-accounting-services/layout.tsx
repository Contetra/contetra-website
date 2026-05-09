import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Offshore Accounting Services for Scalable Finance Operations | Contetra`,
  description: `Outsource accounting with structured processes, better accuracy, and cost efficiency. Build scalable finance operations with Contetra.`,
  keywords: `offshore accounting services, offshore accounting services India, outsourced accounting services, accounting outsourcing services, finance outsourcing services, finance and accounting outsourcing, remote accounting services, offshore bookkeeping services, accounting outsourcing India, outsource accounting to India`,
  alternates: {
    canonical: "https://contetra.com/offshore-accounting-services",
  },
  openGraph: {
    title: `Offshore Accounting Services for Scalable Finance Operations`,
    description: `Outsource accounting with structured processes, improved accuracy, and cost efficiency for growing businesses.`,
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
