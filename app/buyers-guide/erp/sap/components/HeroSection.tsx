import { ArrowDown, ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";

const guideChapters = [
  "SAP ERP Companies: A Quick Overview",
  "How to Evaluate an SAP Implementation Partner",
  "SAP ERP Implementation: What the Process Looks Like",
  "SAP ERP Cost & Pricing: What to Budget For",
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#17143a] text-white dark:bg-[#080b10]">
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute -right-44 -top-52 -z-10 h-[620px] w-[620px] rounded-full bg-[#50a085]/20 blur-3xl" />
      <div className="mx-auto grid min-h-[760px] min-w-0 max-w-[1240px] items-center gap-14 px-6 py-24 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
        <div className="min-w-0">
          <div
            data-hero-reveal
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#a8e4cd]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#70cda9]" />
            SAP ERP Buyer&apos;s Guide · 2026
          </div>
          <h1
            data-hero-reveal
            className="max-w-4xl break-words text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[3.4rem] lg:text-[clamp(3.5rem,5.2vw,5.25rem)]"
          >
            SAP ERP Companies: How to Choose the Right Implementation Partner
            in 2026
          </h1>
          <p
            data-hero-reveal
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72"
          >
            This isn&apos;t a ranked list of vendors. This guide gives you the
            actual framework: how the partner landscape breaks down, how to
            evaluate anyone on your shortlist, what to budget, and where the
            most common rollout mistakes happen.
          </p>
          <div data-hero-reveal className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-sm bg-[#66b99a] px-6 py-3.5 text-sm font-bold text-[#10172a] transition hover:bg-[#83d2b4]"
            >
              Book a free ERP review call
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#partner-landscape"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/[0.05]"
            >
              How to evaluate a partner
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div data-hero-reveal className="mt-10 text-sm text-white/55">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#75c7a8]" /> Last
              substantively refreshed in July 2026
            </span>
          </div>
        </div>

        <div
          data-hero-reveal
          className="relative mx-auto w-full min-w-0 max-w-[calc(100vw-3rem)] lg:max-w-[470px]"
        >
          <div className="absolute -inset-4 rotate-3 rounded-[30px] border border-[#66b99a]/25" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.075] p-7 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                The guide&apos;s framework
              </span>
            </div>
            <div className="mt-7 space-y-3">
              {guideChapters.map((chapter, index) => (
                <div
                  key={chapter}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#11102d]/55 px-5 py-4 transition hover:border-[#66b99a]/50 hover:bg-[#66b99a]/10"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-[#91d6bc]">
                    {index + 1}
                  </span>
                  <span className="font-semibold">{chapter}</span>
                  <span className="ml-auto h-px w-7 bg-white/20 transition-all group-hover:w-12 group-hover:bg-[#66b99a]" />
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-xl bg-[#66b99a] p-5 text-[#10172a]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-65">
                A more useful question
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                Which category of SAP ERP company fits your project?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
