type AppInfo = {
  app: string;
  suited: string;
  use: string;
};

export default function EcosystemSection({ msApps }: { msApps: AppInfo[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Microsoft Ecosystem</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#d8dde7]" />
          <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-[#0d1b2a] md:text-[2.6rem]">
            7 Microsoft ERP Applications & Connected Tools to Evaluate
          </h2>
          <p className="text-base leading-7 text-[#4d5b6e]">
            Not every organisation needs the same ERP architecture. A growing business may begin with an MS Business Central implementation, while a manufacturer may have a broader Microsoft FnO ERP requirement.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#d8dde7] text-left shadow-[0_4px_24px_rgba(26,45,69,0.06)]">
            <thead>
              <tr>
                <th className="whitespace-nowrap bg-[#1a2d45] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white">Microsoft Application</th>
                <th className="whitespace-nowrap bg-[#1a2d45] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white">Best Suited For</th>
                <th className="whitespace-nowrap bg-[#1a2d45] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white">Core Business Use</th>
              </tr>
            </thead>
            <tbody>
              {msApps.map((app, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-[#f8f9fb]' : ''}>
                  <td className="px-5 py-4 align-top text-sm text-[#1a2d45] font-semibold">{app.app}</td>
                  <td className="px-5 py-4 align-top text-sm text-[#4d5b6e]">{app.suited}</td>
                  <td className="px-5 py-4 align-top text-sm text-[#4d5b6e]">{app.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm italic text-[#8a96a8]">
          * Power BI and Power Platform are connected Microsoft tools that strengthen reporting and automation around an ERP environment; they are not standalone ERP applications.
        </p>
      </div>
    </section>
  );
}
