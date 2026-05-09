import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Ebooks`,
  description: `Ebooks`,
  keywords: `Ebooks`,
  alternates: {
    canonical: "https://contetra.com/ebooks/",
  },
};

export default function LayoutEbooks({
  children,
}: {
  children: React.ReactNode;
}) {
  const ebooksSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Contetra Ebooks",
    url: "https://contetra.com/ebooks/",
    description: "Browse downloadable finance and accounting ebooks by Contetra.",
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={ebooksSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
