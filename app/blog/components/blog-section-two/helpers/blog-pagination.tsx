"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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

  const getVisiblePages = () => {
    const pageSet = new Set<number>([1, 2, totalPages - 1, totalPages]);
    const middlePage = Math.min(Math.max(currentPage, 3), totalPages - 2);

    if (totalPages > 4) {
      pageSet.add(middlePage);
    }

    return Array.from(pageSet)
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="flex justify-center md:justify-end">
      <PaginationContent>
        {/* First */}
        <PaginationItem>
          <PaginationLink
            size="default"
            onClick={() => currentPage > 1 && handlePageChange(1)}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          >
            First
          </PaginationLink>
        </PaginationItem>

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
        {visiblePages.map((page, index) => {
          const previousPage = visiblePages[index - 1];
          const showEllipsis = previousPage && page - previousPage > 1;

          return (
            <div key={`page-group-${page}`} className="flex items-center">
              {showEllipsis ? (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : null}

              <PaginationItem>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </div>
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

        {/* Last */}
        <PaginationItem>
          <PaginationLink
            size="default"
            onClick={() =>
              currentPage < totalPages && handlePageChange(totalPages)
            }
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          >
            Last
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}