
import { ipoReadinessPage } from "@/app/services/fractional-cfo-fpa/ipo-readiness/content";
import { CheckList } from "@/components/ui/CheckList";

export function ReadinessQuestions() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="Illustrative finance readiness questions"
          items={ipoReadinessPage.readinessQuestions}
          itemBackground="offwhite"
        />
      </div>
    </section>
  );
}
