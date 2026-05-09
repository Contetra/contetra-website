import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `IFRS to Ind AS Conversion Services & Reporting Advisory`,
  description: `Contetra offers IFRS to Ind AS conversion services, financial statements preparation, audit closures, GAAP reporting, tax compliance, account reconciliation.`,
  keywords: `Financial statements preparation, audit closures, IPO financial reporting, preparation of trial balance, IFRS and GAAP reporting, tax compliance and advisory, audit and compliance support, account reconciliation, financial reporting advisory`,
  alternates: {
    canonical: "https://contetra.com/technical-accounting-international-gaap-advisory-services",
  },
  openGraph: {
    title: `GAAP & IFRS, Ind AS Advisory Services | Contetra`,
    description: `Navigate complex accounting standards with expert GAAP advisory, ensuring compliance, clarity, and audit readiness.`
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
