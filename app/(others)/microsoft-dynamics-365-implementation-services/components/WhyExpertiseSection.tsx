type WhyItem = {
  title: string;
  desc: string;
};

export default function WhyExpertiseSection({ whyItems }: { whyItems: WhyItem[] }) {
  return (
    <section className="bg-[#0d1b2a] py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#14a8a7]">Why Contetra</div>
          <div className="mx-auto mb-6 h-px w-16 bg-white/20" />
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
            Why Choose Contetra for Microsoft Dynamics 365 Implementation?
          </h2>
          <p className="mb-5 text-lg font-semibold leading-7 text-white">
            We speak the language of your balance sheet, not just your tech stack.
          </p>
          <p className="text-base leading-7 text-white/60">
            Businesses choose Contetra because we bring a finance-first and process-led view to ERP implementation. This helps reduce expensive customisation, unclear requirements, reporting failures and post-go-live confusion.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div key={item.title} className="rounded-[12px] border border-white/10 bg-white/5 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/30 hover:bg-[#0e7c7b]/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#0e7c7b]/20 font-serif text-xl font-bold text-[#14a8a7]">{String(i + 1).padStart(2, '0')}</div>
              <div className="mb-2 text-base font-semibold text-white">{item.title}</div>
              <p className="text-sm leading-6 text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
