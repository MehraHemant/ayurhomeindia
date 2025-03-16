import { ChevronDownIcon } from "@/icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function Dropdown({ className, children = "Retreat", links }) {
  return (
    <div className={twMerge("relative inline-block group px-3", className)}>
      <div className="flex justify-between items-center cursor-pointer gap-2 h-full">
        <div>{children}</div>
        <ChevronDownIcon />
      </div>
      <div className="absolute top-full rounded-lg w-max text-black hidden group-hover:flex flex-col left-0 *:px-5 *:hover:bg-primary py-4 bg-white">
        {links.map(({ title, href }) => (
          <Link href={href} key={href} className="text-md font-normal py-3 whitespace-nowrap">
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
