import type { IconCard, PlatformItem, FaqItem } from "@/lib/content";
import { Blocks, Boxes, ClipboardCheck, ClipboardList, Cloud, Database, FileQuestionMark, Globe, GraduationCap, HardDrive, Layers, ListFilter, PenTool, Plug, Share2, ShieldOff, Stethoscope, Timer, TriangleAlert, Users } from "lucide-react";
import { createElement } from "react";
import { ErpForm } from "./components/erp-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const erpImplementationService = {
  hero: {
    eyebrow: "ERP Implementation",
    title:
      "ERP Implementation and Diagnostic Review Led by Business Process and Finance Experts",
    paragraphs: [
      "An ERP implementation succeeds when the system reflects how the business should operate - not when the software has simply been configured and switched on.",
      "Contetra provides independent, ERP-agnostic functional consulting across selection, process design, implementation governance, data readiness, testing, change management and post-go-live optimisation. We translate management priorities and transaction-level business requirements into a system design that users can adopt, controls can rely on and leadership can report from.",
      "We work with internal teams and technology partners across SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext and other enterprise platforms. Our role is to protect the business outcome throughout the programme. That includes the parts of the design most often left until last: chart of accounts and dimension structure, costing method and inventory valuation, three-way match tolerances, sub-ledger to general ledger reconciliation, and the GST, TDS and audit-trail requirements the system must satisfy in India.",
    ],
    callout: {
      kicker: "Do not commit the next phase on assumptions",
      subline:
        "A diagnostic review can identify whether the root issue sits in process, configuration, data, controls, reporting, governance or adoption.",
      primaryCta: "Request an ERP Diagnostic Review",
      secondaryCta: "Discuss an ERP Programme",
    },
  },

  whyProgrammesUnderperform: [
    {
      icon: FileQuestionMark,
      title: "The system was selected before the requirements were understood",
      body: "Feature demonstrations replaced transaction-level requirements, process decisions and total-cost evaluation.",
    },
    {
      icon: ShieldOff,
      title: "The implementation partner owns the design by default",
      body: "Business teams cannot challenge assumptions because requirements, controls and operating priorities were never translated into a clear blueprint.",
    },
    {
      icon: HardDrive,
      title: "Data migration is treated as a technical workstream",
      body: "Masters, opening balances, mapping, reconciliations and historical data are not owned by the business early enough.",
    },
    {
      icon: ClipboardCheck,
      title: "Testing proves screens - not end-to-end outcomes",
      body: "UAT confirms transactions can be entered, but does not validate accounting, controls, exceptions, reports and cross-functional hand-offs.",
    },
    {
      icon: Timer,
      title: "Change management begins near go-live",
      body: "Users are trained on clicks without understanding new roles, controls, decisions or the reason processes have changed.",
    },
    {
      icon: TriangleAlert,
      title: "Go-live is mistaken for completion",
      body: "Open issues, workarounds, reporting gaps and adoption problems remain unresolved because stabilisation and optimisation were not designed into the programme.",
    },
  ] as IconCard[],

  howWeSupport: [
    {
      icon: ListFilter,
      title: "ERP strategy and selection",
      body: "Business case, requirements, platform evaluation, RFP support, vendor assessment, demonstrations, scoring, TCO and implementation roadmap.",
    },
    {
      icon: PenTool,
      title: "Process and solution design",
      body: "As-is assessment, future-state process design, transaction-level BRDs, roles, controls, integrations, reports and fit-gap decisions. Chart of accounts and dimension design, costing method, revenue recognition treatment and three-way match tolerances are settled at this stage rather than discovered during the first close.",
    },
    {
      icon: ClipboardList,
      title: "Programme governance and PMO",
      body: "Plan, decision governance, RAID management, scope control, partner coordination, steering committee reporting and milestone assurance.",
    },
    {
      icon: Plug,
      title: "Data, configuration and integration readiness",
      body: "Master-data design, cleansing, migration strategy, mapping, reconciliation, configuration validation and interface requirements.",
    },
    {
      icon: GraduationCap,
      title: "Testing, training and change",
      body: "Scenario-based UAT, defect prioritisation, cutover readiness, role-based training, SOPs, communication and adoption tracking.",
    },
    {
      icon: Stethoscope,
      title: "Diagnostic review, rescue and optimisation",
      body: "Independent health checks, root-cause analysis, recovery plans, post-go-live stabilisation, controls remediation and reporting improvement.",
    },
  ] as IconCard[],

  diagnosticReview: {
    intro:
      "The diagnostic is designed for organisations that are unsure whether to upgrade, replace, rescue or optimise the current environment. It creates an independent fact base before further investment.",
    items: [
      "Business objectives and the original ERP case for change.",
      "Process design, workarounds and activities occurring outside the system.",
      "Configuration, customisation and fit with operating requirements.",
      "Data quality, master-data governance, migration history and reconciliation issues.",
      "Financial controls, approvals, segregation of duties and auditability.",
      "Statutory and tax fit: GST return and e-invoicing data, e-way bill triggers, TDS and TCS capture at the transaction, and the audit trail required under the Companies (Accounts) Rules.",
      "Reporting, consolidation, MIS and management information gaps.",
      "Programme governance, implementation-partner performance and unresolved decisions.",
      "User adoption, training, support and change readiness.",
      "Quick wins, remediation priorities and strategic options with dependencies.",
    ],
    output: {
      label: "Diagnostic output",
      body: "A prioritised gap register and roadmap that distinguishes immediate stabilisation, process and control corrections, configuration improvements, data work, integration needs and longer-term platform decisions.",
    },
  },

  independentLeadership: {
    paragraph1:
      "Contetra is not engaged to maximise software licences or custom development. We help management make informed trade-offs between standardisation and differentiation, control and speed, short-term convenience and long-term maintainability.",
    paragraph2:
      "Because our teams understand finance, reporting and operating processes, we can challenge both the business and the implementation partner constructively. This reduces ambiguity, accelerates decisions and protects the intended business benefits.",
  },

  goodGovernance: [
    "Named process owners with decision rights - not only key users who attend workshops.",
    "A controlled requirements baseline with traceability from need to design, configuration, test and sign-off.",
    "Transparent open decisions, risks, assumptions, dependencies and benefits.",
    "Business-owned data quality and reconciliation sign-offs.",
    "Sub-ledger to general ledger reconciliation, period locks and back-dated posting rules agreed before go-live, not after the first close.",
    "End-to-end testing that includes accounting impact, controls, exceptions and reports.",
    "A realistic cutover and stabilisation plan with defined exit criteria.",
    "Benefits tracked after go-live, including adoption, cycle time, reporting quality and reduction of workarounds.",
  ],

  platformsIntro:
    "Contetra can provide ERP-agnostic advisory and functional support across the following environments, subject to project scope and required technical specialisation:",

  platforms: [
    { icon: Database, label: "SAP S/4HANA, SAP ECC and SAP Business One" },
    {
      icon: Boxes,
      label: "Microsoft Dynamics 365 Finance & Operations and Business Central",
    },
    { icon: Cloud, label: "Oracle Fusion Cloud ERP and Oracle E-Business Suite" },
    { icon: Globe, label: "Oracle NetSuite" },
    { icon: Blocks, label: "Odoo and ERPNext/Frappe" },
    { icon: Layers, label: "Infor, Sage and other industry or mid-market platforms" },
    {
      icon: Share2,
      label:
        "Connected systems including CRM, HRMS, WMS, project systems, banking, tax, reporting and workflow tools",
    },
  ] as PlatformItem[],

  faqs: [
    {
      question:
        "What is the difference between an ERP implementation partner and an independent ERP consultant?",
      answer:
        "An implementation partner configures and deploys the selected platform. An independent consultant helps the business define requirements, evaluate options, govern design and implementation, challenge trade-offs and protect the business outcome. The two roles should collaborate but should not be confused.",
    },
    {
      question: "When should we conduct an ERP diagnostic review?",
      answer:
        "A diagnostic is useful before replacement or upgrade, when benefits have not materialised, when users work outside the system, when reporting or controls remain weak, or when an implementation is delayed, over budget or disputed.",
    },
    {
      question: "Can Contetra rescue an ERP project already in progress?",
      answer:
        "Yes. A rescue engagement typically reviews scope, governance, requirements, data, design, testing, partner performance and readiness, then develops a recovery plan with clear decisions, ownership and milestones.",
    },
    {
      question: "Do you provide technical implementation resources?",
      answer:
        "Contetra's core role is finance-led functional consulting, process design, governance, testing and transformation. Technical configuration and development may be delivered with the client's selected technology partner or appropriately qualified specialists.",
    },
    {
      question: "How do you remain ERP-agnostic?",
      answer:
        "We assess fit against business requirements, process complexity, data needs, controls, integration, scalability, total cost and implementation risk rather than starting with a predetermined product.",
    },
  ] as FaqItem[],

  closingCta: {
    heading: "Make the ERP decision on evidence - not implementation fatigue",
    body: "Use an independent diagnostic or programme consultation to clarify the current state, root causes and the most defensible next step.",
    primaryCta: "Request an ERP Diagnostic Review",
    secondaryCta: "Book an ERP Programme Consultation",
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
        "Request an ERP Diagnostic Review",
      ),
    }),
  },
};
