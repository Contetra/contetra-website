import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Virtual and Strategic CFO Services in Mumbai, India | Contetra`,
  description: `Looking for fractional CFO services in India? Contetra provides Virtual CFO, FP&A, budgeting, cash flow management, and strategic finance solutions.`,
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
        "@id": "https://contetra.com#organization",
        name: "Contetra",
        url: "https://contetra.com",
        logo: {
          "@type": "ImageObject",
          url: "https://contetra.com/logo.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://contetra.com#website",
        url: "https://contetra.com",
        name: "Contetra",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        url: "https://contetra.com/strategic-business-financial-management-solutions",
        name: "Virtual CFO Services in India for Growing Businesses and Enterprises",
        description:
          "Contetra provides Virtual CFO services, Fractional CFO services, financial planning & analysis (FP&A), budgeting, forecasting, cash flow management, strategic financial management, and finance transformation solutions for SMEs and enterprises.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#service",
        },
        breadcrumb: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#breadcrumb",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#service",
        name: "Virtual CFO and Strategic Financial Management Services",
        url: "https://contetra.com/strategic-business-financial-management-solutions",
        description:
          "Virtual CFO, Fractional CFO, FP&A, budgeting, forecasting, cash flow planning, profitability improvement, business finance, financial reporting, and strategic financial management services for growing businesses and enterprises.",
        serviceType: "Virtual CFO Services",
        provider: {
          "@id": "https://contetra.com#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Business Owners, CFOs, SMEs and Enterprises",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#breadcrumb",
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
            name: "Virtual CFO Services",
            item: "https://contetra.com/strategic-business-financial-management-solutions",
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />
 
      {children}

    </section>
  );
}
