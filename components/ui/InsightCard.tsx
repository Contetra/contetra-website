import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPostDate } from "@/lib/formatDate";
import type { BlogPost } from "@/lib/insights";

function CoverImage({ post, sizes }: { post: BlogPost; sizes: string }) {
  if (post.coverImage) {
    return (
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue to-brand-green"
      aria-hidden
    >
      <span className="font-heading text-lg font-semibold text-white/70">Contetra</span>
    </div>
  );
}

function MetaRow({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-xs text-muted-foreground", className)}>
      <span className="inline-flex items-center gap-1">
        <Calendar className="size-3.5" />
        {formatPostDate(post.date)}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3.5" />
        {post.readingTime}
      </span>
    </div>
  );
}

interface InsightCardProps {
  post: BlogPost;
  animationDelayMs?: number;
}

export function InsightCard({ post, animationDelayMs = 0 }: InsightCardProps) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex h-full animate-in fade-in slide-in-from-bottom-2 flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm duration-500 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${animationDelayMs}ms`, animationFillMode: "both" }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <CoverImage post={post} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw" />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-green shadow-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-semibold text-brand-blue">{post.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <MetaRow post={post} />
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
          Read more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function FeaturedInsightCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex animate-in fade-in slide-in-from-bottom-2 flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm duration-500 transition-shadow hover:shadow-lg lg:flex-row"
    >
      <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto lg:w-2/5">
        <CoverImage post={post} sizes="(min-width: 1024px) 40vw, 100vw" />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-green shadow-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-6 sm:p-8">
        <span className="text-xs font-semibold tracking-wide text-brand-green uppercase">
          Latest article
        </span>
        <h2 className="font-heading text-2xl font-semibold text-brand-blue sm:text-3xl">
          {post.title}
        </h2>
        <p className="line-clamp-3 text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <MetaRow post={post} />
        <span className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand-green">
          Read more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
