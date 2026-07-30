import SectionIntro from "./SectionIntro";

const phases = [
  {
    phase: "Discovery",
    core: "Current-state assessment, requirements and BRD.",
    contetra:
      "Leads workshops, owns the BRD and benchmarks vendor quotes.",
  },
  {
    phase: "Blueprint",
    core: "Process design, entity structure and module scoping.",
    contetra:
      "Designs chart of accounts, mapping, roles and authority workflows.",
  },
  {
    phase: "Build",
    core: "Configuration, customisation and integrations.",
    contetra:
      "Manages the technical vendor and flags drift from the BRD.",
  },
  {
    phase: "Test",
    core: "Unit testing, UAT and data validation.",
    contetra:
      "Coordinates business testing and closes requirement gaps early.",
  },
  {
    phase: "Go-live",
    core: "Cutover, migration and production launch.",
    contetra:
      "Runs cutover communication across the finance organisation.",
  },
  {
    phase: "Hypercare",
    core: "Issue resolution and process stabilisation.",
    contetra:
      "Maintains a monthly tracker and dedicated team through stability.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="bg-[#17143a] py-24 text-white dark:bg-[#080b10] md:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <SectionIntro
          index="03"
          eyebrow="Implementation"
          title="SAP ERP Implementation: What the Process Looks Like"
          description="A focused, single-entity mid-market implementation can take a few months to around a year. Multi-country enterprise programmes commonly run 12–24 months or longer."
          light
        />
        <div data-stagger className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((item, index) => (
            <article
              key={item.phase}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.055] p-7 transition hover:-translate-y-1 hover:border-[#78c7aa]/50 hover:bg-white/[0.08]"
            >
              <span className="absolute right-5 top-3 text-6xl font-semibold text-white/[0.045]">
                {index + 1}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8ed7bc]">
                Phase {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{item.phase}</h3>
              <p className="mt-4 text-sm leading-6 text-white/65">{item.core}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Contetra&apos;s functional role
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  {item.contetra}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-10 grid gap-5 rounded-2xl bg-[#66b99a] p-7 text-[#11152d] md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">Core ERP</p>
            <p className="mt-1 text-sm leading-6 opacity-75">
              Finance, supply chain, procurement and manufacturing.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">Integration</p>
            <p className="mt-1 text-sm leading-6 opacity-75">
              Banking, payroll, CRM and industry-specific systems.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">Automation</p>
            <p className="mt-1 text-sm leading-6 opacity-75">
              Reconciliation, MIS reporting and approval workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
