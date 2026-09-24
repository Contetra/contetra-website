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
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#service",
      name: "Process Automation Services",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
      description: "Contetra designs, builds and manages business process automations across finance, sales, marketing, operations and administration, including a free 14-day Proof of Concept for one appropriately scoped process, ERP and CRM integrations, human-in-the-loop controls, monitoring and ongoing support.",
      serviceType: [
        "Business Process Automation",
        "Workflow Automation",
        "AI-Enabled Process Automation",
        "Finance and Accounting Automation",
        "Sales Process Automation",
        "CRM Automation",
        "Marketing Workflow Automation",
        "Operations Automation",
        "Reporting Automation",
        "ERP and CRM Integration",
        "Human-in-the-Loop Automation",
        "Managed Automation Services",
        "Automation Proof of Concept",
      ],
      category: "Agentic AI and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs and Finance Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Sales and Marketing Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Operations Leaders",
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/process-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/process-automation",
      name: "Process Automation Services | 14-Day Working Automation | Contetra",
      description: "Process automation services for finance, sales, marketing and operations, including a free 14-day Proof of Concept, ERP and CRM integrations, human review controls, monitoring and ongoing managed support.",
      inLanguage: "en-IN",
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
            text: "Yes. Contetra offers one automation for one defined process as a free 14 day Proof of Concept, with the objective of demonstrating a working automation on a real business process before moving into a longer term engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What is process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Process automation uses technology to carry out repetitive business activities with less manual intervention. It can connect systems, collect and validate information, route tasks, prepare outputs, trigger actions and escalate exceptions, freeing employees up for higher value work.",
          },
        },
        {
          "@type": "Question",
          name: "What kinds of processes can you automate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processes that are repetitive, rule based, data heavy, or involve moving information between systems tend to be good candidates. Examples include reconciliations, CRM updates, recurring reports, follow up emails, lead enrichment, invoice processing, data validation and workflow routing.",
          },
        },
        {
          "@type": "Question",
          name: "Which departments can benefit from process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance and accounting, sales, marketing, customer support, operations and administration typically see the most benefit, particularly processes with high manual effort, repetitive tasks, frequent errors, delayed follow ups, or information being passed back and forth between systems.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide whether a process should be automated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By assessing repetition, transaction volume, rule clarity, manual effort, error rates, system dependencies, exceptions and expected business value. Processes that are unstable or poorly defined may need to be redesigned before automation makes sense.",
          },
        },
        {
          "@type": "Question",
          name: "We are already implementing a CRM or ERP. Can process automation still work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Automations can sit on top of existing systems such as ERP, CRM, email, spreadsheets and communication platforms without necessarily replacing the underlying applications, depending on the APIs, permissions and data available in those systems.",
          },
        },
        {
          "@type": "Question",
          name: "Can process automation integrate with our existing ERP and CRM systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, depending on system capabilities. This can include platforms such as SAP, Microsoft Dynamics, ERPNext, Odoo, Salesforce, HubSpot, Tally and QuickBooks, using APIs, connectors or controlled workflow integrations without needing to replace the existing technology stack.",
          },
        },
        {
          "@type": "Question",
          name: "What systems can process automation connect with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra's current offering is built around integrations with platforms including Salesforce, HubSpot, SAP, Microsoft Dynamics, ERPNext, Odoo, Tally, WhatsApp, Slack, Teams, Gmail, Outlook, QuickBooks, Xero, Shopify and Stripe, alongside general ERP systems, CRM platforms, email, spreadsheets and chat tools.",
          },
        },
        {
          "@type": "Question",
          name: "Does process automation remove the need for human review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Human in the loop controls can be built into workflows wherever judgement or approval is required. The automation might classify, extract, reconcile, draft or validate information, while exceptions or sensitive actions get routed to an authorised person for review.",
          },
        },
        {
          "@type": "Question",
          name: "How do you control errors in automated workflows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through validation rules, exception thresholds, human approvals, access controls, monitoring and audit logs, all designed to catch situations where the automation cannot confidently complete an activity and needs human intervention instead.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to our business data during automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The automation is built with enterprise grade controls such as encryption, audit logs, role based access, PII protection and defined access permissions, with the specific data handling and system access agreed based on the workflow and the organisation's security requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a process automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra's current Proof of Concept model is designed to demonstrate a working automation within 14 days for an appropriately scoped process. Larger or more complex workflows can take longer depending on integrations, data availability, security requirements and business rules.",
          },
        },
        {
          "@type": "Question",
          name: "Who maintains the automation after implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can continue to monitor, maintain, fix and improve the automation after deployment, which means organisations do not need to build a separate internal team solely to keep the workflows running.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the automation goes live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The workflow should be monitored for failures, exceptions, changes in business rules and opportunities for improvement. Contetra's managed automation model includes monitoring, fixes, improvements and ongoing support, treating go live as the start of the relationship rather than the end of the project.",
          },
        },
        {
          "@type": "Question",
          name: "What does process automation cost after the Proof of Concept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on the number and complexity of automations being operated, the integrations required, transaction volumes, monitoring requirements and support scope, with the commercial model finalised once the initial process and technical requirements are understood.",
          },
        },
      ],
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
          name: "Agentic AI & Process Automation",
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
