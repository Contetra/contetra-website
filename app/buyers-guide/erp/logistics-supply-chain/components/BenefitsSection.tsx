import {
  BarChart3,
  Boxes,
  Eye,
  Handshake,
  Layers,
  LineChart,
  PackageCheck,
  Truck,
  Wallet,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const benefits = [
  {
    icon: Wallet,
    title: "Working Capital & Inventory Management",
    text: "Real-time stock visibility and smarter replenishment reduce excess inventory, stockouts, and cash tied up in slow-moving goods.",
  },
  {
    icon: Boxes,
    title: "Warehouse Management",
    text: "Connected receiving, storage, picking, packing, and dispatch workflows help warehouses process orders faster with fewer manual errors.",
  },
  {
    icon: Truck,
    title: "Transportation Costs",
    text: "Route planning, carrier management, shipment tracking, and freight visibility help businesses control transportation costs and improve delivery efficiency.",
  },
  {
    icon: Handshake,
    title: "Procurement & Supplier Management",
    text: "Connected purchasing and supplier data enables businesses to negotiate better, monitor supplier performance, and align procurement more closely with actual demand.",
  },
  {
    icon: PackageCheck,
    title: "Order Fulfilment & Customer Service",
    text: "End-to-end order and delivery visibility allows teams to respond to delays faster and provide customers more accurate shipment information.",
  },
  {
    icon: Eye,
    title: "Supply Chain Visibility",
    text: "A shared view of procurement, inventory, warehouses, transportation, and orders makes it easier to identify bottlenecks before they disrupt operations.",
  },
  {
    icon: BarChart3,
    title: "Financial Control",
    text: "Linking operational transactions with finance provides businesses better visibility into logistics costs, margins, cash flow, inventory valuation, and profitability.",
  },
  {
    icon: LineChart,
    title: "Planning & Decision-Making",
    text: "Historical and real-time data can help teams forecast demand, plan capacity, identify risks, and make supply chain decisions with greater confidence.",
  },
  {
    icon: Layers,
    title: "Multi-Location Scaling",
    text: "A connected ERP makes it easier to manage multiple warehouses, branches, entities, customers, and operating locations without creating separate information silos.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#eaf6f2] py-20 text-[#1a1640] dark:bg-[#111827]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Business Impact"
          title="What Are the Benefits of Supply Chain & Logistics ERP?"
          desc="An ERP built for logistics and supply chain leads to countless favorable business outcomes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[8px] border border-[#eef1f8] bg-white p-6 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                    {benefit.text}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
