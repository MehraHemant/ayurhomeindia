export function TransitionCards({ title, subtitle }) {
  return (
    <div className="relative px-16 font-poppins min-h-24 text-white group items-center flex flex-col justify-center max-w-sm bg-gray-100/10 backdrop-filter backdrop-blur-lg *:cursor-default">
      <p className="text-3xl font-semibold">{title}</p>
      <p className="text-base">{subtitle}</p>
      <div className="absolute left-0 top-0 h-full w-3 group-hover:w-full transition-all -z-10 duration-500 bg-primary" />
    </div>
  );
}
