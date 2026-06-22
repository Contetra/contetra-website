type BusinessType = {
  type: string;
  focus: string;
};

export default function BusinessModelsSection({ businessTypes }: { businessTypes: BusinessType[] }) {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">
            Industries That Can Benefit from Odoo ERP
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] dark:divide-[#1F2937] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
            <thead className="bg-[#1a1640] text-white dark:bg-[#172036]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">Industry / Business Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">How Odoo Can Help</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-[#1F2937] dark:bg-[#111827]">
              {businessTypes.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50 dark:bg-[#172036]' : 'dark:bg-[#111827]'}>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{item.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-[#D1D5DB]">{item.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
