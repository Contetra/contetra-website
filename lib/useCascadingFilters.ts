"use client";

import { useMemo, useState } from "react";

interface UseCascadingFiltersOptions<T> {
  items: T[];
  getService: (item: T) => string;
  /** Return "" when the item has no industry — such items are excluded from
   * the derived industry list and cascade maps, but still match "All Industries". */
  getIndustry: (item: T) => string;
  matchesSearch: (item: T, query: string) => boolean;
}

/**
 * Data-driven, bidirectionally-cascading Service/Industry filter state.
 * Selecting a Service narrows the Industry options to only those with at
 * least one matching record (and vice versa); changing one filter resets
 * the other back to "all" if its current value is no longer valid, so no
 * zero-result combination is ever selectable from either dropdown.
 */
export function useCascadingFilters<T>({
  items,
  getService,
  getIndustry,
  matchesSearch,
}: UseCascadingFiltersOptions<T>) {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("all");
  const [industry, setIndustry] = useState("all");

  const allServices = useMemo(
    () => Array.from(new Set(items.map(getService))).sort(),
    [items, getService]
  );

  const allIndustries = useMemo(
    () => Array.from(new Set(items.map(getIndustry).filter(Boolean))).sort(),
    [items, getIndustry]
  );

  const industriesByService = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const item of items) {
      const ind = getIndustry(item);
      if (!ind) continue;
      const svc = getService(item);
      if (!map.has(svc)) map.set(svc, new Set());
      map.get(svc)!.add(ind);
    }
    return map;
  }, [items, getService, getIndustry]);

  const servicesByIndustry = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const item of items) {
      const ind = getIndustry(item);
      if (!ind) continue;
      if (!map.has(ind)) map.set(ind, new Set());
      map.get(ind)!.add(getService(item));
    }
    return map;
  }, [items, getService, getIndustry]);

  const allowedIndustries = useMemo(() => {
    if (service === "all") return allIndustries;
    return Array.from(industriesByService.get(service) ?? []).sort();
  }, [service, allIndustries, industriesByService]);

  const allowedServices = useMemo(() => {
    if (industry === "all") return allServices;
    return Array.from(servicesByIndustry.get(industry) ?? []);
  }, [industry, allServices, servicesByIndustry]);

  function handleServiceChange(value: string | null) {
    const next = value ?? "all";
    setService(next);

    const nextAllowedIndustries =
      next === "all" ? allIndustries : Array.from(industriesByService.get(next) ?? []);
    if (industry !== "all" && !nextAllowedIndustries.includes(industry)) {
      setIndustry("all");
    }
  }

  function handleIndustryChange(value: string | null) {
    const next = value ?? "all";
    setIndustry(next);

    const nextAllowedServices =
      next === "all" ? allServices : Array.from(servicesByIndustry.get(next) ?? []);
    if (service !== "all" && !nextAllowedServices.includes(service)) {
      setService("all");
    }
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesQ = !q || matchesSearch(item, q);
      const matchesService = service === "all" || getService(item) === service;
      const matchesIndustry = industry === "all" || getIndustry(item) === industry;
      return matchesQ && matchesService && matchesIndustry;
    });
  }, [items, search, service, industry, matchesSearch, getService, getIndustry]);

  return {
    search,
    setSearch,
    service,
    industry,
    allowedIndustries,
    allowedServices,
    handleServiceChange,
    handleIndustryChange,
    filtered,
  };
}
