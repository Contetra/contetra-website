import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

export const MenuContactUs = () => {
  return (
    <NavigationMenuItem className="hidden md:block">
      <NavigationMenuTrigger>Need Help?</NavigationMenuTrigger>
      <NavigationMenuContent className="max-w-[90vw] right-0 left-auto">
        <ul className="grid w-[200px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="#" className="flex-row items-center gap-2">
                <CircleHelpIcon />
                Backlog
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="flex-row items-center gap-2">
                <CircleIcon />
                To Do
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="flex-row items-center gap-2">
                <CircleCheckIcon />
                Done
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
