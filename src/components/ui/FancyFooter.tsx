"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEco } from "@/context/EcoContext";

export default function FancyFooter() {
  const { darkMode } = useEco();
  const links = {
    track: [
      { label: "Water", href: "/water" },
      { label: "Waste", href: "/waste" },
      { label: "Energy", href: "/energy" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  };

  return (
    <footer className={`${darkMode ? "bg-[#1D1D1F] border-[#2C2C2E]" : "bg-white border-gray-100"} border-t`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className={`display text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Ecolife
            </Link>
            <p className={`${darkMode ? "text-[#A1A1A6]" : "text-gray-500"} mt-4 max-w-sm`}>
              Track your environmental impact with simple daily habits. 
              Small actions lead to big changes.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6 flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className={`px-4 py-3 rounded-xl border focus:border-[#0077B6] focus:outline-none flex-1 ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E] text-white placeholder:text-[#6E6E73]" : "border-gray-200"}`}
              />
              <button className={`px-6 py-3 text-white font-medium rounded-xl transition-all ${darkMode ? "bg-[#007AFF] hover:bg-[#0056CC]" : "bg-gray-900 hover:bg-gray-800"}`}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Track</h4>
            <ul className="space-y-3">
              {links.track.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`${darkMode ? "text-[#A1A1A6]" : "text-gray-500"} hover:text-[#0077B6] transition-colors`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`${darkMode ? "text-[#A1A1A6]" : "text-gray-500"} hover:text-[#0077B6] transition-colors`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${darkMode ? "border-[#2C2C2E]" : "border-gray-100"}`}>
          <p className={`text-sm ${darkMode ? "text-[#6E6E73]" : "text-gray-400"}`}>
            © 2026 Ecolife. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${darkMode ? "bg-[#2C2C2E] text-[#A1A1A6] hover:bg-[#0077B6] hover:text-white" : "bg-gray-100 text-gray-500 hover:bg-[#0077B6] hover:text-white"}`}
              >
                {social[0]}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
