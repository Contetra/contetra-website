import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Offshore Accounting Services for Scalable Finance Operations | Contetra`,
  description: `Outsource accounting with structured processes, better accuracy, and cost efficiency. Build scalable finance operations with Contetra.`,
  keywords: `offshore accounting services, offshore accounting services India, outsourced accounting services, accounting outsourcing services, finance outsourcing services, finance and accounting outsourcing, remote accounting services, offshore bookkeeping services, accounting outsourcing India, outsource accounting to India`,
  alternates: {
    canonical: "https://contetra.com/offshore-accounting-services",
  },
  openGraph: {
    title: `Offshore Accounting Services for Scalable Finance Operations`,
    description: `Outsource accounting with structured processes, improved accuracy, and cost efficiency for growing businesses.`,
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
        "@id": "https://contetra.com/offshore-accounting-services/#webpage",
        url: "https://contetra.com/offshore-accounting-services/",
        name: "Offshore Accounting Services",
        description:
          "Contetra provides offshore accounting services to support businesses with accounting operations, reconciliations, reporting, month-end closing, and finance process execution.",
        about: {
          "@id": "https://contetra.com/offshore-accounting-services/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/offshore-accounting-services/#service",
        name: "Offshore Accounting Services",
        url: "https://contetra.com/offshore-accounting-services/",
        description:
          "Offshore accounting services helping businesses strengthen accounting operations, financial reporting, reconciliations, month-end close, and finance process execution.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "Offshore Accounting Support",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/offshore-accounting-services/#breadcrumb",
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
            name: "Offshore Accounting Services",
            item: "https://contetra.com/offshore-accounting-services/",
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
