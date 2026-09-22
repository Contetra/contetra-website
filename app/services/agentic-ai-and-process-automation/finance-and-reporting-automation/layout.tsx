import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Finance & Reporting Automation Services | Contetra`,
  description: `Finance and reporting automation designed around accounting logic and control, close, reconciliation, AP/AR and MIS automation that stays audit-ready.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
  },
  openGraph: {
    title: `Automation Built by People Who Understand the Close | Contetra`,
    description: `Finance and reporting automation designed by people who understand the close — reconciliation, AP/AR and MIS automation that stays audit-ready.`,
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#service",
      name: "Finance and Reporting Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
      description:
        "Finance and reporting automation services covering close and reconciliation, accounts payable and receivable workflows, MIS and financial reporting, audit support, compliance reconciliations, exception handling and control validation.",
      serviceType: "Finance and Reporting Automation Services",
      category: "Finance Automation and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "CFOs, finance controllers, accounting teams and organisations seeking to automate recurring finance and reporting workflows",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#breadcrumb",
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
          name: "Agentic AI and Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Finance and Reporting Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
      name: "Finance and Reporting Automation Services",
      description:
        "Finance automation services designed around accounting logic, controls and auditability, covering close, reconciliations, AP and AR, MIS reporting, compliance workflows and exception management.",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is finance and reporting automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance and reporting automation uses workflow tools, integrations and AI to reduce repetitive manual work across accounting, close, reconciliations, reporting and compliance processes. The objective is to improve speed and consistency while maintaining accounting logic, review controls and an audit trail.",
          },
        },
        {
          "@type": "Question",
          name: "Which finance processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance processes that can be automated include account reconciliations, bank and intercompany matching, invoice processing, approval workflows, receivables follow-up, collections, MIS preparation, variance identification, reporting distribution, audit schedules and recurring compliance reconciliations.",
          },
        },
        {
          "@type": "Question",
          name: "Can month-end close activities be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Parts of the month-end close can be automated, including task orchestration, data collection, reconciliations, evidence gathering, exception tracking and status monitoring. Higher-risk accounting judgements and approvals can remain with authorised finance team members.",
          },
        },
        {
          "@type": "Question",
          name: "Can finance automation handle bank and intercompany reconciliations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automation can match transactions, apply defined reconciliation rules, identify unmatched items and route exceptions for investigation. The objective is to reduce manual matching while preserving supporting evidence and reviewability.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounts payable processes be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Accounts payable workflows can include invoice capture, data validation, matching, approval routing and exception handling. Sensitive activities such as payment approval should retain appropriate maker-checker and access controls.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounts receivable and collections be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automation can support customer follow-ups, ageing-based reminders, collections workflows, dispute routing and status tracking. Finance teams can then focus more attention on high-value or complex collection issues.",
          },
        },
        {
          "@type": "Question",
          name: "How can MIS and management reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance automation can collect data from relevant systems, standardise reporting inputs, prepare recurring reports, identify variances, draft commentary, distribute reports and track follow-up actions. The reporting logic and finance review process should be defined before automation is implemented.",
          },
        },
        {
          "@type": "Question",
          name: "Can variance analysis and commentary be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automated workflows can identify material variances and generate draft commentary using available financial and operational data. However, management judgement is still important to determine whether a variance is temporary, structural or requires business action.",
          },
        },
        {
          "@type": "Question",
          name: "Can finance automation support GST and tax reconciliations in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Relevant workflows can include GSTR-2B to purchase-register matching, input tax credit follow-up, 26AS and AIS reconciliation, and TDS or TCS exception tracking. The automation should be configured around the company's data sources, rules and review requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do you maintain controls when automating finance processes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Controls can include role-based access, maker-checker approvals, validation rules, exception thresholds, supporting evidence, audit logs and human review checkpoints. High-risk activities should not be automated without clearly defined ownership and approval requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide which finance process to automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The starting point is usually a recurring process with high manual effort, delays, error risk or repetitive reconciliation work. Contetra first assesses effort, cycle time, control risk, process stability and exception volumes before deciding what should be automated.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's finance automation implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process starts by baselining effort, risk, cycle time and error points. The workflow, rules and ownership are then standardised, followed by automation of high-confidence activities and design of exception handling. Finally, accounting outputs, controls and the audit trail are validated before wider use.",
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
