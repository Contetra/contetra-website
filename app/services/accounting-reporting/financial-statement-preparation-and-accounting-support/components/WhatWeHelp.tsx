import { IconCardGrid } from "@/components/ui/IconCardGrid";
import type { IconCard } from "@/lib/content";

export function WhatWeHelp({ items }: { items: IconCard[] }) {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid heading="Financial Statement Preparation and Close Support Services" items={items} tint="green" />
      </div>
    </section>
  );
}
