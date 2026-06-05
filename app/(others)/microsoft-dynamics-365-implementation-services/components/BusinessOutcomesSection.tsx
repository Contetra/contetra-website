import Link from 'next/link';

type Challenge = {
  challenge: string;
  outcome: string;
};

export default function BusinessOutcomesSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="py-20 bg-[#f8f9fb] text-[#1a2d45]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:[grid-template-columns:1fr_minmax(0,760px)] items-start">
          <div className="max-w-3xl">
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Business Outcomes</div>
            <div className="mb-6 h-px w-16 bg-[#d8dde7]" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-[#0d1b2a] md:text-[2.6rem]">
              Implement Microsoft ERP Around Business Outcomes
            </h2>
            <p className="text-base leading-7 text-[#4d5b6e]">
              Investing in Microsoft Dynamics ERP software should do more than replace an old system. It should improve reporting reliability, reduce manual workarounds and create visibility across operational and financial processes.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#0e7c7b] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#14a8a7]">
                Speak with Our Consultants →
              </Link>
            </div>
          </div>

          <div>
            <table className="w-full rounded-[12px] border border-[#d8dde7] overflow-hidden shadow-[0_4px_24px_rgba(26,45,69,0.08)]">
              <thead>
                <tr className="bg-[#1a2d45] text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-left">Business Challenge</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-left">Required ERP Outcome</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((row, i) => (
                  <tr key={i} className={i > 0 ? 'border-t border-[#d8dde7]' : ''}>
                    <td className="bg-white px-6 py-4 text-sm font-medium text-[#1a2d45] align-top">{row.challenge}</td>
                    <td className="bg-[#0e7c7b]/5 px-6 py-4 text-sm font-medium text-[#0e7c7b] align-top">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
