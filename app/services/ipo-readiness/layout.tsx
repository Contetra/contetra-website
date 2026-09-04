import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
alternates: {
    canonical:
      "https://contetra.com/services/ipo-readiness",
  },
};

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="min-h-screen overflow-x-hidden">
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
