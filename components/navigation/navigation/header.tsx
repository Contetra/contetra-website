"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { navGroups, primaryCta } from "@/lib/nav";
import ContetraMainLogo from "@/public/assets/images/logo/contetra-main-logo.png";
import ContetraWhiteLogo from "@/public/assets/images/logo/Contetra logo - white.png";

/** Links kept from cw's previous header that aren't part of cpl's nav data. */
const extraLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredParent, setHoveredParent] = useState<string | null>(null);
  const [expandedMobileParent, setExpandedMobileParent] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-all duration-300 dark:bg-black/90 ${
        scrolled ? "border-border shadow-sm dark:border-white/10" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="relative flex h-9 w-40 shrink-0 items-center sm:h-10 sm:w-44">
          <Image
            src={ContetraMainLogo}
            alt="Contetra"
            fill
            sizes="176px"
            className="object-contain object-left dark:hidden"
            priority
          />
          <Image
            src={ContetraWhiteLogo}
            alt="Contetra"
            fill
            sizes="176px"
            className="hidden object-contain object-left dark:block"
            priority
          />
        </Link>

        <NavigationMenu
          viewport={false}
          className="hidden max-w-none flex-1 justify-center lg:flex"
        >
          <NavigationMenuList>
            {navGroups.map((group) => {
              if (!group.links || group.links.length === 0) {
                return (
                  <NavigationMenuItem key={group.label}>
                    <Link href={group.href} className={navigationMenuTriggerStyle()}>
                      {group.label}
                    </Link>
                  </NavigationMenuItem>
                );
              }

              const hasNestedLinks = group.links.some(
                (link) => link.children && link.children.length > 0
              );
              const activeParent = group.links.find(
                (link) => link.href === hoveredParent && link.children && link.children.length > 0
              );
              // Sized once per group (not per hovered item) so the panel doesn't
              // resize/jump when switching between a short and a long submenu.
              const maxChildCount = Math.max(
                0,
                ...group.links.map((link) => link.children?.length ?? 0)
              );
              const useTwoColumnPanel = maxChildCount > 6;

              return (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "group-data-[viewport=false]/navigation-menu:mt-2",
                      hasNestedLinks &&
                        "group-data-[viewport=false]/navigation-menu:overflow-visible group-data-[viewport=false]/navigation-menu:rounded-r-none"
                    )}
                  >
                    {hasNestedLinks ? (
                      <div className="relative">
                        <ul className="grid w-56 content-start self-start gap-0.5 p-1">
                          {group.links.map((link) => (
                            <li
                              key={link.href}
                              onMouseEnter={() =>
                                setHoveredParent(link.children ? link.href : null)
                              }
                              onFocus={() =>
                                setHoveredParent(link.children ? link.href : null)
                              }
                            >
                              {link.children && link.children.length > 0 ? (
                                <div className="flex items-center rounded-lg hover:bg-muted focus-within:bg-muted">
                                  <NavigationMenuLink
                                    asChild
                                    className="flex-1 hover:bg-transparent focus:bg-transparent"
                                  >
                                    <Link
                                      href={link.href}
                                      aria-haspopup="true"
                                      aria-expanded={hoveredParent === link.href}
                                    >
                                      {link.label}
                                    </Link>
                                  </NavigationMenuLink>
                                  <ChevronRight
                                    className="mr-2 size-4 shrink-0 text-muted-foreground"
                                    aria-hidden
                                  />
                                </div>
                              ) : (
                                <NavigationMenuLink asChild>
                                  <Link href={link.href}>{link.label}</Link>
                                </NavigationMenuLink>
                              )}
                            </li>
                          ))}
                        </ul>

                        <div
                          className={cn(
                            "absolute -top-2 left-[calc(100%+0.5rem)] z-10 rounded-r-md border border-l-0 border-border bg-popover p-2 shadow",
                            useTwoColumnPanel ? "w-[26rem] max-h-96 overflow-y-auto" : "w-60"
                          )}
                        >
                          {activeParent && activeParent.children ? (
                            <ul
                              className={cn(
                                "grid gap-0.5",
                                useTwoColumnPanel && "grid-cols-2"
                              )}
                              aria-label={`${activeParent.label} pages`}
                            >
                              {activeParent.children.map((child) => (
                                <li key={child.href}>
                                  <NavigationMenuLink asChild>
                                    <Link href={child.href}>{child.label}</Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="flex h-full min-h-32 items-center justify-center px-4 text-center text-xs text-muted-foreground">
                              Hover a service to explore more
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <ul className="grid w-56 gap-0.5 p-1">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link href={link.href}>{link.label}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}

            {extraLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} className={navigationMenuTriggerStyle()}>
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Link
            href={primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }), "hidden md:inline-flex")}
          >
            {primaryCta.label}
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
            <SheetContent side="right" className="flex w-full flex-col sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle>
                  <span className="relative block h-8 w-32">
                    <Image
                      src={ContetraMainLogo}
                      alt="Contetra"
                      fill
                      sizes="128px"
                      className="object-contain object-left dark:hidden"
                    />
                    <Image
                      src={ContetraWhiteLogo}
                      alt="Contetra"
                      fill
                      sizes="128px"
                      className="hidden object-contain object-left dark:block"
                    />
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto px-4">
                <Accordion type="multiple" className="w-full">
                  {navGroups.map((group, i) =>
                    group.links && group.links.length > 0 ? (
                      <AccordionItem key={group.label} value={String(i)}>
                        <AccordionTrigger className="font-heading">
                          {group.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-1">
                            {group.links.map((link) => {
                              const hasChildren = link.children && link.children.length > 0;
                              const domId = link.href.replace(/[^a-z0-9]/gi, "-");
                              const isExpanded = expandedMobileParent === link.href;

                              if (!hasChildren) {
                                return (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                );
                              }

                              return (
                                <li key={link.href}>
                                  <div className="flex items-center justify-between rounded-lg hover:bg-muted">
                                    <Link
                                      href={link.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex-1 px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                      {link.label}
                                    </Link>
                                    <button
                                      type="button"
                                      aria-expanded={isExpanded}
                                      aria-controls={`mobile-submenu-${domId}`}
                                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.label} submenu`}
                                      onClick={() =>
                                        setExpandedMobileParent(isExpanded ? null : link.href)
                                      }
                                      className="rounded-lg p-2 text-muted-foreground hover:text-foreground"
                                    >
                                      <ChevronRight
                                        className={cn(
                                          "size-4 transition-transform",
                                          isExpanded && "rotate-90"
                                        )}
                                      />
                                    </button>
                                  </div>
                                  {isExpanded && (
                                    <ul
                                      id={`mobile-submenu-${domId}`}
                                      className="ml-3 flex flex-col gap-1 border-l border-border pl-3"
                                    >
                                      {link.children!.map((child) => (
                                        <li key={child.href}>
                                          <Link
                                            href={child.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={group.label} className="not-last:border-b">
                        <Link
                          href={group.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg py-2.5 font-heading text-sm font-medium transition-all hover:underline"
                        >
                          {group.label}
                        </Link>
                      </div>
                    )
                  )}

                  {extraLinks.map((link) => (
                    <div key={link.href} className="not-last:border-b">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg py-2.5 font-heading text-sm font-medium transition-all hover:underline"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </Accordion>
              </div>

              <div className="border-t p-4">
                <Link
                  href={primaryCta.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                >
                  {primaryCta.label}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
