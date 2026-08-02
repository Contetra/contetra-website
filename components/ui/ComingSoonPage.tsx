import Link from "next/link";
import { Construction } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { primaryCta } from "@/lib/nav";

interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
}

export function ComingSoonPage({ eyebrow, title }: ComingSoonPageProps) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-green">
        {eyebrow}
      </span>
      <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-brand-blue-tint text-brand-blue">
        <Construction className="size-7" />
      </div>
      <h1 className="mt-6 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        This page is being written. In the meantime, tell us about your
        situation directly and we will point you to the right specialist.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={primaryCta.href} className={buttonVariants({ size: "lg" })}>
          {primaryCta.label}
        </Link>
        <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
