"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4">
      <a
        href="#hero"
        className="
          text-2xl font-bold
          transition
          duration-300
          bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500
          bg-clip-text text-transparent
          hover:scale-110 hover:drop-shadow-lg
          hover:from-pink-500 hover:to-blue-500
          cursor-pointer
        "
        style={{ letterSpacing: "0.05em" }}
      >
        Atulya Shree Sharma
      </a>
      <div className="flex gap-6 items-center">
        <a href="#about" className="hover:underline">About</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        )}
      </div>
    </nav>
  );
}
