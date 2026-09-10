"use client";

import { formatDate, slugToBlogPostHref } from "@/lib/utils";
import { useGetLatestBlogQuery } from "@/redux/api/postsApi";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";

export const BlogSectionOne = () => {
  const { data, isLoading } = useGetLatestBlogQuery({});

  const blogData = data?.response;

  return (
    <div className=" hidden md:flex flex-col justify-center items-center">
      <div className="relative w-full h-[300px] -mb-[100px] ">
        <Image

          src={`${process.env.NEXT_PUBLIC_CDN_URL}/pages/blog-page/blog-hero.jpg`}
          alt="blog-banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {isLoading ? (
        <CardContent>
          <Skeleton className=" w-[1050px] h-[280px] shadow-[0_0_10px_rgba(118,118,118,0.2)] z-1" />
        </CardContent>
      ) : (
        <Link href={slugToBlogPostHref(blogData?.slug)} className="menularge-cursor relative z-10 block">
          <div className="group bg-white dark:bg-[#111] rounded-xl md:w-[730px] xl:w-[1050px] md:h-[220px] xl:h-[280px] shadow-[0_0_10px_rgba(118,118,118,0.2)] flex items-stretch gap-6 md:p-3 xl:p-4 overflow-hidden">
            <div className="h-full w-[42%] shrink-0 overflow-hidden rounded-xl relative">
              {blogData?.feature_image_url && (
                <Image
 
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}${blogData?.feature_image_url}`}
                  alt="blog-banner"
                  priority
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                />
              )}
            </div>

            <div className="w-[58%] flex flex-col justify-center gap-2 md:gap-3 min-w-0 pr-2">
              <span className="text-[11px] xl:text-[12px] font-semibold tracking-[0.12em] uppercase text-contetra-blue">
                Latest Post
              </span>

              <h2 className="text-[20px] xl:text-[26px] leading-[1.25em] text-[#222222] dark:text-white line-clamp-2 font-bold capitalize">
                {blogData?.title}
              </h2>

              <div className="flex flex-wrap justify-start items-center gap-3">
                <div className="flex gap-1 items-center justify-center">
                  <User color="#adadad" size={16} />
                  <p className="md:text-[12px] xl:text-[13px] font-medium text-[#adadad]">
                    {blogData?.authors?.join(", ")}
                  </p>
                </div>

                <div className="flex gap-1 items-center justify-center">
                  <Calendar color="#adadad" size={16} />
                  <p className="md:text-[12px] xl:text-[13px] font-medium text-[#adadad]">
                    {formatDate(blogData?.created_at)}
                  </p>
                </div>
              </div>

              <p className="text-[#777777] leading-[1.45em] md:text-[13px] xl:text-[15px] line-clamp-2">
                {`${blogData?.excerpt?.split(" ").slice(0, 22).join(" ")}...`}
              </p>

              <div className="flex items-center justify-between gap-3 pt-1">
                {blogData?.categories && blogData.categories.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {blogData.categories.map((cat: string) => (
                      <Button
                        key={cat}
                        size="xs"
                        variant="outline"
                        className="bg-contetra-blue text-white px-2 hover:text-white cursor-pointer rounded-[6px]"
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <span />
                )}

                <Highlighter padding={10} action="circle" color="#FF9800">
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Highlighter>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
