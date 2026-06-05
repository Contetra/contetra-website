type CaseStudy = {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="py-20 bg-[#f8f9fb] text-[#1a2d45]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Client Results</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#d8dde7]" />
          <h2 className="text-3xl font-semibold leading-tight font-serif text-[#0d1b2a] md:text-[2.6rem]">
            Microsoft ERP Outcomes Across Industries
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <div key={i} className="overflow-hidden rounded-[14px] border border-[#e5e8ef] bg-white shadow-[0_4px_20px_rgba(26,45,69,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,45,69,0.14)]">
              <div className="space-y-2 bg-gradient-to-br from-[#1a2d45] to-[#0e7c7b] p-6">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">{cs.industry}</div>
                <div className="text-lg font-semibold leading-tight text-white">{cs.title}</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <div className="w-[70px] flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#0e7c7b]">Challenge</div>
                    <div className="text-sm leading-6 text-[#4d5b6e]">{cs.challenge}</div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="w-[70px] flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#0e7c7b]">Solution</div>
                    <div className="text-sm leading-6 text-[#4d5b6e]">{cs.solution}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 border-t border-[#e5e8ef] pt-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0e7c7b]/12 text-[#0e7c7b] text-sm font-bold">✓</div>
                  <div className="text-sm font-medium leading-6 text-[#1a2d45]">{cs.outcome}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
