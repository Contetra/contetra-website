"use client";

import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useSbfmsReviewSheet } from "./sbfms-review-sheet-provider";

const YOUTUBE_ID = "DJdvUMzg11g";

const SLIDER_IMAGES = [
  {
    src: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-slider-1.webp",
    alt: "Success story: efficient procurement plan releasing cash in the business.",
  },
  {
    src: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-slider-2.webp",
    alt: "Success story: win-win sales incentive structure and revenue potential.",
  },
  {
    src: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-slider-3.webp",
    alt: "Success story: reduced working capital cycle for an industrial battery manufacturer.",
  },
  {
    src: "https://contetra.b-cdn.net/pages/services/sbfms/sbfms-slider-4.webp",
    alt: "Success story: agro-product business improved sales and profitability.",
  },
] as const;

const arrowBtnClass =
  "top-1/2 z-10 size-9 -translate-y-1/2 border-0 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white disabled:opacity-30 sm:size-10";

const AUTO_SCROLL_MS = 5500;

export function SbfmsTopSection() {
  const { setReviewSheetOpen } = useSbfmsReviewSheet();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [carouselPaused, setCarouselPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || carouselPaused) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTO_SCROLL_MS);
    return () => window.clearInterval(id);
  }, [api, carouselPaused]);

  return (
    <section
      className="w-full bg-[#2D2452] text-white"
      aria-labelledby="sbfms-hero-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-8 pt-6 sm:px-5 sm:pb-10 sm:pt-8 md:px-6 md:pb-12 md:pt-10 lg:px-8 lg:pb-14 lg:pt-11 xl:px-10 xl:pb-16 xl:pt-12 2xl:px-6">
        {/* Top: copy + video / CTA */}
        <div
          className={cn(
            "flex w-full min-w-0 flex-col items-stretch gap-6 sm:gap-7 md:gap-8",
            "lg:flex-row lg:flex-nowrap lg:items-start lg:justify-center lg:gap-6",
            "xl:gap-10 2xl:gap-20",
          )}
        >
          <div
            className={cn(
              "w-full min-w-0 max-w-xl text-left sm:max-w-xl",
              "md:max-w-2xl lg:w-auto lg:max-w-[min(100%,32rem)] xl:max-w-[min(100%,36rem)]",
            )}
          >
            <h1
              id="sbfms-hero-heading"
              className={cn(
                "text-balance font-bold uppercase leading-[1.15] tracking-[0.02em]",
                "text-lg sm:text-xl sm:leading-snug md:text-2xl md:leading-tight",
                "lg:text-[1.75rem] lg:leading-[1.12] xl:text-[1.9rem] 2xl:text-[2rem]",
              )}
            >
              Build scalable cash-rich businesses by converting books profits to
              cash in the bank
            </h1>

            <div className="mt-5 flex gap-3 sm:mt-6 md:mt-8">
              <div
                className="mt-0.5 w-1 shrink-0 self-stretch rounded-full bg-[#22c55e]"
                aria-hidden
              />
              <p className="text-pretty text-sm leading-relaxed text-white/95 sm:text-base md:text-[17px] md:leading-[1.65]">
                We&apos;re passionate about unlocking the full power of your
                business by transforming data into strategy and help you bridge
                cash flow gaps, optimize your bottom-line, and build an
                ROI-based growth model.
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 shrink-0 flex-col items-center lg:w-auto lg:max-w-none lg:items-stretch">
            <div
              className={cn(
                "mx-auto flex w-full max-w-[min(100%,260px)] flex-col gap-3.5",
                "sm:max-w-[min(100%,300px)] md:max-w-[min(100%,340px)]",
                "lg:mx-0 lg:max-w-[400px] lg:gap-4",
              )}
            >
              <div className="w-full overflow-hidden rounded-lg bg-black/25 shadow-md ring-0 sm:rounded-xl">
                <div className="relative aspect-video w-full">
                  <iframe
                    title="Strategic business and financial management — overview video"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => setReviewSheetOpen(true)}
                className={cn(
                  "cursor-pointer h-auto w-full gap-0 rounded-full border-2 border-white bg-transparent px-4 py-3 text-xs font-semibold leading-snug text-white shadow-none",
                  "whitespace-normal hover:bg-white/10 hover:text-white sm:px-5 sm:py-3.5 sm:text-sm md:px-6 md:py-4 md:text-base",
                )}
              >
                <span className="block w-full text-pretty text-center leading-snug">
                  Schedule your{" "}
                  <span className="font-bold text-[#FDD03F]">FREE</span>{" "}
                  business review with our Solution Experts NOW!
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={cn(
            "relative mx-auto mt-8 w-full max-w-[min(100%,calc(100vw-2rem))] sm:mt-10 sm:max-w-[min(100%,640px)] sm:px-1 md:mt-12 md:max-w-[min(100%,700px)] lg:max-w-[min(100%,760px)] xl:max-w-[min(100%,840px)]",
          )}
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
          onFocusCapture={() => setCarouselPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setCarouselPaused(false);
            }
          }}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full px-9 sm:px-11 md:px-12"
          >
            <CarouselContent className="-ml-2 sm:-ml-2.5">
              {SLIDER_IMAGES.map((slide) => (
                <CarouselItem
                  key={slide.src}
                  className="basis-full pl-2 sm:basis-full sm:pl-2.5"
                >
                  <div className="px-0.5 sm:px-2 md:px-4 lg:px-6">
                    <div className="relative overflow-hidden rounded-[2rem] shadow-[0_8px_28px_rgba(0,0,0,0.2)] sm:rounded-[999px]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={900}
                        height={270}
                        sizes="(max-width: 480px) calc(100vw - 5.5rem), (max-width: 768px) calc(100vw - 6rem), (max-width: 1024px) min(90vw, 700px), min(840px, 80vw)"
                        className="h-auto w-full object-contain object-center"
                        priority={slide.src === SLIDER_IMAGES[0].src}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              variant="outline"
              className={cn(
                arrowBtnClass,
                "left-0 top-[42%] sm:left-0.5 sm:top-1/2",
              )}
            />
            <CarouselNext
              variant="outline"
              className={cn(
                arrowBtnClass,
                "right-0 top-[42%] sm:right-0.5 sm:top-1/2",
              )}
            />
          </Carousel>

          <div
            className="mt-4 flex justify-center gap-2 sm:mt-5 md:mt-6"
            aria-label="Carousel pagination"
          >
            {SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to success story ${index + 1} of ${SLIDER_IMAGES.length}`}
                aria-current={current === index ? "true" : undefined}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  current === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/35 hover:bg-white/55",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
