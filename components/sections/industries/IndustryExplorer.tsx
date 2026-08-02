"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";
import { VERTICAL_META } from "@/components/sections/industries/verticalMeta";
import { IndustryCaseStudyCard } from "@/components/sections/industries/IndustryCaseStudyCard";

const PAGE_SIZE = 24;
const CATEGORY_ORDER: CaseStudy["category"][] = [
  "ERP",
  "FP&A",
  "Technical Accounting",
  "Training",
];

interface IndustryExplorerProps {
  records: CaseStudy[];
}

export function IndustryExplorer({ records }: IndustryExplorerProps) {
  const availableCategories = useMemo(
    () => CATEGORY_ORDER.filter((category) => records.some((r) => r.category === category)),
    [records]
  );

  const [vertical, setVertical] = useState<"all" | CaseStudy["category"]>("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return records.filter((record) => {
      const matchesVertical = vertical === "all" || record.category === vertical;
      const matchesSearch =
        !q ||
        record.client.toLowerCase().includes(q) ||
        record.industry.toLowerCase().includes(q);
      return matchesVertical && matchesSearch;
    });
  }, [records, vertical, search]);

  const filterKey = `${vertical}|${search}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by service">
        <button
          type="button"
          onClick={() => setVertical("all")}
          aria-pressed={vertical === "all"}
          className={cn(
            "rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors",
            vertical === "all"
              ? "border-brand-blue bg-brand-blue text-white"
              : "border-border bg-white text-muted-foreground hover:border-brand-blue/40 hover:text-brand-blue"
          )}
        >
          All <span className="opacity-70">({records.length})</span>
        </button>

        {availableCategories.map((category) => {
          const meta = VERTICAL_META[category];
          const count = records.filter((r) => r.category === category).length;
          const active = vertical === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setVertical(category)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors",
                active
                  ? meta.solid
                  : "border-border bg-white text-muted-foreground hover:border-brand-blue/40 hover:text-brand-blue"
              )}
            >
              <meta.Icon className="size-4" aria-hidden />
              {meta.label}
              <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by client name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 pl-8"
            aria-label="Search by client name"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-brand-blue">{filtered.length}</span> of{" "}
          {records.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-border/70 bg-white px-6 py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue-tint text-brand-blue">
            <SearchX className="size-7" />
          </div>
          <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">No results</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or filter
          </p>
        </div>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((study, i) => (
              <IndustryCaseStudyCard
                key={`${study.client}-${study.category}-${i}`}
                study={study}
                animationDelayMs={(i % PAGE_SIZE) * 30}
              />
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load more case studies
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
