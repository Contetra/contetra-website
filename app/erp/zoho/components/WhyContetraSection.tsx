import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Finance-led ERP approach",
    benefit:
      "Zoho ERP is structured around financial control, MIS and decision-making",
  },
  {
    title: "Strong process understanding",
    benefit:
      "Better workflows across finance, sales, inventory, CRM, purchase, projects and reporting",
  },
  {
    title: "BRD and documentation discipline",
    benefit:
      "Clear scope reduces confusion, rework and unnecessary customisation",
  },
  {
    title: "Module selection discipline",
    benefit:
      "Helps businesses implement what is required instead of overcomplicating the system",
  },
  {
    title: "Data and reporting focus",
    benefit:
      "Cleaner migration, better reconciliation and stronger MIS visibility",
  },
  {
    title: "Cross-industry experience",
    benefit:
      "Practical understanding of trading, services, retail, ecommerce, manufacturing and multi-location businesses",
  },
  {
    title: "Vendor coordination support",
    benefit:
      "Better communication between business users and technical teams",
  },
  {
    title: "Post-go-live optimisation",
    benefit:
      "Helps stabilise adoption and reduce spreadsheet dependency after implementation",
  },
];

export default function WhyContetraSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-14 text-center text-3xl font-semibold leading-tight text-[#1a1640] dark:text-white md:text-[2.6rem]">
          Why Contetra and FAQs
        </h2>
        <SectionHeading
          title="Why Choose Contetra for Zoho ERP Implementation?"
          level="h3"
        />
        <div className="mx-auto mb-10 max-w-4xl space-y-4 text-center text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>Contetra&apos;s positioning is simple:</p>
          <p className="font-semibold text-[#1a1640] dark:text-white">
            We speak the language of your balance sheet, not just your tech
            stack.
          </p>
          <p>
            Businesses choose Contetra because Zoho ERP implementation needs
            more than technical configuration. It needs business understanding,
            financial control, process clarity, clean data and reporting
            discipline.
          </p>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
          <div className="grid bg-[#1a1640] px-6 py-4 text-sm font-bold text-white dark:bg-[#172036] sm:grid-cols-2">
            <div>Why Contetra</div>
            <div className="hidden sm:block">Business Benefit</div>
          </div>
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`grid gap-2 px-6 py-5 sm:grid-cols-2 ${
                index < reasons.length - 1
                  ? "border-b border-[#eef1f8] dark:border-[#1F2937]"
                  : ""
              }`}
            >
              <div className="text-sm font-semibold leading-6 text-[#1a1640] dark:text-white">
                {reason.title}
              </div>
              <div className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                {reason.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
