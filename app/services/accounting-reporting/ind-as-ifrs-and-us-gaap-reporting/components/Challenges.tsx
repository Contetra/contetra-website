import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { indAsIfrsUsGaapReporting } from "../content";

export function Challenges() {
  const { heading, intro, items } = indAsIfrsUsGaapReporting.challenges;

  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid heading={heading} intro={intro} items={items} tint="blue" />
      </div>
    </section>
  );
}
