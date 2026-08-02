
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { EngagementStepper } from "@/components/ui/EngagementStepper";

export function ImplementationSteps() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EngagementStepper
          heading="How we implement automation"
          steps={agenticAiService.implementationSteps}
        />
      </div>
    </section>
  );
}
