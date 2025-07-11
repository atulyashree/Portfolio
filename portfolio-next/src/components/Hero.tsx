export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[60vh] text-center"
      id="hero"
    >
      <img
        src="/avatar.png" // Place your image in public/avatar.png
        alt="Your Name"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Atulya Shree Sharma</h1>
      <p className="text-xl text-gray-500 mb-4">
        Software Engineer turning ideas into code
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
