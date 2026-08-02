
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { PlatformChipGrid } from "@/components/ui/PlatformChipGrid";

export function TechnologyEnvironment() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PlatformChipGrid
          heading="Typical technology environment"
          intro={agenticAiService.technologyIntro}
          items={agenticAiService.technologyEnvironment}
        />
      </div>
    </section>
  );
}
