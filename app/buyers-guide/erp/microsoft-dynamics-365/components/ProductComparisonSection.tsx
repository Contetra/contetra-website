import Link from "next/link";
import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  [
    "What it actually is",
    "A single integrated cloud ERP application",
    "Two connected applications — Finance, and Supply Chain Management — often licensed together",
    "Microsoft's earlier on-premise ERP products, now largely superseded",
  ],
  ["Best suited for", "Small and mid-sized organizations", "Larger and operationally complex enterprises", "Businesses on older Microsoft ERP systems considering modernization"],
  ["Business complexity", "Low to moderate", "Moderate to high", "Depends on existing setup"],
  ["Deployment", "Cloud-first, partner-led", "Enterprise cloud applications, with private/public cloud options", "Often on-premise or heavily customized"],
  [
    "Core modules",
    "Finance, purchasing, sales, inventory, light manufacturing, project costing",
    "Advanced finance, multi-entity consolidation, manufacturing, warehouse management, demand planning",
    "Varies significantly by version and customization history",
  ],
  ["Multi-entity capability", "Suitable for growing organizations", "Strong fit for complex, multi-country structures", "May require workarounds"],
  [
    "Manufacturing and supply chain",
    "Suitable for moderate needs (light manufacturing)",
    "Better for complex, discrete or process manufacturing operations",
    "Depends on version/customization",
  ],
  [
    "Typical licensing model",
    "Per-user subscription, lower entry cost",
    "Per-user subscription across enterprise tiers, higher cost",
    "Often perpetual license plus maintenance (legacy model)",
  ],
  ["Implementation effort", "Usually lower", "Usually higher", "Depends on migration complexity"],
  ["Best approach", "Focused, standardized, phased", "Enterprise-wide and cross-functional", "Modernization and process rationalization"],
];

export default function ProductComparisonSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Business Central vs. Finance and Operations vs. Legacy NAV/GP"
          desc="Selecting a Microsoft ERP platform requires more than comparing feature lists. The table below expands on what each product actually is, not just how it's positioned."
        />

        <DataTable
          columns={["Factor", "Dynamics 365 Business Central", "Dynamics 365 Finance & Supply Chain Management", "Legacy NAV / GP"]}
          rows={rows}
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Where Contetra fits: Contetra&apos;s Dynamics 365 practice is most active in Business Central and mid-market Finance &amp; Supply Chain Management implementations for growing, multi-entity businesses, the category where senior functional involvement matters more than a large delivery bench. For complex, multi-country Finance &amp; Operations rollouts spanning 50+ countries, we typically recommend pairing with a global systems integrator while Contetra provides business-side governance, process design and reporting oversight (see &quot;How Contetra Approaches Microsoft Dynamics 365 Implementation&quot; below).
          </p>
          <p>
            The decision should not be based on revenue alone. Two businesses of similar size may need different platforms because one has simple trading operations while another has complex manufacturing, multiple entities and international supply chains.
          </p>
          <p>
            Companies preparing for funding, audit scrutiny or listing should also consider whether the ERP structure will support future reporting discipline, controls and{" "}
            <Link href="/services/ipo-readiness" className="menularge-cursor font-semibold text-[#50a085] underline-offset-4 hover:underline dark:text-[#86efac]">
              IPO readiness support
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
