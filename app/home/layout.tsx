import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Corporate Finance Training for Teams & Business Leaders | Contetra`,
  description: `Upskill your teams with practical corporate finance training on accounting, ERP, and decision-making frameworks.`,
  keywords: `finance training for employees, finance training for companies, business finance training services, corporate training programs for finance teams, professional finance training services, corporate training services India, finance training company India`,
  alternates: {
    canonical: "https://contetra.com/",
  },
  openGraph: {
    title: `Corporate Finance Training for Teams & Leaders in Mumbai`,
    description: `Upskill your teams with practical finance training on accounting, ERP, and decision-making frameworks.`,
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
