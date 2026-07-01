import { slugToBlogPostHref } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface BlogPost {
  feature_image_url: string;
  title: string;
  slug: string;
}

interface ContentProps {
  relatedBlogs: BlogPost[];
}

export const RightBar = ({ relatedBlogs }: ContentProps) => {
  return (
    <aside className="hidden w-[25%] p-2 pt-[80px] xl:flex flex-col gap-5 2xl:gap-6">
      <h2 className="px-1 text-[18px] font-semibold leading-tight text-[#333333] dark:text-white">
        Related Blogs
      </h2>
      {relatedBlogs?.map((blog, i) => {
        return (
          <Link
            key={i}
            href={slugToBlogPostHref(blog.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col gap-3 rounded-xl border border-black/5 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#111]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5">
              <Image
                data-cursor="-inverse"
                src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog.feature_image_url}`}
                alt="blog-banner"
                fill
                sizes="25vw"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="line-clamp-2 px-1 pb-1 text-[15px] font-medium leading-[1.3em] text-[#333333] transition-colors group-hover:text-contetra-blue dark:text-white">
              {blog.title}
            </h3>
          </Link>
        );
      })}
    </aside>
  );
};
