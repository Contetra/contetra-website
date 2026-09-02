import type { CaseStudy } from "@/lib/case-studies";

export interface SelectedOutcome {
  client: string;
  businessType: string;
  industry: string;
  service: CaseStudy["category"];
  serviceLabel: string;
  rootCause: string;
  intervention: string;
  result: string;
  /** Verified engagement period, e.g. "6 weeks". Leave blank rather than inventing one. */
  period: string;
}

/**
 * Top 10 curated case studies for the homepage "Selected business outcomes"
 * slider: 4 FP&A, 3 ERP, 2 Technical Accounting, 1 Training, across 6
 * industries, each with a clear problem -> intervention -> result arc.
 */
export const selectedOutcomes: SelectedOutcome[] = [
  {
    client: "CFO Bridge Services Private Limited",
    businessType: "professional services",
    industry: "Professional Services",
    service: "ERP",
    serviceLabel: "Digital Transformation",
    rootCause:
      "the business had no ERP foundation — finance and operations ran on disconnected spreadsheets and tools",
    intervention:
      "led a full ERP implementation covering requirements, BRD, CRP sessions, UAT and go-live",
    result: "a unified platform now runs the business with real-time financial visibility",
    period: "",
  },
  {
    client: "Crescentia Strategists Inc",
    businessType: "professional services",
    industry: "Professional Services",
    service: "ERP",
    serviceLabel: "Digital Transformation",
    rootCause:
      "as-is processes were misaligned to the ERP structure, causing workarounds and reporting gaps",
    intervention:
      "mapped existing workflows, identified gaps and redesigned processes to fit ERP capabilities",
    result: "workarounds were eliminated and reporting was rebuilt on clean data flows",
    period: "",
  },
  {
    client: "Godrej Housing Finance Limited",
    businessType: "financial services / NBFC",
    industry: "Financial Services / NBFC",
    service: "ERP",
    serviceLabel: "Digital Transformation",
    rootCause:
      "finance processes were undocumented, with no blueprint to configure or optimise the ERP",
    intervention:
      "ran process workshops, documented current-state workflows and designed an ERP-aligned future state",
    result: "ERP configuration was grounded in real workflows rather than generic templates",
    period: "",
  },
  {
    client: "DC Infotech and Communication Limited",
    businessType: "technology",
    industry: "Technology",
    service: "FP&A",
    serviceLabel: "Management Reporting",
    rootCause:
      "leadership was flying blind on cost management and margin erosion between quarterly reviews",
    intervention:
      "introduced monthly flash reporting and variance commentary alongside ongoing FP&A advisory",
    result:
      "proactive financial management was established and cost surprises were reduced through early-warning reporting",
    period: "",
  },
  {
    client: "Chaman Udyog",
    businessType: "manufacturing",
    industry: "Manufacturing / Industrial",
    service: "FP&A",
    serviceLabel: "Management Reporting",
    rootCause:
      "the business lacked the internal capability to run a structured annual budget and quarterly reforecast",
    intervention:
      "designed the budgeting process, ran working sessions with department heads and delivered the model",
    result:
      "the annual budget was delivered on time with department heads accountable within a structured plan",
    period: "",
  },
  {
    client: "Big Plate Cuisines LLP",
    businessType: "food & beverages",
    industry: "Food & Beverages",
    service: "FP&A",
    serviceLabel: "Management Reporting",
    rootCause:
      "business decisions were being made without reliable financial models or scenario analysis",
    intervention:
      "provided monthly advisory sessions introducing financial modelling and decision frameworks",
    result:
      "decision quality improved materially and the team now models scenarios rather than reacting to outcomes",
    period: "",
  },
  {
    client: "Biocyll Laboratories Private Limited",
    businessType: "pharma / life sciences",
    industry: "Pharma / Life Sciences",
    service: "FP&A",
    serviceLabel: "Management Reporting",
    rootCause:
      "the finance team was producing reports without a clear framework for analysis or business commentary",
    intervention: "introduced a structured reporting pack and a monthly FP&A review process",
    result:
      "management reporting improved significantly, giving leadership structured, commentary-driven insight",
    period: "",
  },
  {
    client: "Ashapura Aromas Private Limited",
    businessType: "manufacturing",
    industry: "Manufacturing / Industrial",
    service: "Technical Accounting",
    serviceLabel: "Accounting & Reporting",
    rootCause:
      "financial statements were being prepared manually without a controlled, review-based process",
    intervention: "took end-to-end ownership of financial statement preparation under Ind AS / IFRS",
    result:
      "statutory financials were delivered on time and audit-ready, meeting technical quality and disclosure standards",
    period: "",
  },
  {
    client: "Nusummit Technologies Private Limited",
    businessType: "technology",
    industry: "Technology",
    service: "Technical Accounting",
    serviceLabel: "Accounting & Reporting",
    rootCause: "the CFO needed an independent technical view on a material accounting policy decision",
    intervention: "conducted a standards analysis and provided a written advisory memo with a recommended treatment",
    result: "the accounting policy decision was made with full, independent professional backing",
    period: "",
  },
  {
    client: "Finplan International Education LLP",
    // Source record is tagged industry "Manufacturing / Industrial", but the
    // business itself is an education/training provider — kept as given.
    businessType: "education",
    industry: "Manufacturing / Industrial",
    service: "Training",
    serviceLabel: "Training",
    rootCause:
      "the business wanted to upskill newly promoted finance managers on CFO-level financial management",
    intervention: "delivered a structured programme covering FP&A, business partnering and strategic finance",
    result:
      "finance managers were equipped with strategic finance skills and cross-functional business partnering improved",
    period: "",
  },
];
