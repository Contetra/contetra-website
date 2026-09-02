import { Cloud, CloudCog, Puzzle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const platforms = [
  {
    icon: Puzzle,
    name: "Standalone Applications",
    bestFor: "Businesses solving a specific operational need",
    coverage: "Individual applications such as Books, CRM, or Inventory",
    complexity: "Low",
  },
  {
    icon: Cloud,
    name: "Zoho Finance Plus",
    bestFor: "Organizations seeking integrated financial management",
    coverage:
      "Books, Inventory, Expense, Analytics, Checkout, and related finance applications",
    complexity: "Moderate",
  },
  {
    icon: CloudCog,
    name: "Zoho One",
    bestFor:
      "Businesses looking for an integrated business platform across departments",
    coverage:
      "Finance, Sales, Marketing, HR, Projects, Operations, Collaboration, and Analytics",
    complexity: "Moderate to High",
  },
];

export default function PlatformComparisonSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Platform Selection"
          title="Zoho One vs. Finance Plus vs. Standalone Applications"
          desc="Businesses can begin with a focused implementation and expand their ecosystem as operational requirements evolve. Choosing the right deployment approach depends less on company size and more on the functions you want Zoho to support."
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
                        Typical Coverage
                      </dt>
                      <dd className="text-[#3f4352] dark:text-[#D1D5DB]">
                        {platform.coverage}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#1a1640] dark:text-white">
                        Implementation Complexity
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
            Applications can be introduced in phases while maintaining a
            long-term roadmap for future automation, integrations, and
            reporting. This allows businesses to realize value quickly
            without losing sight of broader transformation objectives.
          </p>
          <p>
            For implementation partners, this means designing not only
            today&apos;s solution but also an architecture that supports
            tomorrow&apos;s growth.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mx-auto mt-10 max-w-3xl rounded-[12px] border border-[#eef1f8] bg-white p-8 text-center shadow-[0_2px_12px_rgba(26,22,64,0.05)] dark:border-[#1F2937] dark:bg-[#0A0A0A]">
          <p className="text-lg font-semibold leading-7 text-[#1a1640] dark:text-white">
            Are you confused about how to move forward?
          </p>
          <p className="mt-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
            Contetra assesses your business processes, functional
            requirements, and growth plans to determine the right
            combination of Zoho applications, whether that means standalone
            solutions, Finance Plus, or a broader Zoho One implementation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
