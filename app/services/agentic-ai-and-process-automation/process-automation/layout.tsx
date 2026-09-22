import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Process Automation Services | 14-Day Working Automation | Contetra`,
  description: `AI-powered process automation for finance, sales, ops and marketing — working automation in 14 days, fully managed, no lock-in.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
  },
  openGraph: {
    title: `Working Automation in 14 Days, Not 14 Months | Contetra`,
    description: `AI-powered business process automation — working automation live in 14 days, fully managed, no lock-in, powered by Phinite.ai`,
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#service",
      name: "Process Automation Services",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
      description:
        "Managed process automation services covering workflow assessment, automation design, ERP and CRM integration, AI-enabled workflows, human-in-the-loop controls, monitoring, maintenance and continuous improvement.",
      serviceType: "Process Automation Services",
      category: "Business Process Automation and AI Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, CFOs, finance teams, sales teams, marketing teams, operations teams and organisations seeking to automate repetitive business processes",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#breadcrumb",
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
          name: "Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
      name: "Process Automation Services | 14-Day Working Automation | Contetra",
      description:
        "Process automation services that connect ERP, CRM, email, spreadsheets and other business systems to automate repetitive workflows with human review, audit trails, monitoring and ongoing support.",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the first automation POC really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra offers one automation for one defined process as a free 14-day Proof of Concept. The objective is to demonstrate a working automation using a real business process before moving to a longer-term engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What kinds of processes can you automate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processes that are repetitive, rule-based, data-heavy, or involve moving information between systems are usually good candidates for automation. Examples can include reconciliations, CRM updates, recurring reports, follow-up emails, lead enrichment, invoice processing, data validation and workflow routing.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to our business data during automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The automation is designed with enterprise-grade controls such as encryption, audit logs, role-based access, PII protection and defined access permissions. Data handling and system access should be agreed based on the workflow and the organisation's security requirements.",
          },
        },
        {
          "@type": "Question",
          name: "We are already implementing a CRM or ERP. Can process automation still work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automations can sit on top of existing systems such as ERP, CRM, email, spreadsheets and communication platforms without necessarily replacing the underlying applications. The integration approach depends on the APIs, permissions and data availability of the systems involved.",
          },
        },
        {
          "@type": "Question",
          name: "Who maintains the automation after implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can continue to monitor, maintain, fix and improve the automation after deployment. This managed approach helps organisations avoid having to build a separate internal automation team solely to maintain workflows.",
          },
        },
        {
          "@type": "Question",
          name: "What does process automation cost after the Proof of Concept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on the number and complexity of automations being operated, the integrations required, transaction volumes, monitoring requirements and support scope. The commercial model can be finalised after the initial process and technical requirements are understood.",
          },
        },
        {
          "@type": "Question",
          name: "What is process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Process automation uses technology to perform repetitive business activities with less manual intervention. It can connect systems, collect and validate information, route tasks, prepare outputs, trigger actions and escalate exceptions so employees can focus on higher-value activities.",
          },
        },
        {
          "@type": "Question",
          name: "Which departments can benefit from process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Process automation can support functions such as finance and accounting, sales, marketing, customer support, operations and administration. The most suitable opportunities are usually processes with high manual effort, repetitive tasks, frequent errors, delayed follow-ups or information being transferred repeatedly between systems.",
          },
        },
        {
          "@type": "Question",
          name: "Can process automation integrate with our existing ERP and CRM systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on system capabilities, automation can integrate with platforms such as SAP, Microsoft Dynamics, ERPNext, Odoo, Salesforce, HubSpot, Tally, QuickBooks and other business applications. APIs, connectors or controlled workflow integrations can be used without necessarily replacing the existing technology stack.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide whether a process should be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A process should first be assessed for repetition, transaction volume, rule clarity, manual effort, error rates, system dependencies, exceptions and expected business value. Processes that are unstable or poorly defined may require process redesign before automation is implemented.",
          },
        },
        {
          "@type": "Question",
          name: "Does process automation remove the need for human review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Human-in-the-loop controls can be built into workflows where judgement or approval is required. The automation may classify, extract, reconcile, draft or validate information while exceptions or sensitive actions are routed to an authorised person for review.",
          },
        },
        {
          "@type": "Question",
          name: "How do you control errors in automated workflows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automated workflows can include validation rules, exception thresholds, human approvals, access controls, monitoring and audit logs. These controls help identify situations where the automation cannot confidently complete an activity and requires human intervention.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra's current Proof-of-Concept model is designed to demonstrate a working automation within 14 days for an appropriately scoped process. Larger or more complex workflows may require additional implementation time depending on integrations, data availability, security requirements and business rules.",
          },
        },
        {
          "@type": "Question",
          name: "What systems can process automation connect with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation can work across ERP systems, CRM platforms, email, spreadsheets, chat platforms and other business applications. Relevant platforms can include Salesforce, HubSpot, SAP, Microsoft Dynamics, ERPNext, Odoo, Tally, WhatsApp, Slack, Teams, Gmail, Outlook, QuickBooks, Xero, Shopify and Stripe.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the automation goes live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After deployment, the workflow should be monitored for failures, exceptions, changes in business rules and opportunities for improvement. Contetra's managed automation model includes monitoring, fixes, improvements and ongoing support rather than treating go-live as the end of the project.",
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
