import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { closingCta } from "@/lib/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "../ui/ScrollReveal";

interface CtaLink {
  label: string;
  href: string;
}

interface ClosingCtaProps {
  heading?: string;
  body?: string;
  primaryCta?: CtaLink;
  /** Pass `null` explicitly to render only the primary button. */
  secondaryCta?: CtaLink | null;
  form?: ReactNode;
}

export function ClosingCta({
  heading = closingCta.heading,
  body = closingCta.body,
  primaryCta = { label: closingCta.primaryCta, href: bookingCta.href },
  secondaryCta = {
    label: closingCta.secondaryCta,
    href: "/proof/case-studies",
  },
  form,
}: ClosingCtaProps) {
  return (
    <section
      id="transformation-decision"
      className="relative scroll-mt-20 overflow-hidden bg-brand-blue py-20 sm:py-28"
    >
     

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {body}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
           
            {form }
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  buttonVariants({ size: "xl", variant: "ghost" }),
                  "border-2 border-white/30 text-white hover:bg-white hover:text-brand-blue",
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
