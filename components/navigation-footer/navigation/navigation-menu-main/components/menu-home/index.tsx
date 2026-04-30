import Link from "next/link";
import { NavigationMenuItem, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import React from "react";
import { SlideUpText } from "@/components/ui/slide-up-text";

export const MenuHome = () => {
  return (
    <NavigationMenuItem>
      <Link href="/" className={navigationMenuTriggerStyle()}>
        <SlideUpText>Home</SlideUpText>
      </Link>
    </NavigationMenuItem>
  );
};
