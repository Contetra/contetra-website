import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AccountingForm } from "@/app/services/accounting-reporting/components/accounting-form";
import { indAsIfrsUsGaapReporting } from "../content";

export function ContactSection() {
  const { contact } = indAsIfrsUsGaapReporting;

  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {contact.body}
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <span className="inline-flex items-center justify-center gap-2">
              <Phone className="size-4 shrink-0" aria-hidden />
              {contact.phone}
            </span>
            <span className="inline-flex items-center justify-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden />
              {contact.email}
            </span>
            <span className="inline-flex items-center justify-center gap-2 text-left sm:text-center">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {contact.address}
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <AccountingForm
              trigger={
                <Button
                  variant="outline"
                  className={cn(
                    buttonVariants({ size: "xl" }),
                    "whitespace-nowrap bg-brand-green text-white hover:bg-brand-green/90",
                  )}
                >
                  {contact.primaryCta}
                </Button>
              }
            />
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ size: "xl", variant: "ghost" }),
                "border-2 border-white/30 text-white hover:bg-white hover:text-brand-blue",
              )}
            >
              {contact.secondaryCta}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
