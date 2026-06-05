import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";



export default function LayoutKyc({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <section className="min-h-screen">
   
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
