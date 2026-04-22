"use client";


import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const Floatingbar = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const router = useRouter()

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const getPageTitle = () => {
    if (typeof window !== "undefined") {
      return document.title;
    }
    return "Check out this blog post";
  };

  const shareOnMeta = () => {
    const url = getCurrentUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareViaEmail = () => {
    const url = getCurrentUrl();
    const subject = getPageTitle();
    const body = `Check out this blog post: ${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareOnLinkedIn = () => {
    const url = getCurrentUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareOnTwitter = () => {
    const url = getCurrentUrl();
    const text = `${getPageTitle()} ${url}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  useLayoutEffect(() => {
    const bar = barRef.current;
    const footer = document.querySelector("footer");

    if (!bar || !footer) return;

    const bottomSpacing = 24; 
    const gapAboveFooter = 24;

    const setY = gsap.quickSetter(bar, "y", "px");

    const updatePosition = () => {
      const footerRect = footer.getBoundingClientRect();

      const triggerPoint = window.innerHeight - bottomSpacing;

      const overlap = triggerPoint - footerRect.top + gapAboveFooter;

      if (overlap > 0) {
        setY(-overlap);
      } else {
        setY(0);
      }
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed bottom-6 hidden md:block md:left-[50%] xl:left-[40%] -translate-x-1/2 z-40"
    >
      <div className="w-[380px] h-[50px] rounded-xl flex items-center gap-[10px] justify-center border bg-white border-[#e5e5e5] shadow-[0_0_10px_rgba(118,118,118,0.2)]">
        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => router.push('/blog')} className="p-2 rounded-full w-[40px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/back.png`}
                alt="blog-banner"
                width={1000}
                height={1000}
                priority
                className="object-cover"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go Back</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="!h-6 !w-[1.5px]" />

        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => router.push('/')} className="p-2 rounded-full w-[40px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/home.png`}
                alt="blog-banner"
                width={1000}
                height={1000}
                priority
                className="object-cover"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => router.push('/ebooks')} className="p-2 rounded-full w-[45px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/bookmark.png`}
                alt="blog-banner"
                width={1000}
                height={1000}
                priority
                className="object-cover"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ebooks</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="!h-6 !w-[1.5px]" />

        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger>
              <div onClick={shareOnMeta} className="p-2 rounded-full w-[40px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
                <Image

                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/meta.png`}
                  alt="blog-banner"
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on meta</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div onClick={shareViaEmail} className="p-2 rounded-full w-[40px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
                <Image

                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/gmail.png`}
                  alt="blog-banner"
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send mail with the link</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div onClick={shareOnLinkedIn} className="p-2 rounded-full w-[40px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
                <Image

                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/linkedin.png`}
                  alt="blog-banner"
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <div onClick={shareOnTwitter} className="p-2 rounded-full w-[37px] hover:bg-gray-200 transition-colors cursor-pointer stroke-0 fill-[#1877F2] relative">
                <Image

                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/single-blog/twitter.png`}
                  alt="blog-banner"
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on X</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
