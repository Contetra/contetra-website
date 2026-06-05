type Service = {
  title: string;
  desc: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="py-20 bg-[#f8f9fb] text-[#1a2d45]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">What We Deliver</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#d8dde7]" />
          <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-[#0d1b2a] md:text-[2.6rem]">
            Microsoft ERP Functional Consulting Services by Contetra
          </h2>
          <p className="text-base leading-7 text-[#4d5b6e]">
            Our Microsoft Dynamics 365 ERP services help management teams connect system decisions with finance control, operational visibility and scalable reporting.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[12px] border border-[#d8dde7] bg-white p-8 shadow-[0_2px_12px_rgba(26,45,69,0.05)] transition-transform duration-200 ease-out transform hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(26,45,69,0.12)]">
              <div className="mb-3 text-[2.5rem] font-serif font-bold text-[#0e7c7b]/20 leading-none">0{i + 1}</div>
              <div className="mb-2 text-base font-bold text-[#1a2d45]">{s.title}</div>
              <p className="text-sm leading-6 text-[#4d5b6e]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
