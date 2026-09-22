import { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Enterprise AI Agent Development Services | Contetra`,
  description: `Enterprise AI agent development for governed business workflows, agents designed as controlled digital roles, not general-purpose chat interfaces.`,
   alternates: {
    canonical: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
  },
  openGraph: {
    title: `AI Agents Built as Controlled Digital Roles | Contetra`,
    description: `Enterprise AI agent development for governed business workflows, controlled digital roles with access limits, audit trails and human oversight.`,
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#service",
      name: "Agentic AI and AI Agent Development",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
      description:
        "Enterprise AI agent development services covering agent use-case and role design, governed knowledge and reasoning, ERP and CRM integration, APIs, workflow integration, evaluation, human review, monitoring and change governance.",
      serviceType: "Enterprise AI Agent Development Services",
      category: "Agentic AI and Business Process Automation",
      provider: {
        "@id": "https://contetra.com/#organization",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Business owners, CFOs, finance teams, operations teams and organisations seeking governed AI agents for enterprise business workflows",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#breadcrumb",
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
          name: "Agentic AI and AI Agent Development",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
      name: "Enterprise AI Agent Development for Governed Business Workflows",
      description:
        "Enterprise AI agent development for governed business workflows covering role design, approved knowledge sources, reasoning, system integration, human review, monitoring and control.",
      about: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#service",
      },
      breadcrumb: {
        "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI agent is a software-based digital role designed to perform defined business tasks using approved information, tools and workflows. Depending on the use case, an AI agent can gather information, interpret documents, apply rules, analyse data, prepare outputs, route tasks, monitor conditions and trigger approved actions.",
          },
        },
        {
          "@type": "Question",
          name: "How is an AI agent different from a chatbot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A chatbot primarily responds to user questions or prompts. An enterprise AI agent can go further by interacting with approved systems, following defined workflows, using business data, completing multiple steps and taking controlled actions. It should also operate within permissions, escalation rules and governance controls.",
          },
        },
        {
          "@type": "Question",
          name: "What business processes can AI agents support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agents can support workflows that involve information gathering, document interpretation, analysis, reconciliation, monitoring, routing, drafting and coordination across business systems. Suitable use cases depend on the process, available data, required decisions, exceptions and level of human oversight.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents integrate with our ERP and CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI agents can be designed to interact with approved ERP, CRM, databases, email, documents, workflow platforms and other enterprise systems through APIs or suitable integrations. Access permissions and the actions the agent is allowed to perform should be clearly defined before deployment.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide what an AI agent should be allowed to do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent's role should be defined before development begins. This includes its objectives, permissions, available tools, required inputs and outputs, decisions it may make, actions it may take, boundaries and circumstances in which it must escalate to a human.",
          },
        },
        {
          "@type": "Question",
          name: "How do AI agents use company knowledge and documents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An enterprise AI agent can use approved information sources such as policies, SOPs, documents, databases and other authorised business knowledge. The knowledge and reasoning layer should define retrieval methods, prompts, rules, context, validations and confidence thresholds so that the agent relies on governed information.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when an AI agent is not confident about a decision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The workflow can be designed with confidence thresholds and escalation rules. If the agent does not have sufficient information or confidence to complete an activity safely, the task can be routed to an authorised employee for review instead of allowing the agent to proceed automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI agent development require human review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Human review can be built into any workflow where judgement, approval or risk requires it. An AI agent may gather information, analyse data or prepare a recommended action, while designated employees retain approval authority for sensitive or material decisions.",
          },
        },
        {
          "@type": "Question",
          name: "How are AI agent actions monitored and controlled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Governed AI agents can include action logs, defined permissions, test cases, human-review checkpoints, monitoring, incident handling and periodic control reviews. These controls help organisations understand what the agent did, why a task was escalated and whether changes to the workflow are required.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Proof of Value for an AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Proof of Value is a constrained implementation used to test whether an AI-agent use case can deliver the intended business outcome under defined controls. It allows the workflow, data, integrations, exceptions and agent behaviour to be evaluated before wider deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents perform actions across multiple business systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on permissions and integrations, an AI agent can coordinate activities across APIs, ERP systems, CRM platforms, email, documents, databases, workflow tools and user interfaces. The architecture should restrict the agent to approved tools and actions.",
          },
        },
        {
          "@type": "Question",
          name: "How does Contetra approach AI agent development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra starts by defining the business role and measurable outcome for the agent. The workflow, data, controls and exceptions are then mapped, followed by development and evaluation of a constrained proof of value. Once validated, the agent can be deployed, monitored and improved under defined change-governance controls.",
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
