
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { capabilities, capabilitiesHeading, capabilitiesIntro } from "./content";

export function FourCapabilities() {
  return (
    <section className="bg-white pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading={capabilitiesHeading}
          intro={capabilitiesIntro}
          items={capabilities}
          tint="green"
          hoverEffect
        />
      </div>
    </section>
  );
}
