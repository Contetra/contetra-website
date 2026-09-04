
import { agenticAiService } from "@/app/services/agentic-ai-and-process-automation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function FunctionsWeAutomate() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Functions We Automate with Agentic AI"
          items={agenticAiService.functionsWeAutomate}
          tint="green"
        />
      </div>
    </section>
  );
}
