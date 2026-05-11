"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { formatDate, slugToBlogPostHref } from "@/lib/utils";
import { useGetLatestBlogQuery } from "@/redux/api/postsApi";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";

export const BlogSectionOne = () => {
  const { data, isLoading } = useGetLatestBlogQuery({});

  const blogData = data?.response;

  return (
    <div className=" hidden md:flex flex-col justify-center items-center">
      <div className="relative w-full h-[300px] -mb-[100px] ">
        <Image
          data-cursor="-inverse"
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
        <div className=" bg-white dark:bg-[#111] rounded-xl md:w-[730px] xl:w-[1050px] md:h-[200px] xl:min-h-[280px] shadow-[0_0_10px_rgba(118,118,118,0.2)] z-1 flex gap-3">
          <div className=" xl:min-h-[280px] w-[45%] bg-white flex items-center justify-center rounded-xl relative p-2">
            <Link href={slugToBlogPostHref(blogData?.slug)}>
              {blogData?.feature_image_url && (
                <Image
                  data-cursor-text="View Blog!"
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}${blogData?.feature_image_url}`}
                  alt="blog-banner"
                  priority
                  fill
                  className="rounded-xl cursor-pointer"
                  quality={100}
                />
              )}
            </Link>
          </div>

          <div className=" h-full xl:min-h-[280px] w-[55%] md:p-2 xl:p-4 flex flex-col justify-center md:gap-3 xl:gap-5 ">
            <Link href={slugToBlogPostHref(blogData?.slug)}>
              <RainbowButton className=" w-fit menularge-cursor">
                {blogData?.categories?.join(", ")}
              </RainbowButton>
            </Link>

            <h2 className=" text-[25px] font-semibold leading-[1.2em] relative">
              <Link href={slugToBlogPostHref(blogData?.slug)}>
                <SparklesText
                  sparklesCount={5}
                  className=" md:text-[20px] xl:text-[25px] font-semibold leading-[1.2em] md:line-clamp-1 xl:line-clamp-2"
                >
                  {blogData?.title}
                </SparklesText>
              </Link>
            </h2>
            <div className="flex justify-start items-center gap-3">
              <div className="flex gap-1 items-center justify-center">
                <User color="#adadad" size={18} />
                <p className=" md:text-[12px] xl:text-[14px] font-medium text-[#adadad]">
                  {blogData?.authors?.join(", ")}
                </p>
              </div>

              <div className="flex gap-1 items-center justify-center">
                <Calendar color="#adadad" size={18} />
                <p className="md:text-[12px] xl:text-[14px] font-medium text-[#adadad]">
                  {formatDate(blogData?.created_at)}
                </p>
              </div>
            </div>

            <p className="text-[#777777] leading-[1.2em] md:text-[14px] xl:text-[16px]">{`${blogData?.excerpt?.split(" ").slice(0, 25).join(" ")}...`}</p>
          </div>
        </div>
      )}
    </div>
  );
};
