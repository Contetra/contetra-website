
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { callTriggers } from "./content";

export function WhereWeGetCalled() {
  return (
    <section className="bg-brand-offwhite pt-16 pb-20 sm:pt-[5.6rem] sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Where businesses usually call us"
          items={callTriggers}
          tint="blue"
          hoverEffect
        />
      </div>
    </section>
  );
}
