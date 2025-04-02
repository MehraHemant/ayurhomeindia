import Image from "next/image";
import { Button } from "./ui";

export function HeroSection() {
  return (
    <section id="hero-section" className="relative w-full aspect-[16/10] font-outfit">
      <Image
        src={"/images/banner-2.jpg"}
        width={2000}
        height={2000}
        alt="banner"
        className="w-full -z-10 object-cover h-full"
      />
      <div className="absolute text-slate-100 inset-0 bg-black/20 flex justify-center gap-3 max-md:gap-2 pl-60 max-lg:pl-30 max-md:pl-10 flex-col">
        <h1 className="text-3xl font-semibold uppercase max-lg:text-2xl">
          Ayurhome
        </h1>
        <span className="w-20 h-0.5 bg-white" />
        <div className="text-6xl/[1.1] uppercase max-w-2xl max-lg:text-2xl max-md:max-w-96 font-semibold">
          Best Ayurvedic Treatment Centre In India
        </div>
        <h4 className="text-lg font-semibold uppercase max-md:pt-4">We care for you</h4>
        <div className="flex gap-4 *:max-md:text-sm *:px-6 *:max-lg:px-3 *:max-lg:py-2 *:py-4 *:font-text-base">
          <Button className="uppercase tracking-wide font-normal">
            Ayurvedic Treatment
          </Button>
          <Button className="uppercase tracking-wide bg-white text-black font-normal">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
