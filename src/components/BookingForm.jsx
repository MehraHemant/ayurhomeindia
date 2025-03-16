import { Button } from "./ui";

export function BookingForm() {
  return (
    <section className="max-w-2xl font-outfit mt-20 mx-auto p-6 rounded-2xl shadow-xl w-full relative">
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
    </section>
  );
}
