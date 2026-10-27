"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1640] py-24 dark:bg-[#0A0A0A] md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(80,160,133,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(80,160,133,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal y={16}>
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#86efac]">
            Buyer&apos;s Guide
          </span>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.1}>
          <h1 className="mx-auto mb-6 max-w-4xl text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-tight text-white">
            Logistics &amp; Supply Chain ERP: Features, Cost &amp; Selection
            Guide
          </h1>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.2}>
          <p className="mx-auto mb-5 max-w-4xl text-[1.18rem] font-semibold leading-[1.7] text-white">
            Even a simple shipment becomes difficult to track when
            procurement, inventory, transportation, and finance operate in
            silos. A Logistics &amp; Supply Chain ERP connects these
            functions, providing teams a shared view of supply, orders,
            shipments, costs, and cash flow.
          </p>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.3}>
          <div className="mx-auto mb-3 max-w-4xl space-y-4 text-base leading-7 text-white/80 dark:text-[#D1D5DB]">
            <p>
              However, choosing an ERP is about more than having the right
              modules. The platform must fit the way your value chain
              operates.
            </p>
            <p>
              This guide explores the key features, deployment models,
              costs, and selection criteria to consider before choosing a
              Logistics &amp; Supply Chain ERP.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.35}>
          <p className="mx-auto mb-10 flex max-w-4xl items-center justify-center gap-2 text-sm text-white/55">
            <CalendarDays className="h-4 w-4 text-[#75c7a8]" />
            Contetra publishes and updates this guide regularly. It was last
            updated in October 2026.
          </p>
        </ScrollReveal>
        <ScrollReveal y={22} delay={0.4}>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-sm border border-[#221971] bg-[#221971] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#181253] dark:border-[#80D7AA] dark:bg-[#80D7AA] dark:text-[#1B145F] dark:hover:bg-[#70c79a]"
          >
            Talk to a Consultant
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
