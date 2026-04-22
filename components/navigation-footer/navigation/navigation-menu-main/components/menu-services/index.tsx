import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SlideUpText } from "@/components/ui/slide-up-text";
import React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Technical Accounting International GAAP Advisory Services",
    href: "/technical-accounting-international-gaap-advisory-services",
    description:
      "We provide technical accounting and international GAAP advisory services to help you comply with international accounting standards and regulations.",
  },
  {
    title: "ERP Functional Implementation",
    href: "/erp-implementation-solutions",
    description:
      "We provide ERP functional implementation services to help you integrate your business operations and improve efficiency.",
  },
  {
    title: "FP&A + Business Finance Services",
    href: "/strategic-business-financial-management-solutions",
    description:
      "We provide FP&A + Business Finance services to help you improve your financial performance and decision-making.",
  },
  {
    title: "MCA - Struck off companies",
    href: "/strike-that",
    description: "We provide MCA - Struck off companies services to help you comply with the MCA and improve your financial performance and decision-making.",
  },
  {
    title: "Offshore Accounting Services",
    href: "/offshore-accounting-services",
    description:
      "We provide offshore accounting services to help you comply with the offshore accounting standards and regulations.",
  },
  {
    title: "Financial Recruitment Consultants",
    href: "/financial-recruitment-consultants",
    description:
      "We provide financial recruitment consultants to help you find the right talent for your business.",
  },
  {
    title: "Corporate Training",
    href: "/corporate-training",
    description:
      "We provide corporate training to help you improve your skills and knowledge.",
  },
  {
    title: "IPO Readiness",
    href: "/ipo-readiness",
    description:
      "We provide IPO readiness services to help you prepare for your IPO.",
  },
];

export const MenuServices = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="menularge-cursor text-[16px]">
        <SlideUpText>Services</SlideUpText>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="max-w-[90vw] -right-60 left-auto">
        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-[1.4em] font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-[1.2em]">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}