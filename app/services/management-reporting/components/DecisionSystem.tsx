

import { EditorialStatement } from "@/components/ui/EditorialStatement";
import { cfoFpaService } from "../content";


export function DecisionSystem() {
  const { decisionSystem } = cfoFpaService;

  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <EditorialStatement
          heading="A decision system - not a reporting exercise"
          paragraphs={[decisionSystem.paragraph1, decisionSystem.paragraph2]}
        />
      </div>
    </section>
  );
}
