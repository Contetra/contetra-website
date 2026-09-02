import { Building2, Globe2, Handshake, UserCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const partnerTypes = [
  {
    icon: Globe2,
    name: "Global System Integrators (GSIs)",
    bestFor:
      "Large enterprises operating across multiple countries and business units",
    strengths:
      "Extensive Oracle expertise, large delivery teams, global support",
    consider:
      "Higher costs, longer implementation timelines, layered account structures",
    body: "Large consulting firms remain an excellent choice for multinational organizations managing complex Oracle projects across multiple geographies, business units, and regulatory environments. Their scale allows them to mobilize hundreds of consultants, specialist architects, and industry experts across regions. However, that same scale leads to longer decision cycles, multiple management layers, and higher implementation costs. Mid-market organizations frequently discover they're paying for capabilities they may never need.",
  },
  {
    icon: Handshake,
    name: "Regional & Boutique Oracle ERP Consulting Firms",
    bestFor: "Mid-sized businesses and growth-stage organizations",
    strengths:
      "Senior consultant involvement, personalized engagement, faster decision-making, cost-effective delivery",
    consider: "May not be suitable for extremely large global projects",
    body: "For growing businesses, boutique Oracle consulting firms are in demand. Instead of large account structures, these firms offer direct access to experienced consultants who remain involved throughout the project, from discovery to post-go-live optimization. This creates faster communication, stronger accountability, and closer collaboration with leadership. Rather than simply executing predefined tasks, senior consultants actively challenge assumptions, recommend process improvements, and help businesses make more informed implementation decisions.",
    highlight:
      "This is where Contetra belongs. The emphasis isn't on deploying the largest consulting team. It's on providing experienced functional advisors who work closely with finance and operations leaders to maximize business value across your ERP journey.",
  },
  {
    icon: UserCheck,
    name: "Independent Oracle ERP Consultants",
    bestFor:
      "Short-term advisory assignments, health checks, module-specific expertise",
    strengths: "Flexibility and lower engagement costs",
    consider: "Limited delivery capacity and no broader implementation team",
    body: "Independent consultants can be highly effective when organizations need specialist expertise. Examples include:",
    bullets: [
      "Reviewing an existing Oracle implementation",
      "Supporting a single module rollout",
      "Providing project governance",
      "Advising on architecture decisions",
    ],
    closing:
      "However, full-scale ERP implementations require multidisciplinary teams. For larger projects, relying solely on an individual consultant may introduce unnecessary delivery risk.",
  },
  {
    icon: Building2,
    name: "Internal Implementation Teams",
    bestFor:
      "Organizations with experienced Oracle resources and narrow project scope",
    strengths: "Internal business knowledge and greater control",
    consider:
      "Requires significant ERP expertise, governance, and project management capability",
    body: "This approach can work where the business already has experienced Oracle professionals and the implementation scope remains relatively contained. For most growing organisations, however, Oracle ERP implementations represent one of the largest business transformation initiatives undertaken in years. Internal teams generally lack structured methodologies, lessons learned from previous deployments, and specialized expertise needed for such significant transformations.",
  },
];

export default function PartnerTypesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Not All Oracle ERP Partners Solve the Same Business Problems"
          desc={
            'A quick online search for "Oracle ERP implementation partners" produces hundreds of firms claiming to be the best. However, there isn\'t a universally "best" Oracle partner. The right implementation partner depends on your organization\'s size, project complexity, internal capabilities, and growth ambitions. Understanding the different categories of Oracle partners helps narrow your search far more effectively than comparing what the marketing claims.'
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {partnerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <ScrollReveal key={type.name} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#50a085] opacity-70 transition group-hover:opacity-100 dark:bg-[#86efac]" />
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                      {type.name}
                    </h3>
                  </div>

                  <dl className="mb-4 space-y-2 border-t border-[#eef1f8] pt-4 text-sm dark:border-[#1F2937]">
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Best Suited For
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {type.bestFor}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Key Strengths
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {type.strengths}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        What to Consider
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {type.consider}
                      </dd>
                    </div>
                  </dl>

                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {type.body}
                  </p>

                  {type.bullets ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {type.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}

                  {type.closing ? (
                    <p className="mt-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {type.closing}
                    </p>
                  ) : null}

                  {type.highlight ? (
                    <p className="mt-3 rounded-[8px] bg-[#eaf6f2] px-4 py-3 text-sm font-semibold leading-6 text-[#1a1640] dark:bg-[#172036] dark:text-white">
                      {type.highlight}
                    </p>
                  ) : null}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.1} className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Instead of viewing these categories as competitors, it&apos;s
            more useful to think of them as different delivery models.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
