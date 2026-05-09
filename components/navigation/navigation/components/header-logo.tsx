import Image from "next/image";
import React from "react";
import ContetraMainLogo from "@/public/assets/images/logo/contetra-main-logo.png";
import ContetraWhiteLogo from "@/public/assets/images/logo/Contetra logo - white.png";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="menularge-cursor block dark:hidden"
        src={ContetraMainLogo}
        width={150}
        alt="contetra-logo"
      />
      <Image
        className="menularge-cursor hidden dark:block"
        src={ContetraWhiteLogo}
        width={150}
        alt="contetra-logo-white"
      />
    </Link>
  );
};
