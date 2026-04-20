"use client";

import { motion } from "framer-motion";
import { Home, Droplets, Leaf, Zap, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/water", icon: Droplets, label: "Water", color: "#0077B6" },
  { href: "/waste", icon: Leaf, label: "Waste", color: "#2D6A4F" },
  { href: "/energy", icon: Zap, label: "Energy", color: "#F59E0B" },
];

export default function StickyBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-bottom-nav sticky-bottom-nav">
      <div className="flex items-center justify-around w-full max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center py-2 px-4"
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gray-100 rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-1">
                <Icon
                  className="w-6 h-6 transition-colors"
                  style={{
                    color: isActive
                      ? item.color || "#1A1A1A"
                      : "#94A3B8",
                  }}
                />
                <span
                  className="text-xs font-medium transition-colors"
                  style={{
                    color: isActive
                      ? item.color || "#1A1A1A"
                      : "#94A3B8",
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