import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is SAP S/4HANA?", a: "SAP S/4HANA is SAP's next-generation ERP platform built on the HANA in-memory database, enabling real-time business operations and analytics." },
  { q: "How long does a SAP S/4HANA implementation take?", a: "Depending on scope, complexity, and number of entities, implementations typically range from 6 to 18 months." },
  { q: "Can SAP S/4HANA support multiple companies and subsidiaries?", a: "Yes. SAP S/4HANA is designed for complex multi-company, multi-country, and multi-currency environments." },
  { q: "Does Contetra implement SAP S/4HANA directly?", a: "Contetra acts as the finance-led functional consulting and PMO partner, ensuring SAP aligns with business requirements, governance needs, and transformation objectives while coordinating with technical implementation partners." },
  { q: "Can Contetra help with SAP migration readiness?", a: "Yes. We conduct ERP diagnostics, process assessments, data readiness reviews, SAP migration roadmaps, and implementation governance support." },
];

export default function FaqSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-[8px] border border-[#e2e8e6] bg-white px-6 shadow-[0_4px_16px_rgba(26,22,64,0.05)] transition open:border-[#50a085]/50 dark:border-[#1F2937] dark:bg-[#111827] dark:open:border-[#86efac]/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-bold text-[#1a1640] dark:text-white">
                <h4>{faq.q}</h4>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#50a085] transition-transform duration-300 group-open:rotate-180 dark:text-[#86efac]" />
              </summary>
              <p className="border-l-4 border-[#50a085] bg-[#eaf6f2] px-5 py-4 text-sm leading-7 text-[#3f4352] dark:border-[#86efac] dark:bg-[#172036] dark:text-[#D1D5DB]">{faq.a}</p>
              <div className="h-5" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
