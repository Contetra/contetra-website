type Service = {
  title: string;
  desc: string;
};

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-slate-100 py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">What Contetra Delivers in Odoo ERP Implementation</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">
            Contetra’s Odoo ERP Implementation Support
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 dark:text-[#E5E7EB]">
            Contetra works as a finance-led Odoo consultant for businesses that want Odoo decisions to support operational control, reporting accuracy and management visibility. We help businesses avoid the common mistake of jumping directly into configuration without defining the right scope, workflows, master data, reporting structure and user responsibilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="rounded-[14px] border border-[#eef1f8] bg-white p-8 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-1 hover:border-[#50a085]/30 hover:shadow-[0_12px_32px_rgba(26,22,64,0.1)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:border-[#86efac]/50 dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.32)]">
              <div className="mb-4 text-[2.5rem]  font-bold text-[#50a085]/25 leading-none dark:text-[#86efac]/30">0{i + 1}</div>
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-[#D1D5DB]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
