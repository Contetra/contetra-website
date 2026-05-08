import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

import { cn } from "@/lib/utils";

const LOGO_URL = "https://contetra.b-cdn.net/logos/Contetra-logo-white.png";

/** Returns the current calendar year for the copyright line. */
export function getCopyrightYear(): number {
  return new Date().getFullYear();
}

const servicesLinks = [
  {
    label: "Technical Accounting & International GAAP Consultancy",
    href: "/technical-accounting-international-gaap-advisory-services",
  },
  {
    label: "ERP Functional Implementation",
    href: "/erp-implementation-solutions",
  },
  {
    label: "FP&A + Business Finance Services",
    href: "/corporate-training",
  },
  {
    label: "MCA - Struck off companies",
    href: "/strike-that",
  },
] as const;

const companyLinks = [
  // { label: "About Us", href: "/team" },
  { label: "Ebooks", href: "/ebooks" },
  // { label: "Webinar", href: "#" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

const furtherLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    Icon: Facebook,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/",
    Icon: Twitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: Linkedin,
  },
] as const;

const linkClass = cn(
  "text-[13px] leading-snug text-white/90 transition-colors",
  "hover:text-white",
  "dark:text-[#E5E7EB] dark:hover:text-white",
);

const headingClass = cn(
  "mb-3 text-[13px] font-semibold tracking-wide text-white sm:mb-4 sm:text-[14px] md:text-[15px]",
  "dark:text-white",
);

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (href === "#") {
    return (
      <span
        className={cn(linkClass, "cursor-default opacity-90 dark:opacity-80")}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={cn(linkClass, "hover:underline")}>
      {children}
    </Link>
  );
}

export const FooterMain = () => {
  const year = getCopyrightYear();

  return (
    <footer
      className={cn(
        "w-full border-t border-white/10 bg-[#1B1345] text-white",
        "px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 xl:px-16 2xl:px-20",
        "dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB]",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-10 lg:gap-12">
        {/*
          Full-width row (lg+): ~15% logo | flexible middle (~70%) | ~15% Follow Us.
          Middle uses flex-1 so gap does not overflow the row.
        */}
        <div
          className={cn(
            "flex w-full min-w-0 flex-col gap-8 gap-y-10",
            "lg:flex-row lg:items-start lg:gap-6 lg:gap-y-0 xl:gap-8 2xl:gap-10",
          )}
        >
          <div
            className={cn(
              "flex w-full min-w-0 flex-col items-start border-b border-white/10 pb-8",
              "lg:basis-[15%] lg:grow-0 lg:shrink-0 lg:border-b-0 lg:pb-0",
              "dark:border-[#1F2937]",
            )}
          >
            <Link
              href="/"
              className={cn(
                "relative block w-full max-w-[200px] shrink-0 sm:max-w-[220px] md:max-w-[240px] lg:max-w-full",
                "rounded-sm outline-none ring-offset-2 ring-offset-[#1B1345] focus-visible:ring-2 focus-visible:ring-white/40",
                "dark:ring-offset-[#111827] dark:focus-visible:ring-[#93C5FD]/60",
              )}
              aria-label="Contetra home"
            >
              <Image
                src={LOGO_URL}
                alt="Contetra"
                width={240}
                height={70}
                className="h-auto w-full object-contain object-left"
                sizes="(max-width: 1023px) 220px, 15vw"
                priority={false}
              />
            </Link>
          </div>

          <div
            className={cn(
              "grid w-full min-w-0 grid-cols-1 gap-8",
              "sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 xl:gap-x-8",
              "lg:min-w-0 lg:flex-1 lg:basis-0",
            )}
          >
            <nav aria-label="Services" className="min-w-0 w-full">
              <h3 className={headingClass}>Services</h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {servicesLinks.map((item) => (
                  <li key={item.label} className="max-w-full break-words">
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Company"
              className="min-w-0 w-full sm:text-center"
            >
              <h3 className={headingClass}>Company</h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3 sm:items-center">
                {companyLinks.map((item) => (
                  <li key={item.label} className="max-w-full">
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Further information" className="min-w-0 w-full">
              <h3 className={headingClass}>Further Information</h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {furtherLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="w-full min-w-0 lg:basis-[15%] lg:grow-0 lg:shrink-0">
            <h3 className={headingClass}>Follow Us</h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2",
                    "text-white/90 transition-colors",
                    "hover:bg-white/10 hover:text-contetra-green",
                    "dark:text-[#E5E7EB] dark:hover:bg-white/5 dark:hover:text-[#86efac]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 dark:focus-visible:ring-[#93C5FD]/60",
                  )}
                >
                  <Icon
                    className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          className={cn(
            "border-t border-white/10 pt-6 text-center text-[12px] leading-relaxed text-white/80 sm:pt-8 sm:text-[13px] md:text-[14px]",
            "dark:border-[#374151] dark:text-[#9CA3AF]",
          )}
        >
          © {year} Contetra all rights reserved.
        </p>
      </div>
    </footer>
  );
};
