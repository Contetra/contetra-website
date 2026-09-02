import {
  Cog,
  Database,
  GraduationCap,
  KeyRound,
  LifeBuoy,
  Plug,
  Wrench,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const costComponents = [
  {
    icon: KeyRound,
    component: "Zoho Licensing",
    covers:
      "Zoho One subscriptions, Finance Plus bundles, or individual application licences depending on the deployment strategy",
  },
  {
    icon: Wrench,
    component: "Implementation & Consulting",
    covers:
      "Business discovery, solution design, application configuration, workflow setup, and project management",
  },
  {
    icon: Database,
    component: "Data Migration",
    covers:
      "Data cleansing, mapping, migration, and validation from existing accounting or business systems",
  },
  {
    icon: Cog,
    component: "Automation & Customization",
    covers: "Deluge scripting, custom workflows, forms, approvals, and business rules",
  },
  {
    icon: Plug,
    component: "Integrations",
    covers:
      "Connecting Zoho with third-party applications, payment gateways, banking platforms, or external software",
  },
  {
    icon: GraduationCap,
    component: "Training & Change Management",
    covers: "User training, documentation, and adoption support",
  },
  {
    icon: LifeBuoy,
    component: "Post-Go-Live Support",
    covers: "Ongoing optimisation, enhancements, and technical support",
  },
];

const budgetFactors = [
  "The number of Zoho applications being deployed",
  "Existing data quality and migration requirements",
  "Custom integrations with third-party platforms",
  "Workflow complexity and scale of automation",
  "Reporting and dashboard requirements",
  "The level of user training and post-go-live support",
];

export default function CostPricingSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Budgeting"
          title="Zoho ERP Cost & Pricing: What Should You Budget For?"
          desc="One of Zoho's biggest advantages is that organizations can implement the platform incrementally. Some businesses begin with a single application, such as Zoho Books, before expanding into Inventory, CRM, Projects, or the full-scale Zoho One suite. Others choose a phased implementation based on business priorities. As a result, implementation costs vary considerably depending on scope. Instead of viewing it as a single expense, you should consider it made up of several parts."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costComponents.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.component} delay={index * 0.06}>
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

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <h3 className="mb-5 text-xl font-bold leading-tight text-[#1a1640] dark:text-white">
              Implementation budgets are generally influenced by factors
              such as:
            </h3>
            <ul className="space-y-3">
              {budgetFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#50a085] dark:text-[#86efac]"
                  />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-[12px] bg-[#1a1640] px-8 py-8 text-center text-white shadow-[0_18px_40px_rgba(26,22,64,0.25)] dark:bg-[#172036]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#86efac]">
                Industry Benchmark
              </p>
              <p className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight">
                $5,000&nbsp;&ndash;&nbsp;$25,000+
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                As industry benchmarks suggest, Zoho implementation services
                can range from roughly $5,000 for a straightforward
                multi-app setup to $25,000+ for more complex Zoho One
                deployments involving migration, automation, integrations,
                and multiple departments.
              </p>
              <p className="mt-3 text-xs leading-5 text-white/60">
                These are implementation costs only; Zoho licensing and
                ongoing support are separate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
