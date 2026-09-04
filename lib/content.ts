import {
  ArrowLeftRight,
  Award,
  Banknote,
  BarChart3,
  Blocks,
  BookOpenCheck,
  Bot,
  Boxes,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Compass,
  Database,
  FileCheck,
  FileSearch,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Flag,
  FlaskConical,
  Gauge,
  GitBranch,
  GitMerge,
  GraduationCap,
  Handshake,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  LineChart,
  ListChecks,
  Map,
  Megaphone,
  Network,
  Plug,
  Puzzle,
  Receipt,
  RefreshCcw,
  Repeat,
  Rocket,
  ScrollText,
  Search,
  ShieldCheck,
  Stethoscope,
  Target,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  Truck,
  UserCog,
  Users,
  Wallet,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { primaryCta as bookingCta } from "@/lib/nav";
import { createElement, type ReactNode } from "react";
import { FpaForm } from "@/app/services/management-reporting/components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "./utils";

export interface IconCard {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
}

export interface Step {
  icon: LucideIcon;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What does finance transformation consulting include?",
    answer:
      "It can include CFO and FP&A support, management reporting, accounting and close improvement, [ERP implementation](/erp-implementation-solutions), data and control design, and workflow automation. The correct scope depends on the business problem and transformation maturity.",
  },
  {
    question: "Does Contetra only advise, or also help implement?",
    answer:
      "Contetra supports both design and execution. Depending on the engagement, this may include models, process maps, BRDs, accounting papers, system testing, dashboards, PMO, training, workflow development and post-implementation stabilisation.",
  },
  {
    question:
      "Can Contetra work with our existing ERP vendor, auditor or internal team?",
    answer:
      "Yes. We frequently work as the finance and functional layer between management, business users, implementation partners, auditors and other specialists.",
  },
  {
    question: "What is the best first engagement?",
    answer:
      "For a broad or unclear problem, begin with a diagnostic assessment. It creates a fact base, identifies quick wins and defines a prioritised roadmap before a larger commitment is made.",
  },
];

export const closingCta = {
  heading: "Make the next transformation decision with a clearer fact base",
  body: "Start with a focused conversation about the business outcome, current constraints and what has already been attempted.",
  primaryCta: "Book a Transformation Consultation",
  secondaryCta: "View Case Studies",
};

