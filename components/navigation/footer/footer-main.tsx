import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import ContetraWhiteLogo from "@/public/assets/images/logo/Contetra logo - white.png";

/** Returns the current calendar year for the copyright line. */
export function getCopyrightYear(): number {
  return new Date().getFullYear();
}

const servicesLinks = [
  {
    label: "Technical Accounting & International GAAP Consultancy",
    href: "/services/accounting-reporting",
  },
  {
    label: "ERP Functional Implementation",
    href: "/services/erp-implementation",
  },
  {
    label: "FP&A + Business Finance Services",
    href: "/services/fractional-cfo-fpa",
  },
  {
    label: "MCA - Struck off companies",
    href: "/strike-that",
  },
] as const;

const companyLinks = [
  { label: "Ebooks", href: "/ebooks" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

const furtherLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/ContetraPrivateLimited/", Icon: Facebook },
  { label: "X (Twitter)", href: "https://twitter.com/contetra?lang=en", Icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCcQNXLjiX-mN94n5ew4H3Xg", Icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/contetra", Icon: Linkedin },
] as const;

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
        {heading}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const FooterMain = () => {
  const year = getCopyrightYear();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative h-10 w-44">
              <Image
                src={ContetraWhiteLogo}
                alt="Contetra"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Finance-led business transformation across CFO advisory, ERP,
              accounting and AI-enabled automation.
            </p>
            <div className="mt-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white"
                  >
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterColumn heading="Services" links={servicesLinks} />
          <FooterColumn heading="Company" links={companyLinks} />
          <FooterColumn heading="Further Information" links={furtherLinks} />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-white/60 sm:px-6 lg:px-8">
          © {year} Contetra all rights reserved.
        </div>
      </div>
    </footer>
  );
};
