type IndustryInfo = { industry: string; needs: string };

export default function BusinessCentralSection({ industries }: { industries: IndustryInfo[] }) {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="mb-5 text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Industries That Can Benefit from Microsoft Dynamics 365</h3>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">Microsoft Dynamics 365 can support businesses that need connected operations, stronger controls and better reporting visibility.</p>
        </div>
        <div className="mb-5 flex items-center justify-between gap-4 rounded-[8px] bg-[#1a1640] px-5 py-3 text-xs font-bold text-white dark:bg-[#172036]">
          <span>Industry</span>
          <span>Common ERP Needs</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.industry} className="group relative min-h-[168px] overflow-hidden rounded-[8px] border border-[#dce7e3] bg-white p-7 pl-8 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:hover:border-[#86efac]/45">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#50a085] transition-all duration-300 group-hover:w-2 dark:bg-[#86efac]" />
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="mb-3 text-base font-bold text-[#1a1640] transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{item.industry}</h3>
                <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">{item.needs}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
