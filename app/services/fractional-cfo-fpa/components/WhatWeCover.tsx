import { cfoFpaService } from "../content";
import { IconCardGrid } from "@/components/ui/IconCardGrid";

export function WhatWeCover() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <IconCardGrid
          heading="What our fractional CFO and FP&A services cover"
          items={cfoFpaService.whatWeCover}
          tint="green"
        />
      </div>
    </section>
  );
}
