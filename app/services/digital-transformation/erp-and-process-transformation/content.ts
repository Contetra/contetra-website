import {
  AlertTriangle,
  Bot,
  ClipboardCheck,
  ClipboardList,
  Compass,
  FileWarning,
  LifeBuoy,
  Repeat,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface ChallengeCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface CaseStudyEntry {
  client: string;
  industry: string;
  before: string;
  solution: string;
  after: string;
}

export const erpProcessTransformation = {
  eyebrow: "ERP and Process Transformation",

  hero: {
    title:
      "ERP and Process Transformation Services That Move Your Business from Manual Effort to SOP-Driven, AI-Ready Operations",
    paragraphs: [
      "Process transformation helps unlock a more productive way of working. Contetra's ERP and process transformation services helps growing and established businesses move away from spreadsheet-led, people-dependent operations and towards a documented, controlled and system-supported way of working. We combine ERP functional consulting, process design and AI-enabled automation so that your operations become faster, more reliable and ready to scale without proportionately increasing headcount.",
      "We work as an independent, platform-agnostic partner across SAP, Microsoft Dynamics, Oracle, NetSuite, Odoo, ERPNext and other enterprise systems. Our role is to protect the business outcome, not to sell a licence or a customisation. That means we start with how your business should operate, translate it into clear standard operating procedures and system requirements, and then govern the change through to adoption.",
    ],
    callout: {
      kicker:
        "Get in touch with us to transform your processes from manual operations to SOP-driven Process Transformation, and open up a wide horizon of AI use across your workflows.",
      primaryCta: "Request an ERP Diagnostic Review",
      secondaryCta: "Book an ERP Program Consultation",
    },
  },

  trustedByLabel: "Trusted by finance and business leaders",

  challenges: {
    heading:
      "Operational challenges ERP and Process Transformation service help businesses solve",
    intro:
      "Most businesses do not ask for \"process transformation\" by name. They come to us with the day-to-day symptoms of manual, disconnected operations. If any of these sound familiar, this is where we help.",
    items: [
      {
        icon: FileWarning,
        title: "Work still runs on spreadsheets and email",
        body: "Critical processes live outside the core system. Data is re-keyed between tools, versions conflict, and no single source of truth exists for management to rely on.",
      },
      {
        icon: AlertTriangle,
        title: "The ERP is live, but the business works around it",
        body: "Users bypass the system, reports do not reconcile, and the software reflects vendor defaults rather than how the business actually operates.",
      },
      {
        icon: Users,
        title: "Every process depends on specific people",
        body: "Approvals, reconciliations, follow-ups and reporting depend on individual knowledge. When a key person is away, the process stalls.",
      },
      {
        icon: Repeat,
        title: "Manual effort grows faster than the team",
        body: "Recurring tasks such as data entry, matching, status updates and reconciliations consume hours that should be spent on analysis and decisions.",
      },
      {
        icon: ClipboardList,
        title: "There are no documented SOPs",
        body: "Processes are undocumented or out of date, so training is slow, quality is inconsistent, and controls cannot be enforced or audited.",
      },
      {
        icon: Bot,
        title: "The business is not ready for AI or automation",
        body: "Leaders want to use AI in their operations, but the underlying processes are too unstructured, uncontrolled or undocumented for automation to be applied safely.",
      },
    ] as ChallengeCard[],
  },

  solutions: {
    heading: "How Contetra delivers ERP and Process Transformation",
    intro:
      "We connect three capabilities that are usually treated as separate projects: ERP functional consulting, process and SOP design, and governed automation. Bringing them together is what turns a system implementation into a genuine ERP business process transformation.",
    items: [
      {
        icon: Compass,
        title: "ERP strategy, selection and implementation",
        body: "Business case, transaction-level requirements, platform evaluation, RFP support, implementation governance, data readiness, testing and go-live. We make sure the system reflects how the business should run.",
      },
      {
        icon: ClipboardList,
        title: "Process design and SOP documentation",
        body: "As-is assessment, future-state process design, standard operating procedures, roles, controls and hand-offs. We turn tribal knowledge into documented, repeatable and auditable processes.",
      },
      {
        icon: Stethoscope,
        title: "ERP diagnostic review and health check",
        body: "An independent review of process, configuration, data, controls, reporting, governance and adoption, with a prioritised roadmap that tells you whether to stabilise, optimise, rescue or replace.",
      },
      {
        icon: LifeBuoy,
        title: "ERP project rescue and post-go-live optimisation",
        body: "For stalled, delayed or underperforming programmes: root-cause analysis, a realistic recovery plan, remediation governance and post-go-live stabilisation.",
      },
      {
        icon: ClipboardCheck,
        title: "Implementation PMO and functional consulting",
        body: "Independent programme governance, requirement traceability, partner coordination, end-to-end testing, change management and business sign-off, so the outcome stays owned by your business.",
      },
      {
        icon: Bot,
        title: "Process automation and AI enablement",
        body: "Once processes are documented and controlled, we automate the high-effort, repeatable steps and introduce governed AI agents with human approval controls, so your team focuses on judgement, not manual work.",
      },
    ] as ChallengeCard[],
  },

  caseStudies: {
    heading: "ERP and process transformation work we have delivered",
    intro:
      "A selection of engagements from our Digital Transformation practice. Explore the full set on our case studies page.",
    ctaLabel: "Browse all case studies",
    ctaHref: "/proof/case-studies",
    items: [
      {
        client: "CFO Bridge Services",
        industry: "Professional Services",
        before:
          "the business had no ERP foundation, with finance and operations running on disconnected spreadsheets and tools.",
        solution:
          "Contetra led a full ERP implementation covering requirements, BRD, CRP sessions, UAT and go-live.",
        after:
          "the business now runs on a unified platform with real-time financial visibility.",
      },
      {
        client: "Andritz Technologies",
        industry: "Technology",
        before:
          "finance processes were undocumented, with no blueprint to configure or optimise the ERP.",
        solution:
          "Contetra ran process workshops, documented current-state workflows and designed an ERP-aligned future state.",
        after:
          "process documentation was delivered and ERP configuration was grounded in real workflows, not generic templates.",
      },
      {
        client: "Aditi Tracking Support",
        industry: "Manufacturing",
        before:
          "the ERP project had stalled, with an incomplete BRD and a repeatedly deferred go-live.",
        solution:
          "Contetra took ownership of BRD finalisation, ran UAT sessions and drove the project to go-live.",
        after:
          "go-live was achieved, with documented processes and user-accepted workflows in place.",
      },
      {
        client: "B M Fashions UK",
        industry: "Apparel and Textile",
        before:
          "user acceptance testing was incomplete and go-live readiness was unclear.",
        solution:
          "Contetra structured the UAT cycle, tracked defect resolution and managed go-live sign-off.",
        after:
          "UAT was completed and go-live achieved, with business users confident in the system.",
      },
      {
        client: "Abilities India Pistons and Rings",
        industry: "Auto and Engineering",
        before:
          "the finance team needed functional expertise to configure the ERP for their business model.",
        solution:
          "Contetra provided hands-on ERP advisory across configuration review, workflow design and module optimisation.",
        after:
          "the configuration was optimised so the system reflects how the business actually operates.",
      },
      {
        client: "Cogitate Technology Solutions",
        industry: "Technology",
        before:
          "the finance team lacked structured workflows in the ERP and usage was inconsistent across the organisation.",
        solution:
          "Contetra completed BRD sign-off, ran structured UAT and oversaw go-live milestone delivery.",
        after:
          "ERP usage was standardised post go-live, with consistent workflows and documented processes embedded.",
      },
      {
        client: "Club Sulaimani Food and Beverages",
        industry: "Food and Beverages",
        before:
          "the ERP was live but the finance team lacked confidence in its outputs and reporting accuracy.",
        solution:
          "Contetra reviewed the configuration, corrected mapping errors and aligned reports to management needs.",
        after:
          "the finance team now relies on ERP output with confidence, with configuration corrected and reports validated.",
      },
      {
        client: "Beautex Industries",
        industry: "Manufacturing",
        before:
          "the business had chosen an ERP platform but lacked internal expertise to implement it effectively.",
        solution:
          "Contetra provided functional advisory across all finance modules, including AP, AR, GL and reporting.",
        after:
          "the ERP was implemented with proper finance controls embedded, and the team was trained on a sound system.",
      },
    ] as CaseStudyEntry[],
  },

  contact: {
    heading: "Process transformation helps unlock a more productive way of working",
    body: "Get in touch with us to transform your processes from manual operations to SOP-driven Process Transformation, and to enable a wide horizon of AI use across your workflows. Tell us where things stand today, from stalled implementations and workarounds to manual reporting and reconciliation, and we will help you define the right starting point.",
    phone: "+91 98338 18857",
    email: "growth@contetra.com",
    address:
      "Contetra Private Ltd, 225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar-west, Mumbai 400086",
    primaryCta: "Request an ERP Diagnostic Review",
    secondaryCta: "Book an ERP Program Consultation",
  },
};
