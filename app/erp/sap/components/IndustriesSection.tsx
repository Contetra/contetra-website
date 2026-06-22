const industries = [
  { name: "Manufacturing", focus: ["Production planning", "Demand forecasting", "Quality management", "Inventory optimization"] },
  { name: "Real Estate & Infrastructure", focus: ["Project accounting", "Lease accounting", "Revenue recognition", "Multi-SPV management"] },
  { name: "Technology & SaaS", focus: ["Subscription accounting", "Revenue recognition", "Multi-country operations", "Project profitability"] },
  { name: "Logistics & Supply Chain", focus: ["Fleet management", "Warehouse operations", "Procurement optimization", "Cost visibility"] },
  { name: "Retail & Consumer Products", focus: ["Demand planning", "Inventory visibility", "Distribution management"] },
  { name: "Construction & Engineering", focus: ["Project costing", "Resource planning", "Contract management", "Progress billing"] },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="mb-10 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Industries That Benefit from SAP S/4HANA</h3>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.name} className="group relative min-h-[240px] overflow-hidden rounded-[8px] border border-[#d9e7e2] bg-white p-7 pl-8 shadow-[0_8px_24px_rgba(26,22,64,0.07)] transition hover:-translate-y-1 hover:border-[#50a085]/55 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:hover:border-[#86efac]/50">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#50a085] transition-all group-hover:w-2 dark:bg-[#86efac]" />
              <h3 className="mb-6 text-xl font-bold transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{industry.name}</h3>
              <div className="divide-y divide-[#e2e8e6] dark:divide-[#1F2937]">
                {industry.focus.map((item) => <p key={item} className="py-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
