import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Corporate Finance Training for Teams & Business Leaders | Contetra`,
  description: `Upskill your teams with practical corporate finance training on accounting, ERP, and decision-making frameworks.`,
  keywords: `finance training for employees, finance training for companies, business finance training services, corporate training programs for finance teams, professional finance training services, corporate training services India, finance training company India, corporate finance training, corporate training services, corporate finance training programs`,
  alternates: {
    canonical: "https://contetra.com/corporate-training",
  },
  openGraph: {
    title: `Corporate Finance Training for Teams & Leaders in Mumbai`,
    description: `Upskill your teams with practical finance training on accounting, ERP, and decision-making frameworks.`,
  },
};

export default function LayoutServices({
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
        "@type": "WebPage",
        "@id": "https://contetra.com/corporate-training/#webpage",
        url: "https://contetra.com/corporate-training/",
        name: "Corporate Training",
        description:
          "Contetra provides corporate finance training programs on IFRS, Ind AS, ERP, FP&A, finance transformation, and finance for non-finance teams.",
        about: {
          "@id": "https://contetra.com/corporate-training/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/corporate-training/#service",
        name: "Corporate Finance Training",
        url: "https://contetra.com/corporate-training/",
        description:
          "Corporate finance training programs helping businesses strengthen finance knowledge across IFRS, Ind AS, ERP, FP&A, reporting, and finance transformation.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "Corporate Finance Training",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/corporate-training/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Corporate Training",
            item: "https://contetra.com/corporate-training/",
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
