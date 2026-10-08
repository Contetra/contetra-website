import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { erpProcessTransformation } from "../content";

export function Solutions() {
  const { heading, intro, items } = erpProcessTransformation.solutions;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid heading={heading} intro={intro} items={items} tint="green" />
      </div>
    </section>
  );
}
