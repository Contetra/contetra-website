import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

export const MenuResources = () => {
  return (
    <NavigationMenuItem className="hidden md:block">
      <NavigationMenuTrigger className="text-[16px]">Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="#">Components</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">Documentation</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">Blocks</Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
