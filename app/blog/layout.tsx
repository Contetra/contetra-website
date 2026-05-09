import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog`,
  description: `Blog | Contetra`,
  keywords: `Blog | Contetra`,
  alternates: {
    canonical: "https://contetra.com/blog/",
  },
};

export default function LayoutBlog({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Contetra Blog",
    url: "https://contetra.com/blog/",
    description: "Insights on finance, ERP, IFRS, and business growth from Contetra.",
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={blogSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
