import { Marquee } from "../ui/marquee";
import Image from "next/image";

const companies_logos = [
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/andritz.png`,
    alt: "ANDRITZ logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fournxt.png`,
    alt: "FourNxt logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/ceva.png`,
    alt: "CEVA Logistics logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/concord.png`,
    alt: "Concord Enviro logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/dc%20infotech.png`,
    alt: "DC Infotech logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fashion%20uk.png`,
    alt: "Fashion UK logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/fractal.png`,
    alt: "Fractal Analytics logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Goyal-Realty-Logo.png`,
    alt: "Goyal Realty logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/gupshup.png`,
    alt: "Gupshup logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/iris.png`,
    alt: "IRIS logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/hdfc.png`,
    alt: "HDFC logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/holiday%20tribe.png`,
    alt: "Holiday Tribe logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/imcd.png`,
    alt: "IMCD logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/IRIS-Logo_CMYK.svg`,
    alt: "IRIS logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/kale%20logistics.png`,
    alt: "Kale Logistics Solutions logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/knowlarity.png`,
    alt: "Knowlarity logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/la%20technologies.png`,
    alt: "LA Technologies logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/mace.png`,
    alt: "Mace logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Multiplier%20Brand%20Solutions%20Private%20Limited1.png`,
    alt: "Multiplier Brand Solutions logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/nandan%20coffe.png`,
    alt: "Nandan Coffee logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/neaoliv.png`,
    alt: "NeoLiv logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/nexgen.jpg`,
    alt: "NexGen logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/powertronics.png`,
    alt: "Powertronics logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/PRudent.png`,
    alt: "Prudent logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/Sundaram-New-Logo.png`,
    alt: "Sundaram logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/thillais-new-logo-rbg.png`,
    alt: "Thillais logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/toppan.png`,
    alt: "Toppan Gravity logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/upGrad.png`,
    alt: "upGrad logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/veefin.png`,
    alt: "Veefin logo",
  },
  {
    img: `${process.env.NEXT_PUBLIC_CDN_URL}/logos/vtrans.png`,
    alt: "V-Trans logo",
  },
];

const firstRow = companies_logos.slice(0, companies_logos.length / 2);
const secondRow = companies_logos.slice(companies_logos.length / 2);

const ReviewCard = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <figure className="relative w-[80px] xl:w-[100px] aspect-[3/2] flex justify-center items-center my-[5px] xl:my-[10px] mx-3">
      <Image priority src={img} alt={alt} fill className="object-contain" />
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
