
import { agenticAiService } from "@/app/services/agentic-ai-automation/content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhatCanChange() {
  return (
    <section className="bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="What agentic automation can change"
          items={agenticAiService.whatCanChange}
          tint="green"
        />
      </div>
    </section>
  );
}
