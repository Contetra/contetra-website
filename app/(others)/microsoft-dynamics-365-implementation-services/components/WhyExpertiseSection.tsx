type WhyItem = {
  icon: string;
  title: string;
  desc: string;
};

export default function WhyExpertiseSection({ whyItems }: { whyItems: WhyItem[] }) {
  return (
    <section className="py-20 bg-[#0d1b2a] text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#14a8a7]">Why Choose Us</div>
          <div className="mx-auto mb-6 h-px w-16 bg-white/20" />
          <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-white md:text-[2.6rem]">
            Why Functional ERP Expertise Matters
          </h2>
          <p className="text-base leading-7 text-white/60">
            Technology alone cannot correct weak workflows, unreliable data or delayed reporting. Our Microsoft BC functional consultants help translate operational requirements into practical configuration, controls and reports.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div key={i} className="rounded-[12px] border border-white/10 bg-white/5 p-7 transition duration-200 hover:-translate-y-1 hover:border-[#0e7c7b]/30 hover:bg-[#0e7c7b]/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#0e7c7b]/20 text-2xl text-[#14a8a7]">{item.icon}</div>
              <div className="mb-2 text-base font-semibold text-white">{item.title}</div>
              <p className="text-sm leading-6 text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
