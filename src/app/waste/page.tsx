"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, BarChart2 } from "lucide-react";

export default function WastePage() {
  const stats = [
    { label: "Recycled", value: "12 lbs" },
    { label: "Composted", value: "8 lbs" },
    { label: "Landfill", value: "3 lbs" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24">
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-semibold text-[#1D1D1F]">
            Waste
          </Link>
          <span className="display text-2xl font-semibold text-[#1D1D1F]">20 lbs</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Leaf className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Track Waste</h1>
          <p className="text-[#6E6E73]">Log recycling and composting</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="minimal-border p-4 rounded-xl text-center"
            >
              <p className="display text-xl font-semibold text-[#1D1D1F]">{stat.value}</p>
              <p className="text-xs text-[#A1A1A6]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          {[
            { label: "Recycle Item", action: "recycle" },
            { label: "Compost Item", action: "compost" },
            { label: "Landfill Item", action: "landfill" },
          ].map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 rounded-xl font-medium text-left bg-[#F5F5F7] hover:bg-[#E5E5E7] transition-colors"
            >
              <span className="text-[#1D1D1F]">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}