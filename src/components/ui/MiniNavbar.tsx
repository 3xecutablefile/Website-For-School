"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEco } from "@/context/EcoContext";

export default function MiniNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useEco();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        scrolled 
          ? `${darkMode ? "bg-[#1D1D1F]/80" : "bg-white/80"} backdrop-blur-xl border ${darkMode ? "border-[#2C2C2E]" : "border-[#E5E5E7]"} rounded-xl`
          : "bg-transparent rounded-full"
      }`}
      style={{ width: "calc(100% - 2rem)", maxWidth: "600px" }}
    >
      {/* Ecolife Logo */}
      <Link href="/" className="flex items-center gap-0">
        <span className={`logo-text text-lg font-bold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>Ecolife</span>
        <span className="logo-dot"></span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-6">
        {[
          { label: "Water", href: "/water" },
          { label: "Waste", href: "/waste" },
          { label: "Energy", href: "/energy" },
          { label: "Audit", href: "/audit" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`relative text-sm font-medium transition-colors ${
              darkMode ? "text-[#A1A1A6] hover:text-[#FFFFFF]" : "text-[#6E6E73] hover:text-[#1D1D1F]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg ${darkMode ? "hover:bg-[#2C2C2E]" : "hover:bg-[#F5F5F7]"} transition-colors`}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-[#FFFFFF]" />
          ) : (
            <Moon className="w-4 h-4 text-[#1D1D1F]" />
          )}
        </button>
        <Link 
          href="/about"
          className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
            darkMode 
              ? "bg-[#007AFF] text-white hover:bg-[#0056CC]" 
              : "bg-[#1D1D1F] text-white hover:bg-[#007AFF]"
          }`}
        >
          About
        </Link>
      </div>
    </header>
  );
}