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
            Talk to Contetra&apos;s Oracle ERP Consultant Today
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mb-8 space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
          <p>
            Every Oracle ERP implementation is unique. The right
            implementation strategy depends on your business processes,
            growth plans, operational complexity, and long-term objectives.
          </p>
          <p>
            Whether Fusion Cloud, NetSuite, or E-Business Suite,
            Contetra&apos;s Oracle ERP advisor can help define requirements,
            evaluate implementation partners, and build a roadmap to
            maximize long-term returns.
          </p>
          <p>
            Talk to our Oracle ERP consultant to discuss your implementation
            goals or get a Scoped Implementation Estimate. We will help you
            better understand project timelines, budget expectations, and
            the delivery approach that suits your organization.
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
