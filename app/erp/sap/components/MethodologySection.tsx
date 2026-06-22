const phases = [
  { title: "Phase 1 \u2013 ERP Diagnostic & Process Review", items: ["Stakeholder workshops", "Business process assessment", "Gap analysis", "Future-state design"] },
  { title: "Phase 2 \u2013 Functional Design & FRD", items: ["Process mapping", "Control design", "Reporting requirements", "Functional specifications"] },
  { title: "Phase 3 \u2013 Configuration & Build", items: ["SAP configuration", "Integrations", "Workflow setup", "Data migration planning"] },
  { title: "Phase 4 \u2013 Testing & Training", items: ["CRP workshops", "UAT cycles", "End-user training", "SOP documentation"] },
  { title: "Phase 5 \u2013 Go-Live & Hypercare", items: ["Cutover planning", "Go-live support", "Issue resolution", "Stabilization support"] },
];

export default function MethodologySection() {
  return (
    <section className="py-20 dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="mb-12 text-center text-3xl font-semibold leading-tight dark:text-white md:text-[2.6rem]">Our SAP S/4HANA Implementation Methodology</h3>
        <div className="relative border-l-2 border-[#b9ddd0] pl-7 dark:border-[#2c5d4c] md:pl-10">
          {phases.map((phase, index) => (
            <article key={phase.title} className={`group relative grid gap-5 py-7 md:grid-cols-[0.8fr_1.2fr] ${index < phases.length - 1 ? "border-b border-[#e2e8e6] dark:border-[#1F2937]" : ""}`}>
              <span className="absolute -left-[2.22rem] top-9 h-4 w-4 rounded-full border-4 border-white bg-[#50a085] transition group-hover:scale-125 dark:border-[#0A0A0A] dark:bg-[#86efac] md:-left-[2.78rem]" />
              <h4 className="text-lg font-bold leading-snug dark:text-white">{phase.title}</h4>
              <div className="grid gap-2 sm:grid-cols-2">{phase.items.map((item) => <p key={item} className="bg-[#F8F9FE] px-4 py-3 text-sm leading-6 text-[#3f4352] transition group-hover:bg-[#eaf6f2] dark:bg-[#111827] dark:text-[#D1D5DB] dark:group-hover:bg-[#172036]">{item}</p>)}</div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-base font-semibold leading-8 text-[#1a1640] dark:text-[#E5E7EB]">This structured approach ensures SAP implementations remain aligned with business goals while reducing project risk.</p>
      </div>
    </section>
  );
}
