"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/insights";
import { FeaturedInsightCard, InsightCard } from "@/components/ui/InsightCard";

const PAGE_SIZE = 9;

interface InsightsExplorerProps {
  posts: BlogPost[];
  categories: string[];
  initialCategory: string;
}

export function InsightsExplorer({ posts, categories, initialCategory }: InsightsExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filterKey = `${search}|${category}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchesCategory = category === "all" || post.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [posts, search, category]);

  const showFeatured = category === "all" && search.trim() === "" && filtered.length > 0;
  const featuredPost = showFeatured ? filtered[0] : null;
  const gridPosts = featuredPost ? filtered.slice(1) : filtered;
  const visible = gridPosts.slice(0, visibleCount);

  return (
    <div>
      <div className="sticky top-16 z-40 -mx-4 border-b border-border bg-brand-offwhite/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 pl-8"
              aria-label="Search insights"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                category === "all"
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-border bg-white text-muted-foreground hover:border-brand-blue/40 hover:text-brand-blue"
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  category === cat
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-border bg-white text-muted-foreground hover:border-brand-blue/40 hover:text-brand-blue"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-brand-blue">{filtered.length}</span>{" "}
          article{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-border/70 bg-white px-6 py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue-tint text-brand-blue">
            <SearchX className="size-7" />
          </div>
          <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">No results</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or category
          </p>
        </div>
      ) : (
        <>
          {featuredPost && (
            <div className="mt-10">
              <FeaturedInsightCard post={featuredPost} />
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <InsightCard key={post.slug} post={post} animationDelayMs={(i % PAGE_SIZE) * 40} />
            ))}
          </div>

          {visibleCount < gridPosts.length && (
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load more articles
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
