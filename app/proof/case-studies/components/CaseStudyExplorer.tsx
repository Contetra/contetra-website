"use client";

import { useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/app/proof/case-studies/components/CaseStudyCard";

import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { useCascadingFilters } from "@/lib/useCascadingFilters";

const SERVICE_LABELS: Record<CaseStudy["category"], string> = {
  ERP: "Digital Transformation",
  "FP&A": "Management Reporting",
  "Technical Accounting": "Accounting & Reporting",
  Training: "Training",
};

const PAGE_SIZE = 24;

export function CaseStudyExplorer() {
  const {
    search,
    setSearch,
    service,
    industry,
    allowedIndustries,
    allowedServices,
    handleServiceChange,
    handleIndustryChange,
    filtered,
  } = useCascadingFilters<CaseStudy>({
    items: caseStudies,
    getService: (c) => c.category,
    getIndustry: (c) => c.industry,
    matchesSearch: (c, q) =>
      c.client.toLowerCase().includes(q) ||
      c.industry.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q),
  });

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const filterKey = `${search}|${service}|${industry}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="sticky top-16 z-40 -mx-4 border-b border-border bg-brand-offwhite/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-4">
          <div className="flex-1">
            <label
              htmlFor="case-study-search"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Search
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="case-study-search"
                type="text"
                placeholder="Search client or industry…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 pl-8"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="case-study-service"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Service
            </label>
            <Select value={service} onValueChange={handleServiceChange}>
              <SelectTrigger id="case-study-service" className="h-9 w-full lg:w-60">
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {allowedServices.map((value) => (
                  <SelectItem key={value} value={value}>
                    {SERVICE_LABELS[value as CaseStudy["category"]]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="case-study-industry"
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Industry
            </label>
            <Select value={industry} onValueChange={handleIndustryChange}>
              <SelectTrigger id="case-study-industry" className="h-9 w-full lg:w-60">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {allowedIndustries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-brand-blue">{filtered.length}</span>{" "}
          results
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-border/70 bg-white px-6 py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue-tint text-brand-blue">
            <SearchX className="size-7" />
          </div>
          <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
            No results
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or filter
          </p>
        </div>
      ) : (
        <>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((study, i) => (
              <CaseStudyCard
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
