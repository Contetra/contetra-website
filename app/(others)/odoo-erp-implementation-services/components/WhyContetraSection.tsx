const reasons = [
  { title: "Finance-led Odoo approach", benefit: "Odoo is structured around financial control, MIS and management visibility" },
  { title: "Strong process understanding", benefit: "Better workflows across finance, procurement, inventory, sales, manufacturing and projects" },
  { title: "Module selection discipline", benefit: "Helps businesses implement what is needed instead of over-customising" },
  { title: "Data and reporting focus", benefit: "Cleaner migration, better reconciliation and stronger MIS visibility" },
  { title: "Cross-industry experience", benefit: "Practical understanding of manufacturing, ecommerce, retail, services and subscription businesses" },
  { title: "Vendor coordination support", benefit: "Better communication between business users and technical teams" },
  { title: "Post-go-live optimisation", benefit: "Helps stabilise adoption and reduce Excel dependency after implementation" },
];

export default function WhyContetraSection() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto mb-6 mt-3 h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-4xl">
            Why Choose Contetra as Your Odoo Implementation Partner?
          </h2>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">
            Contetra&apos;s positioning is simple:
          </p>
          <p className="mt-3 text-lg font-semibold leading-8 text-[#1a1640] dark:text-white">
            We speak the language of your balance sheet, not just your tech stack.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-[#E5E7EB]">
            A suitable Odoo partner should help the business create an ERP foundation that is usable, maintainable and aligned with future growth. Contetra brings finance-led process thinking to Odoo implementation so that the system supports controls, reporting and decision-making after go-live.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          <table className="min-w-full text-left">
            <thead className="bg-[#1a1640] text-white dark:bg-[#172036]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em]">Why Contetra</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em]">Business Benefit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#1F2937]">
              {reasons.map((reason, index) => (
                <tr key={reason.title} className={index % 2 === 0 ? "bg-slate-50 dark:bg-[#172036]" : "dark:bg-[#111827]"}>
                  <td className="px-6 py-4 text-sm font-semibold text-[#1a1640] dark:text-white">{reason.title}</td>
                  <td className="px-6 py-4 text-sm leading-7 text-slate-600 dark:text-[#D1D5DB]">{reason.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
