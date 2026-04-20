"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Flame, TrendingUp } from "lucide-react";

export default function EnergyPage() {
  const tips = [
    { label: "Turn off lights", saved: "0.5 kWh" },
    { label: "Unplug devices", saved: "0.3 kWh" },
    { label: "Adjust thermostat", saved: "1.2 kWh" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24">
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="display text-xl font-semibold text-[#1D1D1F]">
            Energy
          </Link>
          <span className="display text-2xl font-semibold text-[#1D1D1F]">12.5 kWh</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Zap className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Track Energy</h1>
          <p className="text-[#6E6E73]">Monitor your electricity usage</p>
        </motion.div>

        <div className="minimal-border p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-[#1D1D1F]">Today&apos;s Usage</span>
            <span className="display text-2xl font-semibold text-[#1D1D1F]">12.5 <span className="text-sm font-normal text-[#6E6E73]">kWh</span></span>
          </div>
          <div className="h-3 bg-[#E5E5E7] rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full bg-[#1D1D1F]"
              initial={{ width: 0 }}
              animate={{ width: "62%" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <p className="text-sm text-[#6E6E73] mt-2">62% of daily budget (20 kWh)</p>
        </div>

        <h3 className="font-semibold text-[#1D1D1F] mb-4">Quick Actions</h3>
        <div className="space-y-3 mb-8">
          {tips.map((tip, i) => (
            <motion.button
              key={tip.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 rounded-xl text-left flex items-center justify-between bg-[#F5F5F7] hover:bg-[#E5E5E7] transition-colors"
            >
              <span className="font-medium text-[#1D1D1F]">{tip.label}</span>
              <span className="text-[#007AFF] font-medium">-{tip.saved}</span>
            </motion.button>
          ))}
        </div>

        <div className="minimal-border p-6 rounded-2xl text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#1D1D1F]" />
          <p className="display text-4xl font-semibold text-[#1D1D1F]">5 <span className="text-lg">days</span></p>
          <p className="text-[#6E6E73]">Current Streak</p>
          <p className="text-sm text-[#A1A1A6] mt-2">Longest: 12 days</p>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}