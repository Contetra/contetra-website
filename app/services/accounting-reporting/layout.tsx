import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
  description: `Accounting and reporting advisory for complex standards, transactions and audit-ready financial statements, Ind AS, IFRS, US GAAP and technical accounting support.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting",
  },
  openGraph: {
    title: `Accounting & Reporting Advisory | Technical Accounting | Contetra`,
    description: `Accounting and reporting consulting for complex standards, transactions and audit-ready financial statements — technical accounting, GAAP conversion and due diligence.`,
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
      "@id": "https://contetra.com/services/accounting-reporting#service",
      name: "Accounting and Reporting Services",
      url: "https://contetra.com/services/accounting-reporting",
      description:
        "Contetra helps businesses improve accounting quality, reporting discipline, financial statements preparation, reconciliations, monthly close, audit readiness, management reporting and accounting documentation.",
      serviceType: [
        "Financial Reporting Services",
        "Accounting Advisory Services",
        "Financial Statements Preparation",
        "Audit Readiness Support",
        "Monthly Close Support",
        "Management Reporting Support",
        "Accounting and Bookkeeping Review",
        "Ind AS Reporting Support",
        "IFRS Reporting Support",
        "US GAAP Reporting Support",
      ],
      category: "Accounting and Reporting Advisory",
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
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Heads",
        },
        {
          "@type": "Audience",
          audienceType: "Controllers",
        },
        {
          "@type": "Audience",
          audienceType: "Accounting Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Auditors",
        },
        {
          "@type": "Audience",
          audienceType: "Growing Businesses",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Technical Accounting Advisory",
        url: "https://contetra.com/services/accounting-reporting/technical-accounting-advisory",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/accounting-reporting#webpage",
      url: "https://contetra.com/services/accounting-reporting",
      name: "Accounting and Reporting Services | Contetra",
      description:
        "Strengthen accounting, reporting, financial statements, reconciliations, month-end close and audit readiness with Contetra's finance-led accounting support.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What are accounting and reporting services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accounting and reporting services help businesses maintain accurate books, prepare reliable financial statements, manage month end close, reconcile accounts, build management reports, and stay ready for audits, lenders, investors and internal decision making. This goes well beyond just recording transactions.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from regular bookkeeping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bookkeeping is about recording transactions accurately. Accounting and reporting services go a step further, ensuring reconciliations are clean, month end close is disciplined, financial statements are audit ready, and management actually has reliable numbers to work with, not just a maintained ledger.",
          },
        },
        {
          "@type": "Question",
          name: "What does Contetra support under accounting and reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bookkeeping review, monthly close, reconciliations, financial statement preparation, MIS reporting, audit schedules, accounting memos, reporting packs, consolidation support and broader finance process improvement, all tailored to where the business currently stands.",
          },
        },
        {
          "@type": "Question",
          name: "What are common signs that accounting and reporting needs attention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Delayed month end close, unreconciled balances, heavy reliance on Excel, MIS numbers that do not add up consistently, recurring audit observations, unclear ownership of reporting tasks, manual processes, weak documentation, or simply struggling to close financial statements reliably on time.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra help prepare financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes schedules, notes, reconciliations, management reporting packs and audit support documentation, scoped to the company's accounting framework and specific reporting requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra support Ind AS, IFRS or US GAAP reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra supports accounting and reporting matters across Ind AS, IFRS and US GAAP, including accounting memos, reporting adjustments, financial statement preparation, audit support and technically complex accounting areas.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra support audit readiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes preparing schedules, reconciliations, supporting documentation, accounting memos, financial statements and structured responses to auditor queries, so the audit process moves faster with fewer back and forths.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounting and reporting services actually improve management decisions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When the numbers are accurate and timely, management gets a clearer picture of profitability, costs, cash flow, working capital, and performance across business units, which directly improves the quality of decisions being made.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use accounting and reporting services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Growing businesses, founder led companies, CFO teams, finance heads, startups, subsidiaries and offshore entities. Essentially any organisation that needs stronger accounting discipline, better reporting quality, or audit ready finance processes.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work alongside our existing finance team or auditors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra typically works alongside the existing finance team, CFO, auditors or accounting partners, strengthening reporting quality, close discipline, documentation and controls rather than replacing what is already in place.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra work with specific accounting software or ERPs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra works across commonly used accounting and ERP systems, adapting to whatever platform the business already runs on, rather than requiring a switch in systems before engagement can begin.",
          },
        },
        {
          "@type": "Question",
          name: "Is a one time clean up possible, or is this always an ongoing engagement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both are possible. Some businesses need a one time clean up of books, reconciliations or a specific audit cycle, while others prefer ongoing support for close, reporting and controls. The scope is typically set based on what the business needs at the time.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting#breadcrumb",
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
          name: "Accounting & Reporting",
          item: "https://contetra.com/services/accounting-reporting",
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
