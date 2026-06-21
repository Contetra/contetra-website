import Link from 'next/link';

type Challenge = {
  challenge: string;
  outcome: string;
};

export default function BusinessOutcomesSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:[grid-template-columns:1fr_minmax(0,760px)] md:items-start">
          <div className="max-w-3xl">
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">ERP Strategy</div>
            <div className="mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="mb-6  text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
              Why Businesses Need the Right ERP Implementation Strategy
            </h2>
            <p className="mb-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              Many businesses invest in ERP systems such as Microsoft Dynamics 365, SAP, Odoo, Oracle, ERPNext or other platforms to improve control, automation and visibility. But ERP implementation often fails to deliver value when it is treated only as a technology project.
            </p>
            <p className="mb-6 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              The real challenge is designing the right business processes, approval workflows, data structures, reporting formats and user responsibilities before implementation begins.
            </p>
            <h3 className="mb-3 text-lg font-semibold text-[#1a1640] dark:text-white">
              ERP Should Solve Business Problems, Not Just Digitise Them
            </h3>
            <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
              Whether your business is moving from Excel, Tally, legacy ERP, Odoo, SAP, Oracle or another system, Contetra helps define ERP requirements around operational needs, finance controls, management reporting and ROI expectations.
            </p>
            <div className="mt-8">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
                Schedule an ERP Scope & ROI Audit
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] overflow-hidden rounded-[12px] border border-[#eef1f8] shadow-[0_4px_24px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <thead>
                <tr className="bg-[#1a1640] text-white dark:bg-[#172036]">
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em]">Without the Right Foundation</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em]">What ERP Should Deliver</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((row, i) => (
                  <tr key={row.challenge} className={i > 0 ? 'border-t border-[#eef1f8] dark:border-[#1F2937]' : ''}>
                    <td className="bg-white px-6 py-4 align-top text-sm font-medium text-[#1a1640] dark:bg-[#111827] dark:text-white">{row.challenge}</td>
                    <td className="bg-[#eaf6f2] px-6 py-4 align-top text-sm font-medium text-[#3d8f76] dark:bg-[#172036] dark:text-[#86efac]">{row.outcome}</td>
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
