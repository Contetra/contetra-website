import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";


import { cn } from "@/lib/utils";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CultureCarousel } from "./CultureCarousel";
import { aboutPage } from "../content";

export function Culture() {
  const { hero, cultureImages } = aboutPage;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
              {hero.eyebrow}
            </span>

            <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-brand-blue sm:text-4xl lg:text-[2.75rem]">
              {hero.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {hero.body}
            </p>

            <p className="mt-6 font-heading text-2xl leading-snug font-bold text-brand-blue sm:text-3xl">
              {hero.tagline.line1}
              <br />
              {hero.tagline.line2}{" "}
              <span className="text-brand-green">{hero.tagline.highlight}</span>
            </p>

            <Link
              href={hero.careersHref}
              className={cn(buttonVariants({ size: "xl" }), "mt-8 whitespace-nowrap")}
            >
              {hero.cta}
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 shadow-lg">
              <Image
                src={cultureImages.hero}
                alt="The Contetra team together"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="mt-16 sm:mt-20">
          <CultureCarousel images={cultureImages.strip} />
        </ScrollReveal>
      </div>
    </section>
  );
}
