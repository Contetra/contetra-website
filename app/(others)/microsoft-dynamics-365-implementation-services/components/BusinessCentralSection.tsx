type IndustryInfo = {
  industry: string;
  needs: string;
};

export default function BusinessCentralSection({ industries }: { industries: IndustryInfo[] }) {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Industry Fit</div>
            <div className="mb-6 h-px w-16 bg-white/20" />
            <h2 className="mb-6  text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
              Industries That Can Benefit from Microsoft Dynamics 365
            </h2>
            <p className="mb-6 text-base leading-7 text-white/70 dark:text-[#E5E7EB]">
              Microsoft Dynamics 365 can support businesses that need connected operations, stronger controls and better reporting visibility.
            </p>
            <p className="text-sm leading-7 text-white/60 dark:text-[#D1D5DB]">
              Contetra brings 10+ years of cross-industry finance transformation and ERP advisory experience through finance professionals, functional consultants, Chartered Accountants and business process specialists.
            </p>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-white/10 bg-white/5 dark:border-[#1F2937] dark:bg-[#111827]">
            <div className="grid grid-cols-[0.8fr_1.4fr] border-b border-white/10 bg-[#50a085]/25 dark:border-[#1F2937] dark:bg-[#172036]">
              <div className="px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/75">Industry</div>
              <div className="border-l border-white/10 px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white/75">Common ERP Needs</div>
            </div>
            {industries.map((row) => (
              <div key={row.industry} className="grid grid-cols-[0.8fr_1.4fr] border-t border-white/10 dark:border-[#1F2937]">
                <div className="px-5 py-4 text-sm font-semibold text-white">{row.industry}</div>
                <div className="border-l border-white/10 px-5 py-4 text-sm leading-6 text-white/65 dark:border-[#1F2937] dark:text-[#D1D5DB]">{row.needs}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
