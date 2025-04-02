import Link from "next/link";
import { Dropdown } from "./ui";

export function NavigationBar() {
  // TODO: Implement dropdown component and add links to it.
  const links = [
    { title: "Ayurvedic Treatments", href: "/ayurvedic-treatment" },
    { title: "Ayurvedic Therapy & Healing", href: "/about" },
    { title: "Panch Karma (Detox & Rejuvenation)", href: "/panch-karma" },
  ];
  return (
    <div className="sticky top-0 z-50 font-medium tracking-wide bg-gray-700 text-white font-outfit">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex *:hover:bg-primary max-md:gap-x-1 gap-3 items-center *:py-3 *:px-2">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/services" className="">
            Services
          </Link>
          <Dropdown links={links}>
            Treatments
          </Dropdown>
          {/* <Dropdown /> */}
          <Link href="/" className="">
            Contact us
          </Link>
        </div>
        {/* <Dropdown className="bg-primary h-full py-2">I Want to</Dropdown> */}
      </div>
    </div>
  );
}