export interface EngagementStep {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface PlatformItem {
  icon: LucideIcon;
  label: string;
}

export interface Principle {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface SubPageContent {
  breadcrumbLabel: string;
  meta: { title: string; description: string };
  jsonLdName: string;
  hero: {
    title: string;
    paragraphs: string[];
    positioningLine: string;
  };
  whatWeHelp: IconCard[];
  howWeWork: Step[];
  closingCta: {
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    form?: ReactNode;
  };
}

export interface MotifSubPage extends SubPageContent {
  slug: string;
  motifIcon: LucideIcon;
  motifLabel: string;
  /** Where the closing CTA's secondary button should point. */
  secondaryCtaHref: string;
}

const erpDiagnosticHref = "/services/erp-implementation/erp-diagnostic-review";



export const erpSubPages: MotifSubPage[] = [
  {
    slug: "erp-diagnostic-review",
    motifIcon: Stethoscope,
    motifLabel: "Diagnostic Review",
    breadcrumbLabel: "ERP Diagnostic Review & Health Check",
    meta: {
      title: "ERP Diagnostic Review & Health Check | Contetra",
      description:
        "Identify process, configuration, data, control, reporting, governance and adoption gaps through an independent ERP health check and roadmap.",
    },
    jsonLdName: "ERP Diagnostic Review and Health Check",
    hero: {
      title:
        "ERP Diagnostic Review: Understand What Is Failing Before You Invest Again",
      paragraphs: [
        "When an ERP is underperforming, the visible symptoms - manual work, delayed reporting, user complaints, failed controls or project overruns - rarely reveal the complete cause. Contetra's independent ERP diagnostic review examines the business process, system design, data, governance and adoption together.",
        "The result is a practical roadmap that distinguishes what can be stabilised quickly, what requires process or configuration correction and when a larger upgrade or replacement decision is justified.",
      ],
      positioningLine:
        "An independent fact base for the decision to optimise, rescue, upgrade or replace.",
    },
    whatWeHelp: [
      {
        icon: Search,
        title: "Process and usage review",
        body: "Workarounds, offline activity, hand-offs, pain points and fit with current business requirements.",
      },
      {
        icon: Database,
        title: "System and data assessment",
        body: "Configuration, customisation, integrations, master data, migration quality and reconciliation.",
      },
      {
        icon: ShieldCheck,
        title: "Controls and reporting",
        body: "Approvals, access, segregation, audit trail, close, consolidation, MIS and management reporting.",
      },
      {
        icon: Map,
        title: "Governance and roadmap",
        body: "Programme history, open decisions, partner performance, quick wins, remediation plan and strategic options.",
      },
    ],
    howWeWork: [
      {
        icon: Users,
        body: "Interview management, process owners, users and project stakeholders.",
      },
      {
        icon: FileSearch,
        body: "Review configurations, reports, issues, process maps and representative transactions.",
      },
      {
        icon: TriangleAlert,
        body: "Trace root causes across process, people, data, system and governance.",
      },
      {
        icon: ListChecks,
        body: "Present a prioritised roadmap with effort, dependencies and decision points.",
      },
    ],
    closingCta: {
      heading: "Stop treating symptoms as separate problems",
      body: "Use an independent health check to decide the most defensible next step.",
      primaryCta: "Request an ERP Diagnostic Review",
      secondaryCta: "Share Your ERP Challenges",
      form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "erp-selection-evaluation",
    motifIcon: Compass,
    motifLabel: "Selection & Evaluation",
    breadcrumbLabel: "ERP Selection & Evaluation Advisory",
    meta: {
      title: "ERP Selection & Evaluation Consulting | Contetra",
      description:
        "Select the right ERP through transaction-level requirements, platform evaluation, vendor assessment, TCO analysis and independent decision support.",
    },
    jsonLdName: "ERP Selection and Evaluation Advisory",
    hero: {
      title:
        "ERP Selection Consulting That Starts with Business Requirements - not Product Demos",
      paragraphs: [
        "The wrong ERP decision is often made long before implementation begins. Attractive demonstrations can hide gaps in process fit, reporting, integrations, controls, scalability, implementation effort and total cost. Contetra helps organisations define what the future system must enable before evaluating platforms and partners.",
        "We bring finance and cross-functional process expertise to the selection process, helping management compare options on a consistent fact base and understand the trade-offs behind every recommendation.",
      ],
      positioningLine:
        "Choose the platform and partner against a controlled requirements baseline.",
    },
    whatWeHelp: [
      {
        icon: Target,
        title: "ERP Business Case and Readiness Assessment",
        body: "Objectives, scope, transformation priorities, current constraints and investment case.",
      },
      {
        icon: FileText,
        title: "ERP Requirements Gathering and RFP Support",
        body: "Future-state processes, transaction-level requirements, reports, controls, integrations and data needs.",
      },
      {
        icon: ClipboardCheck,
        title: "ERP Vendor Evaluation and Demonstrations",
        body: "Scenario scripts, weighted scorecards, reference checks and documented fit-gap decisions.",
      },
      {
        icon: Banknote,
        title: "ERP Total Cost of Ownership and Implementation Planning",
        body: "TCO, licence assumptions, customisation, partner capability, delivery plan, governance and risk.",
      },
    ],
    howWeWork: [
      {
        icon: Flag,
        body: "Confirm business outcomes and programme perimeter.",
      },
      {
        icon: ListChecks,
        body: "Define and prioritise requirements with process owners.",
      },
      {
        icon: Search,
        body: "Run comparable demonstrations and due diligence.",
      },
      {
        icon: Compass,
        body: "Recommend the platform, partner and implementation roadmap.",
      },
    ],
    closingCta: {
      heading: "Make the ERP choice before the sales process makes it for you",
      body: "Define the requirements, evaluation method and commercial assumptions before issuing an RFP.",
      primaryCta: "Discuss ERP Selection",
      secondaryCta: "Request a Selection Framework",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "erp-implementation-pmo",
    motifIcon: ClipboardCheck,
    motifLabel: "Implementation PMO",
    breadcrumbLabel: "ERP Implementation PMO & Functional Consulting",
    meta: {
      title: "ERP Implementation PMO & Functional Consulting | Contetra",
      description:
        "Protect ERP outcomes through process design, BRDs, programme governance, data readiness, UAT, change management and business sign-off.",
    },
    jsonLdName: "ERP Implementation PMO and Functional Consulting",
    hero: {
      title:
        "ERP Implementation Governance and Functional Consulting for Business-Led Delivery",
      paragraphs: [
        "Implementation partners know their platforms. Your organisation must still own the business design, controls, data, decisions and acceptance of the solution. Contetra provides the independent functional and PMO layer that keeps those responsibilities visible throughout implementation.",
        "We work between management, process owners, users and the technology partner - translating business needs, challenging unresolved assumptions and maintaining traceability from requirements to testing and sign-off.",
      ],
      positioningLine:
        "A business-owned implementation with clear decisions, evidence and accountability.",
    },
    whatWeHelp: [
      {
        icon: Workflow,
        title: "ERP Process and Solution Design",
        body: "Future-state processes, BRDs, controls, reports, roles, integrations and fit-gap decisions.",
      },
      {
        icon: ClipboardList,
        title: "ERP Programme Governance and Milestone Assurance",
        body: "Plans, RAID, scope, decisions, steering reports, partner coordination and milestone assurance.",
      },
      {
        icon: FileCheck,
        title: "ERP Data Migration and UAT Governance",
        body: "Master data, migration, reconciliation, end-to-end UAT, defect governance and readiness criteria.",
      },
      {
        icon: Repeat,
        title: "ERP Change Management and Cutover Planning",
        body: "Stakeholder readiness, SOPs, role-based training, cutover plan, go-live and stabilisation.",
      },
    ],
    howWeWork: [
      {
        icon: ClipboardCheck,
        body: "Establish programme governance and requirement traceability.",
      },
      { icon: Users, body: "Support design decisions and business ownership." },
      {
        icon: FileCheck,
        body: "Drive data, testing, cutover and adoption readiness.",
      },
      {
        icon: TrendingUp,
        body: "Track stabilisation and benefits after go-live.",
      },
    ],
    closingCta: {
      heading: "Protect the business outcome throughout implementation",
      body: "Add an independent functional and governance layer before critical design decisions become expensive to reverse.",
      primaryCta: "Discuss ERP Implementation Support",
      secondaryCta: "Review Your Programme Plan",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "erp-project-rescue",
    motifIcon: LifeBuoy,
    motifLabel: "Project Rescue",
    breadcrumbLabel: "ERP Project Rescue & Post-Go-Live Optimisation",
    meta: {
      title: "ERP Project Rescue & Post-Go-Live Optimisation | Contetra",
      description:
        "Recover delayed or underperforming ERP programmes through independent assessment, recovery governance, remediation and post-go-live optimisation.",
    },
    jsonLdName: "ERP Project Rescue and Post-Go-Live Optimisation",
    hero: {
      title:
        "ERP Project Rescue for Programmes That Are Delayed, Disputed or Underperforming",
      paragraphs: [
        "A struggling ERP programme needs more than a revised project plan. It needs an objective view of what is unresolved, which assumptions are invalid, where ownership has failed and what must be true before the next milestone can be accepted.",
        "Contetra assesses the programme across scope, process, design, data, testing, controls, partner performance and adoption, then helps management establish a realistic recovery or optimisation plan.",
      ],
      positioningLine:
        "Recover control of the programme before adding more scope, time or cost.",
    },
    whatWeHelp: [
      {
        icon: Search,
        title: "ERP Programme Assessment and Diagnosis",
        body: "Scope, plan, decisions, risks, requirements, design and stakeholder alignment.",
      },
      {
        icon: TriangleAlert,
        title: "ERP Root-Cause Analysis and Recovery Plan",
        body: "Critical issues, dependencies, re-baselining, ownership and realistic exit criteria.",
      },
      {
        icon: Wrench,
        title: "ERP Remediation Governance and Workstreams",
        body: "Focused workstreams for data, controls, configuration, testing, reporting and adoption.",
      },
      {
        icon: Gauge,
        title: "Post-Go-Live ERP Optimisation",
        body: "Workarounds, performance, close, reports, user support, benefits and backlog prioritisation.",
      },
    ],
    howWeWork: [
      {
        icon: ShieldCheck,
        body: "Stabilise governance and obtain the evidence.",
      },
      { icon: FileSearch, body: "Separate symptoms from root causes." },
      {
        icon: ListChecks,
        body: "Agree recovery priorities and decision rights.",
      },
      {
        icon: RefreshCcw,
        body: "Execute and track remediation to objective acceptance criteria.",
      },
    ],
    closingCta: {
      heading: "Re-establish facts, ownership and a credible path forward",
      body: "Use an independent assessment to determine whether to stabilise, re-scope, re-implement or change direction.",
      primaryCta: "Request a Project Rescue Review",
      secondaryCta: "Discuss Post-Go-Live Issues",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "sap-s4hana-consulting",
    motifIcon: Database,
    motifLabel: "SAP S/4HANA",
    breadcrumbLabel: "SAP S/4HANA Implementation & Migration Consulting",
    meta: {
      title: "SAP S/4HANA Implementation Consulting India | Contetra",
      description:
        "Reduce S/4HANA programme risk with process design, readiness assessment, data, controls, testing, change and independent functional governance.",
    },
    jsonLdName: "SAP S/4HANA Implementation and Migration Consulting",
    hero: {
      title:
        "SAP S/4HANA Implementation Consulting with Finance-Led Functional Governance",
      paragraphs: [
        "Moving to SAP S/4HANA is not only a technical migration. It is a decision about which processes to standardise, which data and customisations to retain, how controls and reporting should work and what the organisation must change to realise value from the new environment.",
        "Contetra supports management and finance teams across readiness, business-process design, partner governance, data, testing and adoption for greenfield, brownfield and selective-transition programmes.",
      ],
      positioningLine:
        "Protect the business design while your SAP partner delivers the technology.",
    },
    whatWeHelp: [
      {
        icon: Compass,
        title: "Readiness and migration strategy",
        body: "Business case, current-state assessment, custom-code and process considerations, data and reporting priorities.",
      },
      {
        icon: Workflow,
        title: "Finance and process design",
        body: "Record-to-report, order-to-cash, procure-to-pay, assets, projects, controls and management reporting.",
      },
      {
        icon: FileCheck,
        title: "Data, UAT and cutover",
        body: "Master data, balances, reconciliation, end-to-end scenarios, defects, cutover and sign-off.",
      },
      {
        icon: Users,
        title: "Independent PMO and change",
        body: "Decisions, risks, scope, partner coordination, training, adoption and benefits tracking.",
      },
    ],
    howWeWork: [
      {
        icon: FileSearch,
        body: "Assess readiness and intended business outcomes.",
      },
      {
        icon: ListChecks,
        body: "Define process, data, control and reporting requirements.",
      },
      {
        icon: ClipboardCheck,
        body: "Govern implementation, testing and cutover.",
      },
      { icon: TrendingUp, body: "Stabilise operations and track benefits." },
    ],
    closingCta: {
      heading:
        "Make S/4HANA a business transformation - not a technical deadline",
      body: "Discuss your readiness, migration path and functional governance requirements.",
      primaryCta: "Book an S/4HANA Consultation",
      secondaryCta: "Request a Readiness Review",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
  {
    slug: "microsoft-dynamics-365-consulting",
    motifIcon: Cloud,
    motifLabel: "Microsoft Dynamics 365",
    breadcrumbLabel: "Microsoft Dynamics 365 ERP Consulting",
    meta: {
      title: "Microsoft Dynamics 365 ERP Consulting India | Contetra",
      description:
        "Get functional consulting for Dynamics 365 Finance, Supply Chain and Business Central across process design, migration, UAT, reporting and optimisation.",
    },
    jsonLdName: "Microsoft Dynamics 365 ERP Consulting",
    hero: {
      title:
        "Microsoft Dynamics 365 ERP Consulting for Finance and Operations Transformation",
      paragraphs: [
        "Dynamics 365 can create a connected operating environment across finance, supply chain and business applications - but only when processes, data, controls and reporting are designed as one model. Contetra provides independent functional support for Dynamics 365 Finance & Operations and Business Central programmes.",
        "We help business owners and finance teams translate requirements into solution decisions, support implementation governance and ensure that Power Platform and reporting capabilities solve defined business needs.",
      ],
      positioningLine:
        "Connect Dynamics 365 configuration to the finance, process and decision model.",
    },
    whatWeHelp: [
      {
        icon: ListChecks,
        title: "Process and requirements",
        body: "Finance, procurement, sales, inventory, projects, assets, controls, dimensions and reporting.",
      },
      {
        icon: GitMerge,
        title: "Migration and integration",
        body: "Data design, legacy mapping, reconciliations and connections with CRM, HR, banking and other systems.",
      },
      {
        icon: FileCheck,
        title: "Testing and adoption",
        body: "End-to-end UAT, role design, training, cutover and stabilisation.",
      },
      {
        icon: BarChart3,
        title: "Power Platform and reporting",
        body: "Use-case definition for Power BI, Power Automate, approvals and business workflows.",
      },
    ],
    howWeWork: [
      { icon: Flag, body: "Confirm platform scope and business outcomes." },
      {
        icon: FileText,
        body: "Define functional requirements and governance.",
      },
      {
        icon: Workflow,
        body: "Support design, migration, testing and change.",
      },
      { icon: RefreshCcw, body: "Optimise reporting, workflows and adoption." },
    ],
    closingCta: {
      heading: "Turn the Microsoft stack into an operating model",
      body: "Discuss a D365 implementation, migration, rescue or reporting requirement.",
      primaryCta: "Book a Dynamics 365 Consultation",
      secondaryCta: "Request a D365 Health Check",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
  {
    slug: "oracle-fusion-cloud-consulting",
    motifIcon: Network,
    motifLabel: "Oracle Fusion Cloud",
    breadcrumbLabel: "Oracle Fusion Cloud ERP Consulting",
    meta: {
      title:
        "Oracle Fusion Cloud ERP Consulting | Finance & Controls | Contetra",
      description:
        "Support Oracle Fusion Cloud ERP implementation with finance-led design, data, controls, reporting, UAT and independent programme governance.",
    },
    jsonLdName: "Oracle Fusion Cloud ERP Consulting",
    hero: {
      title:
        "Oracle Fusion Cloud ERP Consulting for Scalable Finance and Reporting",
      paragraphs: [
        "Oracle Fusion Cloud ERP can support complex, multi-entity finance environments, but programme value depends on clear process ownership, data, controls, reporting design and user adoption. Contetra helps finance and business teams lead those decisions throughout the implementation.",
        "Our work can cover readiness, solution design, partner governance, migration, testing, consolidation and management reporting requirements, including transitions from legacy Oracle or other ERP environments.",
      ],
      positioningLine:
        "Strengthen the business and finance layer around the Oracle implementation.",
    },
    whatWeHelp: [
      {
        icon: Workflow,
        title: "Finance solution design",
        body: "General ledger, AP, AR, assets, cash, projects, intercompany, consolidation and reporting.",
      },
      {
        icon: ShieldCheck,
        title: "Data and controls",
        body: "Chart of accounts, dimensions, masters, migration, reconciliations, access and approvals.",
      },
      {
        icon: FileCheck,
        title: "Testing and readiness",
        body: "Scenarios, accounting validation, interfaces, reports, cutover and business sign-off.",
      },
      {
        icon: Gauge,
        title: "PMO and optimisation",
        body: "Governance, partner coordination, change, post-go-live issues and reporting improvements.",
      },
    ],
    howWeWork: [
      {
        icon: FileSearch,
        body: "Assess readiness and target operating model.",
      },
      {
        icon: ListChecks,
        body: "Define finance, data, control and reporting requirements.",
      },
      { icon: ClipboardCheck, body: "Govern build, migration and testing." },
      {
        icon: RefreshCcw,
        body: "Support stabilisation and continuous improvement.",
      },
    ],
    closingCta: {
      heading: "Make cloud ERP decisions with finance at the table",
      body: "Discuss an Oracle Fusion implementation, migration or optimisation programme.",
      primaryCta: "Book an Oracle Fusion Consultation",
      secondaryCta: "Request a Programme Review",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
  {
    slug: "netsuite-implementation-consulting",
    motifIcon: Boxes,
    motifLabel: "Oracle NetSuite",
    breadcrumbLabel: "Oracle NetSuite Implementation Consulting",
    meta: {
      title: "NetSuite Implementation Consulting India | Contetra",
      description:
        "Implement or improve NetSuite with finance-led process design, multi-entity reporting, migration, controls, UAT, integrations and optimisation.",
    },
    jsonLdName: "Oracle NetSuite Implementation Consulting",
    hero: {
      title:
        "NetSuite Implementation Consulting for Multi-Entity and Growing Businesses",
      paragraphs: [
        "NetSuite can provide an integrated finance and operating platform for growing and multi-entity organisations. The implementation must still resolve how the chart of accounts, subsidiaries, dimensions, intercompany, revenue, projects, approvals and reporting should work together.",
        "Contetra helps management define those requirements, govern the implementation partner and build reliable migration, testing, close and reporting processes around NetSuite.",
      ],
      positioningLine:
        "Design NetSuite around the group reporting and operating model - not only current transactions.",
    },
    whatWeHelp: [
      {
        icon: Building2,
        title: "Finance and multi-entity design",
        body: "Chart of accounts, subsidiaries, dimensions, intercompany, consolidation and management reporting.",
      },
      {
        icon: ShieldCheck,
        title: "Process and controls",
        body: "Order-to-cash, procure-to-pay, projects, expenses, approvals, roles and audit trail.",
      },
      {
        icon: FileCheck,
        title: "Migration and testing",
        body: "Masters, historical data, balances, reconciliations, scenarios and cutover.",
      },
      {
        icon: LifeBuoy,
        title: "Optimisation and support",
        body: "Close, reports, saved searches, workflows, integrations, adoption and enhancement backlog.",
      },
    ],
    howWeWork: [
      { icon: Map, body: "Define the group and process model." },
      {
        icon: ListChecks,
        body: "Translate requirements into controlled design decisions.",
      },
      {
        icon: FileCheck,
        body: "Validate migration, accounting and end-to-end UAT.",
      },
      { icon: TrendingUp, body: "Stabilise close and management reporting." },
    ],
    closingCta: {
      heading: "Build a NetSuite environment that can scale with the group",
      body: "Discuss implementation, migration, multi-entity reporting or optimisation requirements.",
      primaryCta: "Book a NetSuite Consultation",
      secondaryCta: "Request a NetSuite Review",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
  {
    slug: "odoo-implementation-consulting",
    motifIcon: Blocks,
    motifLabel: "Odoo",
    breadcrumbLabel: "Odoo Implementation Consulting",
    meta: {
      title: "Odoo Implementation Consulting India | Contetra",
      description:
        "Implement Odoo around finance, sales, purchasing, inventory, manufacturing and operations with process design, data, controls, UAT and adoption support.",
    },
    jsonLdName: "Odoo Implementation Consulting",
    hero: {
      title:
        "Odoo Implementation Consulting Built Around End-to-End Business Processes",
      paragraphs: [
        "Odoo's flexibility can be an advantage, but it can also encourage fragmented customisation without a controlled process design. Contetra helps businesses define the operating model, finance requirements, controls, integrations and reports before modules and custom features multiply.",
        "We can support selection, implementation governance, migration, testing and optimisation across finance and operational modules while working with the selected Odoo technical partner.",
      ],
      positioningLine:
        "Use Odoo's flexibility without losing process discipline, control or maintainability.",
    },
    whatWeHelp: [
      {
        icon: Blocks,
        title: "Process and module scope",
        body: "Finance, CRM, sales, purchase, inventory, manufacturing, projects, service and HR requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Finance and controls",
        body: "Accounting design, tax, approvals, access, dimensions, costing, close and reporting.",
      },
      {
        icon: FileCheck,
        title: "Data and testing",
        body: "Masters, migration, opening data, reconciliations, scenarios and user acceptance.",
      },
      {
        icon: RefreshCcw,
        title: "Governance and optimisation",
        body: "Customisation decisions, partner coordination, adoption, backlog and post-go-live improvement.",
      },
    ],
    howWeWork: [
      {
        icon: Map,
        body: "Define future-state processes and minimum viable scope.",
      },
      { icon: GitBranch, body: "Control standard versus custom decisions." },
      {
        icon: FileCheck,
        body: "Validate data, controls and end-to-end scenarios.",
      },
      { icon: Users, body: "Stabilise, train and prioritise enhancements." },
    ],
    closingCta: {
      heading: "Implement flexibility with control",
      body: "Discuss an Odoo selection, implementation, migration or health-check requirement.",
      primaryCta: "Book an Odoo Consultation",
      secondaryCta: "Request an Odoo Health Check",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
  {
    slug: "erpnext-implementation-consulting",
    motifIcon: GitBranch,
    motifLabel: "ERPNext",
    breadcrumbLabel: "ERPNext Implementation Consulting",
    meta: {
      title: "ERPNext Implementation Consulting India | Contetra",
      description:
        "Implement ERPNext for accounting, inventory, manufacturing, sales, projects and reporting with process mapping, migration, controls, UAT and support.",
    },
    jsonLdName: "ERPNext Implementation Consulting",
    hero: {
      title:
        "ERPNext Implementation Consulting for Growing and Operationally Complex Businesses",
      paragraphs: [
        "ERPNext can provide a cost-effective integrated platform, but successful implementation still requires disciplined process design, master data, accounting logic, controls, reporting and user ownership. Contetra provides the finance-led functional layer around ERPNext and Frappe implementations.",
        "We help organisations determine where standard capability is sufficient, where configuration or development is justified and how to maintain an upgradeable, controlled environment.",
      ],
      positioningLine:
        "Make ERPNext a managed business system - not a collection of configured modules.",
    },
    whatWeHelp: [
      {
        icon: Workflow,
        title: "Process and solution design",
        body: "Accounting, sales, purchase, inventory, manufacturing, projects, service, HR and reporting.",
      },
      {
        icon: Database,
        title: "Masters and migration",
        body: "Items, customers, vendors, BOMs, warehouses, chart of accounts, balances and data validation.",
      },
      {
        icon: ShieldCheck,
        title: "Controls and testing",
        body: "Roles, approvals, audit trail, tax, costing, end-to-end UAT and reconciliation.",
      },
      {
        icon: Rocket,
        title: "Implementation and optimisation",
        body: "Partner governance, training, go-live, support, dashboards, workflows and enhancement roadmap.",
      },
    ],
    howWeWork: [
      { icon: FileSearch, body: "Assess fit, scope and process maturity." },
      {
        icon: ListChecks,
        body: "Define requirements, controls and data ownership.",
      },
      { icon: Wrench, body: "Support configuration, migration and UAT." },
      { icon: TrendingUp, body: "Stabilise operations and improve adoption." },
    ],
    closingCta: {
      heading: "Build ERPNext on a clear process and finance foundation",
      body: "Discuss an implementation, migration, customisation or optimisation requirement.",
      primaryCta: "Book an ERPNext Consultation",
      secondaryCta: "Request an ERPNext Health Check",
           form: createElement(FpaForm, {
        trigger: createElement(
          Button,
          {
            variant: "outline",
            className: cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-green text-white hover:bg-brand-green/90",
            ),
          },
          "Request an ERP Diagnostic Review",
        ),
      }),
    },
    secondaryCtaHref: erpDiagnosticHref,
  },
];

// ---------------------------------------------------------------------------
// Accounting & Reporting sub-pages
// ---------------------------------------------------------------------------

const dueDiligenceHref =
  "/services/accounting-reporting/financial-due-diligence";

export const accountingSubPages: MotifSubPage[] = [
  {
    slug: "technical-accounting-advisory",
    motifIcon: BookOpenCheck,
    motifLabel: "Technical Accounting",
    breadcrumbLabel: "Technical Accounting Advisory",
    meta: {
      title: "Technical Accounting Advisory Services | IFRS, Ind AS, US GAAP",
      description:
        "Resolve complex accounting matters with defensible research, position papers, calculations, entries, disclosures and implementation support.",
    },
    jsonLdName: "Technical Accounting Advisory",
    hero: {
      title:
        "Technical Accounting Advisory for Complex Transactions and Reporting Judgements",
      paragraphs: [
        "Complex accounting questions rarely arrive at convenient times. A new contract, acquisition, financing, restructuring or audit query can require specialist analysis while the finance team is already working against reporting deadlines. Contetra helps organisations reach clear, defensible accounting conclusions and implement them in the books and financial statements.",
        "Our support can cover a single issue or an ongoing technical-accounting desk across Ind AS, IFRS and US GAAP, working alongside management, internal finance teams, auditors, valuers and other specialists.",
      ],
      positioningLine:
        "From accounting guidance to a review-ready conclusion, journal entry and disclosure.",
    },
    whatWeHelp: [
      {
        icon: FileText,
        title: "Revenue, leases and financial instruments",
        body: "Contract analysis, performance obligations, lease accounting, classification, measurement, ECL and derecognition.",
      },
      {
        icon: Building2,
        title: "Business combinations and consolidation",
        body: "Acquisition accounting, PPA support, goodwill, control, NCI, intercompany and group reporting.",
      },
      {
        icon: Award,
        title: "Equity and employee arrangements",
        body: "ESOPs, share-based payments, capital instruments, modifications and valuation-linked accounting.",
      },
      {
        icon: ScrollText,
        title: "Position papers and implementation",
        body: "Facts, literature, analysis, conclusion, calculations, entries, disclosures, controls and audit support.",
      },
    ],
    howWeWork: [
      {
        icon: Flag,
        body: "Define facts, framework, materiality and deadline.",
      },
      {
        icon: FileSearch,
        body: "Review contracts, evidence, models and historical treatment.",
      },
      {
        icon: Compass,
        body: "Analyse alternatives, judgements and disclosure implications.",
      },
      { icon: FileCheck, body: "Document and implement the conclusion." },
    ],
    closingCta: {
      heading: "Resolve the accounting judgement with a defensible audit trail",
      body: "Share the transaction, contract or reporting issue with our technical-accounting team.",
      primaryCta: "Discuss a Technical Accounting Issue",
      secondaryCta: "Request Ongoing Technical Support",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "financial-statement-preparation",
    motifIcon: FileSpreadsheet,
    motifLabel: "Financial Statements",
    breadcrumbLabel: "Financial Statement Preparation & Accounting Support",
    meta: {
      title: "Financial Statement Preparation & Accounting Support | Contetra",
      description:
        "Prepare audit-ready financial statements, notes, schedules, reconciliations and group reporting packs under Ind AS, IFRS or US GAAP.",
    },
    jsonLdName: "Financial Statement Preparation and Accounting Support",
    hero: {
      title:
        "Financial Statement Preparation and Accounting Support for Reliable, Audit-Ready Reporting",
      paragraphs: [
        "Financial statements are only as reliable as the close, reconciliations, schedules, accounting judgements and review controls behind them. Contetra supports finance teams through reporting peaks, capability gaps, first-time reporting requirements and recurring preparation needs.",
        "We can work from trial balance through complete financial statements and notes, or take ownership of defined workstreams such as cash flow, consolidation, disclosures, schedules, group packs or account reconciliations.",
      ],
      positioningLine:
        "Complete reporting support backed by reviewable workings and clear ownership.",
    },
    whatWeHelp: [
      {
        icon: CalendarClock,
        title: "Month-End Close and Trial Balance Support",
        body: "Close calendar, account review, reconciliations, accruals, provisions, cut-off and issue resolution.",
      },
      {
        icon: FileText,
        title: "Financial Statements, Notes and Disclosures",
        body: "Primary statements, cash flow, accounting policies, notes, comparatives and disclosure checklists.",
      },
      {
        icon: FileSpreadsheet,
        title: "Reporting Schedules and Audit-Ready Packs",
        body: "Lead schedules, roll-forwards, consolidation packs, management support and audit-ready evidence.",
      },
      {
        icon: Repeat,
        title: "Recurring Accounting and Offshore Support",
        body: "Specialist or offshore support for defined close, reporting and accounting activities under agreed controls.",
      },
    ],
    howWeWork: [
      {
        icon: Flag,
        body: "Agree reporting framework, perimeter and timetable.",
      },
      {
        icon: Search,
        body: "Assess trial balance, reconciliations and open accounting issues.",
      },
      {
        icon: FileText,
        body: "Prepare statements, notes and supporting schedules.",
      },
      {
        icon: FileCheck,
        body: "Complete management review and audit support.",
      },
    ],
    closingCta: {
      heading: "Strengthen the reporting output and the work behind it",
      body: "Discuss complete financial statements or a specific close and reporting workstream.",
      primaryCta: "Discuss Financial Statement Support",
      secondaryCta: "Request an Accounting Support Plan",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "audit-support-close-acceleration",
    motifIcon: ClipboardCheck,
    motifLabel: "Audit Support",
    breadcrumbLabel: "Audit Support & Close Acceleration",
    meta: {
      title: "Audit Support & Financial Close Acceleration | Contetra",
      description:
        "Improve close and audit execution through reconciliations, PBC governance, schedules, issue tracking, technical responses and recurring-process remediation.",
    },
    jsonLdName: "Audit Support and Close Acceleration",
    hero: {
      title:
        "Audit Support and Close Acceleration That Reduces Last-Minute Reporting Risk",
      paragraphs: [
        "Audit delays are often symptoms of a close process that relies on late reconciliations, unclear schedules, unresolved technical issues and fragmented ownership. Contetra helps finance teams organise the evidence, resolve accounting questions and create a more predictable close and audit cycle.",
        "We can support a specific reporting period, a first audit under a new framework or a broader remediation programme for recurring observations and close bottlenecks.",
      ],
      positioningLine:
        "Move from reactive audit response to a controlled close and evidence process.",
    },
    whatWeHelp: [
      {
        icon: CalendarClock,
        title: "Close Calendar and Governance",
        body: "Calendar, dependencies, account ownership, review controls, issue escalation and completion tracking.",
      },
      {
        icon: ClipboardList,
        title: "PBC List and Audit Coordination",
        body: "Request lists, evidence standards, schedules, status, responses and open-item governance.",
      },
      {
        icon: FileCheck,
        title: "Technical Accounting and Reconciliation Support",
        body: "Technical issues, lead schedules, account reconciliations, roll-forwards and documentation.",
      },
      {
        icon: RefreshCcw,
        title: "Recurring Close and Audit Remediation",
        body: "Root-cause analysis, SOPs, controls, system improvements, training and future-period readiness.",
      },
    ],
    howWeWork: [
      { icon: FileSearch, body: "Diagnose close and audit bottlenecks." },
      {
        icon: ListChecks,
        body: "Prioritise critical accounts, schedules and technical issues.",
      },
      {
        icon: ClipboardCheck,
        body: "Run a transparent completion and query tracker.",
      },
      {
        icon: Wrench,
        body: "Remediate recurring causes after the reporting deadline.",
      },
    ],
    closingCta: {
      heading: "Make the next close and audit cycle more predictable",
      body: "Review the current calendar, open items and recurring delays with our accounting team.",
      primaryCta: "Book an Audit-Readiness Review",
      secondaryCta: "Discuss Immediate Audit Support",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "gaap-conversion",
    motifIcon: ArrowLeftRight,
    motifLabel: "GAAP Conversion",
    breadcrumbLabel: "Ind AS, IFRS & US GAAP Conversion",
    meta: {
      title: "Ind AS, IFRS & US GAAP Conversion Services | Contetra",
      description:
        "Plan and implement GAAP conversions through impact assessment, policies, opening adjustments, comparatives, disclosures, controls and audit support.",
    },
    jsonLdName: "Ind AS, IFRS and US GAAP Conversion",
    hero: {
      title:
        "Ind AS, IFRS and US GAAP Conversion from Impact Assessment to Reporting Implementation",
      paragraphs: [
        "A reporting-framework conversion changes more than accounting entries. It can affect contracts, systems, data, processes, controls, KPIs, covenants, tax interfaces and how management explains performance. Contetra helps finance teams plan and implement the conversion as a controlled reporting-change programme.",
        "Our support can include Ind AS adoption, local GAAP to IFRS, IFRS to US GAAP, US GAAP to IFRS and group-reporting alignment, subject to the relevant facts and reporting requirements.",
      ],
      positioningLine:
        "Treat GAAP conversion as a recurring reporting capability - not a one-time adjustment file.",
    },
    whatWeHelp: [
      {
        icon: Search,
        title: "Impact and policy assessment",
        body: "Differences, elections, exemptions, materiality, data needs, systems and implementation priorities.",
      },
      {
        icon: FileSpreadsheet,
        title: "Opening and comparative information",
        body: "Adjustments, calculations, reconciliations, opening balance sheet and comparative periods.",
      },
      {
        icon: FileText,
        title: "Financial statements and disclosures",
        body: "Policies, primary statements, notes, transition reconciliations and review support.",
      },
      {
        icon: GraduationCap,
        title: "Process, controls and training",
        body: "Recurring calculations, close steps, ownership, templates, controls and finance-team capability.",
      },
    ],
    howWeWork: [
      { icon: Compass, body: "Assess differences and reporting objectives." },
      {
        icon: ListChecks,
        body: "Decide policies, elections and implementation approach.",
      },
      {
        icon: FileCheck,
        body: "Prepare adjustments, comparatives and disclosures.",
      },
      {
        icon: Repeat,
        body: "Embed recurring process and support audit review.",
      },
    ],
    closingCta: {
      heading:
        "Plan the conversion before reporting deadlines define the programme",
      body: "Discuss the target framework, reporting perimeter, periods and known accounting differences.",
      primaryCta: "Book a GAAP Conversion Consultation",
      secondaryCta: "Request an Impact Assessment",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "transaction-accounting-advisory",
    motifIcon: Handshake,
    motifLabel: "Transaction Accounting",
    breadcrumbLabel: "Transaction Accounting Advisory",
    meta: {
      title: "Transaction Accounting Advisory Services | Contetra",
      description:
        "Get accounting support for acquisitions, disposals, restructurings, carve-outs, PPA, opening balance sheets and post-deal reporting integration.",
    },
    jsonLdName: "Transaction Accounting Advisory",
    hero: {
      title:
        "Transaction Accounting Advisory from Deal Structure to Post-Deal Reporting",
      paragraphs: [
        "Transactions create accounting, reporting and operational consequences that continue long after signing. Contetra helps finance teams understand and implement the accounting for acquisitions, disposals, restructurings, financing arrangements and other complex transactions.",
        "We coordinate accounting analysis with due diligence, valuation inputs, financial statements, systems, consolidation and post-deal integration so that conclusions can be implemented in the reporting cycle.",
      ],
      positioningLine:
        "Connect deal analysis, accounting conclusions and Day-1 reporting execution.",
    },
    whatWeHelp: [
      {
        icon: Handshake,
        title: "Acquisition and disposal accounting",
        body: "Business combination assessment, consideration, goodwill, disposal groups, gain or loss and disclosures.",
      },
      {
        icon: BarChart3,
        title: "PPA and valuation coordination",
        body: "Identifiable assets and liabilities, valuation inputs, useful lives, deferred tax and opening entries.",
      },
      {
        icon: GitBranch,
        title: "Carve-outs and restructurings",
        body: "Perimeter, allocations, historical information, accounting policies, separation and standalone reporting.",
      },
      {
        icon: Building2,
        title: "Post-deal integration",
        body: "Opening balance sheet, chart and policy alignment, consolidation, close, controls, reporting and ERP requirements.",
      },
    ],
    howWeWork: [
      {
        icon: FileSearch,
        body: "Understand transaction structure and reporting timetable.",
      },
      {
        icon: ListChecks,
        body: "Identify accounting, data, valuation and disclosure workstreams.",
      },
      {
        icon: FileCheck,
        body: "Document conclusions and prepare implementation entries.",
      },
      { icon: Workflow, body: "Support opening reporting and integration." },
    ],
    closingCta: {
      heading:
        "Prepare the finance function for what happens after the deal closes",
      body: "Discuss the transaction, reporting framework and Day-1 accounting requirements.",
      primaryCta: "Discuss Transaction Accounting",
      secondaryCta: "Explore Due Diligence Support",
    },
    secondaryCtaHref: dueDiligenceHref,
  },
  {
    slug: "financial-due-diligence",
    motifIcon: Search,
    motifLabel: "Due Diligence",
    breadcrumbLabel: "Financial Due Diligence & Quality of Earnings",
    meta: {
      title: "Financial Due Diligence & Quality of Earnings | Contetra",
      description:
        "Evaluate sustainable earnings, working capital, net debt, cash flow and accounting risks through buy-side, sell-side and pre-investment financial due diligence.",
    },
    jsonLdName: "Financial Due Diligence and Quality of Earnings",
    hero: {
      title:
        "Financial Due Diligence That Tests the Sustainability of Earnings and Cash Flow",
      paragraphs: [
        "A headline EBITDA number does not explain how much of the performance is sustainable, cash-generative or exposed to accounting and commercial risk. Contetra helps investors, acquirers, lenders, founders and management teams understand the financial drivers and risks behind a transaction.",
        "Our work is tailored to the transaction and decision. It can range from a focused red-flag review to a detailed quality-of-earnings, working-capital and net-debt assessment, with clear explanations of limitations and information gaps.",
      ],
      positioningLine:
        "Move beyond reported profit to understand sustainable performance, cash conversion and deal adjustments.",
    },
    whatWeHelp: [
      {
        icon: LineChart,
        title: "Quality of earnings",
        body: "Reported-to-normalised EBITDA, non-recurring items, cut-off, accounting policies, margin and trend analysis.",
      },
      {
        icon: TrendingUp,
        title: "Revenue and customer analysis",
        body: "Growth, concentration, churn, pricing, mix, contracts, seasonality, backlog and revenue quality.",
      },
      {
        icon: Wallet,
        title: "Working capital and net debt",
        body: "Normal levels, seasonality, ageing, inventory, debt-like items, cash-like items and deal mechanisms.",
      },
      {
        icon: TriangleAlert,
        title: "Cash flow and red flags",
        body: "Cash conversion, capital expenditure, commitments, related parties, contingent items, data gaps and accounting risks.",
      },
    ],
    howWeWork: [
      { icon: Flag, body: "Define the transaction questions and scope." },
      { icon: Database, body: "Build a traceable financial fact base." },
      {
        icon: BarChart3,
        body: "Analyse sustainable earnings, cash and balance-sheet items.",
      },
      {
        icon: FileText,
        body: "Report findings, adjustments, risks and decision implications.",
      },
    ],
    closingCta: {
      heading: "Understand what the numbers mean for the transaction",
      body: "Discuss a buy-side, sell-side, lender or pre-investment due-diligence requirement.",
      primaryCta: "Book a Due Diligence Consultation",
      secondaryCta: "Request a Red-Flag Review",
    },
    secondaryCtaHref: bookingCta.href,
  },
];

// ---------------------------------------------------------------------------
// Agentic AI Automation sub-pages
// ---------------------------------------------------------------------------

const misReportingHref =
  "/services/fractional-cfo-fpa/mis-reporting-dashboards";

export const agenticAiSubPages: MotifSubPage[] = [
  {
    slug: "ai-agent-development",
    motifIcon: Bot,
    motifLabel: "AI Agent Development",
    breadcrumbLabel: "Agentic AI & AI Agent Development",
    meta: {
      title: "Agentic AI & AI Agent Development Services | Contetra",
      description:
        "Design secure enterprise AI agents that analyse, coordinate tools and execute governed workflows with human approvals, traceability and monitoring.",
    },
    jsonLdName: "Agentic AI and AI Agent Development",
    hero: {
      title: "Enterprise AI Agent Development for Governed Business Workflows",
      paragraphs: [
        "An enterprise AI agent must do more than produce a plausible answer. It must use approved information, follow a defined process, respect access controls, know when confidence is insufficient and leave a traceable record of the actions it takes.",
        "Contetra designs AI agents around specific business roles and workflows. Depending on the use case, agents can gather data, interpret documents, apply rules, analyse, draft, reconcile, route, monitor and trigger actions across approved systems.",
      ],
      positioningLine:
        "Agents designed as controlled digital roles - not general-purpose chat interfaces.",
    },
    whatWeHelp: [
      {
        icon: UserCog,
        title: "Agent use-case and role design",
        body: "Objectives, permissions, tools, decisions, inputs, outputs, boundaries and escalation.",
      },
      {
        icon: Database,
        title: "Knowledge and reasoning layer",
        body: "Approved sources, retrieval, prompts, rules, context, validations and confidence handling.",
      },
      {
        icon: Plug,
        title: "Tool and system integration",
        body: "APIs, ERP, CRM, email, documents, databases, workflow platforms and user interfaces.",
      },
      {
        icon: ShieldCheck,
        title: "Evaluation and governance",
        body: "Test cases, action logs, human review, monitoring, incidents, changes and periodic control review.",
      },
    ],
    howWeWork: [
      { icon: Flag, body: "Define the business role and measurable outcome." },
      { icon: Map, body: "Map the workflow, controls, data and exceptions." },
      {
        icon: FlaskConical,
        body: "Build and evaluate a constrained proof of value.",
      },
      {
        icon: Gauge,
        body: "Deploy, monitor and improve under change governance.",
      },
    ],
    closingCta: {
      heading: "Define the role before building the agent",
      body: "Discuss a workflow where an AI agent could analyse, coordinate or act under clear controls.",
      primaryCta: "Book an AI Agent Discovery Session",
      secondaryCta: "Review an Agent Use Case",
    },
    secondaryCtaHref: "/proof/case-studies",
  },
  {
    slug: "finance-reporting-automation",
    motifIcon: Landmark,
    motifLabel: "Finance Automation",
    breadcrumbLabel: "Finance & Reporting Automation",
    meta: {
      title: "Finance & Reporting Automation Services | Contetra",
      description:
        "Automate reconciliations, close, invoice workflows, cash reporting, MIS, variance analysis and audit support using governed workflow and AI solutions.",
    },
    jsonLdName: "Finance and Reporting Automation",
    hero: {
      title:
        "Finance and Reporting Automation Designed by People Who Understand the Close",
      paragraphs: [
        "Finance automation fails when the team automates an unreliable spreadsheet or moves a broken process into a faster tool. Contetra begins with the accounting logic, control points, data dependencies and exception paths, then selects the appropriate workflow, integration or AI design.",
        "Our finance and automation specialists work together so the output is not only faster, but also reviewable, reconcilable and usable in the close, audit and management reporting process.",
      ],
      positioningLine:
        "Automate the process without weakening the accounting logic or control trail.",
    },
    whatWeHelp: [
      {
        icon: CalendarClock,
        title: "Close and reconciliation",
        body: "Task orchestration, account reconciliations, bank and intercompany matching, evidence and exception queues.",
      },
      {
        icon: Receipt,
        title: "Payables and receivables",
        body: "Invoice capture, validation, approvals, matching, customer follow-up, collections and dispute routing.",
      },
      {
        icon: LayoutDashboard,
        title: "MIS and financial reporting",
        body: "Data collection, report production, variance identification, commentary drafting, distribution and action tracking.",
      },
      {
        icon: FileCheck,
        title: "Audit and compliance support",
        body: "Schedule preparation, document retrieval, control evidence, query tracking and recurring reconciliation workflows. Common Indian cases include GSTR-2B to purchase register matching and input credit follow-up, 26AS and AIS reconciliation, and TDS and TCS exception tracking.",
      },
    ],
    howWeWork: [
      {
        icon: Search,
        body: "Baseline effort, risk, cycle time and error points.",
      },
      {
        icon: ListChecks,
        body: "Standardise the process, rules and ownership.",
      },
      {
        icon: Bot,
        body: "Automate high-confidence steps and design exception handling.",
      },
      {
        icon: ShieldCheck,
        body: "Validate accounting outputs, controls and audit trail.",
      },
    ],
    closingCta: {
      heading: "Automate recurring finance work without losing control",
      body: "Bring one reconciliation, reporting, close or transaction workflow for a structured assessment.",
      primaryCta: "Book a Finance Automation Assessment",
      secondaryCta: "Explore Reporting Automation",
    },
    secondaryCtaHref: misReportingHref,
  },
  {
    slug: "sales-marketing-automation",
    motifIcon: Megaphone,
    motifLabel: "Sales & Marketing",
    breadcrumbLabel: "Sales & Marketing Workflow Automation",
    meta: {
      title: "Sales & Marketing Workflow Automation | Contetra",
      description:
        "Automate lead enrichment, qualification, CRM updates, follow-up, proposals, campaign operations and performance reporting with governed AI workflows.",
    },
    jsonLdName: "Sales and Marketing Workflow Automation",
    hero: {
      title:
        "Sales and Marketing Automation That Improves Follow-Through and Data Quality",
      paragraphs: [
        "Revenue teams lose time when information must be copied between forms, email, spreadsheets, CRM, research tools and reporting systems. The result is slow lead response, incomplete CRM data, inconsistent follow-up and management reporting that cannot be trusted.",
        "Contetra redesigns these workflows around clear ownership and measurable outcomes. AI can support research, summarisation, drafting and classification while workflow automation handles routing, reminders, system updates and escalation.",
      ],
      positioningLine:
        "Improve speed and discipline without automating low-quality outreach or uncontrolled customer actions.",
    },
    whatWeHelp: [
      {
        icon: Target,
        title: "Lead operations",
        body: "Capture, enrichment, qualification, deduplication, scoring, routing and response-time monitoring.",
      },
      {
        icon: Handshake,
        title: "Sales execution",
        body: "Meeting briefs, notes, action extraction, CRM updates, follow-up drafts and proposal workflows.",
      },
      {
        icon: Megaphone,
        title: "Marketing operations",
        body: "Campaign briefs, content workflow, approvals, asset tracking, lead hand-off and recurring reporting.",
      },
      {
        icon: BarChart3,
        title: "Revenue reporting",
        body: "Pipeline hygiene, conversion analysis, forecast inputs, campaign performance and exception alerts.",
      },
    ],
    howWeWork: [
      { icon: Map, body: "Map the lead-to-opportunity or campaign workflow." },
      {
        icon: ShieldCheck,
        body: "Define data, decisions, approvals and customer-facing controls.",
      },
      {
        icon: Bot,
        body: "Automate internal steps and keep review where needed.",
      },
      {
        icon: Gauge,
        body: "Track response time, completion, conversion and data quality.",
      },
    ],
    closingCta: {
      heading: "Remove the operational friction behind revenue execution",
      body: "Review a sales or marketing workflow that depends on manual hand-offs and follow-up.",
      primaryCta: "Book a Revenue Workflow Assessment",
      secondaryCta: "Discuss CRM Automation",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "operations-project-automation",
    motifIcon: Workflow,
    motifLabel: "Operations & Projects",
    breadcrumbLabel: "Operations & Project Workflow Automation",
    meta: {
      title: "Operations & Project Workflow Automation | Contetra",
      description:
        "Automate approvals, vendor onboarding, operating reports, project status, task follow-up, risk tracking and cross-functional workflows.",
    },
    jsonLdName: "Operations and Project Workflow Automation",
    hero: {
      title:
        "Operations and Project Workflow Automation for Better Execution Visibility",
      paragraphs: [
        "Operational work often moves through inboxes, spreadsheets, chat messages and personal follow-up. Management sees the delay only after a milestone, customer commitment or control has already been missed. Contetra helps convert these fragmented activities into visible, governed workflows.",
        "We combine process mapping, workflow tools, system integration and AI assistance to automate coordination while preserving clear ownership and escalation.",
      ],
      positioningLine: "Make the process visible before making it autonomous.",
    },
    whatWeHelp: [
      {
        icon: Truck,
        title: "Procurement and vendor workflows",
        body: "Onboarding, document validation, approval, purchase requests, exceptions, renewals and compliance checks.",
      },
      {
        icon: Workflow,
        title: "Operations coordination",
        body: "Service requests, inventory or production alerts, document routing, SLA monitoring and operating reports.",
      },
      {
        icon: ClipboardList,
        title: "Projects and PMO",
        body: "Status collection, milestones, dependencies, risks, issues, meeting actions, reminders and steering packs.",
      },
      {
        icon: ListChecks,
        title: "Task and approval workflows",
        body: "Assignment, due dates, evidence, escalation, recurring tasks and management visibility across functions.",
      },
    ],
    howWeWork: [
      {
        icon: Search,
        body: "Map activities, roles, systems, delays and exceptions.",
      },
      {
        icon: Compass,
        body: "Simplify and standardise the future-state workflow.",
      },
      {
        icon: Plug,
        body: "Implement integrations, automation and user interfaces.",
      },
      {
        icon: Gauge,
        body: "Monitor throughput, ageing, exceptions and adoption.",
      },
    ],
    closingCta: {
      heading: "Turn follow-up into a managed workflow",
      body: "Bring one recurring operational or project process that is difficult to track end to end.",
      primaryCta: "Book a Workflow Automation Assessment",
      secondaryCta: "Discuss PMO Automation",
    },
    secondaryCtaHref: bookingCta.href,
  },
  {
    slug: "automation-opportunity-assessment",
    motifIcon: ClipboardList,
    motifLabel: "Opportunity Assessment",
    breadcrumbLabel: "Automation Opportunity Assessment & Roadmap",
    meta: {
      title: "Automation Opportunity Assessment & Roadmap | Contetra",
      description:
        "Identify and prioritise high-value AI and workflow automation opportunities by process, feasibility, data readiness, risk, effort and measurable benefit.",
    },
    jsonLdName: "Automation Opportunity Assessment and Roadmap",
    hero: {
      title:
        "Automation Opportunity Assessment: Prioritise Value Before Choosing Tools",
      paragraphs: [
        "Most organisations have more automation ideas than implementation capacity. The challenge is deciding which opportunities are valuable, sufficiently standardised, technically feasible and safe to automate - and which processes should be redesigned first.",
        "Contetra's assessment creates a structured portfolio of automation opportunities across functions, with a recommended sequence, business case, control requirements and proof-of-value candidates.",
      ],
      positioningLine:
        "A practical automation roadmap based on process evidence - not a catalogue of AI features.",
    },
    whatWeHelp: [
      {
        icon: Search,
        title: "Process inventory and pain-point scan",
        body: "Volume, effort, delays, errors, hand-offs, systems, controls and dependency on individual knowledge.",
      },
      {
        icon: BarChart3,
        title: "Opportunity scoring",
        body: "Value, feasibility, data readiness, standardisation, risk, integration effort and change impact.",
      },
      {
        icon: Puzzle,
        title: "Solution options",
        body: "Workflow, API integration, RPA, document processing, analytics, AI assistance or agentic automation.",
      },
      {
        icon: Map,
        title: "Roadmap and governance",
        body: "Priority waves, pilots, owners, architecture principles, benefit measures, controls and change governance.",
      },
    ],
    howWeWork: [
      {
        icon: Users,
        body: "Interview process owners and review representative work.",
      },
      { icon: Gauge, body: "Quantify current effort, risk and performance." },
      { icon: Target, body: "Score opportunities and define target outcomes." },
      {
        icon: Flag,
        body: "Select pilots and establish the implementation roadmap.",
      },
    ],
    closingCta: {
      heading: "Choose the first automation with evidence",
      body: "Assess processes across finance, sales, operations, marketing and projects before committing to a platform or enterprise programme.",
      primaryCta: "Book an Automation Opportunity Assessment",
      secondaryCta: "Request a Use-Case Workshop",
    },
    secondaryCtaHref: bookingCta.href,
  },
];
