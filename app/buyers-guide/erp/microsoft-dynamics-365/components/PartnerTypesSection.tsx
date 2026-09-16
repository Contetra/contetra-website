import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const deliveryModels = [
  "Global system integrators",
  "Regional or boutique Dynamics 365 partners",
  "Independent Dynamics consultants",
  "Internal or self-managed implementation teams",
];

const rows: string[][] = [
  [
    "Global system integrators",
    "Large, multi-country Dynamics 365 Finance and Operations programs",
    "Scale, international delivery, large specialist teams",
    "Higher cost, slower decisions, less senior attention after sale",
  ],
  [
    "Regional or boutique Dynamics partners",
    "Mid-market and SME Business Central or focused Dynamics projects",
    "Senior involvement, closer collaboration, flexibility",
    "Smaller resource bench than global providers",
  ],
  [
    "Independent Dynamics consultants",
    "Narrow module support, assessments, reporting or temporary help",
    "Specialist knowledge, flexible engagement",
    "Dependency on one person and limited backup",
  ],
  [
    "Internal or DIY teams",
    "Companies with experienced in-house Dynamics capability",
    "Direct control and business knowledge",
    "Limited methodology, capacity and transformation experience",
  ],
];

const partnerTypes = [
  {
    heading: "1. Global System Integrators",
    paragraphs: [
      "Global system integrators are typically considered for large and complex Microsoft Dynamics 365 transformations.",
      "They may be appropriate when the project includes multiple countries, large numbers of users, complex legal-entity structures, advanced supply-chain requirements, manufacturing operations, extensive security requirements, several third-party integrations and long-term managed services.",
      "Their primary advantage is scale. They can bring functional, technical, integration, data, project management and change-management resources into one program.",
      "That scale also creates trade-offs. Large delivery structures may involve higher consulting costs, longer approval chains, more formal change-control procedures and less direct access to senior consultants after the sale.",
      "A global integrator may be the right choice for a multinational Dynamics 365 Finance and Supply Chain Management rollout. It may be unnecessarily complex for a focused Business Central implementation.",
    ],
  },
  {
    heading: "2. Regional and Boutique Dynamics 365 Partners",
    paragraphs: [
      "Regional and boutique Microsoft Dynamics partners usually work with mid-sized organizations, growing companies and businesses that want more direct involvement from experienced consultants.",
      "This category can be relevant for Business Central implementations, mid-market finance transformations, multi-entity finance projects, ERP replacements, process redesign assignments, focused Dynamics 365 Finance projects and companies implementing ERP for the first time.",
      "A capable boutique Dynamics 365 partner may offer greater senior-consultant involvement, faster project decisions, flexible delivery structures, better continuity between discovery and implementation, closer collaboration with stakeholders and a more proportionate cost model.",
      "The value of a smaller partner should not be assumed automatically. Buyers still need to verify functional depth, technical capability, data migration experience, integration knowledge, project governance, post-go-live support and backup resource availability.",
    ],
    callout:
      "This is the category where Contetra is most relevant. Contetra’s ERP implementation consulting services are designed for businesses that need senior finance-led functional support, process clarity, implementation governance and practical decision-making rather than a large layered delivery structure.",
  },
  {
    heading: "3. Independent Microsoft Dynamics Consultants",
    paragraphs: [
      "An independent Microsoft Dynamics ERP consultant may be appropriate when the requirement is narrow, temporary or highly specialized.",
      "Common assignments include finance module configuration, Business Central assessment, reporting improvements, data migration support, user training, process optimization, legacy NAV or GP review, temporary project assistance and post-go-live troubleshooting.",
      "For a clearly defined piece of work, an independent consultant can be cost-effective and flexible. The risk increases when one consultant becomes responsible for a project that requires several disciplines. A complete Microsoft Dynamics ERP implementation may involve functional design, technical configuration, data migration, integrations, testing, training, project management, change management and hypercare.",
      "One person rarely covers all these areas effectively. There is also continuity risk. If the consultant becomes unavailable, there may be no immediate backup.",
      "Independent consultants work best when the scope is narrow, responsibilities are clearly documented, internal teams can manage adjacent workstreams and knowledge transfer is included.",
    ],
  },
  {
    heading: "4. Internal or DIY Dynamics 365 Implementation",
    paragraphs: [
      "Some organizations consider implementing Microsoft Dynamics 365 through internal teams or a self-managed setup.",
      "This may be practical when the company already has experienced Dynamics functional consultants, technical and integration specialists, strong ERP project management, internal data-migration capability, process owners with implementation experience and a mature change-management function.",
      "For most first-time ERP buyers, however, software access is not the same as implementation capability.",
      "The business must still define current and future processes, chart of accounts, approval structures, user roles, master data, reporting requirements, migration rules, integration design, testing scenarios, training plans, cutover activities and post-launch support.",
      "Internal teams also face a capacity issue. The same finance, IT, operations, procurement and sales leaders needed for implementation must continue running daily business activities.",
      "A self-managed project can work when the organization has genuine internal capability. It becomes risky when the decision is driven mainly by an attempt to avoid consulting cost.",
      "The most effective model is often shared ownership: the business owns objectives, requirements and key decisions, while the implementation partner provides structure, specialist knowledge, challenge and execution support.",
    ],
  },
];

export default function PartnerTypesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Types of Microsoft Dynamics 365 Implementation Partners" />

        <p className="mx-auto mb-6 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          Organizations evaluating Microsoft Dynamics ERP solutions generally encounter four delivery models:
        </p>

        <ul className="mx-auto mb-10 max-w-3xl space-y-3">
          {deliveryModels.map((model) => (
            <li key={model} className="flex items-start gap-3 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50a085] dark:bg-[#86efac]" aria-hidden="true" />
              <span>{model}</span>
            </li>
          ))}
        </ul>

        <DataTable columns={["Partner Model", "Best Suited For", "Main Advantages", "Main Risks"]} rows={rows} />

        <p className="mx-auto mt-10 mb-16 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          This category view is more useful than a ranked list because different businesses need different implementation models. Your Microsoft Dynamics partner should fit your operating complexity, not just your software preference.
        </p>

        <div className="mx-auto max-w-3xl space-y-12">
          {partnerTypes.map((type, index) => (
            <ScrollReveal key={type.heading} delay={index * 0.08}>
              <h3 className="mb-4 text-2xl font-bold leading-tight dark:text-white">{type.heading}</h3>
              <div className="space-y-4 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
                {type.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {type.callout ? (
                <div className="mt-4 rounded-[8px] border-l-2 border-[#50a085] bg-white px-5 py-4 text-sm leading-6 text-[#1a1640] shadow-sm dark:border-[#86efac] dark:bg-[#172036] dark:text-white">
                  {type.callout}
                </div>
              ) : null}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
