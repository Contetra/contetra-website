"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      {/* SVG Illustration */}
      <div className="relative w-[650px] h-[600px] mb-1">
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
  );
}
