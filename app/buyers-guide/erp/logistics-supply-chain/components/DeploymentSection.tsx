import { Cloud, Server, Shuffle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const models = [
  {
    icon: Cloud,
    name: "Cloud/SaaS ERP",
    meaning:
      "The vendor hosts the solution and provides access via the internet through a subscription",
    advantages:
      "Quick deployment, easier updates, lower internal infrastructure requirements, and access from anywhere.",
    considerations:
      "Depends on reliable connectivity; subscription costs continue over time; integration and data-residency requirements need assessment",
    fit: "Businesses with distributed warehouses, mobile teams, multiple locations, and a need for real-time visibility across operations.",
  },
  {
    icon: Server,
    name: "On-Premise ERP",
    meaning:
      "The company installs and manages the ERP on its own servers and infrastructure.",
    advantages:
      "Greater control over infrastructure, data, security policies, and system configuration.",
    considerations:
      "Higher upfront infrastructure costs; requires internal IT expertise for maintenance, upgrades, backups, and security.",
    fit: "Businesses with strict data or security requirements, specialized infrastructure, or locations with unreliable cloud connectivity.",
  },
  {
    icon: Shuffle,
    name: "Hybrid ERP",
    meaning:
      "Core ERP functions may remain on-premise while selected applications or operational tools run in the cloud.",
    advantages:
      "Balances control with cloud accessibility; can support gradual modernization.",
    considerations:
      "More complex architecture; integrations, security, and data synchronization require careful management.",
    fit: "Businesses with established legacy systems that still need cloud-based warehouse, transportation, mobile, or customer-facing capabilities.",
  },
];

export default function DeploymentSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Deployment"
          title="How Can You Deploy Supply Chain & Logistics ERP?"
          desc="Logistics and supply chain operations extend beyond the office, encompassing warehouses, vehicles, field teams, and customers. This makes deployment an important part of the selection process. The three common approaches are cloud, on-premise, and hybrid deployment:"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <ScrollReveal key={model.name} delay={index * 0.1}>
                <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-4 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {model.name}
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {model.meaning}
                  </p>
                  <dl className="space-y-3 border-t border-[#eef1f8] pt-4 text-sm dark:border-[#1F2937]">
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Key Advantages
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {model.advantages}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Key Considerations
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {model.considerations}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Industry Fit
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {model.fit}
                      </dd>
                    </div>
                  </dl>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            The right deployment model should support seamless data flow
            across your physical and digital supply chain without creating
            unnecessary complexity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
