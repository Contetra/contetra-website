type EvaluationArea = {
  area: string;
  review: string;
};

export default function PartnerSelectionSection({ evaluationAreas }: { evaluationAreas: EvaluationArea[] }) {
  return (
    <section className="py-20 bg-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">Partner Selection</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Choosing an Odoo Partner for Long-Term Success
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            When shortlisting an Odoo partner, businesses should look beyond platform familiarity. The right consulting team should understand operational processes, data risks, reporting needs and post-go-live support.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
            <thead className="bg-[#1a1640] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">Evaluation Area</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em]">What to Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {evaluationAreas.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.area}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
