import { ClockIcon, PhoneIcon } from "@/icons";
import React from "react";
import { Button } from "./ui";

export function Header() {
  return (
    <section className="font-outfit">
      <div className="max-w-5xl mx-auto w-full flex justify-between py-3">
        <span className="text-4xl font-semibold text-center font-sans">
          Aayur Home
        </span>
        <div className="flex font-light items-center flex-col ">
          <div className="flex gap-2 items-center">
            <PhoneIcon />
            <span className="text-gray-500 tracking-[0.015rem]">
              Helpline Support
            </span>
          </div>
          <div>+91-8954969666</div>
        </div>
        <div className="flex font-light items-center flex-col ">
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <span className="font-light text-gray-500 tracking-[0.015rem]">
              Opening Days
            </span>
          </div>
          <div>Monday-Sunday</div>
        </div>
        <Button className="rounded-md">Get Free Consultation</Button>
      </div>
    </section>
  );
}
