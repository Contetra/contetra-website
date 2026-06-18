type Faq = {
  q: string;
  a: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085]">Common Questions</div>
              <div className="h-1 w-16 rounded-full bg-[#50a085]" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Everything you need to know about Odoo ERP implementation and choosing Contetra as your Odoo implementation partner.
              </p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-sm border border-[#50a085] px-8 py-3 text-sm font-semibold text-[#50a085] transition hover:bg-[#eaf6f2]">
              Ask Us Directly →
            </a>
          </div>

          <div className="space-y-3 rounded-[14px] border border-slate-200 bg-white p-1 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
            {faqs.map((faq, i) => (
              <details key={i} className="border-b border-slate-200 last:border-none bg-white">
                <summary className="cursor-pointer px-6 py-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                  {faq.q}
                </summary>
                <div className="px-6 py-5 text-sm leading-7 text-slate-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
