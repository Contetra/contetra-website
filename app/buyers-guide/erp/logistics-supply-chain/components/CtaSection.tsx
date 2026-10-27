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
            Talk to a Consultant Today
          </h2>
        </ScrollReveal>
        <ScrollReveal
          delay={0.1}
          className="mb-8 space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]"
        >
          <p>
            Even a small business operating a supply chain and logistics
            network requires a management platform to sync processes. An
            ERP can unify operations, connecting inventory, procurement,
            warehousing, transportation, order fulfilment, and finance in a
            single environment.
          </p>
          <p>
            Contetra helps businesses identify and implement ERP solutions
            that align with their operational needs, industry requirements,
            and growth objectives. With a vendor-neutral, advisory-led
            approach, we help you evaluate the right-fit system and plan an
            implementation that delivers long-term business value.
          </p>
          <p>
            Contact Contetra to understand how you operate, map your supply
            chain processes, and identify the ERP capabilities you need.
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
