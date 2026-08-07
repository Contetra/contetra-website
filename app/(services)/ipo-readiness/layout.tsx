import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `IPO Readiness Assessment India: Mainboard & SME Specialists`,
  description: `Contetra: Mainboard IPO financial restructuring, LODR compliance preparation, NSE BSE listing & IPO readiness gap analysis for SME/Mainboard India. `,
  keywords: `working capital optimization for IPO, NSE BSE listing readiness, IPO readiness gap analysis, LODR compliance preparation, DRHP documentation support, IPO governance framework setup, Ind AS/GAAP, restated financials for IPO, mainboard IPO financial restructuring, SME and mainboard IPOs, LODR compliance, IPO readiness assessment in India, LODR compliance preparation, SME and mainboard IPOs`,
  alternates: {
    canonical: "https://contetra.com/ipo-readiness",
  },
  openGraph: {
    title: `IPO Readiness Services for Structured Growth`,
    description: `Prepare your business for IPO with strong financial systems, compliance, and investor-ready reporting.`,
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
        "@id": "https://contetra.com/ipo-readiness/#webpage",
        url: "https://contetra.com/ipo-readiness/",
        name: "IPO Readiness",
        description:
          "Contetra helps businesses prepare for IPO readiness through financial reporting, governance, process strengthening, audit readiness, and finance transformation support.",
        about: {
          "@id": "https://contetra.com/ipo-readiness/#service",
        },
      },
      {
        "@type": "Service",
        "@id": "https://contetra.com/ipo-readiness/#service",
        name: "IPO Readiness Advisory",
        url: "https://contetra.com/ipo-readiness/",
        description:
          "IPO readiness advisory helping businesses strengthen financial reporting, governance, controls, audit preparedness, MIS, and finance processes before public listing.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "IPO Readiness Advisory",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://contetra.com/ipo-readiness/#breadcrumb",
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
            name: "IPO Readiness",
            item: "https://contetra.com/ipo-readiness/",
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
