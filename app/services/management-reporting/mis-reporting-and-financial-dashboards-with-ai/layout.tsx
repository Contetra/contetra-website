import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `MIS Reporting & Financial Dashboards | Contetra`,
  description: `MIS reporting and financial dashboard services that turn board packs and management reports into decision-ready insight with KPI ownership and clear accountability.`,
   alternates: {
    canonical: "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai",
  },
  openGraph: {
    title: `MIS Reporting & Financial Dashboards | Contetra`,
    description: `MIS reporting and financial dashboards built for management decisions — board packs, profitability and working-capital dashboards with clear KPI ownership.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contetra.com/#organization",
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai#service",
      name: "MIS Reporting and Financial Dashboards with AI",
      url: "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai",
      description:
        "Contetra designs MIS reports, management and board packs, profitability dashboards, working-capital dashboards and reporting automation around the decisions management needs to make. The service includes KPI definition, reporting dimensions, data ownership, source-data review and AI-enabled reporting insights.",
      serviceType: [
        "MIS Reporting",
        "Financial Dashboard Development",
        "Management Reporting",
        "Board Reporting",
        "Profitability Dashboards",
        "Working Capital Dashboards",
        "Reporting Automation",
        "AI-Enabled Financial Reporting",
      ],
      category: "Management Reporting and FP&A Services",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Founders",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Heads",
        },
        {
          "@type": "Audience",
          audienceType: "Department Heads",
        },
        {
          "@type": "Audience",
          audienceType: "Investors",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "Fractional CFO and FP&A Services",
          url: "https://contetra.com/services/management-reporting",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai#webpage",
      url: "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai",
      name: "MIS Reporting and Financial Dashboards Built for Management Decisions",
      description:
        "MIS reporting and financial dashboard services designed around management decisions, KPI visibility, profitability, working capital, board reporting and AI-enabled reporting insights.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai#service",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is MIS reporting and how is it different from a financial dashboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MIS (Management Information System) reporting refers to structured periodic reports daily, weekly or monthly that convert raw accounting, ERP, sales and operational data into meaningful information for decision-making. A financial dashboard presents the same kind of information visually and interactively, often updated more frequently. Both exist for the same purpose: helping management see what's happening in the business and act on it, not just look at historical numbers.",
          },
        },
        {
          "@type": "Question",
          name: "Why do businesses need MIS dashboards instead of relying on Excel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excel works when a business is small and simple. As transactions, teams and business units grow, Excel-based reporting tends to become slow, error-prone and dependent on one or two people. MIS dashboards standardise data from ERP, accounting and sales systems into a single reliable source, reducing manual effort, version confusion and reporting delays.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of dashboards can Contetra help build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra builds dashboards covering revenue, profitability, cash flow, working capital, receivables, payables, inventory, cost centres, business units, projects, customer profitability, budget vs. actuals, and other management KPIs tailored to what each business actually needs to track.",
          },
        },
        {
          "@type": "Question",
          name: "Who typically uses MIS dashboards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business owners, founders, CFOs, finance heads, department leads and investors anyone who needs timely, reliable visibility into performance, cash flow, profitability or operations without waiting for someone to compile a report.",
          },
        },
        {
          "@type": "Question",
          name: "Can MIS dashboards connect with our existing ERP or accounting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dashboards can be built using data from ERP, accounting, CRM, inventory and sales systems. That said, the quality of the output depends heavily on how clean and structured the underlying data is things like chart of accounts, cost centre tagging and reconciliation discipline matter as much as the dashboard design itself.",
          },
        },
        {
          "@type": "Question",
          name: "How does AI actually improve MIS reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI helps by scanning large volumes of financial and operational data to spot trends, flag exceptions and anomalies, and generate variance commentary automatically. In practice, this means leadership gets a faster answer to 'what changed, why did it change, and what needs attention' instead of waiting for someone to manually explain the numbers each month.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra only build dashboards, or help decide what to track in the first place?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. Before building anything, Contetra works with the business to define the right KPIs, reporting structure, data sources, calculation logic, ownership and review frequency. A well-designed dashboard is only useful if it's tracking the right things the goal is decision-support, not just a good-looking report.",
          },
        },
        {
          "@type": "Question",
          name: "How do we know if our MIS reporting needs improvement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some common signs: management reports are consistently late, numbers don't match across reports, there's heavy dependence on one person's Excel sheet, profitability by product/customer/project is unclear, cash flow visibility is weak, or decisions are being made on gut feel rather than data. Any of these usually indicate it's time to revisit the reporting setup.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra review before designing a dashboard for us?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business objectives, existing reports, ERP/accounting data structure, chart of accounts, cost centres, revenue streams, customer and product data, working capital metrics, and what management actually needs to make decisions. This groundwork ensures the dashboard reflects how the business really operates, not a generic template.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it typically take to set up an MIS dashboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines vary depending on data readiness and complexity—a business with clean, well-structured ERP data will move faster than one still relying on scattered spreadsheets. Contetra typically starts with a short diagnostic to assess data quality and reporting needs before giving a realistic timeline.",
          },
        },
        {
          "@type": "Question",
          name: "Is our financial data secure when Contetra sets up these dashboards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Financial and operational data is handled with strict confidentiality, and access is limited to what's needed for the engagement. This is a standard part of how Contetra works with any client's sensitive business data.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra provide support after the dashboard is built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dashboards need periodic review as business needs, data sources or reporting requirements evolve. Contetra can support ongoing maintenance, refinements and updates as required, rather than treating it as a one-time build.",
          },
        },
      ],
      breadcrumb: {
        "@id": "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai#breadcrumb",
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
          name: "Management Reporting",
          item: "https://contetra.com/services/management-reporting",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MIS Reporting & Financial Dashboards",
          item: "https://contetra.com/services/management-reporting/mis-reporting-and-financial-dashboards-with-ai",
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
