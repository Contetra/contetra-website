
import { ipoReadinessPage } from "@/app/services/ipo-readiness/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function Workstreams() {
  return (
    <section id="workstreams" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Our IPO readiness workstreams"
          items={ipoReadinessPage.workstreams}
          tint="green"
          numbered
        />
      </div>
    </section>
  );
}
