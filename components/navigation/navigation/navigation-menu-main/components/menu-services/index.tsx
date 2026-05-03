import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SlideUpText } from "@/components/ui/slide-up-text";
import React from "react";

import { SERVICE_NAV_ITEMS } from "@/components/navigation/navigation-mobile/service-links";

export const MenuServices = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="menularge-cursor text-[16px]">
        <SlideUpText>Services</SlideUpText>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="max-w-[90vw] -right-60 left-auto">
        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {SERVICE_NAV_ITEMS.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-[1.4em] font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-[1.2em]">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}