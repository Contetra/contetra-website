"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuContactUs } from "./components/menu-contact-us";
import { MenuResources } from "./components/menu-resources";
import { MenuBlog } from "./components/menu-blog";
import { MenuServices } from "./components/menu-services";
import { MenuCompany } from "./components/menu-company";
import { MenuHome } from "./components/menu-home";



export function NavigationMenuMain() {
  const isMobile = false

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        
        <MenuHome />
        <MenuCompany />
        <MenuServices />
        <MenuBlog />
        <MenuResources />
        <MenuContactUs />
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}


