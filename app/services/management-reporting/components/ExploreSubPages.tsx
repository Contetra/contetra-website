import Link from "next/link";
import { ArrowRight, Gauge, LayoutDashboard, Rocket, Target, Wallet } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";


const SUB_PAGES = [
  { label: "IPO Readiness", href: "/services/fractional-cfo-fpa/ipo-readiness", Icon: Rocket },
  {
    label: "Fractional CFO Services",
    href: "/services/fractional-cfo-fpa/fractional-cfo-services",
    Icon: Wallet,
  },
  { label: "FP&A Services", href: "/services/fractional-cfo-fpa/fpa-services", Icon: Target },
  {
    label: "MIS Reporting & Financial Dashboards",
    href: "/services/fractional-cfo-fpa/mis-reporting-dashboards",
    Icon: LayoutDashboard,
  },
  {
    label: "Working Capital & Cash-Flow Advisory",
    href: "/services/fractional-cfo-fpa/working-capital-cashflow-advisory",
    Icon: Gauge,
  },
];

export function ExploreSubPages() {
  return (
    <section className="bg-brand-offwhite py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Explore in detail
          </p>
        </ScrollReveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUB_PAGES.map(({ label, href, Icon }, i) => (
            <ScrollReveal key={href} delay={i * 0.05}>
              <Link
                href={href}
                className="group flex h-full items-center gap-3 rounded-2xl border border-border/70 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-heading text-sm font-semibold text-brand-blue">{label}</span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
