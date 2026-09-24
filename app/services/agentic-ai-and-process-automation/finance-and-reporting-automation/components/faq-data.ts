import type { FaqItem } from "@/lib/content";

export const faqItems: FaqItem[] = [
  {
    question: "What is finance and reporting automation?",
    answer: "Finance and reporting automation uses workflow tools, integrations and AI to reduce repetitive manual work across accounting, close, reconciliations, reporting and compliance processes, with the aim of improving speed and consistency while preserving accounting logic, review controls and an audit trail.",
  },
  {
    question: "Which finance processes can be automated?",
    answer: "Account reconciliations, bank and intercompany matching, invoice processing, approval workflows, receivables follow up, collections, MIS preparation, variance identification, reporting distribution, audit schedules and recurring compliance reconciliations.",
  },
  {
    question: "Can month end close activities be automated?",
    answer: "Yes. This includes task orchestration, data collection, reconciliations, evidence gathering, exception tracking and status monitoring, while higher risk accounting judgements and approvals remain with authorised finance team members.",
  },
  {
    question: "Can finance automation handle bank and intercompany reconciliations?",
    answer: "Yes. Automation can match transactions, apply defined reconciliation rules, identify unmatched items and route exceptions for investigation, reducing manual matching while preserving supporting evidence and reviewability.",
  },
  {
    question: "Can accounts payable processes be automated?",
    answer: "Yes. This can include invoice capture, data validation, matching, approval routing and exception handling, with sensitive activities such as payment approval retaining appropriate maker checker and access controls.",
  },
  {
    question: "Can accounts receivable and collections be automated?",
    answer: "Yes. Automation can support customer follow ups, ageing based reminders, collections workflows, dispute routing and status tracking, freeing finance teams to focus more attention on high value or complex collection issues.",
  },
  {
    question: "How can MIS and management reporting be automated?",
    answer: "By collecting data from relevant systems, standardising reporting inputs, preparing recurring reports, identifying variances, drafting commentary, distributing reports and tracking follow up actions, with the reporting logic and review process defined before automation goes in.",
  },
  {
    question: "Can variance analysis and commentary be automated?",
    answer: "Yes, automated workflows can identify material variances and generate draft commentary from available financial and operational data. Management judgement still matters, though, to determine whether a variance is temporary, structural, or needs business action.",
  },
  {
    question: "Can finance automation support GST and tax reconciliations in India?",
    answer: "Yes. Relevant workflows can include GSTR 2B to purchase register matching, input tax credit follow up, 26AS and AIS reconciliation, and TDS or TCS exception tracking, configured around the company's specific data sources, rules and review requirements.",
  },
  {
    question: "How do you maintain controls when automating finance processes?",
    answer: "Through role based access, maker checker approvals, validation rules, exception thresholds, supporting evidence, audit logs and human review checkpoints. High risk activities should never be automated without clearly defined ownership and approval requirements.",
  },
  {
    question: "How do you decide which finance process to automate first?",
    answer: "Usually starting with a recurring process that carries high manual effort, delays, error risk or repetitive reconciliation work. Contetra assesses effort, cycle time, control risk, process stability and exception volumes before deciding what to automate first.",
  },
  {
    question: "What is Contetra's finance automation implementation process?",
    answer: "It starts by baselining effort, risk, cycle time and error points. The workflow, rules and ownership are then standardised, followed by automation of high confidence activities and design of exception handling. Finally, accounting outputs, controls and the audit trail are validated before wider rollout.",
  },
  {
    question: "Does finance automation replace the need for a finance team?",
    answer: "No. It is designed to remove repetitive, low judgement work so the finance team can focus on analysis, exceptions and decisions that genuinely require human input, rather than replacing the roles that need accounting judgement, oversight and accountability.",
  },
];
