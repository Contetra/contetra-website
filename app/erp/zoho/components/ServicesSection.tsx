import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "ERP Scope & ROI Audit",
    desc: "Review current systems, process gaps, Zoho ERP requirements, cost drivers, risks and ROI opportunities",
  },
  {
    title: "Business Requirement Document",
    desc: "Document functional requirements before implementation begins",
  },
  {
    title: "Process Mapping",
    desc: "Map workflows across finance, sales, inventory, purchase, CRM, projects, HR and reporting",
  },
  {
    title: "Module Fitment",
    desc: "Identify the right Zoho applications based on business needs and growth plans",
  },
  {
    title: "Chart of Accounts and Reporting Review",
    desc: "Structure financial data for MIS, controls, cost centres and management reporting",
  },
  {
    title: "Master Data Readiness",
    desc: "Review customer, vendor, item, inventory, opening balance and transaction data",
  },
  {
    title: "Zoho Data Migration Support",
    desc: "Support migration planning, validation, reconciliation and cutover readiness",
  },
  {
    title: "UAT and Issue Tracking",
    desc: "Help business users test workflows, document issues and coordinate closure",
  },
  {
    title: "Vendor and Technical Team Coordination",
    desc: "Bridge the gap between business teams and Zoho technical implementers",
  },
  {
    title: "MIS and Dashboard Design",
    desc: "Define dashboards, KPIs, profitability reports and management visibility requirements",
  },
  {
    title: "Post-Go-Live Optimisation",
    desc: "Improve adoption, reduce Excel dependency and stabilise business processes after go-live",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading title="What Contetra Delivers in Zoho ERP Implementation" />
        <div className="mx-auto mb-12 max-w-4xl space-y-5 text-center text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Contetra works as a finance-led Zoho ERP consulting partner for
            businesses that want Zoho decisions to support operational control,
            reporting accuracy and management visibility.
          </p>
          <p>
            We help businesses avoid the common mistake of jumping directly into
            configuration without defining business requirements, process
            ownership, data structures, integration needs and reporting
            expectations.
          </p>
        </div>
        <h3 className="mb-8 text-center text-2xl font-bold text-[#1a1640] dark:text-white">
          Contetra&apos;s Zoho ERP Implementation Support
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[12px] border border-[#eef1f8] bg-white p-8 shadow-[0_2px_12px_rgba(26,22,64,0.05)] transition hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.32)]"
            >
              <h3 className="mb-2 text-base font-bold text-[#1a1640] dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
