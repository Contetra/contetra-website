import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SAP S/4HANA Implementation Services | Contetra',
  description:
    'Build a business-first SAP S/4HANA roadmap with Contetra finance-led consulting, PMO, governance, process design and ERP transformation support.',
};

const legacyChallenges = [
  'Delayed month-end closures',
  'Multiple versions of the truth',
  'Manual reporting',
  'Inefficient procurement processes',
  'Poor inventory visibility',
  'Difficult compliance management',
  'Inconsistent master data',
  'Limited scalability',
];

const sapOutcomes = [
  'Automate finance operations',
  'Improve working capital visibility',
  'Streamline procurement',
  'Optimize manufacturing',
  'Enable real-time analytics',
  'Manage multi-company structures',
  'Strengthen governance and compliance',
  'Support global expansion',
];

const modules = [
  { name: 'SAP Finance (FI)', items: ['General Ledger', 'Accounts Payable', 'Accounts Receivable', 'Fixed Assets', 'Cash & Bank Management', 'Financial Closing', 'Consolidation'] },
  { name: 'SAP Controlling (CO)', items: ['Cost Center Accounting', 'Profit Center Accounting', 'Product Costing', 'Internal Orders', 'Profitability Analysis'] },
  { name: 'SAP Materials Management (MM)', items: ['Procurement', 'Vendor Management', 'Purchase Requisitions', 'Purchase Orders', 'Inventory Control'] },
  { name: 'SAP Sales & Distribution (SD)', items: ['Order Management', 'Pricing', 'Billing', 'Credit Management', 'Customer Management'] },
  { name: 'SAP Production Planning (PP)', items: ['Production Scheduling', 'BOM Management', 'Shop Floor Control', 'Capacity Planning'] },
  { name: 'SAP Project Systems (PS)', items: ['Project Costing', 'Budget Management', 'Resource Planning', 'Project Billing'] },
  { name: 'SAP Extended Warehouse Management (EWM)', items: ['Warehouse Operations', 'Inventory Tracking', 'Material Movement', 'Fulfilment Management'] },
  { name: 'SAP Analytics & Reporting', items: ['SAP Analytics Cloud', 'Executive Dashboards', 'CFO Reporting', 'Operational KPIs'] },
];

const industries = [
  { name: 'Manufacturing', focus: ['Production planning', 'Demand forecasting', 'Quality management', 'Inventory optimization'] },
  { name: 'Real Estate & Infrastructure', focus: ['Project accounting', 'Lease accounting', 'Revenue recognition', 'Multi-SPV management'] },
  { name: 'Technology & SaaS', focus: ['Subscription accounting', 'Revenue recognition', 'Multi-country operations', 'Project profitability'] },
  { name: 'Logistics & Supply Chain', focus: ['Fleet management', 'Warehouse operations', 'Procurement optimization', 'Cost visibility'] },
  { name: 'Retail & Consumer Products', focus: ['Demand planning', 'Inventory visibility', 'Distribution management'] },
  { name: 'Construction & Engineering', focus: ['Project costing', 'Resource planning', 'Contract management', 'Progress billing'] },
];

const capabilities = [
  { title: 'ERP Strategy & Readiness Assessment', items: ['ERP selection support', 'SAP readiness review', 'Future-state architecture', 'ROI assessment'] },
  { title: 'Business Process Mapping', items: ['Procure-to-Pay (P2P)', 'Order-to-Cash (O2C)', 'Record-to-Report (R2R)', 'Plan-to-Produce', 'Project-to-Profit'] },
  { title: 'Functional Requirement Documentation', items: ['Detailed BRDs', 'Process flows', 'Control matrices', 'Reporting requirements'] },
  { title: 'PMO & Governance', items: ['Steering committee management', 'Project governance', 'Risk management', 'Vendor coordination'] },
  { title: 'Master Data Management', items: ['Customer masters', 'Vendor masters', 'Material masters', 'Data cleansing', 'Data migration planning'] },
  { title: 'UAT & Training', items: ['User acceptance testing', 'End-user training', 'SOP preparation', 'Hypercare support'] },
  { title: 'Change Management', items: ['Stakeholder alignment', 'User adoption', 'Process redesign', 'KPI definition'] },
];

