import { FooterMain } from "@/components/navigation/footer/footer-main";
import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Floatingbar } from "./components/floating-bar";
import { Metadata } from "next";

type LayoutParams = {
  params: Promise<{
    params?: string[];
  }>;
};

export async function generateMetadata({
  params,
}: LayoutParams): Promise<Metadata> {
  const resolvedParams = await params;
  const paramArray = Array.isArray(resolvedParams.params)
    ? resolvedParams.params
    : typeof resolvedParams.params === "string"
      ? [resolvedParams.params]
      : [];
  const slug = paramArray.join("/");

  if (!slug) {
    return {
      title: "Blog",
      alternates: {
        canonical: "https://contetra.com/blog/",
      },
    };
  }

  const apiSlug = `/${slug}/`;
  const blogPostPath = `/blog/${slug}`;
  const canonicalFromSlug = `https://contetra.com${blogPostPath}/`;

  try {
    const blogDataResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/posts-data?slug=${encodeURIComponent(apiSlug)}`,
      { next: { revalidate: 60 } }
    ).then((res) => res.json());

    const blog = blogDataResponse?.response?.blog;

    return {
      title: blog?.title || "Blog",
      openGraph: {
        title: blog?.title || "Blog",
        url: canonicalFromSlug,
      },
      alternates: {
        canonical: canonicalFromSlug,
      },
    };
  } catch {
    return {
      title: "Blog",
      alternates: {
        canonical: canonicalFromSlug,
      },
    };
  }
}

export default async function LayoutSubPages({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    params?: string[];
  }>;
}) {
  const resolvedParams = await params;
  const paramArray = Array.isArray(resolvedParams.params)
    ? resolvedParams.params
    : typeof resolvedParams.params === "string"
      ? [resolvedParams.params]
      : [];
  const slug = paramArray.join("/");
  const canonicalUrl = slug
    ? `https://contetra.com/blog/${slug}/`
    : "https://contetra.com/blog/";
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "Contetra",
      url: "https://contetra.com/",
    },
  };

  return (
    <section className="min-h-screen relative">
      <JsonLd data={blogPostingSchema} />
      <Header />
      {children}
      <Floatingbar />
      <FooterMain />
    </section>
  );
}
