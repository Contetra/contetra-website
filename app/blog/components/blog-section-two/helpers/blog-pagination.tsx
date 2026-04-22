"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { updateFilter } from "@/redux/slice/blogSlice";

export function BlogPagination() {
  const dispatch = useAppDispatch();

  const { totalPages, currentPage } = useAppSelector(
    (state) => state.blogSlice.filtersData
  );

  if (!totalPages || !currentPage) return null;

  const handlePageChange = (page: number) => {
    dispatch(updateFilter({ key: "page", value: page }));
  };

  return (
    <Pagination className="flex justify-center md:justify-end">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              currentPage > 1 && handlePageChange(currentPage - 1)
            }
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages &&
              handlePageChange(currentPage + 1)
            }
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}