"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/navigation/navigation/header";
import { FooterMain } from "@/components/navigation/footer/footer-main";

const NOT_FOUND_ILLUSTRATIONS = [
  "/assets/svg/404 Error with a cute animal-bro.svg",
  "/assets/svg/404 Error-bro.svg",
  "/assets/svg/404 Error-pana.svg",
  "/assets/svg/404 error with a tired person-bro.svg",
  "/assets/svg/404 error with a tired person-pana.svg",
  "/assets/svg/404 error with a tired person-rafiki.svg",
  "/assets/svg/404 error with person looking for-rafiki.svg",
  "/assets/svg/Monster 404 Error-rafiki.svg",
];

export default function NotFound() {
  const [illustration, setIllustration] = useState<string | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * NOT_FOUND_ILLUSTRATIONS.length);
    setIllustration(NOT_FOUND_ILLUSTRATIONS[index]);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-2 text-center sm:px-6">
        {/* SVG Illustration */}
        <div className="relative mb-1 h-[300px] w-full max-w-[380px] sm:h-[340px] sm:max-w-[420px] md:h-[460px] md:max-w-[550px] lg:h-[600px] lg:max-w-[650px]">
          {illustration && (
            <Image
              src={illustration}
              alt="404 Illustration"
              fill
              priority
              className="object-contain"
            />
          )}
        </div>

        {/* Back Button */}
        <Link href="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>

      <FooterMain />
    </div>
  );
}
