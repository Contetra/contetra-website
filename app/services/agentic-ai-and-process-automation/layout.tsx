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
      name: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation#service",
      name: "Agentic AI and Process Automation",
      url: "https://contetra.com/services/agentic-ai-and-process-automation",
      description:
        "Agentic AI and process automation consulting and implementation services covering workflow assessment, process and control design, AI agent development, system integration, finance automation, sales and marketing workflows, operations automation, governance and continuous improvement.",
      serviceType: "Agentic AI and Process Automation Consulting",
      category: "AI Automation and Digital Transformation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, CFOs, finance teams, sales teams, operations teams, marketing teams and organisations seeking AI-enabled workflow automation",
      },
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
          name: "Services",
          item: "https://contetra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Agentic AI and Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation",
      name: "Agentic AI and Process Automation Consulting",
      description:
        "Agentic AI and workflow automation services designed around real business processes, combining process design, AI agents, systems integration, human approvals, controls and measurable business outcomes.",
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
            text: "Agentic AI automation uses AI agents that can interpret information, use approved tools, coordinate multiple steps and take defined actions within a business workflow. Unlike a basic chatbot, an AI agent can participate in process execution by gathering data, analysing information, drafting outputs, routing tasks, monitoring conditions and triggering approved actions.",
          },
        },
        {
          "@type": "Question",
          name: "How is agentic AI different from RPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional Robotic Process Automation (RPA) is best suited to predictable, rules-based tasks where the steps remain relatively fixed. Agentic AI can handle workflows that involve unstructured information, reasoning, documents, exceptions and multiple systems. In many cases, the strongest solution combines workflow automation, RPA and AI rather than replacing one technology with another.",
          },
        },
        {
          "@type": "Question",
          name: "Which business process should we automate first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best starting point is usually a high-volume, repetitive or high-friction process where delays, manual effort, errors or control gaps can be measured. Contetra assesses the process for business value, feasibility, data readiness, integration requirements and risk before recommending whether AI, workflow automation or process redesign is appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents update our ERP or CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI-enabled workflows can interact with ERP, CRM and other business applications where appropriate integrations and permissions are available. However, sensitive activities such as financial postings, payment releases or customer-facing commitments should include defined approval controls, access restrictions and audit trails.",
          },
        },
        {
          "@type": "Question",
          name: "How do you manage data privacy and accuracy in AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data privacy and accuracy are addressed through role-based access, least-privilege permissions, approved data sources, validation rules, confidence thresholds, human approval checkpoints, action logs and exception handling. Sensitive workflows should also be tested against expected, edge and failure scenarios before deployment.",
          },
        },
        {
          "@type": "Question",
          name: "What business functions can be automated using agentic AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agentic AI can support workflows across finance and accounting, sales, marketing, procurement, operations, project management and internal knowledge management. Examples include invoice processing, reconciliations, collections, CRM updates, lead routing, vendor onboarding, management reporting, project-status monitoring and policy or SOP assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Can agentic AI automate finance and accounting processes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Finance workflows such as invoice processing, reconciliations, close activities, collections, cash reporting, variance analysis, audit schedules and recurring management reporting can be automated. However, material accounting entries and financial actions should retain appropriate maker-checker, approval and audit-evidence controls.",
          },
        },
        {
          "@type": "Question",
          name: "What does human-in-the-loop mean in AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Human-in-the-loop means that specific decisions or actions remain subject to human review or approval. For example, an AI agent may prepare a reconciliation, draft an accounting entry or identify an exception, while an authorised employee reviews and approves the final action.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra start with a Proof of Concept before full implementation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Contetra's implementation approach includes a controlled proof-of-value stage using representative data and defined acceptance criteria. This allows the workflow, business value, controls and technical approach to be tested before the solution is expanded or fully deployed.",
          },
        },
        {
          "@type": "Question",
          name: "Which technologies can be used for agentic AI and workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The technology depends on the process, existing enterprise architecture and security requirements. Relevant platforms may include Microsoft Power Automate, Power Platform, Copilot Studio, n8n, Make, UiPath, Azure OpenAI, AWS Bedrock, ERP and CRM platforms, custom APIs and governed AI-agent frameworks.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure whether an AI automation project is successful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before implementation, measurable baselines should be established for areas such as cycle time, manual effort, error rates, response times, process leakage or control failures. The same measures can then be tracked after deployment to determine whether the automation is producing meaningful operational improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What is Contetra's agentic AI implementation process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The process generally begins with an automation opportunity assessment, followed by detailed process and control design. Contetra then defines the solution architecture, develops a proof of value, integrates and deploys the workflow, and establishes ongoing monitoring and governance to improve the solution over time.",
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
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
