"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";

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

import { SERVICE_NAV_ITEMS } from "./service-links";

function NavRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <DrawerClose asChild>
      <Link
        href={href}
        className={cn(
          "text-foreground hover:bg-muted/60 dark:hover:bg-zinc-800/70 flex rounded-md px-3 py-3 text-base font-medium transition-colors"
        )}
      >
        {children}
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

  return (
    <div className="flex xl:hidden">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          type="button"
          className="ring-offset-background border-input bg-background hover:bg-muted/50 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 inline-flex size-10 items-center justify-center rounded-md border transition-colors focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Open menu"
        >
          <MenuIcon className="size-5" />
        </DrawerTrigger>
        <DrawerContent
          className={cn(
            "flex h-dvh max-h-dvh min-h-0 !w-[95vw] max-w-none flex-col gap-0 border-l bg-white text-foreground dark:bg-[#0F0F12] dark:text-zinc-100 dark:border-zinc-700 p-0 sm:!max-w-none"
          )}
        >
          <DrawerHeader className="border-border relative shrink-0 space-y-0 border-b py-4 pl-6 pr-14 text-left dark:border-zinc-700">
            <DrawerTitle className="text-lg">Menu</DrawerTitle>
            <DrawerClose
              type="button"
              className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs p-2 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
              aria-label="Close menu"
            >
              <XIcon className="size-4" />
            </DrawerClose>
          </DrawerHeader>
          <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-8">
            <NavRow href="/">Home</NavRow>

            <Accordion type="multiple" className="w-full px-1">
              <AccordionItem value="services">
                <AccordionTrigger className="text-base font-medium text-foreground dark:text-zinc-100 hover:no-underline">
                  Services
                </AccordionTrigger>
                <AccordionContent className="pl-1">
                  <ul className="flex flex-col gap-1 border-l border-border/60 pl-3">
                    {SERVICE_NAV_ITEMS.map((item) => (
                      <li key={item.href + item.title}>
                        <DrawerClose asChild>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 block rounded-md py-2 pr-2 text-sm leading-snug transition-colors"
                          >
                            {item.title}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="resources">
                <AccordionTrigger className="text-base font-medium text-foreground dark:text-zinc-100 hover:no-underline">
                  Resources
                </AccordionTrigger>
                <AccordionContent className="pl-1">
                  <ul className="flex flex-col gap-1 border-l border-border/60 pl-3">
                    <li>
                      <DrawerClose asChild>
                        <Link
                          href="/ebooks"
                          className="text-muted-foreground hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 block rounded-md py-2 pr-2 text-sm transition-colors"
                        >
                          Ebooks
                        </Link>
                      </DrawerClose>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <NavRow href="/blog">Blog</NavRow>
            <NavRow href="/contact-us">Contact Us</NavRow>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
