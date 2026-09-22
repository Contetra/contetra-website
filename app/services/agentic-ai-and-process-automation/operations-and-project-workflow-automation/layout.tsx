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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#service",
      name: "Operations and Project Workflow Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
      description:
        "Operations and project workflow automation services covering procurement and vendor workflows, operations coordination, project and PMO automation, task and approval workflows, SLA monitoring, escalations and management visibility.",
      serviceType: "Operations and Project Workflow Automation Services",
      category: "Business Process Automation and Project Workflow Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, operations leaders, project managers, PMO teams, procurement teams and organisations seeking to automate operational and project workflows",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#breadcrumb",
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
          name: "Operations and Project Workflow Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
      name: "Operations and Project Workflow Automation for Better Execution Visibility",
      description:
        "Operations and project workflow automation helping businesses improve procurement workflows, task ownership, project tracking, approvals, SLA monitoring, escalation and execution visibility.",
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
            text: "Operations and project workflow automation uses workflow technology, system integrations and AI assistance to coordinate recurring activities, approvals, status updates, reminders and exceptions. It helps replace fragmented follow-ups across emails, spreadsheets and chat messages with a more visible and governed process.",
          },
        },
        {
          "@type": "Question",
          name: "Which operational processes can be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processes that can be automated include vendor onboarding, document validation, purchase requests, approval workflows, service requests, compliance checks, inventory or production alerts, document routing, SLA monitoring and recurring operating reports.",
          },
        },
        {
          "@type": "Question",
          name: "Can procurement and vendor-management workflows be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automation can support vendor onboarding, document collection and validation, approval routing, purchase requests, renewals, compliance checks and exception management. Defined approval authorities can remain with the appropriate employees.",
          },
        },
        {
          "@type": "Question",
          name: "Can project and PMO reporting be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Project automation can collect status updates, monitor milestones and dependencies, track risks and issues, capture meeting actions, send reminders and help prepare recurring PMO or steering-committee reports.",
          },
        },
        {
          "@type": "Question",
          name: "Can workflow automation track project delays and dependencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automated workflows can monitor due dates, dependencies and project milestones and flag activities that are delayed or at risk. Escalation rules can then route relevant issues to the appropriate project owner or management team.",
          },
        },
        {
          "@type": "Question",
          name: "Can SLA monitoring and escalation be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Workflows can track service requests and defined SLA timelines, identify overdue activities and automatically trigger reminders or escalations based on agreed business rules.",
          },
        },
        {
          "@type": "Question",
          name: "Can approval workflows be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Purchase requests, operational activities, project decisions and other tasks can be routed automatically to the appropriate approver based on predefined rules. The workflow can retain assignment, due dates, supporting evidence and approval history.",
          },
        },
        {
          "@type": "Question",
          name: "Does workflow automation remove human ownership?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Effective workflow automation should make ownership clearer rather than remove it. Tasks can be automatically assigned and monitored, while employees remain responsible for decisions, approvals, exceptions and activities that require judgement.",
          },
        },
        {
          "@type": "Question",
          name: "Can operations automation integrate with our existing systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on system capabilities, workflows can connect existing ERP, project-management, procurement, document, communication and other business applications. The integration approach depends on available APIs, data sources, permissions and workflow requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How does workflow automation improve management visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation can provide clearer visibility into task status, ageing, overdue activities, exceptions, approvals, project milestones and unresolved risks. This allows management to identify delays earlier instead of discovering them after a milestone or commitment has already been missed.",
          },
        },
        {
          "@type": "Question",
          name: "Which operational workflow should we automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A good starting point is usually a recurring process that depends heavily on manual follow-up, has multiple hand-offs, suffers from delays or lacks clear visibility. The current process should first be mapped so that unnecessary steps and unclear ownership are resolved before automation.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's approach to operations and project workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra first maps activities, roles, systems, delays and exceptions. The future-state workflow is then simplified and standardised, followed by implementation of integrations, automation and user interfaces. After deployment, throughput, ageing, exceptions and adoption are monitored to identify further improvements.",
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
