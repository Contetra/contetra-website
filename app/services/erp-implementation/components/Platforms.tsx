
import { erpImplementationService } from "@/app/services/erp-implementation/content";
import { PlatformChipGrid } from "@/components/ui/PlatformChipGrid";

export function Platforms() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PlatformChipGrid
          heading="Platforms and environments"
          intro={erpImplementationService.platformsIntro}
          items={erpImplementationService.platforms}
        />
      </div>
    </section>
  );
}
