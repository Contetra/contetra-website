import SectionHeading from "./SectionHeading";

const reasons = [
  { title: "Finance-led ERP approach", benefit: "Oracle ERP is structured around financial control, MIS and decision-making" },
  { title: "Strong process understanding", benefit: "Better workflows across finance, procurement, inventory, projects, supply chain and reporting" },
  { title: "FRD and documentation discipline", benefit: "Clear scope reduces confusion, rework and unnecessary customisation" },
  { title: "Independent advisory mindset", benefit: "Focus on business outcomes, not software push" },
  { title: "Implementation governance support", benefit: "Better milestone tracking, risk management and vendor coordination" },
  { title: "Reporting and dashboard focus", benefit: "ERP data is structured for CFO dashboards, KPIs and management reporting" },
  { title: "Cross-industry experience", benefit: "Practical understanding across manufacturing, logistics, technology, real estate, retail and services" },
  { title: "Post-go-live optimisation", benefit: "Helps stabilise adoption and reduce Excel dependency after implementation" },
];

export default function WhyContetraSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Why Contetra"
          title="Why Choose Contetra for Oracle ERP Implementation?"
          desc="We speak the language of your balance sheet, not just your tech stack. Oracle ERP implementation affects financial controls, procurement governance, project profitability, month-end closing, reporting, cash flow visibility and leadership decision-making."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="rounded-[12px] border border-[#eef1f8] bg-white p-6 shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <div className="mb-4 text-4xl font-bold leading-none text-[#50a085]/25 dark:text-[#86efac]/30">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="mb-3 text-base font-bold text-[#1a1640] dark:text-white">{reason.title}</h3>
              <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{reason.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
