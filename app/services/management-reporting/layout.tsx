import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `FP&A & Strategic Financial Management Services | Contetra`,
  description: `Contetra helps growing businesses strengthen budgeting, forecasting, MIS, cash flow, profitability analysis and management reporting for better financial decisions`,
  alternates: {
    canonical: "https://contetra.com/services/management-reporting",
  },
  openGraph: {
    title: `Strategic Finance, FP&A & Management Reporting | Contetra`,
    description: `Strengthen budgeting, forecasting, MIS, cash flow, profitability analysis and management reporting to support faster, better-informed business decisions.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/management-reporting#service",
      name: "Strategic Finance, FP&A and Management Reporting Services",
      url: "https://contetra.com/services/management-reporting",
      description:
        "Improve financial visibility and decision-making with FP&A, MIS reporting, budgeting, forecasting, cash-flow planning, profitability analysis and management dashboards.",
      serviceType: [
        "Strategic Finance Advisory",
        "Financial Planning and Analysis",
        "Management Reporting",
        "MIS Reporting",
        "Budgeting and Forecasting",
        "Rolling Forecasting",
        "Scenario Planning",
        "Cash Flow Planning",
        "Working Capital Management",
        "Profitability Analysis",
        "Pricing Analysis",
        "Management Dashboards",
        "Board Reporting",
        "Capital Allocation",
        "Finance Operating Model Advisory",
      ],
      category: "Strategic Finance and Management Reporting",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CEOs",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Growing Businesses",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://contetra.com/services/management-reporting#webpage",
      url: "https://contetra.com/services/management-reporting",
      name: "Strategic Finance, FP&A & Management Reporting Services | Contetra",
      description:
        "Improve financial visibility and decision-making with FP&A, MIS reporting, budgeting, forecasting, cash-flow planning, profitability analysis and management dashboards.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/management-reporting#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/management-reporting#breadcrumb",
      },
      publisher: {
        "@id": "https://contetra.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/management-reporting#breadcrumb",
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
          name: "Strategic Finance, FP&A & Management Reporting",
          item: "https://contetra.com/services/management-reporting",
        },
      ],
    },
  ],
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="min-h-screen overflow-x-hidden">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
