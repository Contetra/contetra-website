import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Corporate Finance Training for Teams & Business Leaders | Contetra`,
  description: `Upskill your teams with practical corporate finance training on accounting, ERP, and decision-making frameworks.`,
  keywords: `finance training for employees, finance training for companies, business finance training services, corporate training programs for finance teams, professional finance training services, corporate training services India, finance training company India, corporate finance training, corporate training services, corporate finance training programs`,
  alternates: {
    canonical: "https://contetra.com/corporate-training",
  },
  openGraph: {
    title: `Corporate Finance Training for Teams & Leaders in Mumbai`,
    description: `Upskill your teams with practical finance training on accounting, ERP, and decision-making frameworks.`,
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
