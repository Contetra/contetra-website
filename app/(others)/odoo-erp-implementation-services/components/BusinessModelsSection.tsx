type BusinessType = {
  type: string;
  focus: string;
};

export default function BusinessModelsSection({ businessTypes }: { businessTypes: BusinessType[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Industry Fit</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#0e7c7b]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Odoo ERP Solutions for Different Business Models
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Odoo is modular, which means businesses can implement only the applications that are relevant to their operations. The right Odoo ERP requirement depends on business size, industry, process complexity, reporting needs and future growth plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
            <thead className="bg-[#0d1b2a] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">Business Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">Relevant Odoo Focus Areas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {businessTypes.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
