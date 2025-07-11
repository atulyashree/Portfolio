export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4">
      <div className="text-2xl font-bold">YourName</div>
      <div className="flex gap-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
