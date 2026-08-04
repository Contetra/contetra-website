
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { callTriggers, whereWeGetCalledIntro } from "./content";

export function WhereWeGetCalled() {
  return (
    <section className="bg-brand-offwhite pt-16 pb-20 sm:pt-[5.6rem] sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="Where a Finance Business Consultant Can Help"
          intro={whereWeGetCalledIntro}
          items={callTriggers}
          tint="blue"
          hoverEffect
        />
      </div>
    </section>
  );
}
