import { Building2, Globe2, Handshake, UserCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const partnerTypes = [
  {
    icon: Globe2,
    name: "Zoho Authorized & Premium Partners",
    bestFor:
      "End-to-end Zoho deployments; organizations adopting multiple Zoho applications",
    strengths:
      "Certified expertise, broad implementation capability, ongoing managed support",
    consider: "May be resource-draining for smaller or narrowly scoped projects",
    body: "Authorized and Premium Partners offer comprehensive implementation services across the Zoho ecosystem. They're suitable for implementing multiple applications simultaneously or ongoing technical support after deployment. Their strengths lie in product expertise and implementation capacity, particularly for companies looking for a long-term technology partner.",
  },
  {
    icon: Handshake,
    name: "Independent & Boutique Zoho Consulting Firms",
    bestFor:
      "Growing businesses seeking strategic guidance alongside implementation",
    strengths:
      "Senior consultant involvement, business process expertise, personalized engagement",
    consider: "Smaller delivery teams than large agencies",
    body: "Boutique consulting firms adopt a unique approach: they don't focus primarily on software implementation. Instead, they understand your business processes, operational challenges, and organizational goals before designing the right Zoho ERP solution. For growing businesses, this means working directly with experienced consultants who remain closely involved throughout the engagement. You will not see your project transition between multiple teams.",
    highlight:
      "Contetra falls in this innovative category. Our priority is helping businesses design efficient finance and operational processes before they translate into Zoho workflows and automation.",
  },
  {
    icon: UserCheck,
    name: "Freelance Zoho Developers",
    bestFor:
      "Deluge scripting, custom functions, integrations, and one-off technical work",
    strengths: "Cost-effective specialist expertise",
    consider: "Limited consulting, governance, and long-term support",
    body: "Freelancers can be an excellent choice for narrowly defined technical assignments. For example:",
    bullets: [
      "Developing custom Deluge scripts",
      "Creating integrations",
      "Building reports",
      "Supporting specific Zoho applications",
    ],
    closing:
      "However, larger implementations also require expertise across business processes, change management, training, governance, and long-term optimisation.",
  },
  {
    icon: Building2,
    name: "Internal Implementation Teams",
    bestFor:
      "Small implementations with limited complexity and strong internal talent",
    strengths: "Deep understanding of internal operations",
    consider:
      "Limited implementation experience and bandwidth for larger projects",
    body: "Zoho's intuitive interface makes internal implementation more viable than many traditional ERP platforms. If the deployment is straightforward with one or two applications, organizations with capable internal teams may choose to manage parts of the implementation. However, as the project's scope grows, complexity increases quickly. Connecting finance, inventory, CRM, projects, and reporting while maintaining data consistency requires careful planning. At the same time, you must achieve efficient workflows. External consultants bring structured implementation methodologies and cross-industry exposure, helping businesses avoid redesigning processes after go-live.",
  },
];

export default function PartnerTypesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Not All Zoho Implementation Partners Solve the Same Business Challenges"
          desc={
            "Searching for \"best Zoho implementation partners\" online will show you hundreds of agencies, consultants, and solution providers. Many are listed because they're authorized partners. Some appear in search results because they invest heavily in advertising. However, the results don't tell you whether they're the right fit for your business. Different types of partners bring different strengths. Understanding those differences makes the evaluation process significantly smoother."
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
                        Things to Consider
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
            These aren&apos;t competing categories. They&apos;re different
            delivery models designed for varying business needs.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
