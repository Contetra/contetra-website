import {
  ArrowLeftRight,
  Banknote,
  PackageSearch,
  Truck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const keyFeatures = [
  {
    icon: PackageSearch,
    text: "Tracks stock levels and supports replenishment, picking, packing, transfers, and shipping.",
  },
  {
    icon: Truck,
    text: "Helps plan routes, track vehicle movement, manage freight, and coordinate carriers.",
  },
  {
    icon: ArrowLeftRight,
    text: "Connects orders with fulfillment and shipment status, giving teams better visibility from order to delivery.",
  },
  {
    icon: Banknote,
    text: "Links procurement and logistics transactions with accounting, cash flow, inventory valuation, and cost-of-goods calculations.",
  },
];

export default function IntroSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Overview"
          title="What Is Logistics & Supply Chain ERP?"
        />

        <ScrollReveal className="mx-auto max-w-4xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            A logistics &amp; supply chain ERP syncs both functions using a
            unified platform. This enables different processes to share the
            same data instead of maintaining separate records.
          </p>
          <p>
            Supply chain management (SCM) encompasses a broad operational
            landscape. It covers sourcing, procurement, demand, inventory,
            suppliers, and the flow of goods across the network.
          </p>
          <p>
            Logistics focuses on moving and storing those goods. This
            includes warehousing, transportation, fulfilment, and delivery.
          </p>
          <p>
            Most importantly, finance remains connected throughout the
            entire process. Purchase costs, inventory values, cash flow, and
            other financial records are updated as transactions occur.
          </p>
          <p className="font-semibold text-[#1a1640] dark:text-white">
            Here&apos;s a look at the key features:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-6 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.text}
                  className="flex items-start gap-3 rounded-[8px] border border-[#eef1f8] bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#1F2937] dark:bg-[#172036]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#111827] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[12px] bg-[#1a1640] px-7 py-7 text-white shadow-[0_18px_40px_rgba(26,22,64,0.25)] dark:bg-[#172036]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#86efac]">
                Supply Chain ERP Market
              </p>
              <p className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight">
                $15.61B&nbsp;→&nbsp;$21.73B
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Growing at a CAGR of 6.84%, from $15.61 billion in 2026 to a
                predicted $21.73 billion by 2031.
              </p>
            </div>
            <div className="rounded-[12px] bg-[#1a1640] px-7 py-7 text-white shadow-[0_18px_40px_rgba(26,22,64,0.25)] dark:bg-[#172036]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#86efac]">
                Logistics ERP Market
              </p>
              <p className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight">
                $17.60B&nbsp;→&nbsp;$34.68B
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                A larger market size, predicted to climb from $17.60 billion
                in 2026 to $34.68 billion by 2035.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
