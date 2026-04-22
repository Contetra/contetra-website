import { FooterMain } from "@/components/navigation-footer/footer/footer-main";
import { Header } from "@/components/navigation-footer/navigation/header";

export default function HomeLayout({
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
