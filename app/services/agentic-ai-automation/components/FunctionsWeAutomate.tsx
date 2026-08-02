
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function FunctionsWeAutomate() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Functions we automate"
          items={agenticAiService.functionsWeAutomate}
          tint="green"
        />
      </div>
    </section>
  );
}
