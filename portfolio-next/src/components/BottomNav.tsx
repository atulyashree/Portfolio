"use client";
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaTools, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#hero", icon: <FaHome />, label: "Home" },
  { href: "#about", icon: <FaUser />, label: "About" },
  { href: "#experience", icon: <FaBriefcase />, label: "Experience" },
  { href: "#education", icon: <FaGraduationCap />, label: "Education" },
  { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
  { href: "#skills", icon: <FaTools />, label: "Skills" },
  { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function BottomNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-neutral-900/90 shadow-lg rounded-full px-4 py-2 flex gap-2 sm:gap-4 items-center backdrop-blur border border-gray-200 dark:border-neutral-800">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="w-10 h-10 flex items-center justify-center rounded-full text-xl text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-neutral-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-10 h-10 flex items-center justify-center rounded-full text-xl text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-neutral-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-2"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      )}
    </nav>
  );
} 