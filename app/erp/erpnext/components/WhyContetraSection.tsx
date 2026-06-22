import SectionHeading from "./SectionHeading";

const reasons = [
  { title: "Finance-led ERP approach", benefit: "ERPNext is structured around financial control, MIS and decision-making" },
  { title: "Strong process understanding", benefit: "Better workflows across finance, procurement, inventory, sales, manufacturing and projects" },
  { title: "BRD and documentation discipline", benefit: "Clear scope reduces confusion, rework and unnecessary customisation" },
  { title: "Cross-industry experience", benefit: "Practical understanding of manufacturing, services, trading, pharma, retail and distribution" },
  { title: "Data and reporting focus", benefit: "Cleaner master data, better dimensions and stronger MIS visibility" },
  { title: "Vendor coordination support", benefit: "Better communication between business users and technical implementers" },
  { title: "Post-go-live optimisation", benefit: "Helps stabilise adoption and reduce spreadsheet dependency" },
];

export default function WhyContetraSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Why Choose Contetra for ERPNext Implementation?"
          level="h3"
        />
        <div className="mx-auto mb-10 max-w-4xl space-y-4 text-center text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>Contetra&apos;s positioning is simple:</p>
          <p className="font-semibold text-[#1a1640] dark:text-white">We speak the language of your balance sheet, not just your tech stack.</p>
          <p>Businesses choose Contetra because ERPNext implementation needs more than technical configuration. It needs business understanding, financial control, process clarity and reporting discipline.</p>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
          <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
            <div>Why Contetra</div>
            <div className="hidden sm:block">Business Benefit</div>
          </div>
          {reasons.map((reason, index) => (
            <div key={reason.title} className={`grid gap-2 px-6 py-5 sm:grid-cols-2 ${index < reasons.length - 1 ? "border-b border-[#eef1f8] dark:border-[#1F2937]" : ""}`}>
              <div className="text-sm font-semibold leading-6 text-[#1a1640] dark:text-white">{reason.title}</div>
              <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">{reason.benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
