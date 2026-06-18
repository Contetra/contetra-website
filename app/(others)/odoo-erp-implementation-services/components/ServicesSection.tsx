type Service = {
  title: string;
  desc: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">What Contetra Delivers in Odoo ERP Implementation</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contetra’s Odoo ERP Implementation Support
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Contetra works as a finance-led Odoo consultant for businesses that want Odoo decisions to support operational control, reporting accuracy and management visibility. We help businesses avoid the common mistake of jumping directly into configuration without defining the right scope, workflows, master data, reporting structure and user responsibilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="rounded-[14px] border border-[#eef1f8] bg-white p-8 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-1 hover:border-[#50a085]/30 hover:shadow-[0_12px_32px_rgba(26,22,64,0.1)]">
              <div className="mb-4 text-[2.5rem]  font-bold text-[#50a085]/25 leading-none">0{i + 1}</div>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
