import React from "react";
import { NavigationMenuMain } from "./navigation-menu-main";
import { HeaderLogo } from "./components/header-logo";

export const Header = () => {
  return (
    <nav className="relative flex justify-between h-[80px] items-center  px-[var(--main-padding)] w-full bg-[#f6f3ee]">
      <HeaderLogo />
      <NavigationMenuMain />
    </nav>
  );
};
