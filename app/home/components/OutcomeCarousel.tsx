"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { VerticalBadge } from "@/components/sections/industries/VerticalBadge";
import { cn } from "@/lib/utils";
import type { SelectedOutcome } from "@/lib/outcomes";

const AUTOPLAY_INTERVAL_MS = 6000;

function articleFor(word: string): "a" | "an" {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function OutcomeSentence({ outcome }: { outcome: SelectedOutcome }) {
  const { businessType, rootCause, intervention, result, period } = outcome;

  return (
    <>
      For {articleFor(businessType)} {businessType} business, we identified{" "}
      <span className="font-semibold text-foreground">{rootCause}</span>, implemented{" "}
      <span className="font-semibold text-foreground">{intervention}</span> and achieved{" "}
      <span className="font-semibold text-brand-green">{result}</span>
      {period && <span className="font-semibold text-foreground"> within {period}</span>}.
    </>
  );
}

interface OutcomeCarouselProps {
  outcomes: SelectedOutcome[];
}

export function OutcomeCarousel({ outcomes }: OutcomeCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || prefersReducedMotionRef.current) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [api, isPaused, selected]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {outcomes.map((outcome, i) => (
            <CarouselItem
              key={outcome.client}
              aria-label={`Case study ${i + 1} of ${outcomes.length}: ${outcome.client}`}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/15 bg-brand-blue-tint p-8 sm:p-10">
                <Quote
                  className="absolute top-6 right-6 size-16 text-brand-blue/10"
                  aria-hidden
                />

                <div className="relative flex flex-wrap items-center gap-2">
                  <VerticalBadge category={outcome.service} />
                  <span className="rounded-full border border-brand-blue/15 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {outcome.industry}
                  </span>
                </div>

                <h3 className="relative mt-4 font-heading text-lg font-semibold text-brand-blue sm:text-xl">
                  {outcome.client}
                </h3>

                <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                  <OutcomeSentence outcome={outcome} />
                </p>

                <Link
                  href="/proof/case-studies"
                  className="group relative mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-semibold text-brand-blue hover:text-brand-green"
                >
                  Read the case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-5 flex items-center justify-center gap-4">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Previous case study"
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft className="size-4" />
        </Button>

        <div className="flex items-center gap-2">
          {outcomes.map((outcome, i) => (
            <button
              key={outcome.client}
              type="button"
              aria-label={`Go to case study ${i + 1}: ${outcome.client}`}
              aria-current={selected === i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                selected === i ? "w-6 bg-brand-green" : "w-2 bg-brand-blue/20"
              )}
            />
          ))}
        </div>

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
  );
}
