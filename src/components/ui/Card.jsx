import Image from "next/image";

export function Card({ img, alt, title, description  }) {
  return (
    <div className="p-0.5 border-2 border-primary max-w-sm">
        <div className="bg-gradient-to-b from-emerald-500 to-emerald-700 border h-full border-primary font-poppins p-4 flex flex-col justify-start items-center text-white text-center gap-2.5 max-md:gap-1.5">
          <Image
            src={img}
            className="bg-white drop-shadow-lg max-md:w-20 p-4 w-24 rounded-full aspect-square"
            alt={alt}
            width={2000}
            height={2000}
          />
          <h3 className="uppercase font-semibold text-2xl max-md:text-xl">{title}</h3>
          <span className="w-4 h-0.5 bg-white mx-auto" />
          <p className="text-base">
            {description}
          </p>
        </div>
    </div>
  );
}
