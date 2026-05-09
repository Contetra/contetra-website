import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { getEbookSchema } from "@/components/seo/ebook-schema";
import { JsonLd } from "@/components/seo/json-ld";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Business Growth Compliance`,
};

export default function LayoutEbooks({
  children,
}: {
  children: React.ReactNode;
}) {
  const ebookSchema = getEbookSchema(String(metadata.title ?? "Ebook"));

  return (
    <section className="min-h-screen">
      <JsonLd data={ebookSchema} />
      <Header />
      {children}
      <FooterMain />
    </section>
  );
}
