import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms and Conditions`,
  description: `Terms and Conditions`,
  keywords: `Terms and Conditions`,
  alternates: {
    canonical: "https://contetra.com/terms-and-conditions/",
  },
};

export default function TCLayout({
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
