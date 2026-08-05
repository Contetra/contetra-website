import type { IconCard, Step } from "@/lib/content";
import { Award, Banknote, BarChart3, BookOpenCheck, Bot, Boxes, Building, Building2, Compass, FileSearch, Gauge, HeartPulse, Hotel, Landmark, LineChart, ListChecks, Megaphone, Network, Plane, Puzzle, Repeat, ShieldCheck, Shirt, Sparkles, Truck, Users, Workflow, Wrench, Zap } from "lucide-react";

export const hero = {
  kicker: "Start with the business problem - not the service label",
  title: "Finance-Led",
  titleLine2: "Business Transformation",
  subtitle: "That Improves Decisions, Controls and Scale",
  paragraphs: [
    "Contetra's **finance transformation consulting** approach helps **growing and global businesses** turn fragmented numbers, disconnected systems and manual processes into a finance and operating model that management can rely on. Our specialists combine **CFO and FP&A expertise, ERP functional consulting, accounting and reporting advisory**, and AI-enabled automation to solve problems from strategy through implementation.",
    "Whether you need clearer **business performance**, a successful **ERP programme**, **audit-ready financial reporting** or **workflows** that scale without adding headcount, we bring the financial discipline and execution ownership required to make change work.",
  ],
  primaryCta: "Book a Transformation Consultation",
  secondaryCta: "Explore Our Services",
  microcopy:
    "Tell us what is slowing decisions, reporting, implementation or scale. We will help define the right starting point",
};

export const callTriggers: IconCard[] = [
  {
    icon: BarChart3,
    title: "We Have Numbers, but Not Decision-Ready Insight",
    body: "Management reporting is late, forecasts are unreliable, cash surprises recur, and teams debate whose numbers are correct.",
  },
  {
    icon: Puzzle,
    title: "Our ERP Is Live, but the Business Is Still Working Outside It",
    body: "Processes remain on spreadsheets and email, users bypass controls, reports do not reconcile, or implementation has stalled.",
  },
  {
    icon: BookOpenCheck,
    title: "The Accounting Is Getting More Complex Than the Team Can Absorb",
    body: "New standards, acquisitions, group reporting, investor requirements or audit scrutiny are stretching internal capability.",
  },
  {
    icon: Repeat,
    title: "Growth Is Adding People Faster Than Capacity",
    body: "Recurring workflows depend on manual follow-ups, rekeying, reconciliations, status updates and individual knowledge.",
  },
];

export const whereWeGetCalledIntro =
  "A finance business consultant helps management identify whether the issue sits in reporting, cash flow, accounting, ERP, workflows or operating discipline.";

export const capabilitiesHeading =
  "Four Capabilities That Support Business Transformation";

export const capabilitiesIntro =
  "Most transformation problems do not sit neatly inside one function. Weak reporting may be caused by poor processes. Poor processes may be embedded in the ERP. Manual work may persist because controls and data were never redesigned. Contetra connects these issues instead of treating them as separate projects.";

export const capabilities: IconCard[] = [
  {
    icon: LineChart,
    title: "Fractional CFO, FP&A & Performance Management",
    body: "Build reliable plans, [cash-flow visibility](/strategic-business-financial-management-solutions), management reporting, profitability insight and decision discipline - without waiting to hire a full-time senior finance team.",
    href: "/services/fractional-cfo-fpa",
  },
  {
    icon: Boxes,
    title: "ERP Implementation, Diagnostic Review & Transformation",
    body: "Select, design, implement and improve ERP systems around real business processes, with independent functional leadership across finance, operations, data, testing and adoption.",
    href: "/services/erp-implementation",
  },
  {
    icon: BookOpenCheck,
    title: "Accounting & Reporting Consulting",
    body: "Resolve complex accounting matters, prepare audit-ready [financial statements](/services/accounting-reporting), accelerate close, support transactions and strengthen readiness for investors, lenders and public markets.",
    href: "/services/accounting-reporting",
  },
  {
    icon: Bot,
    title: "Agentic AI & Business Workflow Automation",
    body: "Redesign and [automate workflows](/automation) across finance, sales, operations, marketing and project management using governed AI agents, integrations and human approval controls.",
    href: "/services/agentic-ai-automation",
  },
];

