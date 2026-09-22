import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: `What is agentic AI automation?`,
    answer:
      `Agentic AI automation uses AI agents that can interpret information, use approved tools, coordinate multiple steps and take defined actions within a business workflow. Unlike a basic chatbot, an AI agent can actually participate in process execution, gathering data, analysing information, drafting outputs, routing tasks, monitoring conditions and triggering approved actions.`,
  },
  {
    question: `How is agentic AI different from RPA?`,
    answer:
      `Traditional Robotic Process Automation is best suited to predictable, rules based tasks where the steps stay fixed. Agentic AI can handle workflows involving unstructured information, reasoning, documents, exceptions and multiple systems. In many cases the strongest solution combines workflow automation, RPA and AI together, rather than replacing one technology with another.`,
  },
  {
    question: `Which business process should we automate first?`,
    answer:
      `The best starting point is usually a high volume, repetitive or high friction process where delays, manual effort, errors or control gaps can be measured. Contetra assesses each process for business value, feasibility, data readiness, integration requirements and risk before recommending whether AI, workflow automation or process redesign is the right fit.`,
  },
  {
    question: `Which business functions can be automated using agentic AI?`,
    answer:
      `Finance and accounting, sales, marketing, procurement, operations, project management and internal knowledge management can all benefit. Examples include invoice processing, reconciliations, collections, CRM updates, lead routing, vendor onboarding, management reporting, project status monitoring and policy or SOP assistance.`,
  },
  {
    question: `Can agentic AI automate finance and accounting processes?`,
    answer:
      `Yes. Workflows such as invoice processing, reconciliations, close activities, collections, cash reporting, variance analysis, audit schedules and recurring management reporting can all be automated, though material accounting entries and financial actions should retain appropriate maker checker, approval and audit evidence controls.`,
  },
  {
    question: `Can AI agents update our ERP or CRM directly?`,
    answer:
      `Yes, where appropriate integrations and permissions are in place, AI enabled workflows can interact with ERP, CRM and other business applications. That said, sensitive activities such as financial postings, payment releases or customer facing commitments should always include defined approval controls, access restrictions and audit trails.`,
  },
  {
    question: `What does human in the loop mean in AI automation?`,
    answer:
      `It means specific decisions or actions remain subject to human review or approval. For example, an AI agent might prepare a reconciliation, draft an accounting entry, or flag an exception, while an authorised employee reviews and approves the final action before it takes effect.`,
  },
  {
    question: `How do you manage data privacy and accuracy in AI automation?`,
    answer:
      `Through role based access, least privilege permissions, approved data sources, validation rules, confidence thresholds, human approval checkpoints, action logs and exception handling. Sensitive workflows are also tested against expected, edge and failure scenarios before they go live.`,
  },
  {
    question: `Does Contetra start with a Proof of Concept before full implementation?`,
    answer:
      `Yes. The approach includes a controlled proof of value stage using representative data and defined acceptance criteria, so the workflow, business value, controls and technical approach can all be tested before the solution is expanded or fully deployed.`,
  },
  {
    question: `Which technologies can be used for agentic AI and workflow automation?`,
    answer:
      `This depends on the process, existing enterprise architecture and security requirements. Relevant platforms can include Microsoft Power Automate, Power Platform, Copilot Studio, n8n, Make, UiPath, Azure OpenAI, AWS Bedrock, ERP and CRM platforms, custom APIs and governed AI agent frameworks.`,
  },
  {
    question: `How do you measure whether an AI automation project is successful?`,
    answer:
      `By establishing measurable baselines before implementation, cycle time, manual effort, error rates, response times, process leakage or control failures, and tracking the same measures after deployment to see whether the automation is delivering real operational improvement.`,
  },
  {
    question: `What is Contetra's agentic AI implementation process?`,
    answer:
      `It generally begins with an automation opportunity assessment, followed by detailed process and control design. Contetra then defines the solution architecture, develops a proof of value, integrates and deploys the workflow, and sets up ongoing monitoring and governance to improve the solution over time.`,
  },
];
