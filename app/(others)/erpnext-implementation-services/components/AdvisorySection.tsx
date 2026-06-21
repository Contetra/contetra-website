const areas = ["ERP diagnostics", "ERPNext planning", "Finance transformation", "FP&A", "MIS improvement", "Process redesign", "Technical accounting", "Fractional CFO support"];

export default function AdvisorySection() {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#77bcab] dark:text-[#86efac]">Advisory Background</div>
          <div className="mb-6 h-px w-16 bg-[#77bcab] dark:bg-[#86efac]" />
          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-[2.6rem]">Experience and Advisory Background</h2>
          <div className="space-y-5 text-base leading-7 text-white/70 dark:text-[#D1D5DB]">
            <p>Contetra brings 10+ years of cross-industry finance transformation and ERP advisory experience through finance professionals, functional consultants, Chartered Accountants and business process specialists.</p>
            <p>Our experience spans manufacturing, trading, services, logistics, pharma, real estate, D2C and multi-location businesses.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => <span key={area} className="rounded-full border border-[#50a085]/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB]">{area}</span>)}
        </div>
      </div>
    </section>
  );
}
