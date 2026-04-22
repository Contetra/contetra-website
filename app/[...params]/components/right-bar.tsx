import Image from "next/image";
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
    <div className="hidden  w-[25%] p-2 pt-[80px] xl:flex flex-col xl:gap-3 2xl:gap-10">
      {relatedBlogs?.map((blog, i) => {
        return (
          <div key={i} className=" w-full h-[200px] felx flex-col gap-2">
            <div className="p-2 rounded-full w-full cursor-pointer">
              <Image
                data-cursor="-inverse"
                src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog.feature_image_url}`}
                alt="blog-banner"
                width={1000}
                height={1000}
                priority
                className="object-cover rounded-xl"
              />
            </div>

            <h3 className="text-center leading-[1.2em]">{blog.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
