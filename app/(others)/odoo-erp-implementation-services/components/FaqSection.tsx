type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-slate-100 py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 rounded-[14px] border border-slate-200 bg-white p-1 shadow-[0_4px_24px_rgba(15,23,42,0.06)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
          {faqs.map((faq) => (
            <details key={faq.q} className="border-b border-slate-200 bg-white last:border-none dark:border-[#1F2937] dark:bg-[#111827]">
              <summary className="cursor-pointer px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:text-white dark:hover:bg-[#172036]">
                {faq.q}
              </summary>
              <div className="px-6 py-5 text-sm leading-7 text-slate-600 dark:bg-[#172036] dark:text-[#D1D5DB]">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
