type Step = {
  num: string;
  title: string;
  desc: string;
};

export default function MethodologySection({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-6 text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Our Methodology</div>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How Contetra Approaches an Odoo ERP Project
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 dark:text-[#D1D5DB]">
            A structured path from readiness to adoption that helps businesses evaluate an Odoo service provider based on implementation discipline and long-term business value.
          </p>
        </div>

        <div className="rounded-[16px] bg-white/5 p-8 shadow-[0_4px_24px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          <div className="grid gap-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-[#50a085] bg-[#1a1640] text-lg font-semibold text-[#50a085] transition dark:border-[#86efac] dark:bg-[#172036] dark:text-[#86efac]">
                  {step.num}
                </div>
                <div className="mb-2 text-sm font-semibold text-white">{step.title}</div>
                <p className="text-sm leading-7 text-slate-300 dark:text-[#D1D5DB]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
