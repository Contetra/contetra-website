
import { agenticAiService } from "@/app/services/agentic-ai-and-process-automation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function DesignPrinciples() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Our automation design principles"
          items={agenticAiService.designPrinciples}
          tint="green"
        />
      </div>
    </section>
  );
}
