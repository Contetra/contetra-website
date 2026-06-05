import Link from 'next/link';

type Challenge = {
  challenge: string;
  outcome: string;
};

export default function WhyOdooSection({ challenges }: { challenges: Challenge[] }) {
  return (
    <section className="bg-slate-100 py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e7c7b]">From Disconnected to Integrated</div>
              <div className="h-1 w-16 rounded-full bg-[#0e7c7b]" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Move from Disconnected Processes to Integrated Operations
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Businesses looking for Odoo ERP are often trying to move beyond spreadsheets, disconnected systems and limited operational visibility. However, choosing software is only the first step. A successful Odoo ERP project requires the right scope, clean data, disciplined workflows and controlled customisation.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#0e7c7b] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#14a8a7]">
              Speak with Our Odoo Experts →
            </Link>
          </div>

          <div className="rounded-[14px] border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-2 gap-0 bg-[#0d1b2a] text-white text-xs font-bold uppercase tracking-[0.1em]">
              <div className="px-6 py-4">Business Challenge</div>
              <div className="px-6 py-4">Odoo ERP Outcome Required</div>
            </div>
            {challenges.map((row, i) => (
              <div key={i} className={`${i > 0 ? 'border-t border-slate-200' : ''} grid grid-cols-2 gap-0`}>
                <div className="bg-white px-6 py-5 text-sm font-medium text-slate-900">{row.challenge}</div>
                <div className="bg-[#ecfdf5] px-6 py-5 text-sm font-medium text-[#0e7c7b]">{row.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
