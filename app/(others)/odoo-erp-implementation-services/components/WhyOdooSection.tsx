import Link from 'next/link';

type Challenge = {
  challenge: string;
  outcome: string;
};

export default function WhyOdooSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="bg-slate-100 py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">From Disconnected to Integrated</div>
              <div className="h-1 w-16 rounded-full bg-[#50a085]" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Why Businesses Need the Right Odoo ERP Implementation Strategy
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Many businesses start with spreadsheets, Tally, standalone billing tools, disconnected inventory systems or manual approval trackers. These systems may work in the early stage, but they begin to break when transactions, teams, locations, products and reporting needs increase.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                ERP systems such as Odoo, SAP, Microsoft Dynamics 365, Oracle and ERPNext help businesses connect finance, procurement, inventory, sales, manufacturing, projects and reporting into one integrated environment. But an Odoo ERP project should not be treated only as software configuration. It should be planned around business processes, reporting needs, financial controls, data quality, user adoption and measurable ROI.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#181253]">
              Speak with Our Odoo Experts →
            </Link>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-2 gap-0 bg-[#1a1640] text-white text-xs font-bold uppercase tracking-[0.1em]">
              <div className="px-6 py-4">Business Challenge</div>
              <div className="px-6 py-4">Odoo ERP Outcome Required</div>
            </div>
            {challenges.map((row, i) => (
              <div key={i} className={`${i > 0 ? 'border-t border-slate-200' : ''} grid grid-cols-2 gap-0`}>
                <div className="bg-white px-6 py-5 text-sm font-medium text-slate-900">{row.challenge}</div>
                <div className="bg-[#eaf6f2] px-6 py-5 text-sm font-medium text-[#3d8f76]">{row.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
