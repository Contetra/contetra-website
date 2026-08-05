import { cfoFpaService } from "../content";
import { CheckList } from "@/components/ui/CheckList";

export function Deliverables() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="What management should receive"
          items={cfoFpaService.deliverables}
          itemBackground="white"
        />
      </div>
    </section>
  );
}
