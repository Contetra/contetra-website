"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  HomeIcon,
  MenuIcon,
  PhoneCall,
  XIcon,
} from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import ContetraMainLogo from "@/public/assets/images/logo/contetra-main-logo.png";
import ContetraWhiteLogo from "@/public/assets/images/logo/Contetra logo - white.png";

import { SERVICE_NAV_ITEMS } from "./service-links";

function NavRow({
  href,
  icon: Icon,
  active,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <DrawerClose asChild>
      <Link
        href={href}
        className={cn(
          "group flex items-center justify-between rounded-xl border px-4 py-3.5 text-base font-semibold transition-all duration-300",
          active
            ? "border-contetra-blue bg-contetra-blue text-white shadow-md dark:border-blue-400 dark:bg-blue-500"
            : "border-black/5 bg-white text-[#222] shadow-sm hover:border-contetra-blue/30 hover:bg-blue-50/70 hover:text-contetra-blue dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10"
        )}
      >
        <span className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors",
              active
                ? "bg-white/15 text-white"
                : "bg-contetra-blue/10 text-contetra-blue group-hover:bg-contetra-blue group-hover:text-white dark:bg-white/10 dark:text-blue-200"
            )}
          >
            <Icon className="size-4" />
          </span>
          <span className="truncate">{children}</span>
        </span>
        <ArrowUpRight
          className={cn(
            "size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            active ? "text-white" : "text-contetra-blue dark:text-blue-200"
          )}
        />
      </Link>
    </DrawerClose>
  );
}

export function NavigationMobile() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = React.useCallback(
    (href: string) =>
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)),
    [pathname]
  );

  return (
    <div className="flex xl:hidden">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          type="button"
          className="ring-offset-background inline-flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-contetra-blue shadow-sm transition-all hover:-translate-y-0.5 hover:border-contetra-blue/30 hover:shadow-md focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-blue-400/50"
          aria-label="Open menu"
        >
          <MenuIcon className="size-5 stroke-[2.4]" />
        </DrawerTrigger>

        <DrawerContent
          className={cn(
            "flex h-dvh max-h-dvh min-h-0 !w-[92vw] max-w-[420px] flex-col gap-0 overflow-hidden border-l border-black/10 bg-[#F7F8FB] p-0 text-foreground shadow-2xl dark:border-white/10 dark:bg-[#08090D] dark:text-zinc-100 sm:!max-w-[420px]"
          )}
        >
          <DrawerHeader className="relative shrink-0 space-y-0 border-b border-black/10 bg-white px-5 pb-5 pt-4 text-left dark:border-white/10 dark:bg-[#0F0F12]">
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <Link href="/" className="inline-flex w-fit">
                  <Image
                    src={ContetraMainLogo}
                    alt="Contetra"
                    width={86}
                    className="h-auto w-[120px] dark:hidden"
                    priority
                  />
                  <Image
                    src={ContetraWhiteLogo}
                    alt="Contetra"
                    width={86}
                    className="hidden h-auto w-[120px] dark:block"
                    priority
                  />
                </Link>
                <p className="mt-2 max-w-[260px] text-sm leading-5 text-zinc-600 dark:text-zinc-400">
                  Accounting, finance, ERP, and growth resources in one place.
                </p>
              </div>
              <DrawerClose
                type="button"
                className="ring-offset-background focus:ring-ring flex size-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 shadow-sm transition-all hover:border-contetra-blue/30 hover:text-contetra-blue focus:ring-2 focus:ring-offset-2 focus:outline-hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-blue-400/50"
                aria-label="Close menu"
              >
                <XIcon className="size-4" />
              </DrawerClose>
            </div>
          </DrawerHeader>

          <nav className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-5">
            <NavRow href="/" icon={HomeIcon} active={isActive("/")}>
              Home
            </NavRow>

            <Accordion type="multiple" className="flex w-full flex-col gap-3">
              <AccordionItem
                value="services"
                className="overflow-hidden rounded-xl border border-black/5 bg-white px-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <AccordionTrigger className="py-4 text-base font-semibold text-[#222] hover:no-underline dark:text-zinc-100">
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-contetra-blue/10 text-contetra-blue dark:bg-white/10 dark:text-blue-200">
                      <BriefcaseBusiness className="size-4" />
                    </span>
                    Services
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <ul className="flex flex-col gap-2 border-t border-black/5 pt-3 dark:border-white/10">
                    {SERVICE_NAV_ITEMS.map((item) => {
                      const active = isActive(item.href);

                      return (
                        <li key={item.href + item.title}>
                          <DrawerClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "group block rounded-lg px-3 py-2.5 transition-colors",
                                active
                                  ? "bg-contetra-blue text-white"
                                  : "hover:bg-blue-50 dark:hover:bg-blue-400/10"
                              )}
                            >
                              <span className="block text-sm font-semibold leading-snug">
                                {item.title}
                              </span>
                              <span
                                className={cn(
                                  "mt-1 line-clamp-2 block text-xs leading-5",
                                  active
                                    ? "text-white/80"
                                    : "text-zinc-500 dark:text-zinc-400"
                                )}
                              >
                                {item.description}
                              </span>
                            </Link>
                          </DrawerClose>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="resources"
                className="overflow-hidden rounded-xl border border-black/5 bg-white px-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <AccordionTrigger className="py-4 text-base font-semibold text-[#222] hover:no-underline dark:text-zinc-100">
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-contetra-blue/10 text-contetra-blue dark:bg-white/10 dark:text-blue-200">
                      <BookOpenText className="size-4" />
                    </span>
                    Resources
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <ul className="flex flex-col gap-2 border-t border-black/5 pt-3 dark:border-white/10">
                    <li>
                      <DrawerClose asChild>
                        <Link
                          href="/ebooks"
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                            isActive("/ebooks")
                              ? "bg-contetra-blue text-white"
                              : "text-zinc-700 hover:bg-blue-50 hover:text-contetra-blue dark:text-zinc-300 dark:hover:bg-blue-400/10 dark:hover:text-blue-200"
                          )}
                        >
                          <FileText className="size-4" />
                          Ebooks
                        </Link>
                      </DrawerClose>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <NavRow href="/blog" icon={FileText} active={isActive("/blog")}>
              Blog
            </NavRow>
          </nav>

          <div className="shrink-0 border-t border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#0F0F12]">
            <DrawerClose asChild>
              <Link
                href="/contact-us"
                className="flex items-center justify-between rounded-xl bg-contetra-blue px-4 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-blue-500"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white/15">
                    <PhoneCall className="size-4" />
                  </span>
                  Contact Us
                </span>
                <ArrowUpRight className="size-4" />
              </Link>
            </DrawerClose>
            <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
              Helping finance teams move with clarity.
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
