import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CFO Advisory & Finance Transformation Consulting | Contetra`,
  description: `Finance transformation consulting for growing, global businesses with CFO advisory, FP&A, ERP implementation, accounting advisory and AI automation.`,
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
          url: "https://contetra.com/assets/images/logo/contetra-main-logo.png",
        },
        image: {
          "@id": "https://contetra.com#logo",
        },
        description:
          "Contetra Private Limited is a finance transformation consulting firm offering ERP implementation consulting, Virtual CFO, Fractional CFO, FP&A, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services.",
        email: "growth@contetra.com",
        telephone: "+91 98338 18857",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "City",
            name: "Mumbai",
          },
        ],
        sameAs: ["https://www.linkedin.com/company/contetra-private-limited"],
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
        potentialAction: {
          "@type": "SearchAction",
          target: "https://contetra.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://contetra.com#webpage",
        url: "https://contetra.com",
        name: "Finance Transformation, ERP, CFO & AI Automation | Contetra",
        description:
          "Improve planning, reporting, controls, ERP performance and business workflows with Contetra’s CFO, accounting, ERP and AI automation specialists.",
        isPartOf: {
          "@id": "https://contetra.com#website",
        },
        about: {
          "@id": "https://contetra.com#organization",
        },
        publisher: {
          "@id": "https://contetra.com#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://contetra.com#professionalservice",
        name: "Contetra Private Limited",
        url: "https://contetra.com",
        image: {
          "@id": "https://contetra.com#logo",
        },
        description:
          "Contetra provides finance transformation consulting, ERP implementation consulting, Virtual CFO services, FP&A, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services for growing businesses.",
        provider: {
          "@id": "https://contetra.com#organization",
        },
        telephone: "+91 98338 18857",
        email: "growth@contetra.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "City",
            name: "Mumbai",
          },
        ],
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": "https://contetra.com#offercatalog",
          name: "Contetra Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/erp-implementation-solutions#service",
                name: "ERP Implementation Consulting Services",
                url: "https://contetra.com/erp-implementation-solutions",
                description:
                  "ERP implementation consulting services covering ERP selection, BRD preparation, process design, implementation governance, UAT, change management, ERP diagnostic review and post-go-live optimisation.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/strategic-business-financial-management-solutions#service",
                name: "Virtual CFO and FP&A Services",
                url: "https://contetra.com/strategic-business-financial-management-solutions",
                description:
                  "Virtual CFO, Fractional CFO and FP&A services for cash-flow planning, budgeting, forecasting, MIS reporting, profitability analysis, working capital management and strategic financial decision-making.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/technical-accounting-international-gaap-advisory-services#service",
                name: "Technical Accounting Advisory Services",
                url: "https://contetra.com/technical-accounting-international-gaap-advisory-services",
                description:
                  "Technical accounting advisory services covering Ind AS, IFRS, US GAAP, accounting memos, financial statements preparation, audit support, revenue recognition, leases, ESOPs and complex accounting matters.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/ipo-readiness#service",
                name: "IPO Readiness Services",
                url: "https://contetra.com/ipo-readiness",
                description:
                  "IPO readiness support covering finance readiness assessment, reporting discipline, governance, financial close, controls, restated financials, audit readiness and management information preparation.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/automation#service",
                name: "Finance Process Automation Services",
                url: "https://contetra.com/automation",
                description:
                  "Finance process automation services for workflows, approvals, reconciliations, reporting, dashboards, follow-ups, data movement and recurring finance activities.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://contetra.com/offshore-accounting-services#service",
                name: "Offshore Accounting Services",
                url: "https://contetra.com/offshore-accounting-services",
                description:
                  "Offshore accounting services for recurring accounting, bookkeeping, reconciliations, reporting support, finance operations and accounting process execution.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://contetra.com#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does Contetra provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contetra provides finance transformation consulting, ERP implementation consulting, Virtual CFO and FP&A services, technical accounting advisory, IPO readiness, offshore accounting and finance process automation services.",
            },
          },
          {
            "@type": "Question",
            name: "Who does Contetra work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contetra works with business owners, founders, CFOs, finance leaders, promoters and management teams of growing businesses that need stronger finance, reporting, ERP, controls and decision-making systems.",
            },
          },
          {
            "@type": "Question",
            name: "Does Contetra provide ERP implementation consulting services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Contetra provides ERP implementation consulting services including ERP selection, process mapping, BRD preparation, implementation governance, UAT support, change management, ERP diagnostic review and post-go-live optimisation.",
            },
          },
          {
            "@type": "Question",
            name: "Does Contetra provide Virtual CFO and FP&A services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Contetra provides Virtual CFO, Fractional CFO and FP&A services covering cash-flow planning, budgeting, forecasting, MIS reporting, working capital management, profitability analysis and financial decision support.",
            },
          },
          {
            "@type": "Question",
            name: "Does Contetra support technical accounting and financial reporting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Contetra supports technical accounting advisory, Ind AS, IFRS, US GAAP, financial statements preparation, accounting memos, audit support and complex accounting matters.",
            },
          },
          {
            "@type": "Question",
            name: "How can Contetra help businesses preparing for IPO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contetra helps businesses prepare for IPO by strengthening finance processes, reporting discipline, financial close, controls, governance, management information, audit readiness and restated financial reporting support.",
            },
          },
        ],
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
    <section className="flex flex-col justify-between overflow-x-hidden">
      <JsonLd data={structuredData} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
