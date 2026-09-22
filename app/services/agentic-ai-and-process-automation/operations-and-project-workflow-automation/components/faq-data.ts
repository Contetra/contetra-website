import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: `What is operations and project workflow automation?`,
    answer:
      `Operations and project workflow automation uses workflow technology, system integrations and AI assistance to coordinate recurring activities, approvals, status updates, reminders and exceptions. It replaces fragmented follow ups across emails, spreadsheets and chat messages with a single, visible and governed process.`,
  },
  {
    question: `Which operational processes can be automated?`,
    answer:
      `Vendor onboarding, document validation, purchase requests, approval workflows, service requests, compliance checks, inventory or production alerts, document routing, SLA monitoring and recurring operating reports.`,
  },
  {
    question: `Does workflow automation remove human ownership?`,
    answer:
      `No, and this is a common misconception. Effective automation actually makes ownership clearer, not less relevant. Tasks are automatically assigned, tracked and escalated, while employees remain responsible for the decisions, approvals, exceptions and judgement calls that automation is not designed to make.`,
  },
  {
    question: `Can procurement and vendor management workflows be automated?`,
    answer:
      `Yes. This can include vendor onboarding, document collection and validation, approval routing, purchase requests, renewals, compliance checks and exception management, with defined approval authorities staying with the appropriate employees throughout.`,
  },
  {
    question: `Can project and PMO reporting be automated?`,
    answer:
      `Yes. This includes collecting status updates, monitoring milestones and dependencies, tracking risks and issues, capturing meeting actions, sending reminders and preparing recurring PMO or steering committee reports, without someone having to chase updates manually.`,
  },
  {
    question: `Can workflow automation track project delays and dependencies before they become a problem?`,
    answer:
      `Yes. Automated workflows can monitor due dates, dependencies and milestones, flagging activities that are delayed or at risk early, then routing the relevant issue to the appropriate project owner or management team through defined escalation rules.`,
  },
  {
    question: `Can SLA monitoring and escalation be automated?`,
    answer:
      `Yes. Workflows can track service requests against defined SLA timelines, identify overdue activities, and automatically trigger reminders or escalations based on agreed business rules, rather than relying on someone remembering to follow up.`,
  },
  {
    question: `Can approval workflows be automated end to end?`,
    answer:
      `Yes. Purchase requests, operational activities, project decisions and similar tasks can be routed automatically to the right approver based on predefined rules, with the workflow retaining assignment history, due dates, supporting evidence and a full approval trail.`,
  },
  {
    question: `Can operations automation integrate with our existing systems, or do we need to replace them?`,
    answer:
      `It integrates with what you already have. Depending on system capabilities, workflows can connect to existing ERP, project management, procurement, document and communication platforms, with the integration approach shaped by available APIs, data sources and permissions rather than requiring a system overhaul.`,
  },
  {
    question: `How does workflow automation actually improve management visibility?`,
    answer:
      `By giving clear, real time visibility into task status, ageing, overdue activities, exceptions, approvals, project milestones and unresolved risks. This means management catches delays early, rather than finding out only after a milestone or commitment has already been missed.`,
  },
  {
    question: `Which operational workflow should we automate first?`,
    answer:
      `Usually a recurring process that relies heavily on manual follow up, involves multiple hand offs, suffers from delays, or lacks clear visibility. The existing process should be mapped first, so unnecessary steps and unclear ownership get resolved before automation is layered on top, not after.`,
  },
  {
    question: `What is Contetra's approach to operations and project workflow automation?`,
    answer:
      `Contetra first maps activities, roles, systems, delays and exceptions. The future state workflow is then simplified and standardised, followed by integration, automation and interface build out. After deployment, throughput, ageing, exceptions and adoption are actively monitored to identify what to improve next.`,
  },
  {
    question: `How do we know if the automation is actually working after it goes live?`,
    answer:
      `By tracking the same baseline metrics used to justify the automation in the first place, cycle time, manual effort, error rates, SLA adherence and exception volumes. If these measures do not improve within a reasonable period, that is a signal to revisit the workflow design rather than assume the technology alone will fix it.`,
  },
];
