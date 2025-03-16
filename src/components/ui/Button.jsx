import React from "react";
import { twMerge } from "tailwind-merge";

export function Button({ children = "Button", className, onClick }) {
  return (
    <button className={twMerge("bg-primary text-white font-semibold tracking-wide px-4 py-2 cursor-pointer", className)} onClick={onClick}>
      {children}
    </button>
  );
}
