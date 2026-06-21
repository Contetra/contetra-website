type WhyItem = {
  title: string;
  desc: string;
};

export default function WhyExpertiseSection({ whyItems }: { whyItems: WhyItem[] }) {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Why Contetra</div>
          <div className="mx-auto mb-6 h-px w-16 bg-white/20" />
          <h2 className="mb-6  text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
            Why Choose Contetra for Microsoft Dynamics 365 Implementation?
          </h2>
          <p className="mb-5 text-lg font-semibold leading-7 text-white">
            We speak the language of your balance sheet, not just your tech stack.
          </p>
          <p className="text-base leading-7 text-white/60 dark:text-[#D1D5DB]">
            Businesses choose Contetra because we bring a finance-first and process-led view to ERP implementation. This helps reduce expensive customisation, unclear requirements, reporting failures and post-go-live confusion.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div key={item.title} className="rounded-[12px] border border-white/10 bg-white/5 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#50a085]/30 hover:bg-[#50a085]/10 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50 dark:hover:bg-[#172036]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#50a085]/20  text-xl font-bold text-[#50a085] dark:bg-[#172036] dark:text-[#86efac]">{String(i + 1).padStart(2, '0')}</div>
              <div className="mb-2 text-base font-semibold text-white">{item.title}</div>
              <p className="text-sm leading-6 text-white/60 dark:text-[#D1D5DB]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
