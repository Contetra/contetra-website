const purposeItems = [
  "Which type of Microsoft Dynamics 365 partner fits your business",
  "How Business Central differs from Dynamics 365 Finance and Supply Chain Management",
  "What a serious implementation partner should actually do",
  "What timelines, scope decisions and implementation risks to expect",
  "Which questions to ask before signing",
  "Where Contetra’s advisory-led ERP consulting model fits into the decision",
];

export default function IntroSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="mx-auto max-w-3xl">
        <div className="space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Search for the best Microsoft Dynamics 365 ERP partners and you will usually find directories, sponsored lists or broad vendor roundups. These lists rarely explain which delivery model fits your business, what the implementation should include, how to compare proposals or where projects usually fail.
          </p>
          <p>
            This guide is not a ranking of Microsoft Dynamics partners. It is a practical buyer&apos;s guide for CFOs, founders, finance heads, IT leaders and transformation teams evaluating a Dynamics 365 implementation partner.
          </p>
          <p className="font-semibold text-[#1a1640] dark:text-white">The purpose is to help you understand:</p>
        </div>

        <ul className="mt-6 space-y-3">
          {purposeItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50a085] dark:bg-[#86efac]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Contetra&apos;s approach begins with business requirements and process outcomes before decisions are made about configuration, customization or deployment. That distinction matters because a Microsoft Dynamics ERP implementation is not only a software project. It is a finance, process, data, control and change-management project.
          </p>
        </div>

        <div className="my-8 rounded-[8px] border-l-2 border-[#50a085] bg-[#eaf6f2] px-5 py-4 text-sm font-semibold leading-6 text-[#1a1640] dark:border-[#86efac] dark:bg-[#172036] dark:text-white">
          The business case can be significant: a Microsoft-commissioned Forrester study of a composite organization projected a 265% ROI over three years, with payback in less than six months after implementing Dynamics 365 Business Central.
        </div>

        <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          This is also why Microsoft Dynamics implementation should be viewed as part of a broader finance transformation consulting agenda, not only a system replacement exercise.
        </p>
       </div>
      </div>
    </section>
  );
}
