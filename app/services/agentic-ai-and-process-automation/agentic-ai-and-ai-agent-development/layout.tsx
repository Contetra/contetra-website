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
      name: "Contetra Private Limited",
      alternateName: "Contetra",
      url: "https://contetra.com/",
    },
    {
      "@type": "Service",
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#service",
      name: "Enterprise AI Agent Development",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
      description: "Contetra designs and develops governed enterprise AI agents around specific business roles and workflows, covering permissions, approved knowledge sources, ERP and CRM integrations, confidence thresholds, human escalation, proof-of-value testing, monitoring and ongoing governance.",
      serviceType: [
        "Enterprise AI Agent Development",
        "Agentic AI Development",
        "AI Agent Role Design",
        "AI Workflow Design",
        "Knowledge and Retrieval Design",
        "ERP and CRM AI Integration",
        "AI Agent Proof of Value",
        "Human-in-the-Loop AI",
        "AI Agent Evaluation",
        "AI Governance and Controls",
        "AI Agent Monitoring and Maintenance",
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
          audienceType: "Operations Leaders",
        },
        {
          "@type": "Audience",
          audienceType: "Digital Transformation Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Enterprise Technology Teams",
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
      "@id": "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development#webpage",
      url: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
      name: "Enterprise AI Agent Development Services | Contetra",
      description: "Enterprise AI agent development services covering role design, approved knowledge sources, ERP and CRM integrations, confidence handling, human escalation, proof-of-value testing and ongoing governance.",
      inLanguage: "en-IN",
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
            text: "An AI agent is a software based digital role designed to perform defined business tasks using approved information, tools and workflows. Depending on the use case, it can gather information, interpret documents, apply rules, analyse data, prepare outputs, route tasks, monitor conditions and trigger approved actions.",
          },
        },
        {
          "@type": "Question",
          name: "How is an AI agent different from a chatbot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A chatbot mainly responds to user questions or prompts. An enterprise AI agent goes further, interacting with approved systems, following defined workflows, using business data, completing multiple steps and taking controlled actions, all while operating within permissions, escalation rules and governance controls.",
          },
        },
        {
          "@type": "Question",
          name: "What business processes can AI agents support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Workflows involving information gathering, document interpretation, analysis, reconciliation, monitoring, routing, drafting and coordination across business systems. The right use cases depend on the process itself, available data, the decisions required, likely exceptions and the level of human oversight needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI agents integrate with our ERP and CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Agents can be designed to interact with approved ERP, CRM, databases, email, documents, workflow platforms and other enterprise systems through APIs or suitable integrations, with access permissions and allowed actions clearly defined before deployment.",
          },
        },
        {
          "@type": "Question",
          name: "How do you decide what an AI agent should be allowed to do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The agent's role is defined before development begins, covering its objectives, permissions, available tools, required inputs and outputs, decisions it may make, actions it may take, clear boundaries, and the circumstances in which it must escalate to a human.",
          },
        },
        {
          "@type": "Question",
          name: "How do AI agents use company knowledge and documents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through approved information sources such as policies, SOPs, documents, databases and other authorised business knowledge. The knowledge and reasoning layer defines retrieval methods, prompts, rules, context, validations and confidence thresholds, so the agent relies only on governed information rather than guessing.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when an AI agent is not confident about a decision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The workflow is designed with confidence thresholds and escalation rules built in. If the agent does not have sufficient information or confidence to complete an activity safely, the task is routed to an authorised employee for review and approval, rather than the agent proceeding on its own.",
          },
        },
        {
          "@type": "Question",
          name: "How is data privacy and security handled in AI agent development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through role based access, least privilege permissions, approved data sources, encryption, action logs, audit trails and clearly scoped system access. Sensitive actions such as financial postings, data deletion or customer facing commitments are typically restricted to human approval regardless of the agent's confidence level.",
          },
        },
        {
          "@type": "Question",
          name: "Does Contetra test AI agents before full deployment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Development typically includes a controlled proof of value stage using representative data and defined acceptance criteria, so the agent's behaviour, accuracy, controls and integrations are validated against expected, edge and failure scenarios before wider rollout.",
          },
        },
        {
          "@type": "Question",
          name: "Which technologies are used to build enterprise AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the use case, existing enterprise architecture and security requirements. Relevant platforms can include Azure OpenAI, AWS Bedrock, Copilot Studio, custom agent frameworks, ERP and CRM APIs, and governed orchestration tools that manage how the agent accesses systems and data.",
          },
        },
        {
          "@type": "Question",
          name: "Can one AI agent handle multiple tasks, or do we need a separate agent for each process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on how related the tasks are. A single agent can often handle multiple steps within one workflow, while distinct processes with different data, systems or approval requirements are usually better served by separate, purpose built agents working together rather than one agent trying to cover everything.",
          },
        },
        {
          "@type": "Question",
          name: "Who maintains and updates the AI agent after it goes live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contetra can continue to monitor, maintain and improve the agent after deployment, tracking its accuracy, handling changes in business rules or systems, and refining its permissions and workflows over time, rather than treating go live as the end of the engagement.",
          },
        },
      ],
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
          name: "Agentic AI & Process Automation",
          item: "https://contetra.com/services/agentic-ai-and-process-automation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Agent Development",
          item: "https://contetra.com/services/agentic-ai-and-process-automation/agentic-ai-and-ai-agent-development",
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
