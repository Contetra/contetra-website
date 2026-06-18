type Step = {
  num: string;
  title: string;
  desc: string;
};

export default function MethodologySection({ steps }: { steps: Step[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">Implementation Support</div>
          <div className="mx-auto mb-6 h-px w-16 bg-[#d8dde7]" />
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0d1b2a] md:text-[2.6rem]">
            Our Microsoft ERP Implementation Approach
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[16px] bg-[#0d1b2a] px-6 py-16 sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-24 hidden h-[2px] bg-gradient-to-r from-[#0e7c7b] to-[#14a8a7] md:block" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-[#0e7c7b] bg-[#0d1b2a] font-serif text-lg font-bold text-[#14a8a7] transition duration-200 hover:bg-[#0e7c7b] hover:text-white">
                  {step.num}
                </div>
                <div className="mb-2 text-sm font-semibold text-white">{step.title}</div>
                <p className="text-sm leading-6 text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
