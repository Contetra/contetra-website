type Service = {
  title: string;
  desc: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085]">What Contetra Delivers</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#50a085]" />
          <h2 className="mb-6  text-3xl font-semibold leading-tight text-[#1a1640] md:text-[2.6rem]">
            What Contetra Delivers in Microsoft Dynamics 365 Implementation
          </h2>
          <p className="text-base leading-7 text-[#25243a]">
            Contetra works as a finance-led ERP consulting partner that helps businesses bridge the gap between technology implementation and business outcomes. We help define how finance, procurement, inventory, sales, operations, projects and reporting should work together inside the ERP.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group relative overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white p-8 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(26,22,64,0.12)]">
              <div className="mb-3  text-[2.5rem] font-bold leading-none text-[#50a085]/25">{String(i + 1).padStart(2, '0')}</div>
              <div className="mb-2 text-base font-bold text-[#1a1640]">{s.title}</div>
              <p className="text-sm leading-6 text-[#25243a]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
