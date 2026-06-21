"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLazyGetPostsListQuery } from "@/redux/api/postsApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { formatDate, slugToBlogPostHref } from "@/lib/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowUpRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateFilter } from "@/redux/slice/blogSlice";
import { BlogPagination } from "./blog-pagination";
import Link from "next/link";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  feature_image_url: string;
  excerpt: string;
  created_at: string; // or Date if you parse it
  authors: string[];
  categories: string[];
}

export const BlogList = () => {
  const dispatch = useAppDispatch();
  const [trigger, { data, isLoading, isSuccess }] = useLazyGetPostsListQuery();

  const filtersData = useAppSelector((state) => state.blogSlice.filtersData);

  // dispatch(updateFilter({ key: "page", value: 2 }));
  // dispatch(updateFilter({ key: "search", value: "nextjs" }));
  // dispatch(updateFilter({ key: "sortOrder", value: "asc" }));

  const blogsdata = data?.response?.data;

  useEffect(() => {
    if (isSuccess) {
      const meta = data?.response?.meta;

      if (!meta) return;

      dispatch(updateFilter({ key: "totalPages", value: meta.totalPages }));
      dispatch(updateFilter({ key: "currentPage", value: meta.page }));
    }
  }, [isSuccess, data?.response?.meta, dispatch]);

  useEffect(() => {
    trigger(filtersData);
  }, [trigger, filtersData]);

  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <div className="flex flex-col gap-5 min-h-screen ">
      {isLoading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-4 2xl:gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card
              key={index}
              className="flex h-[450px] w-full min-h-0 flex-col gap-0 p-0 md:min-h-[480px] xl:min-h-[450px]"
            >
              <CardContent className="h-[200px] shrink-0 p-0 md:h-[220px] xl:h-[180px] 2xl:h-[200px]">
                <Skeleton className="h-full w-full rounded-xl" />
              </CardContent>
              <CardHeader className="space-y-2 px-3 pb-3 pt-4">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-4 2xl:gap-8 min-h-[100px] items-stretch">
        {isSuccess &&
          blogsdata?.length > 0 &&
          blogsdata?.map((blog: Blog, idx: number) => {
            return (
              <BlurFade className="h-full min-h-[300px]" key={blog.id} delay={0.25 + idx * 0.05} inView>
                <Link className="block h-full" href={slugToBlogPostHref(blog?.slug)}>
                  <Card className="relative flex h-full min-h-[450px] flex-col gap-0 overflow-hidden p-0 md:min-h-[480px] xl:min-h-[450px]">
                    <div className="relative h-[200px] w-full shrink-0 overflow-hidden md:h-[220px] xl:h-[180px] 2xl:h-[200px]">
                      {!loadedImages[blog.id] && (
                        <Skeleton className="absolute inset-0 rounded-xl z-10" />
                      )}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog?.feature_image_url}`}
                        alt="blog-banner"
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                        className="rounded-xl object-contain"
                        onLoadingComplete={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [blog.id]: true,
                          }))
                        }
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-4 px-4 pb-4 pt-5">
                      <h3 className="line-clamp-2 break-words text-[20px] font-semibold leading-[1.25em] text-[#333333] dark:text-white">
                        {blog?.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {blog?.categories?.map((cat) => {
                          return (
                            <Button
                              key={cat}
                              size="xs"
                              variant="outline"
                              className="bg-contetra-blue text-white px-2 hover:text-white cursor-pointer menularge-cursor rounded-[6px]"
                            >
                              {cat}
                            </Button>
                          );
                        })}
                      </div>
                      <p className="line-clamp-2 text-[16px] leading-[1.4em]">
                        {blog?.excerpt?.slice(0, 100) + "..."}
                      </p>
                      <div className=" flex items-end justify-between gap-3 ">
                        <div>
                          <Highlighter
                            padding={10}
                            action="underline"
                            color="#FF9800"
                          >
                            {formatDate(blog?.created_at)}
                          </Highlighter>
                        </div>
                        <div className="  border-gray-300 mr-3 group cursor-pointer mt-2">
                          <Highlighter
                            padding={10}
                            action="circle"
                            color="#FF9800"
                          >
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45 " />
                          </Highlighter>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </BlurFade>
            );
          })}
      </div>
      <div className="mr-[30px] mb-[50px]">
        <BlogPagination />
      </div>
    </div>
  );
};
