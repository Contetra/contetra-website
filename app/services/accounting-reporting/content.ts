import type { IconCard, EngagementStep, FaqItem } from "@/lib/content";
import {
  ArrowLeftRight,
  ArrowRightLeft,
  Award,
  Building,
  Building2,
  ClipboardCheck,
  FileCheck,
  FileQuestionMark,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Gift,
  GitMerge,
  Lightbulb,
  ListChecks,
  Network,
  Percent,
  Puzzle,
  Receipt,
  RefreshCcw,
  ScrollText,
  Search,
  TrendingDown,
  Wrench,
} from "lucide-react";
import { createElement } from "react";
import { AccountingForm } from "./components/accounting-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const accountingReportingService = {
  hero: {
    eyebrow: "Accounting & Reporting",
    title:
      "Accounting and Reporting Consulting for Complex Standards, Transactions and Audit-Ready Financial Statements",
    paragraphs: [
      "Complex accounting becomes a business risk when important conclusions are delayed, documentation is weak or financial information cannot withstand audit, investor or transaction scrutiny.",
      "Contetra supports finance teams across technical accounting, financial statement preparation, period close, audit support, GAAP conversion, transaction accounting, financial due diligence and IPO readiness. We combine standards knowledge with practical delivery - helping teams reach defensible conclusions, prepare the underlying workings and complete reporting on time.",
      "Our specialists can work as an extension of the finance function, support a specific accounting issue or coordinate a broader accounting and reporting transformation under Ind AS, IFRS, US GAAP and other relevant reporting frameworks. For Indian reporting entities this extends to Schedule III presentation and disclosure, CARO 2020 reporting matters, related-party disclosure under Section 188, and support for the internal financial controls opinion under Section 143(3)(i).",
    ],
    callout: {
      kicker:
        "Resolve the accounting issue before it becomes a reporting deadline",
      subline:
        "Share the transaction, standard, reporting requirement or audit concern. We will help define the technical and execution work required.",
      primaryCta: "Discuss an Accounting Issue",
      secondaryCta: "Explore IPO Readiness",
    },
  },

  capabilities: [
    {
      icon: ScrollText,
      title: "Technical Accounting Advisory Services",
      body: "Research and position papers for complex or judgemental matters across revenue, leases, financial instruments, business combinations, consolidation, share-based payments and other standards.",
    },
    {
      icon: FileSpreadsheet,
      title: "Financial Statement Preparation and Accounting Support",
      body: "Period-end close support, trial-balance review, reconciliations, schedules, financial statements, notes, group reporting packs and accounting-policy documentation.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit support and close acceleration",
      body: "PBC coordination, audit schedules, issue tracking, evidence preparation, technical responses, closing governance and remediation of recurring audit observations.",
    },
    {
      icon: ArrowLeftRight,
      title: " Ind AS, IFRS and US GAAP Conversion Services",
      body: "Impact assessment, accounting adjustments, opening balance sheet, policy elections, disclosures, comparative information and implementation support for Ind AS, IFRS and US GAAP conversions.",
    },
    {
      icon: Building2,
      title: "Transaction Accounting Advisory",
      body: "Accounting for acquisitions, disposals, restructurings, carve-outs, purchase price allocation, post-deal integration and complex capital or financing transactions.",
    },
    {
      icon: Search,
      title: "Financial Due Diligence and IPO Readiness",
      body: "Quality of earnings, working capital and net debt analysis, accounting red flags, public-company financial reporting readiness, controls, close, systems and finance-function preparation.",
    },
  ] as IconCard[],

  technicalAreas: [
    {
      icon: Receipt,
      title: "Revenue and customer contracts",
      body: "Ind AS 115 / IFRS 15 / ASC 606 assessments, performance obligations, variable consideration, contract modifications, principal-agent considerations and disclosures.",
    },
    {
      icon: Building,
      title: "Leases",
      body: "Ind AS 116 / IFRS 16 / ASC 842 implementation, lease populations, discount rates, calculations, modifications, reconciliations and disclosures.",
    },
    {
      icon: Percent,
      title: "Financial instruments and ECL",
      body: "Classification, measurement, impairment, expected credit losses, modifications, derecognition, fair value and related documentation.",
    },
    {
      icon: GitMerge,
      title: "Business combinations and PPA",
      body: "Acquisition accounting, identifying the acquirer, consideration, identifiable assets and liabilities, goodwill, measurement-period adjustments and purchase price allocation support.",
    },
    {
      icon: Network,
      title: "Consolidation and group reporting",
      body: "Control assessments, group structures, eliminations, non-controlling interests, foreign operations, reporting packs and consolidation adjustments.",
    },
    {
      icon: Gift,
      title: "Share-based payments and employee benefits",
      body: "ESOP and share-based payment accounting, modifications, vesting conditions, valuation coordination, gratuity and other employee-benefit reporting.",
    },
    {
      icon: TrendingDown,
      title: "Impairment and valuation-linked accounting",
      body: "Cash-generating units, impairment indicators, model review, key assumptions, disclosures and coordination with valuation specialists.",
    },
    {
      icon: ArrowRightLeft,
      title: "Foreign currency and hedge accounting",
      body: "Functional currency, translation, foreign operations, derivatives, hedge documentation, effectiveness and accounting entries.",
    },
  ] as IconCard[],

  fromConclusionToClose: {
    paragraph1:
      "A technical conclusion is only useful when it can be implemented in the books, financial statements and audit file. Our work can therefore extend beyond the accounting memorandum to calculations, journals, disclosure language, reconciliations, schedules, control steps and training.",
    paragraph2:
      "We also help establish the recurring process where the issue will continue - for example lease accounting, ECL, consolidation, revenue contract reviews or share-based payment reporting.",
  },

  engagementSteps: [
    {
      icon: FileQuestionMark,
      title: "Define the reporting question",
      body: "Understand the transaction, facts, timeline, reporting framework, materiality and intended users of the financial information.",
    },
    {
      icon: FileSearch,
      title: "Gather and validate evidence",
      body: "Review contracts, models, historical accounting, policies, data and management assumptions.",
    },
    {
      icon: Lightbulb,
      title: "Analyse and conclude",
      body: "Evaluate the relevant guidance, alternatives, judgements, sensitivities and disclosure implications.",
    },
    {
      icon: FileText,
      title: "Document the position",
      body: "Prepare a clear, reviewable memorandum or issue paper with facts, analysis, conclusion and implementation steps.",
    },
    {
      icon: ListChecks,
      title: "Implement in reporting",
      body: "Support calculations, entries, reconciliations, financial statements, disclosures and audit evidence.",
    },
    {
      icon: RefreshCcw,
      title: "Embed the process",
      body: "Define ownership, controls, templates, calendars and training where the accounting requirement recurs.",
    },
  ] as EngagementStep[],

  whyContetra: [
    {
      icon: Award,
      title: "Specialist depth without permanent overhead",
      body: "Access the capability required for a transaction, reporting conversion, audit peak or complex standard without overbuilding the internal team.",
    },
    {
      icon: FileCheck,
      title: "Practical, reviewable documentation",
      body: "Outputs are designed for management, auditors, boards, investors and transaction stakeholders - not as academic summaries of accounting literature.",
    },
    {
      icon: Puzzle,
      title: "Integrated finance transformation",
      body: "Accounting conclusions can be connected to close, controls, ERP requirements, dashboards, transaction work and automation.",
    },
    {
      icon: Wrench,
      title: "Execution support through deadlines",
      body: "We can work alongside internal finance teams to complete the analysis, data, schedules and financial reporting - not merely advise from a distance.",
    },
  ] as IconCard[],

  faqs: [
    {
      question: "What is technical accounting advisory?",
      answer:
        "Technical accounting advisory helps organisations interpret and apply accounting standards to complex transactions or reporting matters, document the conclusion and implement the resulting entries, calculations and disclosures.",
    },
    {
      question: "Can you prepare complete financial statements?",
      answer:
        "Yes. Depending on the engagement, support can include trial-balance review, reconciliations, schedules, primary statements, notes, accounting policies, cash-flow statements, group reporting packs and audit-ready supporting documentation.",
    },
    {
      question: "Do you support IFRS and US GAAP conversions?",
      answer:
        "Yes. Conversion work can include impact assessment, accounting-policy choices, opening adjustments, comparatives, disclosures, process changes, data requirements, controls and audit coordination.",
    },
    {
      question: "How do you work with statutory auditors?",
      answer:
        "Management remains responsible for the financial statements and accounting judgements. Contetra helps prepare robust analysis, workings, schedules and evidence, responds to technical questions and coordinates open items to support an efficient audit.",
    },
    {
      question: "Can you support acquisitions or investment transactions?",
      answer:
        "Yes. Services may include financial due diligence, quality of earnings, working capital and net debt analysis, transaction accounting, purchase price allocation coordination, opening balance-sheet work and post-deal reporting integration.",
    },
  ] as FaqItem[],

  closingCta: {
    heading:
      "Strengthen the conclusion, the reporting output and the audit trail",
    body: "Discuss a complex accounting issue, reporting deadline, transaction or readiness programme with our accounting and reporting team.",
    primaryCta: "Discuss an Accounting Issue",
    secondaryCta: "Request an Audit-Readiness Review",
    form: createElement(AccountingForm, {
      trigger: createElement(
        Button,
        {
          variant: "outline",
          className: cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
          ),
        },
        "Discuss an Accounting Issue",
      ),
    }),
  },
};
