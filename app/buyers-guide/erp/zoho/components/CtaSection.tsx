import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1640] py-24 dark:bg-[#0A0A0A]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(80,160,133,0.3), transparent 45%), radial-gradient(circle at 10% 80%, rgba(80,160,133,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
            Talk to Contetra&apos;s Zoho Consultant
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mb-8 space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
          <p>
            Although business objectives vary, successful implementations
            begin with understanding how your business works.
          </p>
          <p>
            Whether you&apos;re implementing Zoho One, modernizing finance
            with Zoho Books, or integrating multiple Zoho applications, the
            right implementation strategy significantly influences
            long-term value.
          </p>
          <p>
            Get in touch with Contetra&apos;s Zoho Consultant to discuss
            your business requirements and implementation goals, or get a
            Scoped Zoho Implementation Estimate.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-sm border border-[#50a085] bg-[#50a085] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#459678] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
          >
            Contact Us Today
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
