"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LightRays } from "@/components/ui/light-rays";

interface LightRaysWrapperProps {
  count?: number;
  speed?: number;
  className?: string;
}

export const LightRaysWrapper = ({
  count = 20,
  speed = 20,
  className,
}: LightRaysWrapperProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || resolvedTheme === "dark") return null;

  return (
    <LightRays
      key={resolvedTheme}
      count={count}
      speed={speed}
      className={className}
    />
  );
};