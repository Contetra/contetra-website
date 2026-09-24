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
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#service",
      name: "Audit Support and Close Acceleration",
      url: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
      description: "Contetra helps finance teams accelerate period-end close, organise audit-ready schedules and evidence, manage PBC requests, resolve accounting issues, strengthen close governance and remediate recurring audit observations.",
      serviceType: [
        "Audit Support",
        "Close Acceleration",
        "Close Governance",
        "PBC List Management",
        "Audit Coordination",
        "Account Reconciliations",
        "Lead Schedule Preparation",
        "Technical Accounting Support",
        "Audit Readiness",
        "Recurring Audit Remediation",
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
          audienceType: "Companies Preparing for Audit",
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
      "@id": "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration#webpage",
      url: "https://contetra.com/services/accounting-reporting/audit-support-close-acceleration",
      name: "Audit Support and Close Acceleration Services | Contetra",
      description: "Audit support and close acceleration services covering close governance, PBC coordination, audit schedules, reconciliations, technical accounting support and remediation of recurring audit issues.",
      inLanguage: "en-IN",
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
            text: "Audit support and close acceleration help finance teams organise the period end close, prepare audit ready schedules and evidence, resolve accounting issues, and manage auditor requests more efficiently. The goal is to reduce last minute reporting pressure and create a more predictable close and audit cycle.",
          },
        },
        {
          "@type": "Question",
          name: "How can Contetra help reduce delays during an audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By identifying the actual causes of delay, prioritising critical accounts and schedules, organising supporting evidence, tracking open queries and establishing clear ownership for outstanding items. Contetra also looks at recurring issues so the same delays do not repeat in future reporting periods.",
          },
        },
        {
          "@type": "Question",
          name: "What is a PBC list, and can Contetra help manage it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A PBC, or Prepared by Client list, contains the documents, schedules, reconciliations and supporting information requested by auditors. Contetra can help organise the PBC list, assign responsibilities, prepare or review schedules, track submissions and manage open audit queries.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide month end, quarter end and year end close support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes close calendars, account ownership, reconciliations, accruals, provisions, roll forwards, review controls, issue tracking and completion monitoring across each close cycle.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra prepare audit schedules and account reconciliations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include lead schedules, balance sheet reconciliations, roll forwards, supporting calculations, account analyses and other audit ready documentation needed to substantiate balances reported in the financial statements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help resolve technical accounting questions raised during an audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra reviews the facts, the applicable accounting framework, calculations, supporting documentation and financial statement implications, and can help prepare reviewable workings or accounting documentation to support discussions with auditors.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle recurring audit observations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra looks beyond just closing out the immediate query. Recurring observations are analysed to identify root causes, followed by improvements to SOPs, controls, ownership, systems, documentation or training, so the issue is less likely to come back in future periods.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support a company undergoing its first audit under a new accounting framework?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes identifying reporting requirements, reviewing accounting positions, preparing supporting schedules and helping organise the audit evidence needed for that reporting period, whether it is a first time audit or a transition to a new framework.",
          },
        },
        {
          "@type": "Question",
          name: "What does close governance involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Establishing a reporting calendar, defining account and task ownership, identifying dependencies, setting review controls, tracking completion, escalating unresolved issues and making sure critical activities finish within the reporting timetable.",
          },
        },
        {
          "@type": "Question",
          name: "Can Contetra work alongside our internal finance team and statutory auditors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra works as an extension of the finance team while coordinating defined audit support activities. Management and the statutory auditor retain their respective responsibilities, while Contetra helps organise schedules, evidence, accounting workings and open item tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support only a specific audit or close workstream?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The engagement does not need to cover the entire close or audit. Contetra can take on a defined workstream such as PBC coordination, reconciliations, lead schedules, technical accounting matters, close tracking or remediation of recurring audit observations.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's audit readiness and close acceleration process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally starts by diagnosing close and audit bottlenecks. Critical accounts, schedules and technical matters are then prioritised, followed by transparent tracking of completion and audit queries. After the reporting deadline, recurring causes are addressed through process, control, system and documentation improvements.",
          },
        },
      ],
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
