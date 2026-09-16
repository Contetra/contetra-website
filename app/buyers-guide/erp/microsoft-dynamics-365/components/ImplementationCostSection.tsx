import SectionHeading from "./SectionHeading";
import DataTable from "./DataTable";

const rows: string[][] = [
  [
    "Licensing",
    "Affordable, per-user subscription, the lower-cost entry point into the Dynamics 365 ecosystem",
    "Premium, enterprise-grade licensing reflecting deeper financial and supply chain functionality",
  ],
  [
    "Implementation services",
    "Starting from $30,000 USD, scaling with complexity, entities and customization",
    "Starting from $150,000 USD, scaling significantly with entity count, geography and process complexity",
  ],
  [
    "Data migration",
    "Cost-effective for standard entity structures; scales with data volume and legal-entity count",
    "Higher investment given multi-entity, multi-country data complexity",
  ],
  [
    "Integrations",
    "Reasonably priced per interface for standard connectors",
    "Priced per interface; typically more numerous and complex in enterprise environments",
  ],
  [
    "Customization / extensions",
    "Moderate investment; keeps upgrade paths manageable",
    "Higher investment for deep, industry-specific customization",
  ],
  [
    "Hypercare / post-go-live support",
    "Included for a standard stabilization window, with flexible extension options",
    "Extended, structured support reflecting the scale of enterprise rollouts",
  ],
];

const costDrivers = [
  "Number of legal entities and countries in scope",
  "Volume and quality of data being migrated",
  "Number and complexity of integrations",
  "Degree of customization versus standard functionality",
  "Manufacturing, warehousing or multi-currency requirements",
  "Length and depth of the hypercare period",
];

export default function ImplementationCostSection() {
  return (
    <section className="py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Microsoft Dynamics 365 Implementation Cost" />

        <div className="mx-auto mb-10 max-w-3xl space-y-5 text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          <p>
            Pricing for a Microsoft Dynamics 365 implementation depends heavily on product, scope, entity count and delivery model. There is no single number that applies across businesses but buyers should understand the cost components before comparing headline quotes from different partners.
          </p>
          <p>
            A proposal that looks cheaper on the surface may simply exclude data migration, integrations, training or hypercare costs that resurface later as change requests.
          </p>
        </div>

        <DataTable columns={["Cost Component", "Business Central", "Dynamics 365 Finance & Supply Chain Management"]} rows={rows} />

        <div className="mx-auto mt-10 max-w-3xl">
          <h3 className="mb-4 text-xl font-bold leading-tight dark:text-white">
            What drives cost up on any Dynamics 365 project, regardless of product:
          </h3>
          <ul className="space-y-3">
            {costDrivers.map((driver) => (
              <li key={driver} className="flex items-start gap-3 text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50a085] dark:bg-[#86efac]" aria-hidden="true" />
                <span>{driver}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-[#25243a] dark:text-[#E5E7EB]">
          A note on how to read vendor quotes: the cheapest proposal is rarely the cheapest project. Ask what is explicitly excluded before comparing numbers, see the &quot;Commercial and Scope Clarity&quot; section below for the full checklist.
        </p>
      </div>
    </section>
  );
}
