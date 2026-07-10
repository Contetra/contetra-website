import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CFO Advisory & Finance Transformation Services | ERP, FP&A,  IFRS`,
  description: `Contetra helps CFOs and growing businesses with ERP implementation, FP&A strategy, and IFRS & IPO readiness. Serving 100+ clients globally.`,
  keywords: `Business management consultant in mumbai, finance business consultant, finance consulting services, finance advisory services, business financial management solutions`,
  alternates: {
    canonical: "https://contetra.com",
  },
  openGraph: {
    title: `Finance Transformation & Business Advisory for Growing Businesses`,
    description: `Build financial clarity, stronger cash flow, and scalable growth with Contetra’s CFO-led advisory, ERP implementation, FP&A, and finance transformation solutions.`,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://contetra.com#organization",
        name: "Contetra Private Limited",
        alternateName: "Contetra",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://contetra.com#logo",
          url: "https://contetra.com/_next/static/media/contetra-main-logo.b2c93224.png",
          contentUrl:
            "https://contetra.com/_next/static/media/contetra-main-logo.b2c93224.png",
          caption: "Contetra Private Limited",
        },
        description:
          "Contetra Private Limited is a finance transformation and ERP consulting firm helping CFOs and growing businesses improve financial visibility, reporting, operational efficiency, and strategic decision-making.",
      },
      {
        "@type": "WebSite",
        "@id": "https://contetra.com#website",
        url: "https://contetra.com",
        name: "Contetra",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com#webpage",
        url: "https://contetra.com",
        name: "CFO Advisory & Finance Transformation Services | ERP, FP&A & IFRS",
        description:
          "Contetra provides finance transformation, ERP implementation, Virtual CFO, FP&A, technical accounting, finance automation, IPO readiness, and offshore accounting services.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id": "https://contetra.com#organization",
        },
        breadcrumb: {
          "@id": "https://contetra.com#breadcrumb",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com",
          },
        ],
      },
    ],
  };

  return (
    <section className="flex flex-col justify-between overflow-x-hidden ">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
