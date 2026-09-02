import { Cloud, CloudCog, Server } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const platforms = [
  {
    icon: Cloud,
    name: "Oracle NetSuite",
    bestFor:
      "Small to mid-sized businesses and fast-growing organizations",
    deployment: "Cloud-native",
    complexity: "Low to Moderate",
  },
  {
    icon: CloudCog,
    name: "Oracle Fusion Cloud ERP",
    bestFor:
      "Mid-sized to large enterprises with complex financial and operational requirements",
    deployment: "Cloud-native",
    complexity: "Moderate to High",
  },
  {
    icon: Server,
    name: "Oracle E-Business Suite (EBS)",
    bestFor:
      "Businesses with existing on-premise Oracle investments and highly customized environments",
    deployment: "Primarily On-Premise (Private Cloud options available)",
    complexity: "High",
  },
];

export default function PlatformComparisonSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Platform Selection"
          title="Oracle Fusion Cloud ERP vs. NetSuite vs. Oracle E-Business Suite"
          desc="Oracle offers multiple ERP platforms, each designed for different stages of business growth and operational complexity. You should select the solution that best supports your current needs while allowing room to scale."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <ScrollReveal key={platform.name} delay={index * 0.1}>
                <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-4 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {platform.name}
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Best Suited For
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {platform.bestFor}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Deployment
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {platform.deployment}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Complexity
                      </dt>
                      <dd>
                        <span className="mt-1 inline-flex rounded-full bg-[#eaf6f2] px-3 py-1 text-xs font-semibold text-[#347d68] dark:bg-[#172036] dark:text-[#86efac]">
                          {platform.complexity}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-14 max-w-4xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            For many growing organizations, the decision often comes down to
            NetSuite versus Oracle Fusion Cloud ERP.
          </p>
          <p>
            NetSuite is designed with simplicity, speed of deployment, and
            scalability in mind. It is an attractive choice for businesses
            that want an integrated cloud ERP without extensive
            customization.
          </p>
          <p>
            Oracle Fusion Cloud ERP, on the other hand, offers broader
            enterprise capabilities across finance, procurement, supply
            chain, manufacturing, projects, and enterprise performance
            management. It is suited for businesses with more sophisticated
            operational requirements.
          </p>
          <p>
            E-Business Suite continues to support many established
            enterprises that have invested heavily in customised on-premise
            environments.
          </p>
          <p>
            While many organizations plan their transition to Oracle Cloud,
            the timing and migration strategy depend on business priorities,
            existing investments, and long-term technology roadmaps.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mx-auto mt-10 max-w-3xl rounded-[12px] border border-[#eef1f8] bg-white p-8 text-center shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#0A0A0A]">
          <p className="text-lg font-semibold leading-7 text-[#1a1640] dark:text-white">
            Need help deciding between Oracle Fusion Cloud ERP, NetSuite, and
            E-Business Suite?
          </p>
          <p className="mt-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
            Contetra&apos;s team can scope your business requirements and
            implementation needs to help you make the right platform
            decision with greater clarity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
