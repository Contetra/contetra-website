import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Finance Transformation Consultant | IFRS | ERP | Contetra`,
  description: `Contetra helps CFOs and growing businesses with IFRS advisory, ERP implementation, FP&A strategy, and IPO readiness. Serving 100+ clients globally.`,
  keywords: `Business management consultant in mumbai, finance business consultant, finance consulting services, finance advisory services, business financial management solutions`,
  alternates: {
    canonical: "https://contetra.com/",
  },
  openGraph: {
    title: `Finance Transformation & ERP Consulting for Growing Businesses`,
    description: `Build financial clarity, control, and growth with Contetra’s CFO-led consulting, ERP implementation, and FP&A solutions.`,
  },
};

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
