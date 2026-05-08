import Link from "next/link";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SlideUpText } from "@/components/ui/slide-up-text";
import React from "react";

export const MenuContactUs = () => {
  return (
    <NavigationMenuItem>
      <Link href="/contact-us" className={navigationMenuTriggerStyle()}>
        <SlideUpText>Contact Us</SlideUpText>
      </Link>
    </NavigationMenuItem>
  );
};
