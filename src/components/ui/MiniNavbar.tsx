"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MiniNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border border-[#E5E5E7] rounded-xl shadow-sm" 
          : "bg-transparent rounded-full"
      }`}
      style={{ width: "calc(100% - 2rem)", maxWidth: "600px" }}
    >
      {/* Ecolife Logo */}
      <Link href="/" className="flex items-center gap-0">
        <span className="logo-text text-lg font-bold text-[#1D1D1F]">Ecolife</span>
        <span className="logo-dot"></span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-6">
        {[
          { label: "Water", href: "/water" },
          { label: "Waste", href: "/waste" },
          { label: "Energy", href: "/energy" },
          { label: "Audit", href: "/quiz" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link 
        href="/about"
        className="px-4 py-2 text-xs font-semibold text-white bg-[#1D1D1F] rounded-full hover:bg-[#007AFF] transition-colors"
      >
        About
      </Link>
    </header>
  );
}