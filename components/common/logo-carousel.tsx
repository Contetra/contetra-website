import { Marquee } from "../ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/andritz.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fournxt.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/ceva.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/concord.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/dc%20infotech.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fashion%20uk.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fractal.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Goyal-Realty-Logo.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/gupshup.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/iris.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/hdfc.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/holiday%20tribe.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/imcd.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/IRIS-Logo_CMYK.svg`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/kale%20logistics.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/knowlarity.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/la%20technologies.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/mace.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Multiplier%20Brand%20Solutions%20Private%20Limited1.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/nandan%20coffe.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/neaoliv.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/nexgen.jpg`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/powertronics.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/PRudent.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Sundaram-New-Logo.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/thillais-new-logo-rbg.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/toppan.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/upGrad.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/veefin.png`,
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/vtrans.png`,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className="relative w-[80px] xl:w-[100px] aspect-[3/2] flex justify-center items-center my-[5px] xl:my-[10px] mx-3">
      <Image priority src={img} alt="logo" fill className="object-contain" />
    </figure>
  );
};

export function LogoCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  xl:mx-[80px] ">
      <Marquee pauseOnHover className="[--duration:90s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:90s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
