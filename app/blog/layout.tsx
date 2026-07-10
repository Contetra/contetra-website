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
        "@type": ["CollectionPage", "WebPage"],
        "@id": "https://contetra.com/blog#webpage",
        url: "https://contetra.com/blog",
        name: "Finance, ERP & CFO Insights Blog | Contetra",
        description:
          "Read Contetra's latest articles on ERP implementation, Virtual CFO services, FP&A, technical accounting, finance transformation, recruitment and business growth.",
        inLanguage: "en-IN",
        breadcrumb: {
          "@id": "https://contetra.com/blog#breadcrumb",
        },
        mainEntity: {
          "@id": "https://contetra.com/blog#bloglist",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://contetra.com/blog",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://contetra.com/blog#bloglist",
        name: "Contetra Blog Articles",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: "50",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up",
          },
          {
            "@type": "ListItem",
            position: 2,
            url: "https://contetra.com/blog/revenue-recognition-in-saas-tech-where-most-indian-companies-get-it-wrong",
          },
          {
            "@type": "ListItem",
            position: 3,
            url: "https://contetra.com/blog/beyond-factories-why-service-businesses-need-erp-now-more-than-ever",
          },
        ],
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
