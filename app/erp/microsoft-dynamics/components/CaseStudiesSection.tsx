type CaseStudy = { title: string; body: string };

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-14 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Case Studies, Why Contetra and FAQs</h2>
        <h3 className="mb-10 text-center text-2xl font-bold dark:text-white">Major ERP Case Study Snapshots</h3>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[8px] border border-[#e2e8e6] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/55 hover:shadow-[0_16px_34px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/50">
              <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
              <h4 className="mb-5 text-lg font-bold leading-snug text-[#1a1640] transition-colors group-hover:text-[#347d68] dark:text-white dark:group-hover:text-[#86efac]">{study.title}</h4>
              <p className="text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">{study.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
