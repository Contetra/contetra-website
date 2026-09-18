"use client";

import { memo, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Highlighter } from "@/components/ui/highlighter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { formatDate, slugToBlogPostHref } from "@/lib/utils";
import {
  useGetCategoriesQuery,
  useGetHomepageBlogsQuery,
} from "@/redux/api/postsApi";

const CAROUSEL_LIMIT = 30;

interface HomepageBlog {
  id: string;
  title: string;
  slug: string;
  feature_image_url: string;
  excerpt: string;
  created_at: string;
  authors: string[];
  categories: string[];
}

interface Category {
  category_id: string;
  name: string;
}

interface BlogCarouselProps {
  /** Category name or id to filter by. Omit to show the latest blogs across all categories. */
  category?: string;
  /** Sort by publish date. Defaults to "desc" (newest first). */
  sortOrder?: "asc" | "desc";
}

// Aligns the sidebar text with every other homepage section's left gutter
// (max-w-7xl + lg:px-8) while letting the card row bleed to the true right
// edge of the viewport, so the last card can peek/cut off like the reference.
// Capped at 6rem: the sidebar itself is a fixed lg:w-[400px] box, so past
// ~1408px viewport width an uncapped inset would exceed the box's own width
// and collapse the text column to zero/negative space.
const SIDEBAR_LEFT_INSET =
  "lg:pl-[clamp(2rem,calc((100vw-1280px)/2+2rem),6rem)]";

export function BlogCarousel({
  category,
  sortOrder = "desc",
}: BlogCarouselProps) {
  const { data: categoriesData } = useGetCategoriesQuery(
    {},
    { skip: !category },
  );

  const resolvedCategoryId = useMemo(() => {
    if (!category) return undefined;
    const categories: Category[] = categoriesData?.response ?? [];
    const match = categories.find(
      (c) =>
        c.category_id === category ||
        c.name.toLowerCase() === category.toLowerCase(),
    );
    return match?.category_id ?? category;
  }, [category, categoriesData]);

  const { data: blogsData, isFetching } = useGetHomepageBlogsQuery({
    limit: CAROUSEL_LIMIT,
    categories: resolvedCategoryId ? [resolvedCategoryId] : undefined,
    sortOrder,
  });

  const blogs: HomepageBlog[] = useMemo(
    () => blogsData?.response ?? [],
    [blogsData],
  );

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  if (!isFetching && blogs.length === 0) return null;

  return (
    <section className="overflow-hidden  py-20 sm:py-20">
      <Carousel
        opts={{ align: "start", loop: false }}
        setApi={setCarouselApi}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div
            className={`shrink-0 px-4 sm:px-6 lg:w-[400px] lg:pr-0 ${SIDEBAR_LEFT_INSET}`}
          >
            <ScrollReveal>
              <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-contetra-blue">
                From the Blog
              </span>
              <h2 className="mt-2 font-heading text-4xl font-bold text-brand-blue">
                Latest
                <br />
                Insights
              </h2>
              <p className="mt-4 text-[15px] leading-[1.5em] text-[#666666]">
                Straight-talking guidance on ERP, compliance, and finance
                operations, drawn from the transformations our team runs
                every day.
              </p>

              <Link
                href="/blog"
                className="menularge-cursor mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue underline-offset-4 hover:underline"
              >
                See all blogs
                <ArrowRight size={16} />
              </Link>

              {blogs.length > 1 && (
                <CarouselNavButtons carouselApi={carouselApi} />
              )}
            </ScrollReveal>
          </div>

          <div className="min-w-0 flex-1">
            <CarouselContent className="cursor-grab pr-4 py-3 pl-4 active:cursor-grabbing sm:pr-6 sm:pl-6 lg:pr-8">
              <BlogCarouselItems blogs={blogs} isFetching={isFetching} />
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

/**
 * Split out from BlogCarousel so a scroll settle (which only needs to
 * update the nav buttons' disabled state) doesn't force React to
 * re-reconcile all ~30 cards on every navigation — that re-render fighting
 * Embla's own rAF-driven slide animation was the cause of visible stutter
 * on rapid clicks.
 */
const BlogCarouselItems = memo(function BlogCarouselItems({
  blogs,
  isFetching,
}: {
  blogs: HomepageBlog[];
  isFetching: boolean;
}) {
  if (isFetching) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <CarouselItem
            key={i}
            className="basis-[240px] shrink-0 sm:basis-[300px]"
          >
            <Skeleton className="h-[130px] w-full rounded-xl sm:h-[165px]" />
            <Skeleton className="mt-4 h-5 w-3/4" />
            <Skeleton className="mt-2 h-4 w-1/2" />
          </CarouselItem>
        ))}
      </>
    );
  }

  return (
    <>
      {blogs.map((blog, index) => (
        <CarouselItem
          key={blog.id}
          className="basis-[240px] shrink-0 sm:basis-[300px]"
        >
          <ScrollReveal delay={index * 0.07} className="h-full">
            <BlogCarouselCard blog={blog} />
          </ScrollReveal>
        </CarouselItem>
      ))}

      {blogs.length > 0 && (
        <CarouselItem className="basis-[240px] shrink-0 sm:basis-[300px]">
          <ScrollReveal delay={blogs.length * 0.07} className="h-full">
            <ViewAllBlogsCard />
          </ScrollReveal>
        </CarouselItem>
      )}
    </>
  );
});

