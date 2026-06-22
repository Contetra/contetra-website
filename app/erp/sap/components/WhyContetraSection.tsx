import { ChevronDown } from "lucide-react";

const reasons = [
  { title: "Finance-Led Consulting", paragraph: "We understand financial reporting, controls, compliance, and business operations\u2014not just software.", items: [] },
  { title: "Independent Functional Advisory", paragraph: "We focus on business outcomes and implementation success rather than selling licenses.", items: [] },
  { title: "Strong PMO Capabilities", items: ["Executive reporting", "Risk management", "Vendor governance", "Change management"] },
  { title: "Deep Business Process Expertise", items: ["P2P", "O2C", "R2R", "Manufacturing", "Supply Chain", "Project Accounting"] },
  { title: "Multi-Industry Experience", items: ["Real Estate", "Manufacturing", "Technology", "Logistics", "Construction", "Professional Services"] },
];

export default function WhyContetraSection() {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight md:text-[2.6rem]">Why Choose Contetra for SAP S/4HANA?</h3>
        <div className="divide-y divide-white/15 border-y border-white/15 dark:divide-[#1F2937] dark:border-[#1F2937]">
          {reasons.map((reason, index) => (
            <details key={reason.title} open={index === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-bold">
                <span>{reason.title}</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#77bcab] transition-transform duration-300 group-open:rotate-180 dark:text-[#86efac]" />
              </summary>
              <div className="pb-6 text-sm leading-7 text-white/70 dark:text-[#D1D5DB]">
                {reason.paragraph ? <p>{reason.paragraph}</p> : null}
                {reason.items.length ? <div className="flex flex-wrap gap-3">{reason.items.map((item) => <p key={item} className="border border-white/15 px-4 py-2 transition hover:border-[#50a085] hover:text-white dark:border-[#344155] dark:hover:border-[#86efac]">{item}</p>)}</div> : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
