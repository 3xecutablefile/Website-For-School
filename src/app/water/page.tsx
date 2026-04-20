"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WaterPage() {
  const activities = [
    { name: "Shower", gal: 5, icon: "🚿" },
    { name: "Dishwasher", gal: 10, icon: "🍽️" },
    { name: "Washing Machine", gal: 40, icon: "🧺" },
    { name: "Garden", gal: 20, icon: "🌱" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <header className="glass-card border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-bold text-gray-900">
            Water
          </Link>
          <span className="text-2xl font-bold text-[#0077B6]">45 gal</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-8xl mb-4">💧</div>
          <h1 className="display text-4xl font-bold text-gray-900 mb-2">Track Water</h1>
          <p className="text-gray-600">Log your daily water usage</p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 gap-4">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 rounded-3xl text-center cursor-pointer"
            >
              <span className="text-4xl block mb-2">{activity.icon}</span>
              <h3 className="font-semibold text-gray-900">{activity.name}</h3>
              <p className="text-[#0077B6] font-bold">-{activity.gal} gal</p>
            </motion.div>
          ))}
        </div>

        {/* Weekly Chart */}
        <div className="glass-card p-6 rounded-3xl mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">This Week</h3>
          <div className="flex items-end gap-2 h-32">
            {[45, 60, 35, 80, 50, 70, 55].map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-xl bg-[#0077B6]"
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ delay: 0.3 + i * 0.05 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}