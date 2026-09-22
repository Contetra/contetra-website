import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Audit Support & Close Acceleration Services | Contetra`,
  description: `Audit support and close acceleration services that reduce last-minute reporting risk, close governance, PBC coordination and recurring remediation.`,
   alternates: {
    canonical: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
  },
  openGraph: {
    title: `Turn a Chaotic Close Into a Predictable One | Contetra`,
    description: ` Move from reactive audit response to a controlled close and evidence process — close governance, PBC coordination, reconciliation support and recurring remediation.`,
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
      "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#service",
      name: "Audit Support and Close Acceleration",
      url: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
      description:
        "Audit support and close acceleration services covering close governance, PBC coordination, audit schedules, reconciliations, technical accounting support, open-item tracking and remediation of recurring audit issues.",
      serviceType: "Audit Support and Close Acceleration Services",
      category: "Accounting and Reporting Consulting",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "CFOs, finance controllers, accounting teams and organisations preparing for financial close and statutory audit",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#breadcrumb",
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
          name: "Audit Support & Close Acceleration",
          item: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#webpage",
      url: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
      name: "Audit Support and Close Acceleration That Reduces Last-Minute Reporting Risk",
      description:
        "Audit support and close acceleration services helping finance teams organise audit evidence, strengthen close governance, resolve accounting issues and create a more predictable close and audit cycle.",
      about: {
        "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is audit support and close acceleration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Audit support and close acceleration help finance teams organise the period-end close, prepare audit-ready schedules and evidence, resolve accounting issues, and manage auditor requests more efficiently. The objective is to reduce last-minute reporting pressure and create a more predictable close and audit cycle.",
          },
        },
        {
          "@type": "Question",
          name: "How can Contetra help reduce delays during an audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra helps identify the causes of audit delays, prioritise critical accounts and schedules, organise supporting evidence, track open queries and establish clear ownership for outstanding items. We can also help address recurring issues so the same delays do not continue in future reporting periods.",
          },
        },
        {
          "@type": "Question",
          name: 'What is a PBC list and can Contetra help manage it?',
          acceptedAnswer: {
            "@type": "Answer",
            text: 'A PBC, or "Prepared by Client," list contains the documents, schedules, reconciliations and supporting information requested by auditors. Contetra can help organise the PBC list, assign responsibilities, prepare or review schedules, track submissions and manage open audit queries.',
          },
        },
        {
          "@type": "Question",
          name: "Do you provide month-end, quarter-end and year-end close support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support month-end, quarter-end and year-end close activities, including close calendars, account ownership, reconciliations, accruals, provisions, roll-forwards, review controls, issue tracking and completion monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra prepare audit schedules and account reconciliations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Support can include lead schedules, balance-sheet reconciliations, roll-forwards, supporting calculations, account analyses and other audit-ready documentation required to substantiate balances reported in the financial statements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help resolve technical accounting questions raised during an audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support technical accounting issues by reviewing the facts, applicable accounting framework, calculations, supporting documentation and financial statement implications. The team can also help prepare reviewable workings or accounting documentation to support discussions with auditors.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support a company undergoing its first audit under a new accounting framework?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can support organisations undergoing a first-time audit or reporting transition under a new framework by identifying reporting requirements, reviewing accounting positions, preparing supporting schedules and helping organise the audit evidence required for the reporting period.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle recurring audit observations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra looks beyond resolving the immediate audit query. Recurring observations can be analysed to identify their root causes, followed by improvements to SOPs, controls, ownership, systems, documentation or training so that the issue is less likely to recur in subsequent periods.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work alongside our internal finance team and statutory auditors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra can work as an extension of the finance team while coordinating defined audit-support activities. Management and the statutory auditor retain their respective responsibilities, while Contetra helps organise schedules, evidence, accounting workings and open-item tracking.",
          },
        },
        {
          "@type": "Question",
          name: "What does close governance involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Close governance includes establishing a reporting calendar, defining account and task ownership, identifying dependencies, setting review controls, tracking completion, escalating unresolved issues and ensuring that critical activities are completed within the reporting timetable.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support only a specific audit or close workstream?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The engagement does not need to cover the entire close or audit. Contetra can support a defined workstream such as PBC coordination, reconciliations, lead schedules, technical accounting matters, close tracking or remediation of recurring audit observations.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's audit readiness and close acceleration process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by diagnosing close and audit bottlenecks. Critical accounts, schedules and technical matters are then prioritised, followed by transparent tracking of completion and audit queries. After the reporting deadline, recurring causes can be addressed through process, control, system and documentation improvements.",
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
