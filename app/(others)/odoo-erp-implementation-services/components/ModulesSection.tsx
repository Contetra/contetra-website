type Module = {
  area: string;
  need: string;
};

export default function ModulesSection({ modules }: { modules: Module[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Odoo Modules</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#0e7c7b]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Odoo ERP Modules Businesses Can Evaluate
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            The right Odoo ERP requirement depends on your operating model, industry, scale and reporting needs. Implement only the applications that solve relevant process problems.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-[14px] border border-slate-200 bg-white text-left shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
            <thead className="bg-[#0d1b2a] text-white">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em]">Odoo Functional Area</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.08em]">Relevant Business Need</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {modules.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.area}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
