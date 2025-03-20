"use client";

import { Cards } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathname = usePathname();
  return (
    <div className="font-outfit">
      <div className="font-outfit relative bg-black/50  w-full aspect-[8/1]">
        <Image
          src="/images/redirect-banner.webp"
          alt="redirect banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full -z-10 h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex gap-3 flex-col items-center justify-center text-white">
            <h1 className="text-3xl uppercase font-medium">
              Arogya Dham Health - Ayurvedic Therapy & Detox Services
            </h1>
            <div className="text-white flex gap-2 text-xl font-semibold">
              <Link href="/" className="">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary cursor-default">
                Services
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col gap-6 mx-auto pt-20">
        <Cards />
      </div>
    </div>
  );
}
