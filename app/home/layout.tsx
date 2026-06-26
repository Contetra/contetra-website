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
        "@id": "https://contetra.com/#organization",
        name: "Contetra",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
          width: 150,
          height: 60,
        },
        description:
          "Contetra provides CFO advisory, ERP implementation, IFRS advisory, FP&A, IPO readiness, and finance transformation services.",
        email: "growth@contetra.com",
        telephone: "+919833818857",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "2nd floor, Swastik Disa Corporate Park, 225, Lal Bahadur Shastri Marg, near Kotak Bank",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400086",
          addressCountry: "IN",
        },
        foundingDate: "2016-10-30",
        sameAs: [
          "https://www.linkedin.com/company/contetra",
          "https://www.facebook.com/ContetraPrivateLimited/",
          "https://twitter.com/contetra",
          "https://www.youtube.com/channel/UCcQNXLjiX-mN94n5ew4H3Xg",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://contetra.com/#website",
        url: "https://contetra.com/",
        name: "Contetra",
        publisher: { "@id": "https://contetra.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com/#webpage",
        url: "https://contetra.com/",
        name: "CFO Advisory & Finance Transformation Services | ERP, IFRS & FP&A | Contetra",
        description:
          "Contetra offers CFO advisory and finance transformation services in India, helping businesses with ERP implementation, IFRS advisory, FP&A, and IPO readiness.",
        isPartOf: { "@id": "https://contetra.com/#website" },
        about: { "@id": "https://contetra.com/#organization" },
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
