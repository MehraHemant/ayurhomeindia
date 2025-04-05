import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="font-poppins relative bg-black/50  w-full aspect-[8/1]">
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
          Thank You for Connecting with us.
        </h1>
        <div className="text-white flex gap-2 text-xl font-semibold">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href={`/contact-us`} className="text-primary">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
