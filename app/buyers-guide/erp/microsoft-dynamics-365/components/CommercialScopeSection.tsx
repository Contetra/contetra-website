import SectionHeading from "./SectionHeading";

const scopeItems = [
  "Entities, locations and modules covered",
  "Data migration responsibility",
  "Integrations included",
  "Reports and dashboards covered",
  "Customization and development assumptions",
  "UAT, training and documentation",
  "Hypercare and post-go-live support",
  "Change-request process",
  "Client-side responsibilities",
];

export default function CommercialScopeSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Commercial and Scope Clarity Before Appointing a Dynamics Partner"
          desc="Before appointing a Microsoft Dynamics 365 partner, buyers should clearly understand what is included in the implementation scope."
        />

        <p className="mb-5 text-base font-semibold leading-7 text-[#1a1640] dark:text-white">
          The proposal should define:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {scopeItems.map((item) => (
            <div key={item} className="border-l-2 border-[#50a085] bg-white px-4 py-3 text-sm font-semibold leading-6 shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-[#E5E7EB]">
              {item}
            </div>
          ))}
        </div>

        <p className="mt-10 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          A proposal should not be judged only by the headline commercial number. It should be assessed based on scope completeness, delivery responsibility, governance and post-go-live support.
        </p>
       </div>
      </div>
    </section>
  );
}