const ecosystem = ['SAP S/4HANA', 'Oracle Fusion', 'Microsoft Dynamics', 'ERPNext', 'Odoo', 'Finance Transformation', 'FP&A', 'Technical Accounting', 'Automation'];

const caseStudies = [
  {
    company: 'NeoLiv',
    title: 'Business-Tailored SAP S/4HANA Deployment',
    challenge: 'Complex lease accounting, multi-entity structures, project-based accounting and real estate revenue recognition needed a tailored SAP model.',
    solution: 'Business requirement workshops, SAP customization for real estate operations, project accounting configuration, milestone-based revenue recognition, PMO leadership and change management.',
    results: ['96% alignment with actual business workflows', '70% reduction in manual lease-to-revenue processes', 'Improved cash flow forecasting', 'Real-time CFO reporting and visibility'],
  },
  {
    company: 'UpGrad',
    title: 'Enterprise-Wide SAP S/4HANA Transformation',
    challenge: 'Multiple ERP systems, complex subsidiary structures, intercompany reconciliation challenges and consolidation inefficiencies.',
    solution: 'Unified SAP S/4HANA transformation, multi-subsidiary process design, automated intercompany accounting, revenue recognition configuration and CFO-led PMO governance.',
    results: ['80% reduction in manual consolidation effort', 'Centralized reporting across subsidiaries', 'Real-time intercompany visibility', 'Improved financial automation and governance'],
  },
  {
    company: 'Hindustan Pencils (Nataraj)',
    title: 'SAP S/4HANA Readiness Assessment',
    challenge: 'Standalone systems, fragmented reporting and limited ERP integration were slowing financial decision-making.',
    solution: 'Comprehensive ERP diagnostic, process mapping, reporting transformation roadmap and SAP S/4HANA readiness assessment.',
    results: ['Improved system integration', 'Better reporting accuracy', 'Enhanced real-time visibility', 'Structured roadmap for SAP S/4HANA migration'],
  },
  {
    company: 'VISSCO',
    title: 'SAP Business One Optimization',
    challenge: 'SAP Business One was underutilized with manual workarounds and disconnected processes.',
    solution: 'ERP diagnostic review, functional gap assessment, reporting redesign and automation roadmap.',
    results: ['Single source of truth established', 'Improved compliance', 'Faster monthly closures', 'Enhanced ERP utilization across departments'],
  },
];

const methodology = [
  { phase: '01', title: 'ERP Diagnostic & Process Review', items: ['Stakeholder workshops', 'Business process assessment', 'Gap analysis', 'Future-state design'] },
  { phase: '02', title: 'Functional Design & FRD', items: ['Process mapping', 'Control design', 'Reporting requirements', 'Functional specifications'] },
  { phase: '03', title: 'Configuration & Build', items: ['SAP configuration', 'Integrations', 'Workflow setup', 'Data migration planning'] },
  { phase: '04', title: 'Testing & Training', items: ['CRP workshops', 'UAT cycles', 'End-user training', 'SOP documentation'] },
  { phase: '05', title: 'Go-Live & Hypercare', items: ['Cutover planning', 'Go-live support', 'Issue resolution', 'Stabilization support'] },
];

const whyContetra = [
  { title: 'Finance-Led Consulting', desc: 'We understand financial reporting, controls, compliance and business operations, not just software.' },
  { title: 'Independent Functional Advisory', desc: 'We focus on business outcomes and implementation success rather than selling licenses.' },
  { title: 'Strong PMO Capabilities', desc: 'Executive reporting, risk management, vendor governance and change management.' },
  { title: 'Deep Business Process Expertise', desc: 'P2P, O2C, R2R, manufacturing, supply chain and project accounting.' },
  { title: 'Multi-Industry Experience', desc: 'Real estate, manufacturing, technology, logistics, construction and professional services.' },
];

