import Image from "next/image";

const CONTACT_HEADER_IMAGE =
  "https://contetra.b-cdn.net/pages/contact-us/Contact-us-header.png";
const CONTACT_ICON_PHONE =
  "https://contetra.b-cdn.net/pages/contact-us/Contact-us-icon.png";
const CONTACT_ICON_ADDRESS =
  "https://contetra.b-cdn.net/pages/contact-us/Contact-us-icon-2.png";
const CONTACT_ICON_EMAIL =
  "https://contetra.b-cdn.net/pages/contact-us/Contact-us-icon-3.png";

const CONTACT_ADDRESS =
  "Contetra Private Ltd, 225, 2nd floor, Swastik Disa Corporate Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar-west, Mumbai - 400086";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT_ADDRESS)}&output=embed`;

export function CuTopSection() {
  return (
    <section className="w-full">
      <div className="w-full bg-[#122a66] px-[12px] pb-[96px] pt-14 sm:px-5 sm:pb-[110px] sm:pt-16 md:px-8 md:pb-[120px] md:pt-20 xl:px-14 2xl:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <h1 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.35rem] md:text-[2.75rem]">
            Don&apos;t be a stranger
            <br />
            just say hello.
          </h1>

          <div className="relative mt-6 h-[28px] w-[320px] sm:mt-7 sm:h-[34px] sm:w-[420px] md:h-[44px] md:w-[560px]">
            <Image
              src={CONTACT_HEADER_IMAGE}
              alt="Contact us divider graphic"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, 560px"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="w-full  px-[12px] pb-8 sm:px-5 sm:pb-10 md:px-8 md:pb-12 xl:px-14 2xl:px-[80px] mt-5">
        <div className="mx-auto -mt-[76px] flex w-full max-w-[1100px] flex-col items-center">
          <div className="grid w-full max-w-[900px] gap-5 sm:grid-cols-3">
            <article className="min-h-[190px] rounded-[10px] bg-[#fff] px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
              <div className="mx-auto relative h-10 w-10">
                <Image
                  src={CONTACT_ICON_PHONE}
                  alt="Phone icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-[25px] leading-[1.35] text-[#10213e] sm:text-[18px] md:text-[20px]">
                +91 98338 18857
              </p>
            </article>

            <article className="min-h-[190px] rounded-[10px] bg-[#fff] px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
              <div className="mx-auto relative h-10 w-10">
                <Image
                  src={CONTACT_ICON_ADDRESS}
                  alt="Address icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-[17px] leading-[1.45] text-[#10213e] sm:text-[15px] md:text-[20px]">
                Contetra Private Ltd, 225, 2nd floor, Swastik Disa Corporate
                Park, LBS Road, Opposite Rajhans Cinemas, Ghatkopar-west,
                Mumbai - 400086
              </p>
            </article>

            <article className="min-h-[190px] rounded-[10px] bg-[#fff] px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
              <div className="mx-auto relative h-10 w-10">
                <Image
                  src={CONTACT_ICON_EMAIL}
                  alt="Email icon"
                  fill
                  sizes="40px"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-[20px] leading-[1.35] text-[#10213e] sm:text-[17px] md:text-[20px]">
                growth@contetra.com
              </p>
            </article>
          </div>

          <div className="mt-6 w-full max-w-[1200px] overflow-hidden rounded-[4px] border border-[#d8d8d8] bg-white">
            <div className="relative aspect-[16/5] w-full">
              <iframe
                src={MAP_EMBED_SRC}
                title="Contetra Private Ltd location map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
