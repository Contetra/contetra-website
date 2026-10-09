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
        "@type": "Service",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#service",
        name: "Virtual and Strategic CFO Services in Mumbai, India",
        url: "https://contetra.com/strategic-business-financial-management-solutions",
        description:
          "Virtual and fractional CFO services for growing businesses and enterprises covering strategic financial management, budgeting, forecasting, cash flow, working capital, profitability, management reporting and performance monitoring.",
        serviceType: [
          "Virtual CFO Services",
          "Fractional CFO Services",
          "Strategic CFO Services",
          "Strategic Financial Management",
          "Financial Planning and Analysis",
          "Budgeting and Forecasting",
          "Cash Flow Management",
          "Working Capital Management",
          "Management Reporting",
          "Profitability Analysis",
        ],
        provider: {
          "@id": "https://contetra.com#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Growing businesses, SMEs, corporates, founders and finance leaders",
        },
        mainEntityOfPage: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        url: "https://contetra.com/strategic-business-financial-management-solutions",
        name: "Virtual and Strategic CFO Services in Mumbai, India | Contetra",
        description:
          "Strengthen cash flow, profitability, budgeting, forecasting and management reporting with Contetra's virtual, fractional and strategic CFO services.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#service",
        },
        mainEntity: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#service",
        },
        breadcrumb: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#breadcrumb",
        },
        video: [
          {
            "@id":
              "https://contetra.com/strategic-business-financial-management-solutions#video-1",
          },
          {
            "@id":
              "https://contetra.com/strategic-business-financial-management-solutions#video-2",
          },
          {
            "@id":
              "https://contetra.com/strategic-business-financial-management-solutions#video-3",
          },
        ],
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
            name: "Virtual and Strategic CFO Services",
            item: "https://contetra.com/strategic-business-financial-management-solutions",
          },
        ],
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#video-1",
        name: "Strategic Business and Financial Management - Overview Video",
        description:
          "An overview of Contetra's strategic business and financial management approach, including virtual and fractional CFO support for cash flow, profitability, budgeting, forecasting and business performance.",
        thumbnailUrl: "https://i.ytimg.com/vi/DJdvUMzg11g/hqdefault.jpg",
        embedUrl: "https://www.youtube-nocookie.com/embed/DJdvUMzg11g",
        contentUrl: "https://www.youtube.com/watch?v=DJdvUMzg11g",
        uploadDate: "2024-08-16",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        isPartOf: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        },
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#video-2",
        name: "Unlock Your Business's True Potential",
        description:
          "A client-focused video highlighting how stronger strategic finance, financial visibility and management discipline can support better business performance and growth.",
        thumbnailUrl: "https://i.ytimg.com/vi/jxydfL_b2ag/hqdefault.jpg",
        embedUrl: "https://www.youtube.com/embed/jxydfL_b2ag",
        contentUrl: "https://www.youtube.com/watch?v=jxydfL_b2ag",
        uploadDate: "ADD-ACTUAL-UPLOAD-DATE",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        isPartOf: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        },
      },
      {
        "@type": "VideoObject",
        "@id":
          "https://contetra.com/strategic-business-financial-management-solutions#video-3",
        name: "How a Leading Industry Player Boosted Sales",
        description:
          "A client video highlighting the role of structured financial and performance management in improving sales visibility, accountability and business outcomes.",
        thumbnailUrl: "https://i.ytimg.com/vi/--dbwiBZY0U/hqdefault.jpg",
        embedUrl: "https://www.youtube.com/embed/--dbwiBZY0U",
        contentUrl: "https://www.youtube.com/watch?v=--dbwiBZY0U",
        uploadDate: "ADD-ACTUAL-UPLOAD-DATE",
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        isPartOf: {
          "@id":
            "https://contetra.com/strategic-business-financial-management-solutions#webpage",
        },
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
