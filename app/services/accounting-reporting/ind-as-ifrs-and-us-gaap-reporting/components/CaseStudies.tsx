"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { indAsIfrsUsGaapReporting } from "../content";

export function CaseStudies() {
  const { heading, intro, ctaLabel, ctaHref, items } =
    indAsIfrsUsGaapReporting.caseStudies;
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="overflow-hidden bg-brand-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold text-brand-blue sm:text-4xl">
                {heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Previous case study"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Next case study"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
            <CarouselContent className="-ml-4">
              {items.map((item) => (
                <CarouselItem
                  key={item.client}
                  className="basis-[85%] pl-4 sm:basis-[60%] lg:basis-[32%]"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-blue-tint px-2.5 py-1 text-[11px] font-medium text-brand-blue">
                        {item.industry}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                      {item.client}
                    </h3>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <div>
                        <dt className="font-semibold text-foreground">Before:</dt>
                        <dd>{item.before}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-foreground">Solution:</dt>
                        <dd>{item.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-brand-green">After:</dt>
                        <dd>{item.after}</dd>
                      </div>
                    </dl>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-8">
          <Link
            href={ctaHref}
            className="menularge-cursor group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-green"
          >
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
