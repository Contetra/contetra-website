import { SimpleStepper } from "@/components/ui/SimpleStepper";
import type { Step } from "@/lib/content";

export function HowWeWork({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SimpleStepper heading="Our Technical Accounting Advisory Process" steps={steps} />
      </div>
    </section>
  );
}
