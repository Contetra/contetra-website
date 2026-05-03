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

const BLOG_LINKS = [
  { href: "/blog", title: "Blog", description: "Articles and updates from contetra." },
  { href: "/blog", title: "Introduction", description: "Re-usable components and patterns." },
  { href: "/docs/installation", title: "Installation", description: "How to install and structure your app." },
  { href: "/docs/primitives/typography", title: "Typography", description: "Styles for headings, paragraphs, and lists." },
] as const;

const HELP_LINKS = [
  { href: "#", label: "Backlog" },
  { href: "#", label: "To Do" },
  { href: "#", label: "Done" },
] as const;

function NavRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <DrawerClose asChild>
      <Link
        href={href}
        className={cn(
          "text-foreground hover:bg-muted/60 flex rounded-md px-3 py-3 text-base font-medium transition-colors"
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
          className="ring-offset-background border-input bg-background hover:bg-muted/50 inline-flex size-10 items-center justify-center rounded-md border transition-colors focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Open menu"
        >
          <MenuIcon className="size-5" />
        </DrawerTrigger>
        <DrawerContent
          className={cn(
            "flex h-dvh max-h-dvh min-h-0 !w-[95vw] max-w-none flex-col gap-0 border-l p-0 sm:!max-w-none"
          )}
        >
          <DrawerHeader className="border-border relative shrink-0 space-y-0 border-b py-4 pl-6 pr-14 text-left">
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
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  Services
                </AccordionTrigger>
                <AccordionContent className="pl-1">
                  <ul className="flex flex-col gap-1 border-l border-border/60 pl-3">
                    {SERVICE_NAV_ITEMS.map((item) => (
                      <li key={item.href + item.title}>
                        <DrawerClose asChild>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground block rounded-md py-2 pr-2 text-sm leading-snug transition-colors"
                          >
                            {item.title}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="blog">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  Blog
                </AccordionTrigger>
                <AccordionContent className="pl-1">
                  <ul className="flex flex-col gap-1 border-l border-border/60 pl-3">
                    {BLOG_LINKS.map((item) => (
                      <li key={item.title}>
                        <DrawerClose asChild>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground block rounded-md py-2 pr-2 text-sm transition-colors"
                          >
                            <span className="text-foreground font-medium">{item.title}</span>
                            <span className="mt-0.5 block text-xs leading-snug">{item.description}</span>
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="help">
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  Need Help?
                </AccordionTrigger>
                <AccordionContent className="pl-1">
                  <ul className="flex flex-col gap-1 border-l border-border/60 pl-3">
                    {HELP_LINKS.map((item) => (
                      <li key={item.label}>
                        <DrawerClose asChild>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground block rounded-md py-2 pr-2 text-sm transition-colors"
                          >
                            {item.label}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
