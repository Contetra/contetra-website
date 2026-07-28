import { Header } from "@/components/navigation/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveBlogListApiBase } from "@/lib/server-api-base-url";
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
        canonical: "https://contetra.com/blog",
      },
    };
  }

  const apiSlug = `/${slug}/`;
  const blogPostPath = `/blog/${slug}`;
  const canonicalFromSlug = `https://contetra.com${blogPostPath}`;

  const apiBase = resolveBlogListApiBase();
  if (!apiBase) {
    return {
      title: "Blog",
      openGraph: { title: "Blog", url: canonicalFromSlug },
      alternates: { canonical: canonicalFromSlug },
    };
  }

  const postsDataUrl =
    `${apiBase}/posts/posts-data?slug=${encodeURIComponent(apiSlug)}`.replace(
      /([^:]\/)\/+/g,
      "$1",
    );

  try {
    const blogRes = await fetch(postsDataUrl, { next: { revalidate: 60 } });
    if (!blogRes.ok) {
      return {
        title: "Blog",
        openGraph: { title: "Blog", url: canonicalFromSlug },
        alternates: { canonical: canonicalFromSlug },
      };
    }

    const blogDataResponse = await blogRes.json();
    const r = blogDataResponse?.response;
    const blog = r?.blog ?? r?.data?.blog;

    return {
      title: blog?.meta_title || blog?.title || "Blog",
      description: blog?.meta_description || "",
      keywords: blog?.meta_keywords || "",
      openGraph: {
        title: blog?.og_title || blog?.title || "Blog",
        description: blog?.og_description || "",
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
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up#webpage",
        url: "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up",
        name: "The CFO Pipeline Problem: Why Mid-Level Finance Talent Is Drying Up",
        description:
          "Explore why mid-level finance talent is becoming increasingly difficult to hire and what CFOs can do to strengthen the finance leadership pipeline.",
        breadcrumb: {
          "@id":
            "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up#breadcrumb",
        },
        primaryImageOfPage:
          "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up",
      },
      {
        "@type": "Article",
        "@id":
          "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up#article",
        headline:
          "The CFO Pipeline Problem: Why Mid-Level Finance Talent Is Drying Up",
        description:
          "A detailed look at the growing shortage of mid-level finance professionals and its impact on CFO succession planning, business growth, and finance transformation.",
        mainEntityOfPage: {
          "@id":
            "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up#webpage",
        },
        author: {
          "@id": "https://contetra.com#author",
        },
        publisher: {
          "@type": "Organization",
          name: "Contetra Private Limited",
          logo: {
            "@type": "ImageObject",
            url: "https://contetra.com/logo.png",
          },
        },
        datePublished: "2026-07-10",
        dateModified: "2026-07-10",
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": "https://contetra.com#author",
        name: "Ramanujam Narayan",
        jobTitle: "Co-Founder & CFO Transformation Consultant",
        worksFor: {
          "@type": "Organization",
          name: "Contetra Private Limited",
          url: "https://contetra.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://contetra.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://contetra.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "The CFO Pipeline Problem: Why Mid-Level Finance Talent Is Drying Up",
            item: "https://contetra.com/blog/the-cfo-pipeline-problem-why-mid-level-finance-talent-is-drying-up",
          },
        ],
      },
    ],
  };

  return (
    <section className="min-h-screen relative">
      <JsonLd data={blogPostingSchema} />
      <Header />
      {children}
      <Floatingbar />
    </section>
  );
}
