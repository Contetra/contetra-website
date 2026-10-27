import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const caseStudies = [
  {
    company: "Husk Power Systems Private Limited",
    subtitle: "Data Governance & Remediation",
    body: "Years of unstructured data entry had created inconsistencies that could affect ERP accuracy. Contetra designed and ran a phased data remediation program before the ERP cutover, addressing data quality issues before they entered the new system.",
    outcomes: [
      "Clean, validated data delivered into the ERP at go-live.",
      "Historical inconsistencies resolved before migration.",
      "Reduced the risk of unreliable data affecting the new ERP environment.",
    ],
  },
  {
    company: "Kale Logistics Solutions Private Limited",
    subtitle: "Finance-Led ERP Optimization",
    body: "Kale Logistics had an ERP, but key finance modules were underutilized and not optimally configured. Contetra completed the required module configuration, conducted targeted UAT, and supported the team through go-live.",
    outcomes: [
      "Full ERP capabilities activated across the relevant finance functions.",
      "Finance workflows configured and tested against business requirements.",
      "The finance team could use the system with trust after go-live.",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="How to Maximize Value"
          title="Real Logistics & Supply Chain ERP Outcomes"
          desc="A professional consultant like Contetra can help businesses evaluate and select the right solution. Our functional implementation expertise also leads to project success and desired business outcomes. Below are two examples:"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(26,22,64,0.16)] dark:border-[#1F2937] dark:bg-[#111827]">
                <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">
                    {item.company}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.body}
                  </p>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#347d68] dark:text-[#86efac]">
                      Outcomes
                    </p>
                    <ul className="space-y-1.5 list-disc pl-5 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
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
