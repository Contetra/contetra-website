
import { erpImplementationService } from "@/app/services/digital-transformation/content";
import { EditorialStatement } from "@/components/ui/EditorialStatement";

export function IndependentLeadership() {
  const { independentLeadership } = erpImplementationService;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <EditorialStatement
          heading="Independent functional leadership"
          paragraphs={[independentLeadership.paragraph1, independentLeadership.paragraph2]}
        />
      </div>
    </section>
  );
}
