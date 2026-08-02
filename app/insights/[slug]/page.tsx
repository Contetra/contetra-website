import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShareRow } from "@/app/insights/[slug]/components/ShareRow";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/insights";
import { formatPostDate } from "@/lib/formatDate";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InsightCard } from "@/components/ui/InsightCard";

const siteUrl = "https://contetra.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteUrl}/insights/${post.slug}`;
  const title = `${post.title} | Contetra Insights`;

  return {
    title: { absolute: title },
    description: post.excerpt,
    // NOTE: when `canonical` frontmatter is set, this points at the OLD site's
    // URL rather than this page — see the migration note in the build report.
    alternates: {
      canonical: post.canonical || `/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const mdxComponents = {
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="not-prose my-6 rounded-2xl border-l-4 border-brand-green bg-brand-green-tint/40 px-5 py-4 text-base leading-relaxed text-foreground italic"
      {...props}
    />
  ),
};

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteUrl}/insights/${post.slug}`;
  const related = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": post.author === "Contetra" ? "Organization" : "Person",
      name: post.author,
    },
    image: post.coverImage ? `${siteUrl}${post.coverImage}` : undefined,
    url,
    publisher: {
      "@type": "Organization",
      name: "Contetra Private Limited",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green"
            >
              <ArrowLeft className="size-4" />
              Back to Insights
            </Link>

            <span className="mt-6 inline-flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-semibold tracking-wide text-brand-green uppercase">
              {post.category}
            </span>

            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>{initials(post.author)}</AvatarFallback>
                </Avatar>
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="size-4" />
                {formatPostDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-4" />
                {post.readingTime}
              </span>
            </div>

            {post.coverImage && (
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border/70">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-heading prose-headings:text-brand-blue prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-img:rounded-2xl">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10 border-t border-border pt-6">
            <ShareRow url={url} title={post.title} />
          </ScrollReveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-brand-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-semibold text-brand-blue sm:text-3xl">
                Related insights
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost, i) => (
                <InsightCard
                  key={relatedPost.slug}
                  post={relatedPost}
                  animationDelayMs={i * 80}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
