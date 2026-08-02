import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { closingCta } from "@/lib/content";
import { primaryCta as bookingCta } from "@/lib/nav";
import { ScrollReveal } from "../ui/ScrollReveal";
import { FpaForm } from "@/app/services/fractional-cfo-fpa/components/fpa-form";

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
}

export function ClosingCtaAgentic({
  heading = closingCta.heading,
  body = closingCta.body,
  primaryCta = { label: closingCta.primaryCta, href: bookingCta.href },
  secondaryCta = {
    label: closingCta.secondaryCta,
    href: "/proof/case-studies",
  },
}: ClosingCtaProps) {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-[0.06]"
        aria-hidden
      >
        <Image
          src="/Contetra_logo_-_Inverted_High_res.png"
          alt=""
          fill
          sizes="420px"
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {body}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
           
            <FpaForm
                trigger={
                  <Button
                    variant="outline"
                    className={cn(
                buttonVariants({ size: "xl" }),
                "bg-brand-green text-white hover:bg-brand-green/90 cursor-pointer",
              )}
                  >
                    Book a CFO & FP&A Diagnostic
                  </Button>
                }
              />
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
