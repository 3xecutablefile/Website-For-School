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
          ? "bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg" 
          : "bg-transparent rounded-full"
      }`}
      style={{ width: "calc(100% - 2rem)", maxWidth: "600px" }}
    >
      <Link href="/" className="display text-lg font-bold text-gray-900">
        Sustainable UAE
      </Link>
      
      <nav className="hidden md:flex items-center gap-4">
        {[
          { label: "Water", href: "/water", color: "#0077B6" },
          { label: "Waste", href: "/waste", color: "#2D6A4F" },
          { label: "Energy", href: "/energy", color: "#F59E0B" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative group text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r transition-all group-hover:w-full" style={{ background: item.color }} />
          </Link>
        ))}
      </nav>

      <Link 
        href="/about"
        className="px-4 py-2 text-xs font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-105"
      >
        About
      </Link>
    </header>
  );
}