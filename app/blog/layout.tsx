import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";

export default function LayoutBlog({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://contetra.com/blog/#blog",
        name: "Contetra Blog",
        url: "https://contetra.com/blog/",
        description:
          "Insights on finance, ERP, IFRS, and business growth from Contetra.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://contetra.com/#organization",
        },
        isPartOf: {
          "@id": "https://contetra.com/#website",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/blog/#webpage",
        url: "https://contetra.com/blog/",
        name: "Blog | Finance, ERP & IFRS Insights | Contetra",
        description:
          "Insights on finance, ERP, IFRS, and business growth from Contetra.",
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://contetra.com/#website" },
        about: { "@id": "https://contetra.com/#organization" },
      },
    ],
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
