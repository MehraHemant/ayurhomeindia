import { twMerge } from "tailwind-merge";

export function ClockIcon({className}) {
  return (
    <svg
      data-slot="icon"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      className={twMerge("w-5 h-5", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}
