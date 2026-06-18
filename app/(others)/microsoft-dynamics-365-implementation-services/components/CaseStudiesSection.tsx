type CaseStudy = {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085]">Case Study Snapshots</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#50a085]" />
          <h2 className=" text-3xl font-semibold leading-tight text-[#1a1640] md:text-[2.6rem]">
            Major ERP Case Study Snapshots
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="overflow-hidden rounded-[14px] border border-[#eef1f8] bg-white shadow-[0_4px_20px_rgba(26,22,64,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,64,0.14)]">
              <div className="space-y-2 bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">{cs.industry}</div>
                <div className="text-lg font-semibold leading-tight text-white">{cs.title}</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <div className="w-[74px] flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#50a085]">Need</div>
                    <div className="text-sm leading-6 text-[#25243a]">{cs.challenge}</div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="w-[74px] flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#50a085]">Support</div>
                    <div className="text-sm leading-6 text-[#25243a]">{cs.solution}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 border-t border-[#eef1f8] pt-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf6f2] text-sm font-bold text-[#50a085]">OK</div>
                  <div className="text-sm font-medium leading-6 text-[#1a1640]">{cs.outcome}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
