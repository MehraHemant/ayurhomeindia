import Image from "next/image";
import { Button } from "./ui";

export function HeroSection() {
  return (
    <section id="hero-section" className="relative font-outfit">
      <Image
        src={"/images/banner-bg.jpg"}
        width={2000}
        height={2000}
        alt="banner"
        className="w-full -z-10 aspect-[16/6] object-cover"
      />
      <div className="absolute text-white inset-0 bg-green-950/60 flex justify-center gap-3 pl-96  flex-col">
        <h1 className="text-white text-3xl font-semibold uppercase">
          Ayurhome
        </h1>
        <span className="w-20 h-0.5 bg-white" />
        <div className="text-white text-6xl/[1.1] uppercase max-w-2xl font-semibold">
          Best Ayurvedic Treatment Centre In India
        </div>
        <h4 className="text-lg font-semibold uppercase">We care for you</h4>
        <div className="flex gap-4">
          <Button className="uppercase tracking-wide px-6 py-4 font-normal">
            Ayurvedic Treatment
          </Button>
          <Button className="uppercase tracking-wide px-6 py-4 bg-white text-black font-normal">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
