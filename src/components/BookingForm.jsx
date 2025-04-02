import Image from "next/image";
import { Button } from "./ui";

export function BookingForm() {
  return (
    <section className="w-full relative">
      <div className="absolute h-full w-full -z-10">
        <Image
          src="/images/542.jpg"
          className="w-full h-full opacity-15 object-cover"
          alt="img"
          width={2000}
          height={2000}
        />
      </div>
      <div className="py-16">
        <div className="max-w-2xl font-outfit mx-auto relative p-6 rounded-2xl shadow-xl w-full ">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-2xl" />
          <form className="flex flex-col gap-6 my-6 *:text-lg">
            <input
              type="text"
              className="border border-gray-400/50 placeholder:text-black/80 placeholder:font-thin bg-gray-100 px-3 py-2"
              placeholder="Name"
            />
            <input
              type="email"
              className="border border-gray-400/50 placeholder:text-black/80 placeholder:font-thin bg-gray-100 px-3 py-2"
              placeholder="Email"
            />
            <input
              type="text"
              className="border border-gray-400/50 placeholder:text-black/80 placeholder:font-thin bg-gray-100 px-3 py-2"
              placeholder="Phone"
            />
            <textarea
              className="border border-gray-400/50 placeholder:text-black/80 placeholder:font-thin bg-gray-100 px-3 py-2"
              placeholder="Message"
            />
            <Button>Book Appointment</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
