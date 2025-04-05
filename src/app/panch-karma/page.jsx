"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const benefits = [
  {
    benefit: "Removes toxins and slows aging",
    description:
      "Panch Karma therapy helps eliminate accumulated toxins from the body through purification techniques like oil massage, steam therapy, and herbal treatments. By reducing toxin buildup, the body experiences less oxidative stress, which slows down the aging process and promotes long-term health.",
  },
  {
    benefit: "Enhances skin and body complexion",
    description:
      "The Ayurvedic therapies improve blood circulation, nourish the skin with herbal oils, and remove dead cells through exfoliation. This results in healthier, glowing skin and an overall improved complexion.",
  },
  {
    benefit: "Improves digestion and organ function",
    description:
      "Herbal treatments and detox therapies aid digestion by strengthening the digestive fire (Agni), reducing acidity, and promoting better absorption of nutrients. Liver and colon cleansing further support optimal organ function.",
  },
  {
    benefit: "Boosts physical and mental performance",
    description:
      "By reducing stress, relaxing muscles, and improving circulation, these therapies enhance physical endurance and mental clarity. Improved oxygen and nutrient flow to the muscles and brain result in better overall performance.",
  },
  {
    benefit: "Improves focus, concentration, and energy balance",
    description:
      "Ayurvedic treatments like Shirodhara and Nasyam calm the nervous system, helping to reduce stress, anxiety, and mental fatigue. This leads to improved focus, sharper concentration, and a balanced energy flow throughout the body.",
  },
];

export default function page() {
  const pathname = usePathname();
  return (
    <div className="font-poppins">
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
              Ayurvedic Panch Karma (Detox & Rejuvenation)
            </h1>
            <div className="text-white flex gap-2 text-xl font-semibold">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href={`/${pathname}`} className="text-primary">
                Panchkarma
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col gap-6 mx-auto pt-20">
        <h2 className="font-medium text-3xl">
          Panchakarma In Rishikesh: An Old Art Of Healing & Detoxification
          Technique
        </h2>
        <Image
          src="/images/panchakarma.webp"
          alt="panchkarma"
          className="w-full aspect-[3/1] object-cover object-center"
          width={1000}
          height={1000}
        />
        <div className="text-lg/snug text-gray-700 font-light flex flex-col gap-4">
          <p>
            Ayurveda recognizes three well-defined bioenergies for every human,
            the doshas: Vata, Pitta, and Kapha. The doshas make up the dynamic
            equilibrium of health and wellness. And when the three doshas are
            imbalanced, there is an accumulation of waste products and toxins,
            so-called Ama, in the body tissues. To restore balance and promote
            overall wellness, Panchkarma therapy is the most effective procedure
            of detoxification.
          </p>
          <p>
            Panchakarma is the heart of Ayurvedic Treatments & Medicine. Pancha
            means five, and Karma means activities. The concentrated therapies
            of Panchakarma treatment in Rishikesh, India are helped with
            cleansing and purification, weight regulation, regeneration, and
            harmonization of bio-energy. Hence, through Panchkarma therapy,
            imbalance in the bioenergies is solved by eliminating the toxins and
            waste products in the body and discharging them naturally through
            our excretory organs.
          </p>
        </div>
        <section className="bg-[#faf9f7] p-6">
          <h3 className="text-2xl font-medium text-primary">
            Benefits of Panchkarma Therapy
          </h3>
          <ul className="mt-5 px-2 flex flex-col gap-3 list-none">
            {benefits.map(({ benefit, description }, index) => (
              <li key={index} className="flex flex-col gap-1">
                <h5 className="text-xl font-medium">
                  {index + 1}. {benefit}
                </h5>
                <p className="text-lg/snug text-gray-700 font-light">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
