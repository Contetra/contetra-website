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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#service",
      name: "Financial Statement Preparation and Accounting Support",
      url: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
      description:
        "Financial statement preparation and accounting support covering period-end close, trial-balance review, reconciliations, financial statements, cash flow, notes, disclosures, reporting schedules, consolidation packs and recurring accounting support.",
      serviceType: "Financial Statement Preparation and Accounting Support",
      category: "Accounting and Reporting Consulting",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "CFOs, finance teams, controllers and businesses requiring financial statement preparation and accounting support",
      },
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
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support#webpage",
      url: "https://contetra.com/services/accounting-reporting/financial-statement-preparation-and-accounting-support",
      name: "Financial Statement Preparation and Accounting Support for Reliable, Audit-Ready Reporting",
      description:
        "Financial statement preparation and accounting support covering close, trial-balance review, reconciliations, financial statements, disclosures, audit-ready schedules and recurring accounting activities.",
      isPartOf: {
        "@id": "https://contetra.com/#website",
      },
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
            text: "Financial statement preparation services help businesses convert their accounting records and trial balance into complete, review-ready financial statements. This typically includes the balance sheet, statement of profit and loss, cash flow statement, statement of changes in equity, accounting policies, notes, supporting schedules and required disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra prepare complete financial statements from the trial balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support the process from trial-balance review through preparation of complete financial statements, notes and supporting schedules. The work can include account reconciliations, accruals, provisions, cut-off review, cash flow preparation, disclosure schedules and resolution of identified accounting issues.",
          },
        },
        {
          "@type": "Question",
          name: "What information is required to prepare financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The exact requirements depend on the reporting framework and complexity of the business. Typically, the finance team would provide the trial balance, general ledger, bank reconciliations, fixed-asset registers, receivables and payables schedules, tax information, supporting agreements, prior-period financial statements and relevant accounting workings.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide month-end and year-end close support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support month-end, quarter-end and year-end close activities, including close calendars, account reviews, reconciliations, accruals, provisions, cut-off procedures and resolution of outstanding accounting matters.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare financial statement notes and disclosures?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Financial statement preparation can include accounting policies, notes to accounts, comparative information, cash flow statements and disclosure checklists. The objective is to ensure that the primary financial statements are supported by complete and reviewable disclosures.",
          },
        },
        {
          "@type": "Question",
          name: "Which accounting frameworks can Contetra support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the engagement, Contetra can support financial reporting requirements under frameworks such as Ind AS, IFRS and US GAAP, along with the related presentation, disclosure and reporting requirements. The applicable framework, reporting perimeter and timetable are agreed at the beginning of the engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How does financial statement preparation support audit readiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Audit readiness depends not only on the final financial statements but also on the quality of the underlying reconciliations, schedules and supporting evidence. Contetra prepares reviewable workings, lead schedules, roll-forwards, reconciliations and supporting documentation that can help finance teams respond more efficiently to audit requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support consolidation and group reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can assist with consolidation schedules, group reporting packs, intercompany reconciliations, supporting schedules and other defined consolidation workstreams. The scope can be designed around a complete group-reporting process or a specific reporting requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Can we outsource only part of the financial reporting process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Businesses do not necessarily need to outsource the complete process. Contetra can take responsibility for defined workstreams such as cash flow preparation, financial statement notes, reconciliations, reporting schedules, consolidation packs or other recurring accounting activities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide recurring or offshore accounting support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can provide recurring accounting and offshore finance support for defined close, reporting and accounting activities. The scope, responsibilities, timelines, review process and controls can be agreed in advance to create a repeatable monthly or quarterly reporting process.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's financial statement preparation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally begins by agreeing the reporting framework, reporting perimeter and timetable. The team then reviews the trial balance, reconciliations and open accounting matters, prepares the financial statements, notes and supporting schedules, and completes management review and audit-support activities.",
          },
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
