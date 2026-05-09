"use client";

import { useLazyGetBlogDataQuery } from "@/redux/api/postsApi";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { RightBar } from "./components/right-bar";
import { Content } from "./components/content";
import { SingleBlogLoader } from "./components/single-blog-loader";

export default function Page() {
  const params = useParams();
  const router = useRouter();

  const [trigger, { data: blogContent, isLoading, isError }] = useLazyGetBlogDataQuery();

  const blogData = blogContent?.response?.blog;
  const relatedBlogs = blogContent?.response?.relatedBlogs;

  const paramArray = Array.isArray(params.params) ? params.params : [];
  const [year, month, day, slugPart] = paramArray;
  console.log(slugPart);

  if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month) || !/^\d{2}$/.test(day)) {
    notFound();
  }

  // Join all segments
  const slug = paramArray.join("/");

  useEffect(() => {
    if (slug) {
      trigger({ slug: `/${slug}/` });
    } else {
      router.push("/dashboard");
    }
  }, [trigger, slug, router]);

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
