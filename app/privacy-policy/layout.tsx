import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy`,
  description: `Privacy Policy`,
  keywords: `Privacy Policy`,
  alternates: {
    canonical: "https://contetra.com/privacy-policy",
  },
};

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
