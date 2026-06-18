type Service = {
  title: string;
  desc: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">What Contetra Delivers in Odoo ERP Implementation</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#0e7c7b]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contetra’s Odoo ERP Implementation Support
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Contetra works as a finance-led Odoo consultant for businesses that want Odoo decisions to support operational control, reporting accuracy and management visibility. We help businesses avoid the common mistake of jumping directly into configuration without defining the right scope, workflows, master data, reporting structure and user responsibilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="rounded-[14px] border border-slate-200 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#0e7c7b]/30 hover:shadow-[0_12px_32px_rgba(15,23,42,0.1)]">
              <div className="mb-4 text-[2.5rem] font-serif font-bold text-[#0e7c7b]/20 leading-none">0{i + 1}</div>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
