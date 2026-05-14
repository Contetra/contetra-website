import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Fractional CFO Services in India for SMEs & Enterprises`,
  description: `CFO consulting services in India to improve financial visibility, control cash flow, and drive smarter business decisions with structured financial management.`,
  keywords: `Fractional CFO services India, Virtual CFO services India, Outsourced CFO services India, CFO consulting services India, Cash flow management consultant, Financial forecasting services India, FP&A consulting services India, Working capital optimization services, Finance transformation consulting, Strategic finance advisory services, CFO Services for SMEs, FP&A and Business Finance Consulting for CFOs, Cash Flow Budgeting and Financial Forecasting for SMEs, Business Performance Monitoring, Finance Systems Optimisation for Monthly Reporting, Sales Analytics and Revenue Forecasting Advisory, Cash Conversion Cycle Optimisation, Operational Bottleneck Removal and Cycle Time Improvement`,
  alternates: {
    canonical:
      "https://contetra.com/strategic-business-financial-management-solutions",
  },
  openGraph: {
    title: `Fractional CFO Services in India for SMEs`,
    description: `Improve financial visibility, control cash flow, and drive smarter decisions with structured financial management solutions.`,
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
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions/#webpage",
        url: "https://contetra.com/strategic-business-financial-management-solutions/",
        name: "Virtual CFO Services in India for Growing Businesses and Enterprises",
        description:
          "Contetra provides virtual CFO services, fractional CFO support, strategic CFO services, and financial management solutions to improve cash flow, reporting, and business control.",
        isPartOf: { "@id": "https://contetra.com/#website" },
        about: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions/#service",
        },
      },
      {
        "@type": "Service",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions/#service",
        name: "Virtual CFO and Financial Management Services",
        url: "https://contetra.com/strategic-business-financial-management-solutions/",
        description:
          "Virtual CFO and financial management services helping growing businesses and enterprises improve financial visibility, cash flow control, reporting, FP&A, and decision-making.",
        provider: { "@id": "https://contetra.com/#organization" },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: "Virtual CFO Services",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions/#breadcrumb",
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
            name: "Virtual CFO Services",
            item: "https://contetra.com/strategic-business-financial-management-solutions/",
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
