import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: "What is an AI agent?",
    answer: "An AI agent is a software based digital role designed to perform defined business tasks using approved information, tools and workflows. Depending on the use case, it can gather information, interpret documents, apply rules, analyse data, prepare outputs, route tasks, monitor conditions and trigger approved actions.",
  },
  {
    question: "How is an AI agent different from a chatbot?",
    answer: "A chatbot mainly responds to user questions or prompts. An enterprise AI agent goes further, interacting with approved systems, following defined workflows, using business data, completing multiple steps and taking controlled actions, all while operating within permissions, escalation rules and governance controls.",
  },
  {
    question: "What business processes can AI agents support?",
    answer: "Workflows involving information gathering, document interpretation, analysis, reconciliation, monitoring, routing, drafting and coordination across business systems. The right use cases depend on the process itself, available data, the decisions required, likely exceptions and the level of human oversight needed.",
  },
  {
    question: "Can AI agents integrate with our ERP and CRM?",
    answer: "Yes. Agents can be designed to interact with approved ERP, CRM, databases, email, documents, workflow platforms and other enterprise systems through APIs or suitable integrations, with access permissions and allowed actions clearly defined before deployment.",
  },
  {
    question: "How do you decide what an AI agent should be allowed to do?",
    answer: "The agent's role is defined before development begins, covering its objectives, permissions, available tools, required inputs and outputs, decisions it may make, actions it may take, clear boundaries, and the circumstances in which it must escalate to a human.",
  },
  {
    question: "How do AI agents use company knowledge and documents?",
    answer: "Through approved information sources such as policies, SOPs, documents, databases and other authorised business knowledge. The knowledge and reasoning layer defines retrieval methods, prompts, rules, context, validations and confidence thresholds, so the agent relies only on governed information rather than guessing.",
  },
  {
    question: "What happens when an AI agent is not confident about a decision?",
    answer: "The workflow is designed with confidence thresholds and escalation rules built in. If the agent does not have sufficient information or confidence to complete an activity safely, the task is routed to an authorised employee for review and approval, rather than the agent proceeding on its own.",
  },
  {
    question: "How is data privacy and security handled in AI agent development?",
    answer: "Through role based access, least privilege permissions, approved data sources, encryption, action logs, audit trails and clearly scoped system access. Sensitive actions such as financial postings, data deletion or customer facing commitments are typically restricted to human approval regardless of the agent's confidence level.",
  },
  {
    question: "Does Contetra test AI agents before full deployment?",
    answer: "Yes. Development typically includes a controlled proof of value stage using representative data and defined acceptance criteria, so the agent's behaviour, accuracy, controls and integrations are validated against expected, edge and failure scenarios before wider rollout.",
  },
  {
    question: "Which technologies are used to build enterprise AI agents?",
    answer: "This depends on the use case, existing enterprise architecture and security requirements. Relevant platforms can include Azure OpenAI, AWS Bedrock, Copilot Studio, custom agent frameworks, ERP and CRM APIs, and governed orchestration tools that manage how the agent accesses systems and data.",
  },
  {
    question: "Can one AI agent handle multiple tasks, or do we need a separate agent for each process?",
    answer: "This depends on how related the tasks are. A single agent can often handle multiple steps within one workflow, while distinct processes with different data, systems or approval requirements are usually better served by separate, purpose built agents working together rather than one agent trying to cover everything.",
  },
  {
    question: "Who maintains and updates the AI agent after it goes live?",
    answer: "Contetra can continue to monitor, maintain and improve the agent after deployment, tracking its accuracy, handling changes in business rules or systems, and refining its permissions and workflows over time, rather than treating go live as the end of the engagement.",
  },
];
