
import { erpImplementationService } from "@/app/services/digital-transformation/content";
import { CheckList } from "@/components/ui/CheckList";

export function GoodGovernance() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="What good ERP governance looks like"
          items={erpImplementationService.goodGovernance}
          itemBackground="white"
        />
      </div>
    </section>
  );
}
