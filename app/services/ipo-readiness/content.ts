import type { IconCard, EngagementStep, FaqItem } from "@/lib/content";
import { BookOpenCheck, CalendarClock, ClipboardList, Compass, Database, FileClock, FileQuestionMark, FileSearch, FileSpreadsheet, Gauge, LayoutDashboard, LineChart, Repeat, ShieldCheck, ShieldOff, UserCog, Users, Workflow, Wrench } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "../management-reporting/components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export const ipoReadinessPage = {
  meta: {
    title: "IPO Readiness Services for Finance, Reporting & Systems | Contetra",
    description:
      "Prepare finance, reporting, controls, ERP, close and management information for IPO scrutiny with an integrated readiness assessment and execution PMO.",
  },

  hero: {
    eyebrow: "IPO Readiness",
    title: "IPO Readiness That Prepares the Finance Function for Public-Market Scrutiny",
    lead: "IPO-ready on paper - or ready to operate as a public company?",
    paragraphs: [
      "A successful listing programme requires more than completed financial statements and transaction advisers. The finance function must be able to close reliably, support restated information, explain performance, operate controls, respond to diligence and produce decision-ready reporting under tighter timelines and scrutiny.",
      "Contetra helps companies assess and strengthen the finance, accounting, reporting, systems, controls and operating capabilities required for an IPO journey. We work alongside management and appointed legal, merchant-banking, audit and other advisers to convert readiness gaps into an executable workplan. The work is framed against what the offer document and the post-listing regime will actually require: restated consolidated financial information under the SEBI ICDR Regulations, a supportable internal financial controls position, related-party and materiality policies under LODR, and a close calendar capable of meeting quarterly results timelines.",
    ],
    callout: {
      kicker: "Find the gaps while there is still time to fix them",
      subline:
        "Begin with an integrated readiness assessment across accounting, close, controls, data, systems, FP&A and finance-team capacity.",
      primaryCta: "Book an IPO Readiness Assessment",
      secondaryCta: "View the Readiness Workstreams",
    },
  },

  painPoints: [
    {
      icon: FileClock,
      title: "Historical reporting cannot be reproduced efficiently",
      body: "Entity data, schedules, policies and reconciliations are inconsistent, making restatement and comparative information difficult.",
    },
    {
      icon: UserCog,
      title: "Close depends on key individuals and manual interventions",
      body: "Timelines, ownership and review controls are not robust enough for public-company reporting expectations.",
    },
    {
      icon: FileQuestionMark,
      title: "Complex accounting positions are unresolved",
      body: "Revenue, leases, acquisitions, financial instruments, ESOPs, consolidation or related-party matters require defensible conclusions and implementation.",
    },
    {
      icon: LayoutDashboard,
      title: "Management reporting is not investor-ready",
      body: "The company can report accounting results but cannot explain drivers, segments, KPIs, cash conversion, outlook and risks consistently.",
    },
    {
      icon: ShieldOff,
      title: "Controls exist informally",
      body: "Critical processes depend on experience rather than documented ownership, evidence, segregation, approvals and monitoring.",
    },
    {
      icon: Database,
      title: "ERP and data limitations surface during diligence",
      body: "Manual reconciliations, offline reports, poor master data and inconsistent definitions increase response time and undermine confidence.",
    },
  ] as IconCard[],

  workstreams: [
    {
      icon: ClipboardList,
      title: "Readiness assessment and PMO",
      body: "Gap assessment, dependency map, critical path, workstream governance, adviser coordination, issue escalation and progress reporting.",
    },
    {
      icon: BookOpenCheck,
      title: "Technical accounting and policies",
      body: "Complex accounting assessment, policy alignment, accounting papers, implementation entries and recurring processes under the applicable framework.",
    },
    {
      icon: FileSpreadsheet,
      title: "Historical and restated financial information",
      body: "Data readiness, trial balances, reconciliations, consolidation, schedules, comparative information, notes and review-ready support files. Restated consolidated financial information is prepared and traced back to source in the form reporting accountants and diligence teams will ask for.",
    },
    {
      icon: CalendarClock,
      title: "Close and audit readiness",
      body: "Close calendar, ownership, PBC management, audit schedules, open-item governance, evidence standards and remediation of recurring audit issues.",
    },
    {
      icon: ShieldCheck,
      title: "Internal controls and governance",
      body: "Process documentation, risk and control matrices, approval design, segregation of duties, key reports, evidence retention and management review controls.",
    },
    {
      icon: LineChart,
      title: "FP&A, board and investor reporting",
      body: "Budgets, forecasts, segment reporting, KPI definitions, variance analysis, board packs, cash-flow visibility and performance narrative.",
    },
    {
      icon: Workflow,
      title: "ERP, data and reporting architecture",
      body: "System-gap assessment, master-data governance, consolidation and reporting design, access and controls, workflow improvement and automation priorities.",
    },
    {
      icon: Users,
      title: "Finance organisation and operating model",
      body: "Roles, capability gaps, hiring and outsourcing plan, policies, calendars, review forums and sustainable post-listing operating routines.",
    },
  ] as IconCard[],

  readinessOutputs: [
    "A clear current-state assessment against the company's intended IPO timeline and reporting requirements.",
    "A prioritised gap register across accounting, reporting, audit, controls, systems, data, FP&A and organisation.",
    "A critical-path plan that separates immediate blockers from parallel capability-building work.",
    "Named workstream owners, dependencies, decision points and adviser interfaces.",
    "A view of internal capacity versus specialist support, hiring, technology and outsourcing needs.",
    "A governance cadence for management and the board to track readiness objectively.",
  ],

  readinessQuestions: [
    "Can the business close accurately and explain material movements within the required reporting timetable?",
    "Are accounting policies consistently applied across entities and periods?",
    "Can historical information, adjustments and disclosures be traced to reviewable support?",
    "Are segment, product, customer and geographic performance definitions consistent across finance and operations?",
    "Can management produce a credible forecast and explain variances against plan?",
    "Are key controls documented, operated, evidenced and monitored?",
    "Does the ERP produce the information required, or are critical outputs dependent on uncontrolled spreadsheets?",
    "Does the finance team have sufficient depth, review capability and continuity for the programme and post-listing environment?",
  ],

  adviserFit: {
    paragraph1:
      "Contetra focuses on finance-function readiness and execution. We can support management in preparing accounting positions, financial information, schedules, processes, controls, reporting, system improvements and programme governance.",
    paragraph2:
      "We coordinate with the company's appointed statutory auditors, merchant bankers, legal counsel, tax advisers, registrars, valuers and other specialists. The respective regulated professionals retain responsibility for opinions, attestations, filings and regulated advice within their scope.",
  },

  phasedProgramme: [
    {
      icon: FileSearch,
      title: "Phase 1 - Assess",
      body: "Understand the proposed timeline, transaction perimeter, reporting framework, historical readiness, open issues and adviser requirements.",
    },
    {
      icon: Compass,
      title: "Phase 2 - Prioritise",
      body: "Define blockers, critical path, parallel workstreams, owners, specialist support and governance.",
    },
    {
      icon: Wrench,
      title: "Phase 3 - Remediate",
      body: "Complete accounting, reporting, close, control, data, system and capability interventions.",
    },
    {
      icon: Repeat,
      title: "Phase 4 - Rehearse",
      body: "Run mock closes, reporting cycles, diligence requests, management reviews and evidence checks.",
    },
    {
      icon: Users,
      title: "Phase 5 - Support execution",
      body: "Coordinate workstream completion, adviser requests, issue resolution and management reporting through the active transaction period.",
    },
    {
      icon: Gauge,
      title: "Phase 6 - Sustain",
      body: "Transition from transaction-mode workarounds to a repeatable public-company finance operating model.",
    },
  ] as EngagementStep[],

  faqs: [
    {
      question: "When should IPO readiness work begin?",
      answer:
        "Readiness should begin early enough to remediate historical reporting, accounting, controls, systems and team-capacity issues before transaction deadlines compress. The appropriate lead time depends on the company's complexity and current maturity.",
    },
    {
      question: "Is IPO readiness only for companies that have formally appointed advisers?",
      answer:
        "No. A pre-adviser assessment can help management understand the finance and reporting effort, critical gaps and likely resource requirements before committing to a timetable.",
    },
    {
      question: "Does Contetra act as a merchant banker or legal adviser?",
      answer:
        "No. Contetra's role is finance, accounting, reporting, systems, controls and execution support. Merchant bankers, legal counsel, statutory auditors and other regulated advisers retain their respective responsibilities.",
    },
    {
      question: "Can you support restated or comparative financial information?",
      answer:
        "Yes, subject to scope. Support can include data collation, accounting adjustments, reconciliations, consolidation, schedules, notes, audit support and workstream coordination.",
    },
    {
      question: "Can ERP and automation work be included?",
      answer:
        "Yes. Where system, data or workflow gaps create readiness risk, Contetra can help define and implement targeted ERP, reporting or automation improvements without turning the programme into an unnecessary full-system replacement.",
    },
  ] as FaqItem[],

  closingCta: {
    heading: "Prepare the finance function - not only the transaction file",
    body: "Use an integrated assessment to identify the reporting, control, system and capability gaps that could affect the timetable or confidence in the IPO programme.",
    primaryCta: "Book an IPO Readiness Assessment",
    secondaryCta: "Discuss a Specific Workstream",
     form: createElement(FpaForm, {
      trigger: createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
          ),
        },
        "Book a CFO & FP&A Diagnostic",
      ),
    }),
  },
};
