"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WastePage() {
  const stats = [
    { label: "Recycled", value: "12 lbs", color: "#2D6A4F" },
    { label: "Composted", value: "8 lbs", color: "#40916C" },
    { label: "Landfill", value: "3 lbs", color: "#E76F51" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <header className="glass-card border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-bold text-gray-900">
            Waste
          </Link>
          <span className="text-2xl font-bold text-[#2D6A4F]">20 lbs</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-8xl mb-4">♻️</div>
          <h1 className="display text-4xl font-bold text-gray-900 mb-2">Track Waste</h1>
          <p className="text-gray-600">Log recycling and composting</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 rounded-2xl text-center"
            >
              <p className="display text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {[
            { icon: "♻️", label: "Recycle Item", color: "#2D6A4F" },
            { icon: "🌱", label: "Compost Item", color: "#40916C" },
            { icon: "🗑️", label: "Landfill Item", color: "#E76F51" },
          ].map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 rounded-2xl font-medium text-left flex items-center gap-4"
              style={{ background: `${action.color}15` }}
            >
              <span className="text-2xl">{action.icon}</span>
              <span style={{ color: action.color }}>{action.label}</span>
            </motion.button>
          ))}
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}