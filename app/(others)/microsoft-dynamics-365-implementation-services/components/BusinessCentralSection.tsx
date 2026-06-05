import Link from 'next/link';

const businessNeeds = [
  { need: 'Financial reporting', focus: 'Chart of accounts, dimensions, controls and MIS design' },
  { need: 'Inventory and procurement', focus: 'Item masters, purchase planning and stock visibility' },
  { need: 'Sales and fulfilment', focus: 'Order-to-cash workflows and reconciliation' },
  { need: 'Management insight', focus: 'Power BI-ready data and performance dashboards' },
];

export default function BusinessCentralSection() {
  return (
    <section className="py-20 bg-[#1a2d45] text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <div className="rounded-[14px] border border-white/10 bg-white/5 overflow-hidden">
              <div className="border-b border-white/10 bg-[#0e7c7b]/25 px-6 py-5">
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white/70">Business Need</p>
              </div>
              {businessNeeds.map((row, i) => (
                <div key={i} className="flex border-t border-white/10">
                  <div className="flex-1 px-6 py-5 text-[0.9rem] font-semibold text-white">{row.need}</div>
                  <div className="flex-[1.5] border-l border-white/10 px-6 py-5 text-[0.88rem] text-white/60">{row.focus}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#14a8a7]">Business Central ERP</div>
            <div className="mb-6 h-px w-16 bg-white/20" />
            <h2 className="mb-6 text-3xl font-semibold leading-tight font-serif text-white md:text-[2.6rem]">
              Connected Finance and Operations with Microsoft Business Central ERP
            </h2>
            <p className="mb-6 text-base leading-7 text-white/70">
              For businesses moving away from basic accounting tools, fragmented systems or Excel-led operations, Microsoft Business Central ERP can connect finance, purchasing, sales, inventory, services and management reporting.
            </p>
            <p className="mb-8 text-sm leading-7 text-white/60">
              A successful Microsoft Business Central ERP project is not limited to software configuration. It should address process fit, master data, approvals, reporting design, testing, training and post-go-live adoption.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-[#c9a84c] px-8 py-3 text-sm font-semibold text-[#0d1b2a] transition duration-200 hover:bg-[#e8c97a]">
              Start Your BC Project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
