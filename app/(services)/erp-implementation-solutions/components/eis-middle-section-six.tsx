"use client";

import Lottie from "lottie-react";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

import animationFourteen from "@/components/lottie/animation-15.json";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export type EisClientTestimonialSlide = {
  clientName: string;
  quote: string;
};

/** Add one object per slide — carousel auto-advances every 2s. */
export const clientTestimonialSlides: EisClientTestimonialSlide[] = [];

const slidesToRender: EisClientTestimonialSlide[] =
  clientTestimonialSlides.length > 0
    ? clientTestimonialSlides
    : [
        {
          clientName: "Gupshup",
          quote:
            "Initially, we were hesitant to bring in a third-party for our ERP implementation, but Contetra completely changed our minds. Not only did they drive down implementation costs and show a clear ROI, but they also introduced process excellence to our ERP environment.",
        },
        {
          clientName: "IRIS Business Services",
          quote:
            "Working with Contetra has made interfacing with our tech vendor so much easier. Their team acted as a bridge between our finance team and the tech vendor, effectively communicating the needs of both sides and ensuring a smooth implementation process.",
        },
        {
          clientName: "Stellar Value Chain",
          quote:
            "We were impressed with Contetra's ability to quickly understand our business needs and provide practical solutions. Their technical accounting expertise, combined with their focus on process excellence, has helped to streamline our accounting processes and ensure long term success. We highly recommend them to any company looking to improve their ERP environment.",
        },
      ];

export const EisMiddleSectionSix = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="text-[28px] font-semibold leading-[1.4em] text-[#252B42] dark:text-white sm:text-[34px] lg:text-[38px]">
            Meet Our Clients
          </h2>

          <div className="mt-4 flex flex-col items-center gap-2" aria-hidden>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
            </div>
            <div className="h-[3px] w-[52px] rounded-full bg-[#4C8DEB]" />
          </div>
        </div>

        <div className="mt-10 grid w-full items-center gap-10 sm:mt-12 lg:grid-cols-[minmax(260px,0.95fr)_minmax(280px,1.05fr)] lg:gap-12 xl:gap-16">
          <div className="flex w-full justify-center lg:justify-end">
            <Lottie
              className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px]"
              animationData={animationFourteen}
              loop
              aria-hidden
            />
          </div>

          <div className="min-w-0 lg:pl-2">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-3">
                {slidesToRender.map((slide, index) => (
                  <CarouselItem
                    key={`${slide.clientName}-${index}`}
                    className="pl-2 sm:basis-full sm:pl-3"
                  >
                    <article className="relative mx-auto w-full max-w-[560px] rounded-2xl bg-white px-6 pb-8 pt-10 text-center shadow-[0_12px_40px_rgba(18,12,84,0.08)] dark:bg-[#111827] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:px-8 sm:pb-10 sm:pt-12 lg:mx-0">
                      <div
                        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4C8DEB] text-white sm:right-6 sm:top-6 sm:h-14 sm:w-14"
                        aria-hidden
                      >
                        <Quote className="size-6 sm:size-7" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-[18px] font-bold leading-snug text-[#1C1C1C] dark:text-white sm:text-[20px]">
                        {slide.clientName}
                      </h3>

                      <p className="mt-4 text-pretty text-[14px] font-normal leading-relaxed text-[#5A5A5A] dark:text-[#D1D5DB] sm:text-[15px]">
                        {slide.quote}
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
