"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EnergyPage() {
  const tips = [
    { icon: "💡", label: "Turn off lights", saved: "0.5 kWh" },
    { icon: "🔌", label: "Unplug devices", saved: "0.3 kWh" },
    { icon: "🌡️", label: "Adjust thermostat", saved: "1.2 kWh" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC] pb-24">
      <header className="glass-card border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-bold text-gray-900">
            Energy
          </Link>
          <span className="text-2xl font-bold text-[#F59E0B]">12.5 kWh</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-8xl mb-4">⚡</div>
          <h1 className="display text-4xl font-bold text-gray-900 mb-2">Track Energy</h1>
          <p className="text-gray-600">Monitor your electricity usage</p>
        </motion.div>

        {/* Usage Bar */}
        <div className="glass-card p-6 rounded-3xl mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900">Today's Usage</span>
            <span className="text-2xl font-bold text-[#F59E0B]">12.5 <span className="text-sm font-normal">kWh</span></span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
              initial={{ width: 0 }}
              animate={{ width: "62%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">62% of daily budget (20 kWh)</p>
        </div>

        {/* Quick Actions */}
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {tips.map((tip, i) => (
            <motion.button
              key={tip.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 rounded-2xl text-left flex items-center justify-between bg-[#F59E0B]15"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">{tip.icon}</span>
                <span className="font-medium text-gray-900">{tip.label}</span>
              </span>
              <span className="text-[#F59E0B] font-semibold">-{tip.saved}</span>
            </motion.button>
          ))}
        </div>

        {/* Streak */}
        <div className="glass-card p-6 rounded-3xl mt-8 text-center">
          <p className="text-5xl font-bold text-[#2D6A4F]">5 <span className="text-xl">days</span></p>
          <p className="text-gray-500">Current Streak</p>
          <p className="text-sm text-gray-400 mt-2">Longest: 12 days</p>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}