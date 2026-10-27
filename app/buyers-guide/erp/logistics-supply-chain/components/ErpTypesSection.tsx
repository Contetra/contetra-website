import { Factory, Ship, ShoppingCart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const types = [
  {
    icon: Factory,
    name: "ERP for Distributors and Manufacturers with In-house Logistics",
    paragraphs: [
      "Distributors and manufacturers managing their own logistics need supply chain ERP software that connects procurement, inventory, warehousing, transportation, and finance.",
      "A distribution ERP should support demand planning, order fulfilment, stock transfers, and replenishment. On the other hand, a warehouse ERP should enable accurate stock tracking, cross-docking, and efficient picking and dispatch.",
      "Businesses importing goods should also consider landed cost calculations to account for freight, duties, insurance, and other expenses.",
      "Last-mile delivery visibility can help teams monitor shipments and improve delivery reliability. When choosing ERP for logistics companies with in-house operations, prioritize integration between warehouse activities, transportation planning, and financial reporting.",
    ],
  },
  {
    icon: Ship,
    name: "ERP for 3PLs and Freight Forwarders",
    paragraphs: [
      "Third-party logistics (3PL) providers and freight forwarders need an ERP that connects shipment management, transportation, warehousing, and customer billing.",
      "ERP for 3PL operations should support customer-specific charges for storage, handling, and per-pallet usage. Consequently, freight forwarding ERP capabilities should cover shipment and container tracking, bills of lading, HS codes, customs documentation, and bonded warehousing.",
      "Other essential features include electronic data interchange (EDI), landed cost calculations, and control tower visibility across shipments.",
      "When evaluating logistics ERP software, providers should also assess whether it can track freight costs, automate documentation, and manage multiple customers without creating separate operational silos.",
    ],
  },
  {
    icon: ShoppingCart,
    name: "ERP for E-commerce Fulfilment Businesses",
    paragraphs: [
      "E-commerce fulfillment businesses need logistics ERP software that can handle high order volumes, multiple sales channels, and fast delivery expectations. The system should integrate with online marketplaces and e-commerce platforms through APIs or EDI, synchronizing orders, inventory, and fulfilment status.",
      "A capable warehouse ERP should support efficient picking, packing, dispatch, and stock visibility across fulfilment centres.",
      "Moreover, last-mile delivery tracking helps teams monitor delivery performance, while reverse logistics capabilities simplify returns, exchanges, and restocking.",
      "Businesses should also assess order cycle time, on-time, in-full (OTIF) delivery, perfect order rate, inventory turnover, freight cost per unit, and the cash-to-cash cycle to measure performance and identify operational bottlenecks.",
    ],
  },
];

export default function ErpTypesSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Choosing by Business Model"
          title="What Are the Different Types of Logistics & Supply Chain ERP?"
          desc="The nature of your business and operating model determines the type of ERP best suited for your requirements. Here's a breakdown to help you develop a better idea of what's available in the market:"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <ScrollReveal key={type.name} delay={index * 0.1}>
                <article className="flex h-full flex-col rounded-[12px] border border-[#eef1f8] bg-white p-7 shadow-[0_6px_20px_rgba(26,22,64,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/60 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#86efac]/55">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-4 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {type.name}
                  </h3>
                  <div className="space-y-3 text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {type.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          delay={0.15}
          className="mx-auto mt-8 max-w-4xl rounded-[12px] border-l-4 border-[#50a085] bg-white px-7 py-6 shadow-[0_6px_20px_rgba(26,22,64,0.06)] dark:border-[#86efac] dark:bg-[#172036]"
        >
          <p className="text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">
            For Indian operations, ERPs for all three categories should
            support applicable GST invoicing requirements and integrate
            with e-way bills and e-invoicing workflows where required. If
            fulfilment involves imported products, customs documentation and
            import-related cost tracking are also important considerations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
