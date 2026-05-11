import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SingleBlogLoader = () => {
  return (
    <div className="flex w-full min-h-screen my-[100px] gap-5">
      {/* main content skeleton (80% width) */}
      <div className="w-full xl:w-[80%] flex flex-col gap-5">
        <Skeleton className="h-8 w-1/2 mx-auto mb-10" />
        <div className="w-full flex justify-center">
          <Skeleton className="h-[400px] w-[700px]  mb-8" />
        </div>

        <div className="flex justify-center items-center gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>

        <div className="space-y-4 mt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>

      {/* sidebar skeleton (20% width) */}
      <div className="w-[20%] p-2 pt-[80px] hidden xl:flex flex-col gap-10">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="w-full flex flex-col gap-2">
            <Skeleton className="aspect-video w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
