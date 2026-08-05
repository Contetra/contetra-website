
import { erpImplementationService } from "@/app/services/digital-transformation/content";
import { CheckList } from "@/components/ui/CheckList";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DiagnosticReview() {
  const { diagnosticReview } = erpImplementationService;

  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckList
          heading="Our ERP diagnostic review"
          intro={diagnosticReview.intro}
          items={diagnosticReview.items}
          itemBackground="white"
        />

        <ScrollReveal delay={0.2} className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-brand-blue/15 bg-brand-blue-tint p-8 sm:p-10">
            <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-green">
              {diagnosticReview.output.label}
            </span>
            <p className="relative mt-2 max-w-3xl font-heading text-lg leading-relaxed text-brand-blue sm:text-xl">
              {diagnosticReview.output.body}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
