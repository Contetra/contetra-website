import type { IconCard, PlatformItem, FaqItem, EngagementStep } from "@/lib/content";
import { Banknote, Blocks, Boxes, Building2, CalendarClock, ClipboardCheck, ClipboardList, Cloud, Compass, Database, FileQuestionMark, FileSearch, FileWarning, Gauge, Globe, GraduationCap, Handshake, HardDrive, Layers, LayoutDashboard, Lightbulb, ListChecks, ListFilter, PenTool, Plug, Puzzle, RefreshCcw, Repeat, Rocket, Share2, ShieldOff, Stethoscope, Target, Timer, TrendingDown, TrendingUp, TriangleAlert, UserCog, Users, Wallet, Workflow } from "lucide-react";
import { createElement } from "react";
import { FpaForm } from "./components/fpa-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const cfoFpaService = {
  hero: {
    eyebrow: "Fractional CFO & FP&A",
    title:
      "Fractional CFO and FP&A Services for Better Cash Flow, Profitability and Business Control",
    paragraphs: [
      "Accounting tells you what happened. A strong management finance function explains why it happened, what is likely to happen next and which actions management should take now.",
      "Contetra provides fractional CFO, virtual CFO and outsourced FP&A support to businesses that need senior financial leadership, stronger planning and decision-ready reporting - without immediately building a full in-house team. We work with owners, CEOs, CFOs and finance teams to convert financial and operating data into cash-flow discipline, profitable growth and more confident decisions.",
    ],
    callout: {
      kicker: "Build the finance capability your next stage requires",
      subline:
        "Begin with a focused review of reporting, planning, cash, profitability and the finance operating model.",
      primaryCta: "Book a CFO & FP&A Diagnostic",
      secondaryCta: "See Relevant Case Studies",
    },
  },

  whenToCall: [
    {
      icon: Wallet,
      title: "Cash is tight despite reported profit",
      body: "Receivables, inventory, advances, payment terms or project economics are consuming cash, but management lacks an integrated working-capital view.",
    },
    {
      icon: CalendarClock,
      title: "Budgets become obsolete quickly",
      body: "The annual plan is not linked to business drivers, ownership is unclear and there is no rolling forecast or scenario discipline.",
    },
    {
      icon: FileWarning,
      title: "MIS is late or descriptive",
      body: "Reports explain last month but do not isolate root causes, quantify decisions or identify the actions required from each function.",
    },
    {
      icon: TrendingDown,
      title: "Growth is not translating into margin",
      body: "Pricing, product mix, customer economics, utilisation, incentives or overhead absorption are not sufficiently visible.",
    },
    {
      icon: UserCog,
      title: "The founder remains the finance control system",
      body: "Critical approvals, cash decisions, negotiations and performance reviews depend on one person because governance and delegation have not matured.",
    },
    {
      icon: Rocket,
      title: "A transaction or scale event is approaching",
      body: "Fundraising, debt, acquisition, geographic expansion or IPO preparation requires stronger forecasts, controls, reporting and finance leadership.",
    },
  ] as IconCard[],

  whatWeCover: [
    {
      icon: Target,
      title: "Strategic financial planning",
      body: "Annual operating plans, driver-based budgets, rolling forecasts, scenarios, sensitivity analysis and finance-linked business targets.",
    },
    {
      icon: Banknote,
      title: "Cash flow and working capital",
      body: "13-week cash forecasts, collections governance, inventory and payables analysis, funding requirements, covenant visibility and cash review rhythms.",
    },
    {
      icon: TrendingUp,
      title: "Profitability and pricing",
      body: "Product, customer, project, channel, branch and segment economics; contribution analysis; pricing models; break-even views and margin improvement actions.",
    },
    {
      icon: LayoutDashboard,
      title: "MIS, dashboards and board reporting",
      body: "Monthly management packs, KPI trees, budget-versus-actual analysis, trend and variance commentary, board packs and decision-oriented dashboards.",
    },
    {
      icon: Handshake,
      title: "Capital and growth decisions",
      body: "Business cases, feasibility models, capital allocation, fundraising materials, lender packs, acquisition support and investment-return analysis.",
    },
    {
      icon: Workflow,
      title: "Finance operating model",
      body: "Close calendar, roles, review cadence, policies, controls, team capability, system requirements and the roadmap for an increasingly scalable finance function.",
    },
  ] as IconCard[],

  decisionSystem: {
    paragraph1:
      "Our role is not to add another spreadsheet or present a dashboard that management views once a month. We design a management rhythm in which the right metrics are reviewed at the right frequency, owners understand the drivers behind variances, decisions are recorded and follow-through is visible.",
    paragraph2:
      "The specific deliverables vary, but the objective is consistent: connect operational performance to financial outcomes early enough for management to act.",
  },

  engagementModel: [
    {
      icon: FileSearch,
      title: "Finance diagnostic",
      body: "Review data quality, reporting, planning, cash, profitability, systems, controls and current team capacity.",
    },
    {
      icon: Compass,
      title: "Priority roadmap",
      body: "Define immediate interventions, recurring management routines and capability-building priorities.",
    },
    {
      icon: ListChecks,
      title: "Build the management model",
      body: "Create forecasts, dashboards, analytical models, policies and review packs around agreed business drivers.",
    },
    {
      icon: Users,
      title: "Embed ownership",
      body: "Run management reviews, coach internal teams and assign actions to finance and business owners.",
    },
    {
      icon: Lightbulb,
      title: "Improve decisions",
      body: "Use insight to address pricing, working capital, cost, growth, capital and execution decisions.",
    },
    {
      icon: RefreshCcw,
      title: "Transfer and scale",
      body: "Document the model, automate repeatable work and evolve the internal finance organisation as the business grows.",
    },
  ] as EngagementStep[],

  deliverables: [
    "A concise monthly management pack with a clear executive narrative - not a data dump.",
    "A rolling view of cash, funding headroom and the operational drivers affecting liquidity.",
    "Forecasts that can be updated when volume, price, mix, capacity, cost or timing changes.",
    "Profitability views aligned to how the business actually manages products, customers, projects and locations.",
    "A documented list of decisions, owners, timelines and expected financial impact.",
    "A finance roadmap showing what should remain outsourced, what should be built in-house and what should be automated.",
  ],

  whyContetra: [
    {
      icon: Building2,
      title: "Built for operating businesses",
      body: "Our work connects finance to sales, procurement, production, projects, inventory, service delivery and other business drivers.",
    },
    {
      icon: Gauge,
      title: "CFO insight plus implementation support",
      body: "We help management decide - and also help finance teams build the models, reports, controls and routines required to execute.",
    },
    {
      icon: Puzzle,
      title: "Connected to ERP and automation",
      body: "Where reporting or planning problems originate in systems and processes, our ERP and automation specialists can address the underlying cause.",
    },
    {
      icon: Repeat,
      title: "Flexible senior capability",
      body: "Engagements can begin with a specific problem, diagnostic or recurring retainer and evolve with the organisation's needs.",
    },
  ] as IconCard[],

  faqs: [
    {
      question:
        "What is the difference between a fractional CFO and a virtual CFO?",
      answer:
        'A fractional CFO usually works as a part-time member of the leadership team with a defined operating cadence. "Virtual CFO" often describes remote delivery. In practice, the right model may be remote, on-site or hybrid and should be defined by the decisions and level of involvement required.',
    },
    {
      question: "How is FP&A different from accounting?",
      answer:
        "Accounting records and reports completed transactions. FP&A uses financial and operating information to plan, forecast, analyse performance and support future decisions. Both functions must connect, but they solve different management needs.",
    },
    {
      question: "Can you work with our existing CFO or finance controller?",
      answer:
        "Yes. Contetra can provide additional FP&A capacity, specialist modelling, management reporting, project support or an independent perspective without replacing the existing finance leader.",
    },
    {
      question:
        "How quickly can the engagement begin producing useful insight?",
      answer:
        "A focused diagnostic and initial management pack can often identify immediate priorities early in the engagement. The time required to build a reliable recurring model depends on data quality, business complexity and the availability of internal owners.",
    },
    {
      question: "Do you build Power BI dashboards?",
      answer:
        "Where appropriate, we can help define KPI logic, data requirements, dashboard structure and management use cases, and support implementation through Power BI or other reporting tools. The dashboard is treated as part of the decision process, not as a standalone visualisation project.",
    },
  ] as FaqItem[],

  closingCta: {
    heading:
      "Give management a clearer view of what is changing - and what to do next",
    body: "Discuss your current cash-flow, reporting, planning or profitability challenge with a finance transformation specialist.",
    primaryCta: "Book a CFO & FP&A Diagnostic",
    secondaryCta: "Explore MIS & Dashboard Services",
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
