export interface NavLink {
  label: string;
  href: string;
  /** Nested sub-links, rendered as a flyout (desktop) or expandable row (mobile). */
  children?: NavLink[];
}

export interface NavGroup {
  label: string;
  href: string;
  /** Omit (or leave empty) to render this entry as a plain top-level link instead of a dropdown. */
  links?: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    links: [
      {
        label: "Fractional CFO & FP&A",
        href: "/services/fractional-cfo-fpa",
        children: [
          { label: "Fractional CFO & FP&A", href: "/services/fractional-cfo-fpa" },
          { label: "IPO Readiness", href: "/services/fractional-cfo-fpa/ipo-readiness" },
          {
            label: "Fractional CFO Services",
            href: "/services/fractional-cfo-fpa/fractional-cfo-services",
          },
          {
            label: "Working Capital & Cash-Flow Advisory",
            href: "/services/fractional-cfo-fpa/working-capital-cashflow-advisory",
          },
          {
            label: "MIS Reporting & Financial Dashboards",
            href: "/services/fractional-cfo-fpa/mis-reporting-dashboards",
          },
          { label: "FP&A Services", href: "/services/fractional-cfo-fpa/fpa-services" },
        ],
      },
      {
        label: "ERP Transformation",
        href: "/services/erp-implementation",
        children: [
          {
            label: "ERP Transformation",
            href: "/services/erp-implementation",
          },
          {
            label: "ERP Diagnostic Review & Health Check",
            href: "/services/erp-implementation/erp-diagnostic-review",
          },
          {
            label: "ERP Selection & Evaluation Advisory",
            href: "/services/erp-implementation/erp-selection-evaluation",
          },
          {
            label: "ERP Implementation PMO & Functional Consulting",
            href: "/services/erp-implementation/erp-implementation-pmo",
          },
          {
            label: "ERP Project Rescue & Post-Go-Live Optimisation",
            href: "/services/erp-implementation/erp-project-rescue",
          },
          {
            label: "SAP S/4HANA Implementation & Migration Consulting",
            href: "/services/erp-implementation/sap-s4hana-consulting",
          },
          {
            label: "Microsoft Dynamics 365 ERP Consulting",
            href: "/services/erp-implementation/microsoft-dynamics-365-consulting",
          },
          {
            label: "Oracle Fusion Cloud ERP Consulting",
            href: "/services/erp-implementation/oracle-fusion-cloud-consulting",
          },
          {
            label: "Oracle NetSuite Implementation Consulting",
            href: "/services/erp-implementation/netsuite-implementation-consulting",
          },
          {
            label: "Odoo Implementation Consulting",
            href: "/services/erp-implementation/odoo-implementation-consulting",
          },
          {
            label: "ERPNext Implementation Consulting",
            href: "/services/erp-implementation/erpnext-implementation-consulting",
          },
        ],
      },
      {
        label: "Accounting & Reporting",
        href: "/services/accounting-reporting",
        children: [
          {
            label: "Accounting & Reporting",
            href: "/services/accounting-reporting",
          },
          {
            label: "Technical Accounting Advisory",
            href: "/services/accounting-reporting/technical-accounting-advisory",
          },
          {
            label: "Financial Statement Preparation & Accounting Support",
            href: "/services/accounting-reporting/financial-statement-preparation",
          },
          {
            label: "Audit Support & Close Acceleration",
            href: "/services/accounting-reporting/audit-support-close-acceleration",
          },
          {
            label: "Ind AS, IFRS & US GAAP Conversion",
            href: "/services/accounting-reporting/gaap-conversion",
          },
          {
            label: "Transaction Accounting Advisory",
            href: "/services/accounting-reporting/transaction-accounting-advisory",
          },
          {
            label: "Financial Due Diligence & Quality of Earnings",
            href: "/services/accounting-reporting/financial-due-diligence",
          },
        ],
      },
      {
        label: "Agentic AI Automation",
        href: "/services/agentic-ai-automation",
        children: [
          {
            label: "Agentic AI Automation",
            href: "/services/agentic-ai-automation",
          },
          {
            label: "Agentic AI & AI Agent Development",
            href: "/services/agentic-ai-automation/ai-agent-development",
          },
          {
            label: "Finance & Reporting Automation",
            href: "/services/agentic-ai-automation/finance-reporting-automation",
          },
          {
            label: "Sales & Marketing Workflow Automation",
            href: "/services/agentic-ai-automation/sales-marketing-automation",
          },
          {
            label: "Operations & Project Workflow Automation",
            href: "/services/agentic-ai-automation/operations-project-automation",
          },
          {
            label: "Automation Opportunity Assessment & Roadmap",
            href: "/services/agentic-ai-automation/automation-opportunity-assessment",
          },
        ],
      },
      {
        label: "ERP Functional Implementation",
        href: "/erp-implementation-solutions",
      },
      {
        label: "FP&A + Business Finance Services",
        href: "/strategic-business-financial-management-solutions",
      },
      {
        label: "MCA - Struck off companies",
        href: "/strike-that",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Retail & Consumer", href: "/industries/retail-consumer" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Technology & SaaS", href: "/industries/technology-saas" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Multi-entity Groups", href: "/industries/multi-entity-groups" },
    ],
  },
  {
    label: "Proof",
    href: "/proof",
    links: [
      { label: "Case Studies", href: "/proof/case-studies" },
      { label: "E-Books", href: "/ebooks" },
      { label: "Client Stories", href: "/proof/client-stories" },
      { label: "Experts", href: "/proof/experts" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export const primaryCta = {
  label: "Book a Transformation Consultation",
  href: "/contact-us",
};

export const footerNav = {
  services: [
    {
      label: "Technical Accounting & International GAAP Consultancy",
      href: "/services/accounting-reporting",
    },
    {
      label: "ERP Functional Implementation",
      href: "/services/erp-implementation",
    },
    {
      label: "FP&A + Business Finance Services",
      href: "/services/fractional-cfo-fpa",
    },
    {
      label: "MCA - Struck off companies",
      href: "/strike-that",
    },
  ] as NavLink[],
  company: [
    { label: "Ebooks", href: "/ebooks" },
    { label: "Contact Us", href: "/contact-us" },
  ] as NavLink[],
  further: [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ] as NavLink[],
};

export interface ComingSoonRoute {
  slug: string;
  label: string;
  group: string;
}

/** Every nav link that isn't the homepage gets a scaffolded "coming soon" route so navigation never 404s. */
export const comingSoonRoutes: ComingSoonRoute[] = [
  ...navGroups
    .filter((group) => group.links && group.links.length > 0)
    .map((group) => ({ slug: group.href, label: group.label, group: "Overview" })),
  ...navGroups.flatMap((group) =>
    (group.links ?? []).map((link) => ({ slug: link.href, label: link.label, group: group.label }))
  ),
];
