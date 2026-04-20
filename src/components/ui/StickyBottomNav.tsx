"use client";

import { motion } from "framer-motion";
import { Home, Droplets, Leaf, Zap, ClipboardCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEco } from "@/context/EcoContext";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/water", icon: Droplets, label: "Water" },
  { href: "/waste", icon: Leaf, label: "Waste" },
  { href: "/energy", icon: Zap, label: "Energy" },
  { href: "/audit", icon: ClipboardCheck, label: "Audit" },
];

export default function StickyBottomNav() {
  const pathname = usePathname();
  const { darkMode } = useEco();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className={`flex items-center justify-around backdrop-blur-xl border rounded-full px-4 py-2 w-[calc(100vw-2rem)] max-w-md ${
        darkMode 
          ? "bg-[#1D1D1F]/90 border-[#2C2C2E]" 
          : "bg-white/90 border-[#E5E5E7]"
      }`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center py-2 px-3"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute inset-0 rounded-full ${darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F7]"}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-1">
                <Icon
                  className="w-5 h-5 transition-colors"
                  style={{
                    color: isActive ? "#007AFF" : darkMode ? "#A1A1A6" : "#A1A1A6",
                    strokeWidth: 1.5,
                  }}
                />
                <span
                  className="text-[10px] font-medium transition-colors"
                  style={{
                    color: isActive ? "#007AFF" : darkMode ? "#A1A1A6" : "#A1A1A6",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}