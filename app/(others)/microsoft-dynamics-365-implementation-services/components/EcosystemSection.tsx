type AppInfo = {
  app: string;
  use: string;
};

export default function EcosystemSection({ msApps }: { msApps: AppInfo[] }) {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Modules and Applications</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="mb-6  text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
            Microsoft Dynamics 365 Modules and Industries We Support
          </h2>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Microsoft Dynamics 365 offers multiple applications and modules that support finance, operations, supply chain, projects, sales, service and reporting. The right module mix depends on business size, industry, process complexity and growth plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#eef1f8] text-left shadow-[0_4px_24px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
            <thead>
              <tr>
                <th className="whitespace-nowrap bg-[#1a1640] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white dark:bg-[#172036]">Module / Application</th>
                <th className="whitespace-nowrap bg-[#1a1640] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white dark:bg-[#172036]">Business Use</th>
              </tr>
            </thead>
            <tbody>
              {msApps.map((app, i) => (
                <tr key={app.app} className={i % 2 === 0 ? 'bg-[#F8F9FE] dark:bg-[#172036]' : 'dark:bg-[#111827]'}>
                  <td className="px-5 py-4 align-top text-sm font-semibold text-[#1a1640] dark:text-white">{app.app}</td>
                  <td className="px-5 py-4 align-top text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{app.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
