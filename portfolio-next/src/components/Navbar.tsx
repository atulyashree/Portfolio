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
      <div className="text-2xl font-bold">Atulya Shree Sharma</div>
      <div className="flex gap-6 items-center">
        <a href="#about" className="hover:underline">About</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        {/* Theme Toggle */}
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
