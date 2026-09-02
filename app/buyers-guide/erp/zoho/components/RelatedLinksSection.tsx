import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionHeading from "./SectionHeading";

const relatedLinks = [
  { label: "ERP Implementation Services", href: "/erp-implementation-solutions" },
  {
    label: "ERP Functional Consulting Services",
    href: "/erp-implementation-solutions",
  },
  {
    label: "Virtual CFO Services",
    href: "/strategic-business-financial-management-solutions",
  },
  {
    label: "Technical Accounting Advisory",
    href: "/technical-accounting-international-gaap-advisory-services",
  },
  { label: "Offshore Accounting Services", href: "/offshore-accounting-services" },
  { label: "IPO Readiness Services", href: "/ipo-readiness" },
];

export default function RelatedLinksSection() {
  return (
    <section className="bg-[#F8F9FE] py-20 text-[#1a1640] dark:bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading level="h3" title="Explore Related Services" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedLinks.map((link, index) => (
            <ScrollReveal key={`${link.label}-${index}`} delay={index * 0.05}>
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-3 rounded-[8px] border border-[#eef1f8] bg-white px-5 py-4 text-sm font-semibold text-[#1a1640] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#50a085]/60 hover:shadow-[0_10px_24px_rgba(26,22,64,0.1)] dark:border-[#1F2937] dark:bg-[#111827] dark:text-white dark:hover:border-[#86efac]/55"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#50a085] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-[#86efac]"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
