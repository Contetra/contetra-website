import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Working Capital Management Services | Cash Flow Advisory | Contetra`,
  description: `Working capital management services and AI-based cash flow forecasting to release trapped cash, improve liquidity and strengthen the cash conversion cycle.`,
   alternates: {
    canonical: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
  },
  openGraph: {
    title: `Working Capital Management Services | Cash Flow Advisory | Contetra`,
    description: `Working capital management services and AI-based cash flow forecasting to release trapped cash, improve liquidity and strengthen the cash conversion cycle.`,
  },
};

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
        "Contetra Private Limited is a finance transformation consulting firm offering working capital advisory, cashflow advisory, Virtual CFO, FP&A, MIS reporting, ERP implementation consulting, technical accounting advisory, IPO readiness, offshore accounting and AI-enabled automation services.",
      email: "growth@contetra.com",
      telephone: "+91 98338 18857",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400086",
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
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#webpage",
      url: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
      name: "Working Capital and Cashflow Advisory with AI | Contetra",
      description:
        "Improve cashflow visibility, working capital control, receivables, payables, inventory planning and liquidity decisions with AI-enabled finance advisory.",
      isPartOf: {
        "@id": "https://contetra.com#website",
      },
      about: {
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#service",
      },
      publisher: {
        "@id": "https://contetra.com#organization",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#breadcrumb",
      },
      mainEntity: {
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#service",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#service",
      name: "Working Capital and Cashflow Advisory with AI",
      alternateName: [
        "Working Capital Advisory Services",
        "Cashflow Advisory Services",
        "Cash Flow Management Consultant",
        "Working Capital Optimization Services",
        "AI-Enabled Cashflow Forecasting",
        "13-Week Cashflow Forecasting",
        "Cash Flow Forecasting Services",
        "Liquidity Planning Advisory",
        "Receivables and Payables Management Advisory",
      ],
      serviceType: "Working Capital and Cashflow Advisory",
      provider: {
        "@id": "https://contetra.com#organization",
      },
      url: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
      description:
        "Contetra helps businesses improve working capital and cashflow visibility through receivables analysis, payables planning, inventory review, 13-week cashflow forecasting, liquidity monitoring, management dashboards and AI-enabled financial insights.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Business owners, founders, CFOs, finance leaders, management teams and growing businesses",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#offercatalog",
        name: "Working Capital and Cashflow Advisory Scope",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Working Capital Diagnostic",
            itemOffered: {
              "@type": "Service",
              name: "Working Capital Diagnostic",
              description:
                "Review of receivables, payables, inventory, advances, customer payment cycles, vendor terms and working capital blocked across business operations.",
            },
          },
          {
            "@type": "Offer",
            name: "13-Week Cashflow Forecasting",
            itemOffered: {
              "@type": "Service",
              name: "13-Week Cashflow Forecasting",
              description:
                "Short-term cashflow forecasting model to track weekly inflows, outflows, funding gaps, collection expectations, vendor payments and liquidity risk.",
            },
          },
          {
            "@type": "Offer",
            name: "Receivables and Collections Advisory",
            itemOffered: {
              "@type": "Service",
              name: "Receivables and Collections Advisory",
              description:
                "Analysis of receivables ageing, customer-wise exposure, overdue collections, payment behaviour, escalation requirements and collection governance.",
            },
          },
          {
            "@type": "Offer",
            name: "Payables and Vendor Payment Planning",
            itemOffered: {
              "@type": "Service",
              name: "Payables and Vendor Payment Planning",
              description:
                "Review of vendor payment schedules, payment priorities, vendor terms, cash commitments and payable planning for better liquidity control.",
            },
          },
          {
            "@type": "Offer",
            name: "Inventory and Cash Conversion Review",
            itemOffered: {
              "@type": "Service",
              name: "Inventory and Cash Conversion Review",
              description:
                "Assessment of inventory movement, slow-moving stock, stock holding patterns, cash conversion cycle and working capital blocked in inventory.",
            },
          },
          {
            "@type": "Offer",
            name: "AI-Enabled Cashflow Monitoring",
            itemOffered: {
              "@type": "Service",
              name: "AI-Enabled Cashflow Monitoring",
              description:
                "Use of AI-enabled review to identify unusual cash movements, delayed collections, working capital exceptions, trend changes and management attention areas.",
            },
          },
          {
            "@type": "Offer",
            name: "Working Capital Dashboards",
            itemOffered: {
              "@type": "Service",
              name: "Working Capital Dashboards",
              description:
                "Dashboards for cash position, receivables ageing, payables, inventory days, cash conversion cycle, forecast versus actuals and liquidity planning.",
            },
          },
          {
            "@type": "Offer",
            name: "Cashflow Governance and Review Cadence",
            itemOffered: {
              "@type": "Service",
              name: "Cashflow Governance and Review Cadence",
              description:
                "Definition of review routines, owners, escalation rules, collection priorities, payment decisions and management actions for working capital improvement.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is working capital and cashflow advisory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Working capital and cashflow advisory helps businesses improve visibility over receivables, payables, inventory, advances, payment cycles and cash requirements so management can take timely decisions on liquidity, collections, procurement and funding.",
          },
        },
        {
          "@type": "Question",
          name: "How can AI help in cashflow and working capital management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can help identify cash-flow trends, highlight collection risks, flag unusual working-capital movements, summarise overdue receivables, detect payment delays and support faster review of large volumes of financial and operational data.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review during a working capital advisory engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra reviews receivables ageing, payables, inventory movement, customer payment behaviour, vendor terms, cash-flow forecasts, working-capital cycles, funding requirements, reporting quality and management review routines.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 13-week cashflow forecast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 13-week cashflow forecast is a short-term cash planning model that helps management estimate weekly cash inflows, outflows, funding gaps and liquidity requirements. It is useful for businesses that need better control over near-term cash decisions.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business consider cashflow advisory support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business should consider cashflow advisory support when cash is tight despite reported profit, collections are delayed, inventory is blocking funds, vendor payments are under pressure, forecasts are unreliable or management does not have a clear view of liquidity.",
          },
        },
        {
          "@type": "Question",
          name: "Can working capital advisory improve profitability?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Better working capital management can improve profitability by reducing cash leakage, improving collection discipline, lowering unnecessary inventory holding, improving vendor payment planning and helping management take better commercial decisions.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of dashboards can Contetra create for working capital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can create dashboards for cash position, receivables ageing, payables, inventory days, working capital cycle, overdue collections, customer-wise exposure, vendor payments, cash runway, forecast versus actuals and liquidity risk.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra only provide reports or also help implement actions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra helps convert reports into action by defining review routines, owners, timelines, collection priorities, payment decisions, inventory actions, escalation rules and cash-flow governance for management teams.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use working capital and cashflow advisory services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These services are useful for business owners, founders, CFOs, finance heads, management teams and growing businesses where cash-flow visibility, working-capital control and financial decision-making need to improve.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from regular accounting reports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular accounting reports usually explain what happened in the past. Working capital and cashflow advisory focuses on what may happen next, where cash may get blocked and what decisions management should take to improve liquidity.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai#breadcrumb",
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
          name: "Services",
          item: "https://contetra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Management Reporting",
          item: "https://contetra.com/services/management-reporting",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Working Capital and Cashflow Advisory with AI",
          item: "https://contetra.com/services/management-reporting/working-capital-and-cashflow-advisory-with-ai",
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
      {children}

    </section>
  );
}
