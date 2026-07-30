import { ReactNode } from "react";

export default function GuideMotion({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-clip bg-white dark:bg-[#080b10]">
      {children}
    </div>
  );
}
