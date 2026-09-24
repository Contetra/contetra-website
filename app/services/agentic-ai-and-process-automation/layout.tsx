import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Agentic AI & Process Automation Consulting | Contetra`,
  description: `Agentic AI and workflow automation designed around real business processes, governed, human-in-the-loop automation across finance, sales, ops and reporting.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation",
  },
  openGraph: {
    title: `Automation Built Around Your Process, Not a Bot Bolted On | Contetra`,
    description: `Agentic AI and workflow automation designed around real business processes human-in-the-loop by design, with approvals, access controls and audit trails built in.`,
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation#service",
      name: "Agentic AI and Process Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation",
      description: "Contetra helps organisations identify, design and implement governed AI-enabled workflows across finance, sales, marketing, procurement, operations, project management and knowledge processes using agentic AI, workflow automation, RPA, integrations and human approval controls.",
      serviceType: [
        "Agentic AI Automation",
        "AI Agent Development",
        "Business Process Automation",
        "Workflow Automation",
        "Finance and Accounting Automation",
        "Sales and CRM Automation",
        "Marketing Workflow Automation",
        "Operations and Procurement Automation",
        "Project Management Automation",
        "Knowledge and Support Automation",
        "RPA and AI Integration",
        "Automation Opportunity Assessment",
        "Proof of Value Development",
        "AI Governance and Control Design",
      ],
      category: "Agentic AI and Business Process Automation",
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
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "CFOs",
        },
        {
          "@type": "Audience",
          audienceType: "Finance Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Sales and Marketing Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
        },
      ],
      isRelatedTo: [
        {
          "@type": "Service",
          name: "Automation Opportunity Assessment and Roadmap",
          url: "https://contetra.com/services/agentic-ai-and-process-automation/automation-opportunity-assessment-and-roadmap",
        },
        {
          "@type": "Service",
          name: "Agentic AI and AI Agent Development",
          url: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
        },
        {
          "@type": "Service",
          name: "Finance and Reporting Automation",
          url: "https://contetra.com/services/agentic-ai-and-process-automation/finance-and-reporting-automation",
        },
        {
          "@type": "Service",
          name: "Sales and Marketing Workflow Automation",
          url: "https://contetra.com/services/agentic-ai-and-process-automation/sales-and-marketing-workflow-automation",
        },
        {
          "@type": "Service",
          name: "Operations and Project Workflow Automation",
          url: "https://contetra.com/services/agentic-ai-and-process-automation/operations-and-project-workflow-automation",
        },
      ],
    },
    {
      "@type": [
        "WebPage",
        "FAQPage",
      ],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation",
      name: "Agentic AI and Process Automation Consulting | Contetra",
      description: "Agentic AI and process automation consulting for governed workflows across finance, sales, operations, marketing and project management, with human approval controls, integrations and measurable business outcomes.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is agentic AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agentic AI automation uses AI agents that can interpret information, use approved tools, coordinate multiple steps and take defined actions within a business workflow. Unlike a basic chatbot, an AI agent can actually participate in process execution, gathering data, analysing information, drafting outputs, routing tasks, monitoring conditions and triggering approved actions.",
          },
        },
        {
          "@type": "Question",
          name: "How is agentic AI different from RPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional Robotic Process Automation is best suited to predictable, rules based tasks where the steps stay fixed. Agentic AI can handle workflows involving unstructured information, reasoning, documents, exceptions and multiple systems. In many cases the strongest solution combines workflow automation, RPA and AI together, rather than replacing one technology with another.",
          },
        },
        {
          "@type": "Question",
          name: "Which business process should we automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best starting point is usually a high volume, repetitive or high friction process where delays, manual effort, errors or control gaps can be measured. Contetra assesses each process for business value, feasibility, data readiness, integration requirements and risk before recommending whether AI, workflow automation or process redesign is the right fit.",
          },
        },
        {
          "@type": "Question",
          name: "Which business functions can be automated using agentic AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Finance and accounting, sales, marketing, procurement, operations, project management and internal knowledge management can all benefit. Examples include invoice processing, reconciliations, collections, CRM updates, lead routing, vendor onboarding, management reporting, project status monitoring and policy or SOP assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Can agentic AI automate finance and accounting processes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Workflows such as invoice processing, reconciliations, close activities, collections, cash reporting, variance analysis, audit schedules and recurring management reporting can all be automated, though material accounting entries and financial actions should retain appropriate maker checker, approval and audit evidence controls.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents update our ERP or CRM directly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, where appropriate integrations and permissions are in place, AI enabled workflows can interact with ERP, CRM and other business applications. That said, sensitive activities such as financial postings, payment releases or customer facing commitments should always include defined approval controls, access restrictions and audit trails.",
          },
        },
        {
          "@type": "Question",
          name: "What does human in the loop mean in AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It means specific decisions or actions remain subject to human review or approval. For example, an AI agent might prepare a reconciliation, draft an accounting entry, or flag an exception, while an authorised employee reviews and approves the final action before it takes effect.",
          },
        },
        {
          "@type": "Question",
          name: "How do you manage data privacy and accuracy in AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through role based access, least privilege permissions, approved data sources, validation rules, confidence thresholds, human approval checkpoints, action logs and exception handling. Sensitive workflows are also tested against expected, edge and failure scenarios before they go live.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra start with a Proof of Concept before full implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The approach includes a controlled proof of value stage using representative data and defined acceptance criteria, so the workflow, business value, controls and technical approach can all be tested before the solution is expanded or fully deployed.",
          },
        },
        {
          "@type": "Question",
          name: "Which technologies can be used for agentic AI and workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the process, existing enterprise architecture and security requirements. Relevant platforms can include Microsoft Power Automate, Power Platform, Copilot Studio, n8n, Make, UiPath, Azure OpenAI, AWS Bedrock, ERP and CRM platforms, custom APIs and governed AI agent frameworks.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure whether an AI automation project is successful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By establishing measurable baselines before implementation, cycle time, manual effort, error rates, response times, process leakage or control failures, and tracking the same measures after deployment to see whether the automation is delivering real operational improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's agentic AI implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It generally begins with an automation opportunity assessment, followed by detailed process and control design. Contetra then defines the solution architecture, develops a proof of value, integrates and deploys the workflow, and sets up ongoing monitoring and governance to improve the solution over time.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation#breadcrumb",
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
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