const faqs = [
  {
    q: 'What is SAP S/4HANA?',
    a: "SAP S/4HANA is SAP's next-generation ERP platform built on the HANA in-memory database, enabling real-time business operations and analytics.",
  },
  {
    q: 'How long does a SAP S/4HANA implementation take?',
    a: 'Depending on scope, complexity and number of entities, implementations typically range from 6 to 18 months.',
  },
  {
    q: 'Can SAP S/4HANA support multiple companies and subsidiaries?',
    a: 'Yes. SAP S/4HANA is designed for complex multi-company, multi-country and multi-currency environments.',
  },
  {
    q: 'Does Contetra implement SAP S/4HANA directly?',
    a: 'Contetra acts as the finance-led functional consulting and PMO partner, ensuring SAP aligns with business requirements, governance needs and transformation objectives while coordinating with technical implementation partners.',
  },
  {
    q: 'Can Contetra help with SAP migration readiness?',
    a: 'Yes. We conduct ERP diagnostics, process assessments, data readiness reviews, SAP migration roadmaps and implementation governance support.',
  },
];

function SectionHeading({ eyebrow, title, desc, light = false }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-[#77bcab] dark:text-[#86efac]' : 'text-[#50a085] dark:text-[#86efac]'}`}>{eyebrow}</div>
      <div className={`mx-auto mb-6 h-1 w-16 rounded-full ${light ? 'bg-[#77bcab] dark:bg-[#86efac]' : 'bg-[#50a085] dark:bg-[#86efac]'}`} />
      <h2 className={`text-3xl font-semibold leading-tight md:text-[2.6rem] ${light ? 'text-white' : 'text-[#1a1640] dark:text-white'}`}>{title}</h2>
      {desc ? <p className={`mt-5 text-base leading-8 ${light ? 'text-white/70 dark:text-[#D1D5DB]' : 'text-[#25243a] dark:text-[#E5E7EB]'}`}>{desc}</p> : null}
    </div>
  );
}

