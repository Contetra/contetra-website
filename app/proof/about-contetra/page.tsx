import { ComingSoonPage } from "@/components/ui/ComingSoonPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Contetra",
  description: "Content for this page is coming soon.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComingSoonPage eyebrow="Proof" title="About Contetra" />;
}