function CarouselNavButtons({ carouselApi }: { carouselApi: CarouselApi }) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = (api: NonNullable<CarouselApi>) => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect(carouselApi);
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="mt-8 flex gap-10">
      <button
        type="button"
        aria-label="Previous slide"
        disabled={!canScrollPrev}
        onClick={() => carouselApi?.scrollPrev()}
        className="menularge-cursor cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Highlighter padding={10} action="circle" color="#FF9800">
          <ArrowLeft size={18} className="text-[#FF9800]" />
        </Highlighter>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        disabled={!canScrollNext}
        onClick={() => carouselApi?.scrollNext()}
        className="menularge-cursor cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Highlighter padding={10} action="circle" color="#FF9800">
          <ArrowRight size={18} className="text-[#FF9800]" />
        </Highlighter>
      </button>
    </div>
  );
}

function BlogCarouselCard({ blog }: { blog: HomepageBlog }) {
  return (
    <Link
      href={slugToBlogPostHref(blog.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_0_10px_rgba(118,118,118,0.15)]"
    >
      <div className="relative h-[130px] w-full overflow-hidden sm:h-[165px]">
        {blog.feature_image_url && (
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog.feature_image_url}`}
            alt={blog.title}
            fill
            sizes="(max-width: 639px) 240px, 300px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 p-3">
        <div className="flex flex-col gap-2">
          {blog.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.categories.slice(0, 1).map((cat) => (
                <span
                  key={cat}
                  className="w-fit rounded-[6px] bg-contetra-blue px-2 py-1 text-[11px] font-medium text-white"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h3 className="line-clamp-2 text-[15px] leading-[1.3em] font-semibold text-[#222222]">
            {blog.title}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[12px] font-medium text-[#adadad]">
            {formatDate(blog.created_at)}
          </span>
          <Highlighter padding={8} action="circle" color="#FF9800">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Highlighter>
        </div>
      </div>
    </Link>
  );
}

function ViewAllBlogsCard() {
  return (
    <Link
      href="/blog"
      className="menularge-cursor group flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue to-[#1a1a52] p-6 text-center shadow-[0_0_10px_rgba(118,118,118,0.15)] transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="flex size-14 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 transition-colors duration-300 group-hover:border-[#FF9800] group-hover:bg-[#FF9800]">
        <ArrowRight
          size={22}
          className="text-white transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
      <span className="text-[17px] font-semibold text-white">
        View All Blogs
      </span>
      <span className="text-[13px] text-white/70">
        Explore the full library of insights
      </span>
    </Link>
  );
}
