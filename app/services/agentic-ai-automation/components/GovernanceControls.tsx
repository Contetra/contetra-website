
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { CheckList } from "@/components/ui/CheckList";

export function GovernanceControls() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="Governance controls we build in"
          items={agenticAiService.governanceControls}
        />
      </div>
    </section>
  );
}
