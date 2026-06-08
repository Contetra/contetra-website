import React from "react";
import Image from "next/image";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  feature_image_url: string;
  created_at: string;
  authors: string[];
  author_ids: string[];
  categories: string[];
  category_ids: string[];
}

interface ContentProps {
  blogData: BlogPost;
}

export const Content = ({ blogData }: ContentProps) => {
  return (
    <div className=" w-full xl:w-[75%] 2xl:w-[80%] min-h-screen my-[100px]">
      <h1 className="leading-[1.2em] text-[20px] md:text-3xl font-bold text-center mb-[40px]">
        {blogData.title}
      </h1>

      <div className="flex justify-center items-center w-full">
        <div className="p-2 rounded-full w-[700px] cursor-default relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${blogData.feature_image_url}`}
            alt="blog-banner"
            width={1000}
            height={1000}
            priority
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-0 md:gap-4 mt-4 flex-col md:flex-row">
        <p className="text-[14px] md:text-[16px] leading-[1.2em] text-gray-500 mb-6">
          {blogData.categories?.join(", ")}
        </p>
        <p className="text-gray-500 mb-6 text-[14px] md:text-[16px] leading-[1.2em]">
          {new Date(blogData.created_at).toDateString()}
        </p>
        <p className="text-gray-500 mb-6 text-[14px] md:text-[16px] leading-[1.2em]">
          {blogData.authors?.join(", ")}
        </p>
      </div>

      <div className="w-full overflow-x-auto blog-content">
        <div
          className="
            dark:text-white mt-[30px]
            [&>p]:mb-5
            [&>h1]:mt-8 [&>h1]:mb-4
            [&>h2]:mt-8 [&>h2]:mb-4
            [&>h3]:mt-6 [&>h3]:mb-3
            [&>img]:mt-6 [&>img]:mb-3
            text-[#333]
          "
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
      </div>
    </div>
  );
};
