import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Financial Statement Preparation & Accounting Support | Contetra`,
  description: `Financial statement preparation and accounting support for reliable, audit-ready reporting, close support, schedules, notes and group reporting packs.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
  },
  openGraph: {
    title: `Financial Statement Preparation & Accounting Support | Contetra`,
    description: `Financial statement preparation and accounting support for reliable, audit-ready reporting — close support, reconciliations, schedules and group reporting packs.`,
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
      "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#service",
      name: "Financial Statement Preparation and Accounting Support",
      url: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
      description: "Contetra supports finance teams with financial statement preparation, month-end and year-end close, trial balance review, notes and disclosures, cash flow statements, reconciliations, consolidation schedules, audit-ready reporting packs and recurring accounting support.",
      serviceType: [
        "Financial Statement Preparation",
        "Month-End Close Support",
        "Year-End Close Support",
        "Trial Balance Review",
        "Financial Statement Notes and Disclosures",
        "Cash Flow Statement Preparation",
        "Account Reconciliations",
        "Consolidation and Group Reporting",
        "Audit-Ready Reporting Packs",
        "Recurring Accounting Support",
        "Offshore Accounting Support",
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
          audienceType: "Finance and Accounting Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Growing Businesses",
        },
        {
          "@type": "Audience",
          audienceType: "Multi-Entity Groups",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Accounting and Reporting Services",
        url: "https://contetra.com/services/accounting-reporting",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#webpage",
      url: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
      name: "Financial Statement Preparation and Accounting Support | Contetra",
      description: "Financial statement preparation and accounting support covering close, trial balance review, notes, disclosures, cash flow statements, reconciliations, consolidation and audit-ready reporting.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What are financial statement preparation services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Financial statement preparation services help businesses convert accounting records and trial balances into complete, review ready financial statements. This typically includes the balance sheet, statement of profit and loss, cash flow statement, statement of changes in equity, accounting policies, notes, supporting schedules and required disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra prepare complete financial statements from the trial balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support the process from trial balance review through to preparation of complete financial statements, notes and supporting schedules, including account reconciliations, accruals, provisions, cut off review, cash flow preparation, disclosure schedules and resolution of identified accounting issues.",
          },
        },
        {
          "@type": "Question",
          name: "What information is required to prepare financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the reporting framework and complexity of the business, but typically includes the trial balance, general ledger, bank reconciliations, fixed asset registers, receivables and payables schedules, tax information, supporting agreements, prior period financial statements and relevant accounting workings.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide month end and year end close support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes month end, quarter end and year end close activities such as close calendars, account reviews, reconciliations, accruals, provisions, cut off procedures and resolution of outstanding accounting matters.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare financial statement notes and disclosures?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include accounting policies, notes to accounts, comparative information, cash flow statements and disclosure checklists, so the primary financial statements are backed by complete, reviewable disclosures rather than just headline numbers.",
          },
        },
        {
          "@type": "Question",
          name: "Which accounting frameworks can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the engagement, Contetra can support financial reporting under frameworks such as Ind AS, IFRS and US GAAP, along with the related presentation and disclosure requirements. The applicable framework, reporting perimeter and timetable are agreed at the start of the engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How does financial statement preparation support audit readiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Audit readiness depends as much on the quality of underlying reconciliations, schedules and supporting evidence as on the final statements themselves. Contetra prepares reviewable workings, lead schedules, roll forwards, reconciliations and supporting documentation that help finance teams respond faster to audit requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support consolidation and group reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes consolidation schedules, group reporting packs, intercompany reconciliations and other supporting schedules. The scope can cover a complete group reporting process or a specific, narrower consolidation requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Can we outsource only part of the financial reporting process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Businesses do not need to outsource the entire process. Contetra can take on defined workstreams such as cash flow preparation, financial statement notes, reconciliations, reporting schedules, consolidation packs or other recurring accounting activities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide recurring or offshore accounting support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes recurring accounting and offshore finance support for defined close, reporting and accounting activities, with scope, responsibilities, timelines, review process and controls agreed upfront to create a repeatable monthly or quarterly reporting process.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's financial statement preparation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by agreeing the reporting framework, reporting perimeter and timetable. The team then reviews the trial balance, reconciliations and open accounting matters, prepares the financial statements, notes and supporting schedules, and completes management review and audit support activities.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Financial Statement Preparation & Accounting Support",
          item: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
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
