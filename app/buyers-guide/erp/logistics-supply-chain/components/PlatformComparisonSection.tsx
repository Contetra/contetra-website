import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const platforms = [
  {
    name: "SAP S/4HANA",
    size: "Global Enterprises",
    model: "Complex Multi-tier Manufacturing & Global Distribution",
    strengths: [
      "Global multi-entity financial consolidation",
      "Industrial-grade material requirements planning (MRP)",
      "Handle massive, hyper-complex transaction volumes",
    ],
  },
  {
    name: "Oracle Fusion Cloud SCM",
    size: "Large Enterprises",
    model: "Global Logistics Network Orchestration & Sourcing",
    strengths: [
      "Advanced predictive supply chain planning and forecasting",
      "Deep global trade, customs, and compliance management",
      "Complete data native connection across global business lines",
    ],
  },
  {
    name: "Microsoft Dynamics 365",
    size: "Mid-Market to Enterprise",
    model: "Automated Warehousing & Asset-Heavy Logistics",
    strengths: [
      "Out-of-the-box integration with the Microsoft ecosystem",
      "IoT support for automated warehouse floor machinery",
      "High configurability for unique material handling processes",
    ],
  },
  {
    name: "Oracle NetSuite",
    size: "Mid-Market & Scale-Ups",
    model: "Multi-Location B2B Wholesale Distribution",
    strengths: [
      "Time-to-value for rapid-growth product companies",
      "Strong real-time global inventory valuation (landed costs)",
      "Unified platform syncing order management instantly to financials",
    ],
  },
  {
    name: "Odoo",
    size: "Small to Mid-Market",
    model: "Multi-Tenant 3PL & Modern E-Commerce Fulfillment",
    strengths: [
      "Flexible, modern user interface with modular apps",
      "Open-source core allows low-cost customization for unique workflows",
      "Dynamic community marketplace for localized freight integrations",
    ],
  },
  {
    name: "ERPNext",
    size: "Small and Medium Business",
    model: "Lean Wholesale Distribution & Light Manufacturing",
    strengths: [
      "Extremely cost-effective open-source pricing layout",
      "Clean out-of-the-box inventory tracking and serial number control",
      "Lightweight architecture easy for non-technical teams to manage",
    ],
  },
];

export default function PlatformComparisonSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Platform Comparison"
          title="What Are the Best Logistics & Supply Chain ERPs?"
          desc="Businesses consider a range of factors to choose the right ERP platform for their requirements. Below we explore the most popular platforms with key considerations."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <ScrollReveal key={platform.name} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                <h3 className="text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                  {platform.name}
                </h3>
                <dl className="mt-4 space-y-3 border-t border-[#eef1f8] pt-4 text-sm dark:border-[#1F2937]">
                  <div>
                    <dt className="font-semibold text-[#1a1640] dark:text-white">
                      Target Business Size
                    </dt>
                    <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                      {platform.size}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1a1640] dark:text-white">
                      Ideal SCM/Logistics Operating Model
                    </dt>
                    <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                      {platform.model}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-[#eef1f8] pt-4 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:border-[#1F2937] dark:text-[#86efac]">
                  Special Strengths &amp; USPs
                </p>
                <ul className="mt-2 space-y-1.5">
                  {platform.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-start gap-2 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#50a085] dark:text-[#86efac]"
                      />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
