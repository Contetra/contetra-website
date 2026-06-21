const advisoryAreas = [
  "ERP implementation",
  "Oracle ERP diagnostics",
  "Finance transformation",
  "FP&A",
  "Technical accounting",
  "IFRS and Ind AS advisory",
  "Process excellence",
  "Automation",
  "MIS reporting",
  "Fractional CFO support",
];

export default function AdvisorySection() {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#77bcab] dark:text-[#86efac]">Advisory Background</div>
          <div className="mb-6 h-px w-16 bg-[#77bcab] dark:bg-[#86efac]" />
          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-[2.6rem]">
            Experience and Advisory Background
          </h2>
          <div className="space-y-5 text-base leading-7 text-white/70 dark:text-[#D1D5DB]">
            <p>Contetra brings 10+ years of finance transformation and ERP advisory experience through a team of finance professionals, ERP consultants, Chartered Accountants and business transformation specialists.</p>
            <p>Unlike traditional system integrators, Contetra understands both business outcomes and system capabilities. This helps businesses avoid unclear requirements, weak reporting structures, poor data migration and post-go-live adoption issues.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {advisoryAreas.map((area) => (
            <span key={area} className="rounded-full border border-[#50a085]/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB]">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
