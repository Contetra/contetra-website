type DecisionArea = {
  area: string;
  question: string;
};

export default function FunctionalConsultingSection({ decisionAreas }: { decisionAreas: DecisionArea[] }) {
  return (
    <section className="bg-[#1a1640] py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">Functional Expertise</div>
              <div className="h-1 w-16 rounded-full bg-[#50a085]" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Why Functional Consulting Matters in Odoo Implementation
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Odoo is flexible and modular, but that flexibility must be managed carefully. Poorly planned implementation can lead to unnecessary customisation, unreliable data, weak reporting, difficult upgrades and users returning to spreadsheets.
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                As an Odoo expert in functional ERP planning, process alignment and finance-led system design, Contetra helps businesses focus on measurable outcomes rather than software configuration alone.
              </p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678]">
              Talk to an Odoo Consultant →
            </a>
          </div>

          <div className="rounded-[14px] border border-white/10 bg-white/5 p-6 shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
            <div className="mb-4 rounded-t-[12px] bg-[#50a085]/20 px-5 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#eaf6f2]">
              Key Decision Areas
            </div>
            <div className="space-y-1">
              {decisionAreas.map((item, i) => (
                <div key={i} className={`${i > 0 ? 'border-t border-white/10' : ''} px-5 py-5`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#50a085] mb-2">{item.area}</p>
                  <p className="text-sm leading-7 text-slate-200">{item.question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
