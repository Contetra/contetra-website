const expertise = ["SAP S/4HANA", "Oracle Fusion", "Microsoft Dynamics", "ERPNext", "Odoo", "Finance Transformation", "FP&A", "Technical Accounting", "Automation"];

export default function ExperienceSection() {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 rounded-[8px] border border-[#e2e8e6] bg-[#F8F9FE] p-7 dark:border-[#1F2937] dark:bg-[#111827] md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h3 className="mb-6 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">10+ Years of ERP &amp; Finance Transformation Experience</h3>
            <p className="text-base font-semibold leading-7 text-[#1a1640] dark:text-white">Contetra combines expertise across:</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item) => <span key={item} className="rounded-[8px] border border-[#b9ddd0] bg-white px-4 py-3 text-sm font-semibold text-[#347d68] transition hover:-translate-y-1 hover:bg-[#50a085] hover:text-white dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac] dark:hover:bg-[#86efac] dark:hover:text-[#0A0A0A]">{item}</span>)}
            </div>
            <p className="mt-7 text-base leading-8 text-[#3f4352] dark:text-[#D1D5DB]">Our team includes finance professionals, Chartered Accountants, ERP consultants, and transformation specialists who understand how ERP decisions impact profitability, compliance, and business performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
