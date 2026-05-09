import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us`,
  description: `Contact Us`,
  keywords: `Contact Us`,
  alternates: {
    canonical: "https://contetra.com/contact-us/",
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
