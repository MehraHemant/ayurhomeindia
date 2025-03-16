import Image from "next/image";

export function Card({ img, alt, title, description  }) {
  return (
    <div className="p-[3px] border-2 border-primary max-w-sm">
      <div className="p-1 border-4 h-full border-primary">
        <div className="bg-gradient-to-b from-emerald-500 to-emerald-700 border h-full border-primary font-outfit p-4 flex flex-col justify-start items-center text-white text-center gap-2.5">
          <Image
            src={img}
            className="bg-white drop-shadow-lg p-4 w-24 rounded-full aspect-square"
            alt={alt}
            width={2000}
            height={2000}
          />
          <h3 className="uppercase font-semibold text-2xl">{title}</h3>
          <span className="w-4 h-0.5 bg-white mx-auto" />
          <p className="text-lg/tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
