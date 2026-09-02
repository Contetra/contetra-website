import {
  Database,
  GraduationCap,
  KeyRound,
  LifeBuoy,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const costComponents = [
  {
    icon: KeyRound,
    component: "Oracle Licensing",
    covers:
      "Cloud subscriptions or software licensing based on users, modules, and deployment model",
  },
  {
    icon: Wrench,
    component: "Implementation Services",
    covers:
      "Discovery workshops, solution design, configuration, integrations, testing, and deployment",
  },
  {
    icon: Database,
    component: "Data Migration",
    covers: "Data cleansing, mapping, migration, and validation",
  },
  {
    icon: GraduationCap,
    component: "Training & Change Management",
    covers:
      "User training, documentation, adoption workshops, and communication",
  },
  {
    icon: LifeBuoy,
    component: "Post Go-Live Support",
    covers: "Hypercare, optimisation, enhancements, and ongoing support",
  },
];

export default function CostPricingSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Budgeting"
          title="Oracle ERP Cost & Pricing: What Should You Budget?"
          desc="Project costs vary depending on company size, the number of legal entities, modules being implemented, existing data quality, required integrations, reporting complexity, and the level of business process redesign. Instead of looking at implementation as a single cost, think of it as several investment components."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costComponents.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.component} delay={index * 0.07}>
                <article className="group flex h-full flex-col rounded-[8px] border border-[#e2e8e6] bg-white p-6 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {item.component}
                  </h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {item.covers}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-[12px] bg-[#1a1640] px-8 py-8 text-center text-white shadow-[0_18px_40px_rgba(26,22,64,0.25)] dark:bg-[#172036]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#86efac]">
              Industry Benchmark
            </p>
            <p className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight">
              $75,000&nbsp;&ndash;&nbsp;$500,000
            </p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              While every project is unique, industry benchmarks generally
              place implementation costs within $75,000 for small businesses
              and $500,000 for large enterprises (excluding Oracle
              licensing).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mx-auto mt-10 max-w-4xl space-y-4 text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            At Contetra, budgeting discussions begin by establishing clear
            business requirements before engaging technical vendors. A
            well-defined scope not only improves implementation planning but
            also enables more meaningful vendor comparisons.
          </p>
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            It helps organizations avoid paying for unnecessary
            customization or loosely defined deliverables.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
