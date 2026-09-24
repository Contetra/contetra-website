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
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#service",
      name: "Finance and Reporting Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
      description: "Contetra helps finance teams automate recurring accounting, close, reconciliation, reporting and compliance workflows using workflow tools, integrations and AI while preserving accounting logic, approvals, controls, supporting evidence and audit trails.",
      serviceType: [
        "Finance and Reporting Automation",
        "Month-End Close Automation",
        "Account Reconciliation Automation",
        "Bank Reconciliation Automation",
        "Intercompany Reconciliation Automation",
        "Accounts Payable Automation",
        "Accounts Receivable Automation",
        "Collections Automation",
        "MIS Reporting Automation",
        "Variance Analysis Automation",
        "Audit Schedule Automation",
        "GST and Tax Reconciliation Automation",
        "Finance Workflow Automation",
      ],
      category: "Agentic AI and Finance Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
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
          audienceType: "Shared Services Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Growing Businesses",
        },
      ],
      isRelatedTo: {
        "@type": "Service",
        name: "Agentic AI and Process Automation",
        url: "https://contetra.com/services/agentic-ai-and-process-automation",
      },
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
      name: "Finance and Reporting Automation Services | Contetra",
      description: "Finance and reporting automation covering close, reconciliations, AP, AR, MIS, variance analysis, audit schedules and compliance workflows with appropriate controls and human review.",
      inLanguage: "en-IN",
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
            text: "Finance and reporting automation uses workflow tools, integrations and AI to reduce repetitive manual work across accounting, close, reconciliations, reporting and compliance processes, with the aim of improving speed and consistency while preserving accounting logic, review controls and an audit trail.",
          },
        },
        {
          "@type": "Question",
          name: "Which finance processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Account reconciliations, bank and intercompany matching, invoice processing, approval workflows, receivables follow up, collections, MIS preparation, variance identification, reporting distribution, audit schedules and recurring compliance reconciliations.",
          },
        },
        {
          "@type": "Question",
          name: "Can month end close activities be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes task orchestration, data collection, reconciliations, evidence gathering, exception tracking and status monitoring, while higher risk accounting judgements and approvals remain with authorised finance team members.",
          },
        },
        {
          "@type": "Question",
          name: "Can finance automation handle bank and intercompany reconciliations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automation can match transactions, apply defined reconciliation rules, identify unmatched items and route exceptions for investigation, reducing manual matching while preserving supporting evidence and reviewability.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounts payable processes be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include invoice capture, data validation, matching, approval routing and exception handling, with sensitive activities such as payment approval retaining appropriate maker checker and access controls.",
          },
        },
        {
          "@type": "Question",
          name: "Can accounts receivable and collections be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automation can support customer follow ups, ageing based reminders, collections workflows, dispute routing and status tracking, freeing finance teams to focus more attention on high value or complex collection issues.",
          },
        },
        {
          "@type": "Question",
          name: "How can MIS and management reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By collecting data from relevant systems, standardising reporting inputs, preparing recurring reports, identifying variances, drafting commentary, distributing reports and tracking follow up actions, with the reporting logic and review process defined before automation goes in.",
          },
        },
        {
          "@type": "Question",
          name: "Can variance analysis and commentary be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, automated workflows can identify material variances and generate draft commentary from available financial and operational data. Management judgement still matters, though, to determine whether a variance is temporary, structural, or needs business action.",
          },
        },
        {
          "@type": "Question",
          name: "Can finance automation support GST and tax reconciliations in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Relevant workflows can include GSTR 2B to purchase register matching, input tax credit follow up, 26AS and AIS reconciliation, and TDS or TCS exception tracking, configured around the company's specific data sources, rules and review requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do you maintain controls when automating finance processes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through role based access, maker checker approvals, validation rules, exception thresholds, supporting evidence, audit logs and human review checkpoints. High risk activities should never be automated without clearly defined ownership and approval requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide which finance process to automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually starting with a recurring process that carries high manual effort, delays, error risk or repetitive reconciliation work. Contetra assesses effort, cycle time, control risk, process stability and exception volumes before deciding what to automate first.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's finance automation implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It starts by baselining effort, risk, cycle time and error points. The workflow, rules and ownership are then standardised, followed by automation of high confidence activities and design of exception handling. Finally, accounting outputs, controls and the audit trail are validated before wider rollout.",
          },
        },
        {
          "@type": "Question",
          name: "Does finance automation replace the need for a finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It is designed to remove repetitive, low judgement work so the finance team can focus on analysis, exceptions and decisions that genuinely require human input, rather than replacing the roles that need accounting judgement, oversight and accountability.",
          },
        },
      ],
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
          name: "Agentic AI & Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Finance & Reporting Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
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
