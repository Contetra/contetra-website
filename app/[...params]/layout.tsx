import { FooterMain } from "@/components/navigation-footer/footer/footer-main";
import { Header } from "@/components/navigation-footer/navigation/header";
import { Floatingbar } from "./components/floating-bar";

export default function LayoutSubPages({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen relative">
      <Header />
      {children}
      <Floatingbar />
      <FooterMain />
    </section>
  );
}
