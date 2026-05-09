import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finance Recruitment Consultants for High-Impact Hiring | Contetra`,
  description: `Hire the right finance talent with structured recruitment services. Build strong finance teams with Contetra.`,
  keywords: `finance recruitment consultants, finance recruitment consultants India, finance recruitment services, finance hiring consultants, finance staffing services, accounting recruitment consultants, CFO recruitment services, finance executive search firms, finance talent acquisition services, accounting recruitment firms India`,
  alternates: {
    canonical: "https://contetra.com/financial-recruitment-consultants",
  },
  openGraph: {
    title: `Finance Recruitment Services for High-Impact Hiring`,
    description: `Hire the right finance talent to strengthen reporting, control, and business decision-making.`,
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
