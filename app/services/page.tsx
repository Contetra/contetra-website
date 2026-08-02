import { ComingSoonPage } from "@/components/ui/ComingSoonPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Content for this page is coming soon.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComingSoonPage eyebrow="Overview" title="Services" />;
}
