import {
  AlertOctagon,
  Brain,
  FileSearch,
  MapPinned,
  PackageCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const moduleColumns = ["Core Module", "What It Covers", "Key Capabilities"];

const moduleRows = [
  [
    "Warehouse Management",
    "Manages the movement and storage of goods within warehouses and distribution centers.",
    "Receiving, put-away, picking, packing, bin management, transfers, and dispatch",
  ],
  [
    "Transportation Management",
    "Plans and manages the movement of goods between locations.",
    "Route planning, shipment scheduling, carrier management, delivery tracking, and freight coordination",
  ],
  [
    "Inventory Management",
    "Provides visibility and control over stock across locations.",
    "Real-time stock levels, replenishment, stock transfers, batch/serial tracking, and inventory valuation",
  ],
  [
    "Procurement & Supplier Management",
    "Manages purchasing and supplier relationships across the supply chain.",
    "Purchase orders, supplier records, contracts, approvals, supplier performance, and procurement workflows",
  ],
  [
    "Order Management",
    "Connects customer orders with fulfilment and delivery processes.",
    "Order processing, allocation, fulfilment, backorders, shipment status, and invoicing integration",
  ],
  [
    "Fleet & Asset Management",
    "Tracks vehicles, equipment, and other logistics assets.",
    "Vehicle allocation, maintenance, fuel tracking, asset utilization, and preventive maintenance",
  ],
  [
    "Demand & Supply Planning",
    "Helps businesses anticipate demand and align supply accordingly.",
    "Demand forecasting, replenishment planning, supply planning, safety stock, and exception management",
  ],
  [
    "Finance & Accounting",
    "Connects operational transactions with the financial side of the business.",
    "General ledger, accounts payable/receivable, cost tracking, cash flow, billing, and financial reporting",
  ],
  [
    "Customer & 3PL Management",
    "Supports customer-specific logistics operations and third-party logistics services.",
    "Customer contracts, service rates, billing, shipment visibility, service-level agreements, multi-client operations, and profitability tracking",
  ],
];

const aiCapabilities = [
  {
    icon: TrendingUp,
    title: "Demand forecasting",
    text: "Analyse historical sales and other demand signals to improve forecasts.",
  },
  {
    icon: MapPinned,
    title: "Route optimization",
    text: "Evaluate routes, traffic, delivery windows, and vehicle constraints to enable more efficient planning.",
  },
  {
    icon: PackageCheck,
    title: "Inventory prediction",
    text: "Predict future stock requirements and potential shortages or excess inventory.",
  },
  {
    icon: Brain,
    title: "ETA prediction",
    text: "Use shipment and transportation data to estimate arrival times (ETA) and identify potential delays.",
  },
  {
    icon: FileSearch,
    title: "Automated document processing",
    text: "Extract information from invoices, bills of lading, purchase documents, and logistics paperwork.",
  },
  {
    icon: AlertOctagon,
    title: "Anomaly and fraud detection",
    text: "Identify unusual transactions, shipment patterns, costs, or inventory movements.",
  },
  {
    icon: Wrench,
    title: "Predictive maintenance",
    text: "Utilize vehicle and equipment IoT data to identify potential maintenance issues before they lead to breakdowns.",
  },
];

export default function CoreModulesSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Modules"
          title="What Are the Core Modules of Logistics & Supply Chain ERP?"
          desc="The optimum module mix varies based on your business and operating model. A manufacturer owning a distribution network will have different priorities from a freight forwarder or 3PL provider. However, most logistics & supply chain ERPs include a few common core capabilities."
        />

        <ScrollReveal>
          <DataTable columns={moduleColumns} rows={moduleRows} />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
            Businesses should consider beyond modules to create the right
            balance of functionalities. Ask yourself, &ldquo;How well do
            these modules serve our real supply chain?&rdquo;
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <SectionHeading
            level="h3"
            title="What is the Role of AI in Logistics & Supply Chain ERP?"
            desc="Artificial Intelligence (AI) improves planning and day-to-day logistics operations. The most valuable contribution is predicting what is likely to happen to help teams take timely actions."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.05}>
                  <article className="flex h-full flex-col rounded-[8px] border border-[#eef1f8] bg-white p-6 shadow-[0_5px_18px_rgba(26,22,64,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#50a085]/45 hover:shadow-[0_14px_30px_rgba(26,22,64,0.12)] dark:border-[#1F2937] dark:bg-[#111827]">
                    <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[#b9ddd0] bg-[#eaf6f2] text-[#347d68] dark:border-[#2c5d4c] dark:bg-[#172036] dark:text-[#86efac]">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h4 className="mb-2 text-base font-bold leading-snug text-[#1a1640] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-[#3f4352] dark:text-[#D1D5DB]">
                      {item.text}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.15} className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm leading-7 text-[#3f4352] dark:text-[#D1D5DB]">
              Not every solution offers the same level of AI capabilities.
              Please check our table of ERP platforms below to find out the
              depth of AI features available in different platforms.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
