"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { BlogFIlterSidebar } from "./blog-filter-sidebar";
import { useDebounce } from "@/hooks/use-debounce";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  resetFilters,
  setBlogFormReset,
  updateFilter,
} from "@/redux/slice/blogSlice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { BlogPagination } from "./blog-pagination";

export function BlogFilters() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(updateFilter({ key: "search", value: debouncedSearch }));
    dispatch(updateFilter({ key: "page", value: 1 }));
  }, [debouncedSearch, dispatch]);

  const filters = useAppSelector((state) => state.blogSlice.filtersData);

  const hasActiveFilters =
    filters.search.trim() !== "" ||
    filters.authors.length > 0 ||
    filters.categories.length > 0;

  return (
    <div className="flex w-full flex-col xl:flex-row justify-start gap-5">
      <div className=" w-full md:w-[50%] flex flex-col md:flex-row gap-3">
        <Input
          className=" md:w-[50%] xl:w-[40%]"
          placeholder="Search Blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BlogFIlterSidebar />
        {hasActiveFilters && (
          <Button
            className="bg-red-500 hover:bg-red-500 hover:text-white text-white cursor-pointer w-[35%]"
            variant="outline"
            onClick={() => {
              dispatch(resetFilters());
              dispatch(setBlogFormReset());
            }}
          >
            <X /> Clear Filters
          </Button>
        )}
      </div>

      {/* <Separator className="h-[20px] w-[20px]" orientation="vertical" /> */}

      <div className="w-full md:w-[50%] flex">
        <BlogPagination />
      </div>
    </div>
  );
}
