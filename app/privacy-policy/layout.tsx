import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";

export default function PPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-between ">
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
