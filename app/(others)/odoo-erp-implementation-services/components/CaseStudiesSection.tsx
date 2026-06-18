type CaseStudy = {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">Client Results</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Odoo ERP Case Study Snapshots
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
              <div className="space-y-2 bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.12em]">{caseStudy.industry}</div>
                <div className="text-lg font-semibold leading-tight">{caseStudy.title}</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <div className="w-[70px] flex-shrink-0 font-bold uppercase tracking-[0.08em] text-[#50a085]">Challenge</div>
                    <div className="text-sm leading-7 text-slate-600">{caseStudy.challenge}</div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="w-[70px] flex-shrink-0 font-bold uppercase tracking-[0.08em] text-[#50a085]">Solution</div>
                    <div className="text-sm leading-7 text-slate-600">{caseStudy.solution}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 border-t border-slate-200 pt-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf6f2] text-[#50a085] text-sm font-bold">OK</div>
                  <div className="text-sm font-medium leading-7 text-slate-900">{caseStudy.outcome}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
