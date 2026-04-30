import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      
      {/* SVG Illustration */}
      <div className="relative w-[650px] h-[600px] mb-1">
        <Image
          src="/assets/svg/Monster 404 Error-rafiki.svg"
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