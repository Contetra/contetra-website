import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Contetra | CFO Advisory, ERP & Finance Consulting`,
  description: `Connect with Contetra for CFO advisory, ERP implementation, IFRS, FP&A, and finance transformation services. Speak to our experts today!`,
  keywords: `Contact Us`,
  alternates: {
    canonical: "https://contetra.com/contact-us/",
  },
  openGraph: {
    title: `Let’s Build Better Financial Clarity Together | Contetra`,
    description: `Talk to Contetra’s finance experts for CFO advisory, ERP implementation, IFRS, FP&A, and finance transformation support for your business.`,
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: "https://contetra.com/contact-us/",
    description: "Contact Contetra for finance transformation and advisory support.",
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={contactSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