export default function SapImplementationServicesPage() {
  return (
    <main className="bg-white text-[#1a1640] dark:bg-[#0A0A0A]">
      <section className="relative overflow-hidden bg-[#1a1640] py-24 text-white dark:bg-[#0A0A0A] md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(80,160,133,0.22)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(91,141,239,0.12)_0%,transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <nav className="mb-10 flex flex-wrap gap-2 text-sm text-white/70">
            <Link href="/" className="transition hover:text-[#50a085] dark:hover:text-[#86efac]">Home</Link>
            <span>/</span>
            <Link href="/erp-implementation-solutions" className="transition hover:text-[#50a085] dark:hover:text-[#86efac]">ERP Services</Link>
            <span>/</span>
            <span className="font-semibold text-[#50a085] dark:text-[#86efac]">SAP S/4HANA</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-[#50a085] dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#86efac]">
                SAP S/4HANA Implementation Services
              </div>
              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Finance-Led SAP S/4HANA Consulting, PMO & Business Transformation
              </h1>
              <p className="max-w-2xl text-lg font-semibold leading-8 text-white">
                Turn SAP S/4HANA into a business transformation engine, not just another ERP project.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 dark:text-[#D1D5DB]">
                Contetra helps organizations bridge the gap between SAP technology and business outcomes, aligning S/4HANA with finance, operations, governance, reporting and growth objectives.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#181253] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
                  Schedule an ERP Scope & ROI Audit
                </Link>
                <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#50a085]/15 dark:border-[#344155] dark:hover:bg-[#172036]">
                  Explore ERP Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['10+', 'Years of ERP and finance transformation experience'],
                ['PMO', 'Governance support for SAP transformation teams'],
                ['FRD', 'Functional documentation before configuration'],
                ['ROI', 'Business case clarity before SAP investment'],
              ].map(([stat, label], i) => (
                <div key={stat} className={`rounded-[14px] border border-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-[#1F2937] ${i === 0 ? 'bg-[#50a085]/12 sm:col-span-2 dark:bg-[#172036]' : 'bg-white/5 dark:bg-[#111827]'}`}>
                  <div className="text-[2.5rem] font-bold leading-none text-[#50a085] dark:text-[#86efac]">{stat}</div>
                  <p className="mt-3 text-sm font-medium leading-7 text-white/70 dark:text-[#D1D5DB]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Why S/4HANA</div>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Why Businesses are Moving to SAP S/4HANA</h2>
            <p className="mt-5 text-base leading-8 text-[#25243a] dark:text-[#E5E7EB]">
              Many SAP implementations fail not because of technology, but because the ERP is configured around software capabilities rather than business realities. SAP S/4HANA works best when process, data, governance and reporting decisions are designed before build.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[14px] border border-[#eef1f8] bg-white p-6 shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <h3 className="mb-4 text-lg font-bold dark:text-white">Legacy ERPs create</h3>
              <div className="space-y-3">
                {legacyChallenges.map((item) => <p key={item} className="border-l-2 border-[#50a085] pl-3 text-sm font-medium leading-6 text-[#25243a] dark:border-[#86efac] dark:text-[#D1D5DB]">{item}</p>)}
              </div>
            </div>
            <div className="rounded-[14px] border border-[#50a085]/20 bg-[#eaf6f2] p-6 shadow-[0_8px_24px_rgba(26,22,64,0.06)] dark:border-[#1F2937] dark:bg-[#172036] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
              <h3 className="mb-4 text-lg font-bold dark:text-white">SAP S/4HANA enables</h3>
              <div className="space-y-3">
                {sapOutcomes.map((item) => <p key={item} className="border-l-2 border-[#1a1640] pl-3 text-sm font-semibold leading-6 text-[#1a1640] dark:border-[#86efac] dark:text-[#E5E7EB]">{item}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Modules" title="SAP S/4HANA Modules We Support" desc="We support finance-led design across core SAP modules, with a strong focus on control, reporting, data quality and operational fit." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <div key={module.name} className="rounded-[14px] border border-[#eef1f8] bg-white p-6 shadow-[0_4px_18px_rgba(26,22,64,0.07)] transition hover:-translate-y-1 hover:border-[#50a085]/30 dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:border-[#86efac]/50">
                <h3 className="mb-4 text-base font-bold text-[#1a1640] dark:text-white">{module.name}</h3>
                <div className="space-y-2">
                  {module.items.map((item) => <p key={item} className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6f2] py-20 dark:bg-[#111827]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Industries" title="Industries That Benefit from SAP S/4HANA" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="rounded-[14px] border border-transparent bg-white p-6 shadow-[0_4px_18px_rgba(26,22,64,0.07)] dark:border-[#1F2937] dark:bg-[#0A0A0A] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <h3 className="mb-4 text-lg font-bold text-[#1a1640] dark:text-white">{industry.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.focus.map((item) => <span key={item} className="rounded-full bg-[#F8F9FE] px-3 py-2 text-xs font-semibold text-[#25243a] dark:bg-[#172036] dark:text-[#D1D5DB]">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading light eyebrow="Contetra Role" title="What Contetra Brings to Your SAP S/4HANA Journey" desc="Unlike traditional system integrators that focus primarily on technology, Contetra acts as the functional and transformation partner ensuring SAP supports strategic business objectives." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="rounded-[14px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-[#50a085]/10 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:bg-[#172036]">
                <h3 className="mb-4 text-lg font-bold">{capability.title}</h3>
                <div className="space-y-2">
                  {capability.items.map((item) => <p key={item} className="text-sm leading-6 text-white/65 dark:text-[#D1D5DB]">{item}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[16px] border border-[#50a085]/25 bg-[#50a085]/10 p-6 text-center">
            <p className="text-base font-semibold leading-8">This finance-led methodology ensures SAP becomes a transformation platform rather than just a system replacement.</p>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Experience" title="10+ Years of ERP & Finance Transformation Experience" desc="Our team includes finance professionals, Chartered Accountants, ERP consultants and transformation specialists who understand how ERP decisions impact profitability, compliance and business performance." />
          <div className="flex flex-wrap justify-center gap-3">
            {ecosystem.map((item) => <span key={item} className="rounded-full border border-[#50a085] bg-white px-4 py-2 text-sm font-semibold text-[#1a1640] dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB]">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Success Stories" title="SAP S/4HANA Success Stories" />
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((story) => (
              <article key={story.company} className="overflow-hidden rounded-[16px] border border-[#eef1f8] bg-white shadow-[0_8px_28px_rgba(26,22,64,0.08)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <div className="bg-gradient-to-br from-[#1a1640] to-[#50a085] p-6 text-white dark:from-[#172036] dark:to-[#111827]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{story.company}</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">{story.title}</h3>
                </div>
                <div className="space-y-5 p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">Challenge</p>
                    <p className="mt-2 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#50a085] dark:text-[#86efac]">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{story.solution}</p>
                  </div>
                  <div className="border-t border-[#eef1f8] pt-5 dark:border-[#1F2937]">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#1a1640] dark:text-white">Results</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {story.results.map((result) => <p key={result} className="rounded-[10px] bg-[#eaf6f2] px-3 py-2 text-sm font-semibold leading-6 text-[#1a1640] dark:bg-[#172036] dark:text-[#E5E7EB]">{result}</p>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1640] py-20 text-white dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading light eyebrow="Methodology" title="Our SAP S/4HANA Implementation Methodology" desc="A structured approach keeps SAP implementations aligned with business goals while reducing project risk." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {methodology.map((phase) => (
              <div key={phase.phase} className="rounded-[14px] border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:bg-[#50a085]/10 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:bg-[#172036]">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#50a085] text-lg font-bold text-[#50a085] dark:border-[#86efac] dark:text-[#86efac]">{phase.phase}</div>
                <h3 className="mb-4 text-base font-bold leading-snug">{phase.title}</h3>
                <div className="space-y-2">
                  {phase.items.map((item) => <p key={item} className="text-sm leading-6 text-white/60 dark:text-[#D1D5DB]">{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Why Contetra" title="Why Choose Contetra for SAP S/4HANA?" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {whyContetra.map((item, index) => (
              <div key={item.title} className="rounded-[14px] border border-[#eef1f8] bg-white p-6 shadow-[0_4px_18px_rgba(26,22,64,0.07)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <div className="mb-4 text-4xl font-bold leading-none text-[#50a085]/25 dark:text-[#86efac]/30">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="mb-3 text-base font-bold text-[#1a1640] dark:text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FE] py-20 dark:bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#50a085] dark:text-[#86efac]">Common Questions</div>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#50a085] dark:bg-[#86efac]" />
            <h2 className="text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Frequently Asked Questions</h2>
            <p className="mt-5 text-base leading-8 text-[#25243a] dark:text-[#E5E7EB]">Quick answers on SAP S/4HANA implementation timelines, complexity and Contetra&apos;s functional consulting role.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-[12px] border border-[#eef1f8] bg-white p-5 shadow-[0_4px_18px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]">
                <summary className="cursor-pointer list-none text-sm font-bold text-[#1a1640] dark:text-white">{faq.q}</summary>
                <p className="mt-4 text-sm leading-7 text-[#25243a] dark:text-[#D1D5DB]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#1a1640] via-[#221971] to-[#1a1640] py-24 text-white dark:from-[#0A0A0A] dark:via-[#111827] dark:to-[#0A0A0A]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#50a085]/30 bg-[#50a085]/10 px-4 py-2 text-sm font-semibold text-[#77bcab] dark:border-[#86efac]/30 dark:bg-[#172036] dark:text-[#86efac]">Schedule an ERP Scope & ROI Audit</div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.6rem]">Build a business-first SAP roadmap that delivers measurable outcomes, not just a successful go-live.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 dark:text-[#D1D5DB]">
            Before committing to SAP S/4HANA, understand your process gaps, ERP readiness level, implementation roadmap, ROI case, change management requirements, data migration complexity and project risks.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-sm bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#459678] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]">
              Schedule a SAP S/4HANA ERP Scope & ROI Audit
            </Link>
            <Link href="/erp-implementation-solutions" className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#50a085]/20 dark:border-[#344155] dark:hover:bg-[#172036]">
              Explore ERP Implementation Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
