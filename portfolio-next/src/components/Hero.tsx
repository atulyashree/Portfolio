
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-4 md:gap-8" id="hero">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 font-script">
          Hi, I&apos;m Atulya
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
          Software Engineer exploring the problems of the world and building solutions to them.
        </p>
      </div>
      <div className="flex-shrink-0 flex items-center md:justify-center h-full mt-0">
        <img
          src="/STK-20250713-WA0006.webp"
          alt="Atulya Shree animated"
          className="w-40 h-40 md:w-52 md:h-52 object-cover mx-auto"
        />
      </div>
    </section>
  );
}
