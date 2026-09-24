import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Operations & Project Workflow Automation | Contetra`,
  description: `Operations and project workflow automation that converts fragmented follow-up into visible, governed workflows across procurement, PMO and tasks.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
  },
  openGraph: {
    title: `Make Fragmented Follow-Up Visible Again | Contetra`,
    description: `Operations and project workflow automation that converts fragmented follow-up into visible, governed workflows across procurement and PMO.`,
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
      url: "https://contetra.com",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#service",
      name: "Operations and Project Workflow Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
      description: "Contetra helps organisations automate operational and project workflows across procurement, vendor management, approvals, service requests, SLA monitoring, PMO reporting, project tracking and recurring operating processes using workflow technology, system integrations and AI assistance.",
      serviceType: [
        "Operations Workflow Automation",
        "Project Workflow Automation",
        "PMO Automation",
        "Procurement Workflow Automation",
        "Vendor Management Automation",
        "Approval Workflow Automation",
        "SLA Monitoring and Escalation",
        "Project Status Reporting Automation",
        "Project Dependency Monitoring",
        "Operational Reporting Automation",
        "Task and Exception Management",
        "Business Process Workflow Automation",
      ],
      category: "Agentic AI and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Project and PMO Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Procurement Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
      name: "Operations and Project Workflow Automation | Contetra",
      description: "Operations and project workflow automation covering procurement, vendor management, approvals, PMO reporting, SLA monitoring, project dependencies, escalations and recurring operational workflows.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is operations and project workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Operations and project workflow automation uses workflow technology, system integrations and AI assistance to coordinate recurring activities, approvals, status updates, reminders and exceptions. It replaces fragmented follow ups across emails, spreadsheets and chat messages with a single, visible and governed process.",
          },
        },
        {
          "@type": "Question",
          name: "Which operational processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendor onboarding, document validation, purchase requests, approval workflows, service requests, compliance checks, inventory or production alerts, document routing, SLA monitoring and recurring operating reports.",
          },
        },
        {
          "@type": "Question",
          name: "Does workflow automation remove human ownership?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, and this is a common misconception. Effective automation actually makes ownership clearer, not less relevant. Tasks are automatically assigned, tracked and escalated, while employees remain responsible for the decisions, approvals, exceptions and judgement calls that automation is not designed to make.",
          },
        },
        {
          "@type": "Question",
          name: "Can procurement and vendor management workflows be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This can include vendor onboarding, document collection and validation, approval routing, purchase requests, renewals, compliance checks and exception management, with defined approval authorities staying with the appropriate employees throughout.",
          },
        },
        {
          "@type": "Question",
          name: "Can project and PMO reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This includes collecting status updates, monitoring milestones and dependencies, tracking risks and issues, capturing meeting actions, sending reminders and preparing recurring PMO or steering committee reports, without someone having to chase updates manually.",
          },
        },
        {
          "@type": "Question",
          name: "Can workflow automation track project delays and dependencies before they become a problem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automated workflows can monitor due dates, dependencies and milestones, flagging activities that are delayed or at risk early, then routing the relevant issue to the appropriate project owner or management team through defined escalation rules.",
          },
        },
        {
          "@type": "Question",
          name: "Can SLA monitoring and escalation be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Workflows can track service requests against defined SLA timelines, identify overdue activities, and automatically trigger reminders or escalations based on agreed business rules, rather than relying on someone remembering to follow up.",
          },
        },
        {
          "@type": "Question",
          name: "Can approval workflows be automated end to end?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Purchase requests, operational activities, project decisions and similar tasks can be routed automatically to the right approver based on predefined rules, with the workflow retaining assignment history, due dates, supporting evidence and a full approval trail.",
          },
        },
        {
          "@type": "Question",
          name: "Can operations automation integrate with our existing systems, or do we need to replace them?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It integrates with what you already have. Depending on system capabilities, workflows can connect to existing ERP, project management, procurement, document and communication platforms, with the integration approach shaped by available APIs, data sources and permissions rather than requiring a system overhaul.",
          },
        },
        {
          "@type": "Question",
          name: "How does workflow automation actually improve management visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By giving clear, real time visibility into task status, ageing, overdue activities, exceptions, approvals, project milestones and unresolved risks. This means management catches delays early, rather than finding out only after a milestone or commitment has already been missed.",
          },
        },
        {
          "@type": "Question",
          name: "Which operational workflow should we automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually a recurring process that relies heavily on manual follow up, involves multiple hand offs, suffers from delays, or lacks clear visibility. The existing process should be mapped first, so unnecessary steps and unclear ownership get resolved before automation is layered on top, not after.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's approach to operations and project workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra first maps activities, roles, systems, delays and exceptions. The future state workflow is then simplified and standardised, followed by integration, automation and interface build out. After deployment, throughput, ageing, exceptions and adoption are actively monitored to identify what to improve next.",
          },
        },
        {
          "@type": "Question",
          name: "How do we know if the automation is actually working after it goes live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By tracking the same baseline metrics used to justify the automation in the first place, cycle time, manual effort, error rates, SLA adherence and exception volumes. If these measures do not improve within a reasonable period, that is a signal to revisit the workflow design rather than assume the technology alone will fix it.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#breadcrumb",
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
          name: "Agentic AI & Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Operations & Project Workflow Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
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
