"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* SVG Illustration */}
      <div className="relative w-[650px] h-[600px] mb-1">
        <Image
          src="/assets/svg/500 Internal Server Error-cuate.svg"
          alt="404 Illustration"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Back Button */}
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
