
import { ipoReadinessPage } from "@/app/services/ipo-readiness/content";
import { EditorialStatement } from "@/components/ui/EditorialStatement";

export function AdviserFit() {
  const { adviserFit } = ipoReadinessPage;

  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <EditorialStatement
          heading="How Contetra fits into the adviser ecosystem"
          paragraphs={[adviserFit.paragraph1, adviserFit.paragraph2]}
        />
      </div>
    </section>
  );
}
