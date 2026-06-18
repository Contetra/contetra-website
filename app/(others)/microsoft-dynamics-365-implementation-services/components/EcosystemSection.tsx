type AppInfo = {
  app: string;
  use: string;
};

export default function EcosystemSection({ msApps }: { msApps: AppInfo[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Modules and Applications</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#d8dde7]" />
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-[#0d1b2a] md:text-[2.6rem]">
            Microsoft Dynamics 365 Modules and Industries We Support
          </h2>
          <p className="text-base leading-7 text-[#4d5b6e]">
            Microsoft Dynamics 365 offers multiple applications and modules that support finance, operations, supply chain, projects, sales, service and reporting. The right module mix depends on business size, industry, process complexity and growth plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#d8dde7] text-left shadow-[0_4px_24px_rgba(26,45,69,0.06)]">
            <thead>
              <tr>
                <th className="whitespace-nowrap bg-[#1a2d45] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white">Module / Application</th>
                <th className="whitespace-nowrap bg-[#1a2d45] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white">Business Use</th>
              </tr>
            </thead>
            <tbody>
              {msApps.map((app, i) => (
                <tr key={app.app} className={i % 2 === 0 ? 'bg-[#f8f9fb]' : ''}>
                  <td className="px-5 py-4 align-top text-sm font-semibold text-[#1a2d45]">{app.app}</td>
                  <td className="px-5 py-4 align-top text-sm leading-6 text-[#4d5b6e]">{app.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
