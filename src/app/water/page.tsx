"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, BarChart3 } from "lucide-react";

export default function WaterPage() {
  const activities = [
    { name: "Shower", gal: 5 },
    { name: "Dishwasher", gal: 10 },
    { name: "Washing Machine", gal: 40 },
    { name: "Garden", gal: 20 },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24">
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-semibold text-[#1D1D1F]">
            Water
          </Link>
          <span className="display text-2xl font-semibold text-[#007AFF]">45 gal</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Droplets className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Track Water</h1>
          <p className="text-[#6E6E73]">Log your daily water usage</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {activities.map((activity, i) => (
            <motion.button
              key={activity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="bento-card p-6 text-left cursor-pointer"
            >
              <p className="display text-lg font-semibold text-[#1D1D1F]">{activity.name}</p>
              <p className="text-[#007AFF] font-medium mt-1">-{activity.gal} gal</p>
            </motion.button>
          ))}
        </div>

        <div className="minimal-border p-6 rounded-2xl mt-8">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-[#1D1D1F]" />
            <h3 className="font-semibold text-[#1D1D1F]">This Week</h3>
          </div>
          <div className="flex items-end gap-1 h-32">
            {[45, 60, 35, 80, 50, 70, 55].map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[#1D1D1F] rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ delay: 0.3 + i * 0.05 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#A1A1A6]">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}