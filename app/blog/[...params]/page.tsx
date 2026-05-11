"use client";

import { useLazyGetBlogDataQuery } from "@/redux/api/postsApi";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";
import { RightBar } from "./components/right-bar";
import { Content } from "./components/content";
import { SingleBlogLoader } from "./components/single-blog-loader";

function paramsToSegmentArray(
  raw: string | string[] | undefined,
): string[] {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string" && raw.length > 0) return [raw];
  return [];
}

export default function Page() {
  const params = useParams();

  const [trigger, { data: blogContent, isLoading, isError }] =
    useLazyGetBlogDataQuery();

  const blogData = blogContent?.response?.blog;
  const relatedBlogs = blogContent?.response?.relatedBlogs;

  const paramArray = paramsToSegmentArray(
    params.params as string | string[] | undefined,
  );
  const slug = paramArray.join("/");

  if (paramArray.length === 0 || !slug.trim()) {
    notFound();
  }

  const apiSlug = `/${slug}/`;

  useEffect(() => {
    trigger({ slug: apiSlug });
  }, [trigger, apiSlug]);

  useEffect(() => {
    if (isError) {
      notFound();
    }
  }, [isError]);

  return (
    <div className="flex min-h-screen w-full rounded-xl relative gap-10 px-[10px] md:px-[50px] ">
      {!blogData && <SingleBlogLoader />}

      {!isLoading && blogData && <Content blogData={blogData} />}

      {!isLoading && blogData && <RightBar relatedBlogs={relatedBlogs} />}
    </div>
  );
}