export const approachSteps: Step[] = [
  {
    icon: FileSearch,
    body: "Diagnose the root cause across people, process, data, systems and governance.",
  },
  {
    icon: Compass,
    body: "Define the future-state operating model and prioritised transformation roadmap.",
  },
  {
    icon: ListChecks,
    body: "Translate business requirements into financial models, policies, workflows, controls and system designs.",
  },
  {
    icon: Users,
    body: "Work alongside management, internal teams and technology vendors through implementation.",
  },
  {
    icon: Gauge,
    body: "Establish ownership, dashboards, review rhythms and documentation so improvements continue after handover.",
  },
];

export const whyContetra: IconCard[] = [
  {
    icon: Compass,
    title: "Finance-led, not tool-led",
    body: "We start with how the business makes money, manages cash, closes books, reports performance and controls risk. Technology is selected and configured around those requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Independent and ERP-agnostic",
    body: "Our role is to protect the business outcome. We can evaluate and work across SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext and other platforms without forcing a predetermined answer.",
  },
  {
    icon: Wrench,
    title: "Advisory that reaches implementation",
    body: "We do not leave the team with a presentation and a list of recommendations. We help build the models, requirements, controls, reports, workflows and governance needed to execute.",
  },
  {
    icon: Award,
    title: "Senior expertise with practical delivery",
    body: "Complex issues receive senior attention, while work is translated into usable outputs for finance teams, business users, implementation partners, auditors and management.",
  },
];

export const outcomes: string[] = [
  "Released working capital and reduced cash-flow volatility through receivables, inventory and payment discipline.",
  "Improved profitability visibility by product, customer, project, branch or business segment.",
  "Accelerated ERP adoption by converting business needs into transaction-level requirements, controls and user testing.",
  "Reduced close and audit friction through reconciliations, schedules, technical accounting documentation, clear ownership and [IPO readiness support](/services/fractional-cfo-fpa/ipo-readiness).",
  "Removed recurring manual effort through workflow, reporting and reconciliation automation.",
];

export const outcomesIntro = "Use verified client outcomes in this section.";

export const outcomesTestimonialsHeading = "Trusted by finance and business leaders";

export const outcomesTestimonialsIntro =
  "Management teams, finance leaders and promoters on working with Contetra.";

export const whoWeWorkWith = {
  body: "We support promoter-led businesses, growth-stage companies, multi-entity groups, finance leaders and global organisations that need specialist capability without building every skill in-house. Our experience is particularly relevant to manufacturing, retail and consumer, logistics, technology, professional services, healthcare and other operationally complex businesses.",
  segments: [
    { icon: Building2, label: "Manufacturing" },
    { icon: Landmark, label: "Retail & Consumer" },
    { icon: Truck, label: "Logistics" },
    { icon: Sparkles, label: "Technology" },
    { icon: Users, label: "Professional Services" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: Banknote, label: "Financial Services / NBFC" },
    { icon: Building, label: "Real Estate" },
    { icon: Wrench, label: "Auto / Engineering" },
    { icon: Plane, label: "Aviation" },
    { icon: Zap, label: "Energy / Utilities" },
    { icon: Megaphone, label: "Media & Communications" },
    { icon: Shirt, label: "Apparel / Textile" },
    { icon: Hotel, label: "Hospitality" },
    { icon: Network, label: "Diversified / Conglomerate" },
  ],
};

export const orbitWords: string[] = [
  "SOC 2 Compliant",
  "1000+ workflows",
  "99.9% accuracy",
  "Reconciled exceptions",
  "MIS report ready",
  "Live monitoring of agents",
  "Audit trail",
  "Built-in Observability",
];
