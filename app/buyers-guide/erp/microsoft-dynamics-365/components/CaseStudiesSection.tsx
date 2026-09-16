import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const studies = [
  {
    company: "Fashion Retail & Distribution Business",
    product: "Dynamics 365 Business Central",
    body: "A growing fashion retailer was implementing Microsoft Dynamics 365 Business Central but continued to experience process breakdowns despite working with a technical implementation partner. Seasonal collections, rapid inventory turnover, multi-channel sales and supplier coordination required a stronger functional implementation approach.",
    outcomes: [
      "Achieved approximately 95% fit-to-business processes, minimizing workarounds",
      "Improved order fulfilment through unified stock allocation across wholesale and retail channels, eliminating manual reconciliations",
      "Reduced purchase planning errors by automating supplier lead-time tracking and integrating shipment schedules into inventory forecasts",
      "Reduced SKU creation time by 60% using standardized item master data and approval workflows inside Business Central",
    ],
  },
  {
    company: "Global Manufacturing Company (Glass Manufacturing)",
    product: "Dynamics 365 Business Central",
    body: "A global glass manufacturer implemented Microsoft Dynamics 365 Business Central to unify finance, procurement, production, inventory and sales within a single system — replacing legacy systems, manual workflows and disconnected modules that were causing delays, inaccuracies and limited real-time visibility.",
    outcomes: [
      "Established a single source of truth across finance, supply chain and operations",
      "Automated compliance reporting aligned with local and international standards",
      "Streamlined procure-to-pay and order-to-cash cycles",
      "Real-time inventory visibility and automated replenishment planning",
    ],
  },
  {
    company: "Certified Organic Export Business",
    product: "Dynamics 365 Business Central",
    body: "A certified organic exporter implemented Microsoft Dynamics 365 Business Central to digitize and standardize its farm-to-export supply chain, addressing traceability gaps, disconnected procurement and quality systems, and the regulatory complexity of maintaining international organic certifications.",
    outcomes: [
      "End-to-end traceability from farm-level procurement through export shipment",
      "Real-time dashboards for production planning, shipment tracking and profitability analysis",
      "Automated compliance reporting aligned with international organic standards",
      "Integrated finance, inventory and quality modules for improved accuracy",
    ],
  },
  {
    company: "Professional Services Consulting Firm",
    product: "Dynamics 365 Business Central",
    body: "A rapidly growing consulting firm implemented Microsoft Dynamics 365 Business Central, integrated with project accounting, timesheets and billing workflows, to connect project delivery with finance, replacing separate tools and spreadsheets that offered no real-time visibility into billing, WIP or revenue leakage.",
    outcomes: [
      "Integrated project-to-cash lifecycle: resource planning, timesheets, billing and collections",
      "Automated invoicing based on effort, milestones or fixed-fee contracts",
      "Improved cash flow forecasting and reduced DSO through streamlined collections",
      "Real-time visibility into project margins, WIP and team utilization",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Microsoft Dynamics 365 Client Success Stories" />

        <div className="grid gap-6 lg:grid-cols-2">
          {studies.map((study, index) => (
            <ScrollReveal key={study.company} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{study.product}</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">{study.company}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <p className="text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{study.body}</p>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86efac]">
                      Business Outcomes
                    </p>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#50a085] dark:text-[#86efac]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
