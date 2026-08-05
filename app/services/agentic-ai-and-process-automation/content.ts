import { Button, buttonVariants } from "@/components/ui/button";
import type { IconCard, EngagementStep, PlatformItem, FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Activity, Banknote, BookOpenCheck, Bot, Braces, ClipboardList, Cloud, Cpu, Database, FileClock, FlaskConical, FolderOpen, Gauge, GitBranch, Handshake, KeyRound, Layers, LifeBuoy, ListFilter, Map, Megaphone, PenTool, Plug, RefreshCcw, Search, Truck, UserCheck, Workflow } from "lucide-react";
import { createElement } from "react";
import { ErpForm } from "../digital-transformation/components/erp-form";

export const agenticAiService = {
  hero: {
    eyebrow: "Agentic AI Automation",
    title:
      "Agentic AI and Workflow Automation Designed Around Real Business Processes",
    paragraphs: [
      "Automation creates value when it removes friction from an end-to-end process - not when it adds another isolated bot, dashboard or tool for employees to manage.",
      "Contetra helps organisations identify, design and implement AI-enabled workflows across finance, reporting, sales, operations, marketing and project management. We combine process understanding, control design, systems integration and agentic AI to automate work that currently moves between people, spreadsheets, email, ERP, CRM and other business applications.",
      "Our approach keeps human judgement where it matters. AI agents can gather information, analyse, draft, route, reconcile, monitor and trigger actions, while defined approvals, access controls, validations, audit trails and exception paths protect the business process. Where an agent touches the books, the control questions are the same as they would be for a person: who prepares, who approves, whether those can be the same, and what evidence an auditor will accept for an entry a machine has drafted.",
    ],
    callout: {
      kicker: "Start with a high-friction process and a measurable outcome",
      subline:
        "Map the current workflow, quantify the effort and risk, and identify the most defensible automation design.",
      primaryCta: "Book an Automation Opportunity Assessment",
      secondaryCta: "Explore Finance Automation",
    },
  },

  whatCanChange: [
    {
      icon: Workflow,
      title: "From task automation to process execution",
      body: "Instead of automating a single click, agents can coordinate multiple steps, systems, documents and decisions within a governed workflow.",
    },
    {
      icon: ListFilter,
      title: "From manual follow-up to exception management",
      body: "Routine checks, reminders, status updates and data gathering can run automatically, allowing teams to focus on exceptions and judgement.",
    },
    {
      icon: Activity,
      title: "From static reporting to continuous monitoring",
      body: "Agents can collect data, test conditions, investigate variances, draft commentary and escalate issues based on defined rules.",
    },
    {
      icon: BookOpenCheck,
      title: "From fragmented knowledge to guided action",
      body: "Policies, SOPs, contracts and historical decisions can be made searchable and usable within workflows, subject to permissions and source controls.",
    },
  ] as IconCard[],

  functionsWeAutomate: [
    {
      icon: Banknote,
      title: "Finance and accounting",
      body: "Invoice processing, reconciliations, close tasks, collections, cash reporting, variance analysis, audit schedules, approvals and recurring management reporting.",
    },
    {
      icon: Handshake,
      title: "Sales and customer workflows",
      body: "Lead enrichment, qualification, routing, follow-up, meeting summaries, CRM updates, proposal preparation and pipeline reporting.",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      body: "Campaign workflows, content operations, reporting, lead hand-offs, research, data enrichment and recurring performance summaries.",
    },
    {
      icon: Truck,
      title: "Operations and procurement",
      body: "Vendor onboarding, purchase workflows, document checks, inventory alerts, service requests, exceptions, compliance tasks and operating reports.",
    },
    {
      icon: ClipboardList,
      title: "Projects and task management",
      body: "Status collection, dependency monitoring, risk and issue updates, meeting actions, resource reporting, reminders and PMO packs.",
    },
    {
      icon: LifeBuoy,
      title: "Knowledge and support",
      body: "Enterprise search, policy assistants, SOP guidance, ticket triage, response drafting and escalation using approved internal sources.",
    },
  ] as IconCard[],

  designPrinciples: [
    {
      icon: Map,
      title: "Process before platform",
      body: "Map the current process, exceptions, controls, owners and expected outcome before selecting tools or building agents.",
    },
    {
      icon: UserCheck,
      title: "Human-in-the-loop by design",
      body: "Define where humans approve, review or override, rather than adding oversight after the workflow has been built. In finance workflows this means maker-checker survives automation. An agent may prepare, match and route, but posting, payment release and customer-facing commitments stay with a named approver.",
    },
    {
      icon: KeyRound,
      title: "Secure access and least privilege",
      body: "Agents should only access the systems, data and actions required for their role, with credentials and permissions governed appropriately.",
    },
    {
      icon: FileClock,
      title: "Traceable inputs and actions",
      body: "Retain sources, prompts, validations, versions, decisions and action logs where business risk requires reviewability.",
    },
    {
      icon: GitBranch,
      title: "Exception-first operating model",
      body: "Design queues, thresholds, escalation and fallback paths so teams know exactly what happens when confidence or data quality is insufficient.",
    },
    {
      icon: Gauge,
      title: "Measurable value",
      body: "Baseline cycle time, manual effort, error rate, leakage, response time or control failure before implementation and track the change after deployment.",
    },
  ] as IconCard[],

  implementationSteps: [
    {
      icon: Search,
      title: "Opportunity assessment",
      body: "Identify high-volume, high-friction or high-risk workflows and score them for feasibility, value, control requirements and data readiness.",
    },
    {
      icon: PenTool,
      title: "Process and control design",
      body: "Map steps, roles, systems, inputs, outputs, business rules, exceptions, approvals and audit requirements.",
    },
    {
      icon: Layers,
      title: "Solution architecture",
      body: "Select the right combination of workflow tools, APIs, RPA, AI models, knowledge retrieval, agent orchestration and human interfaces.",
    },
    {
      icon: FlaskConical,
      title: "Proof of value",
      body: "Build a controlled pilot using representative data and clear acceptance criteria before expanding scope.",
    },
    {
      icon: Plug,
      title: "Integration and deployment",
      body: "Connect systems, configure monitoring, complete security and user testing, document the workflow and train owners.",
    },
    {
      icon: RefreshCcw,
      title: "Govern and improve",
      body: "Track outcomes, incidents, model or rule changes, user feedback, exceptions and new automation opportunities.",
    },
  ] as EngagementStep[],

  technologyIntro:
    "Technology choices should follow the use case, enterprise architecture and security requirements. Relevant environments may include:",

  technologyEnvironment: [
    { icon: Bot, label: "Microsoft Power Automate, Power Platform and Copilot Studio" },
    { icon: Workflow, label: "n8n, Make and other workflow orchestration platforms" },
    { icon: Cpu, label: "UiPath and other RPA or document-processing tools" },
    { icon: Cloud, label: "Azure OpenAI, AWS Bedrock and approved enterprise AI services" },
    {
      icon: Database,
      label:
        "ERP and CRM systems including SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext, Salesforce, HubSpot and Zoho",
    },
    {
      icon: FolderOpen,
      label: "Databases, document repositories, email, collaboration, project and reporting tools",
    },
    {
      icon: Braces,
      label: "Custom APIs, retrieval-augmented generation and governed agent frameworks where appropriate",
    },
  ] as PlatformItem[],

  governanceControls: [
    "Human approval checkpoints for material actions.",
    "Role-based access and separation of duties.",
    "Source citation or evidence links where information is generated from documents.",
    "Validation rules, thresholds and confidence-based escalation.",
    "Action logs and traceability for sensitive workflows.",
    "Testing against expected, edge and failure scenarios.",
    "Monitoring for workflow errors, model drift, data changes and unusual activity.",
    "Defined ownership for incidents, changes and periodic review.",
  ],

  faqs: [
    {
      question: "What is agentic AI automation?",
      answer:
        "Agentic AI automation uses AI agents that can interpret information, use approved tools, coordinate multiple steps and take defined actions within a workflow. It differs from a simple chatbot because it is designed to execute parts of a business process under controls.",
    },
    {
      question: "How is this different from RPA?",
      answer:
        "RPA is effective for deterministic, rules-based interaction with systems. Agentic AI can handle less structured inputs, reasoning, drafting and dynamic workflow decisions. Many enterprise solutions combine RPA, workflow orchestration, APIs and AI rather than choosing only one approach.",
    },
    {
      question: "Which process should we automate first?",
      answer:
        "Start with a process that is frequent, measurable, sufficiently standardised and constrained by manual effort or delays. Avoid beginning with the most politically or technically complex enterprise process merely because it appears strategically important.",
    },
    {
      question: "Can AI agents update our ERP or CRM?",
      answer:
        "They can where secure integration, permissions, validation and approval controls are designed appropriately. Material postings or customer-facing actions may require human approval depending on risk.",
    },
    {
      question: "How do you manage data privacy and accuracy?",
      answer:
        "The architecture should define approved data sources, access restrictions, deployment environment, retention, validation, monitoring and escalation. The exact controls depend on the data sensitivity and actions the agent is authorised to perform.",
    },
  ] as FaqItem[],

  closingCta: {
    heading: "Turn recurring work into a governed, measurable workflow",
    body: "Bring one process that consumes time, creates delays or depends too heavily on individual follow-up. We will help determine whether AI, workflow automation or process redesign is the right answer.",
    primaryCta: "Book an Automation Opportunity Assessment",
    secondaryCta: "Explore Use Cases",
     form: createElement(ErpForm, {
      trigger: createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
          ),
        },
        "Book an Automation Opportunity Assessment",
      ),
    }),
  },
};
