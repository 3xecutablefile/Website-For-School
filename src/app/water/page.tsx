"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, BarChart3, Plus, RotateCcw } from "lucide-react";
import { useEco } from "@/context/EcoContext";

const activities = [
  { name: "Shower", gal: 5, icon: "🚿" },
  { name: "Dishwasher", gal: 10, icon: "🍽" },
  { name: "Washing Machine", gal: 40, icon: "👕" },
  { name: "Garden", gal: 20, icon: "🌱" },
  { name: "Faucet", gal: 2, icon: "🚰" },
  { name: "Toilet", gal: 3, icon: "🚽" },
];

export default function WaterPage() {
  const { data, addWater, resetData } = useEco();

  const handleAdd = (amount: number) => {
    addWater(amount);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-24">
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0">
            <span className="logo-text text-xl font-bold text-[#1D1D1F]">Ecolife</span>
            <span className="logo-dot"></span>
          </Link>
          <button
            onClick={resetData}
            className="p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4 text-[#A1A1A6]" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <Droplets className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" strokeWidth={1.5} />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Optimize Your Hydration Footprint</h1>
          <p className="text-[#6E6E73]">Track every drop. Every measurement counts.</p>
          <div className="display text-5xl font-bold text-[#007AFF] mt-6">
            {data.water} <span className="text-xl font-normal text-[#6E6E73]">gal</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {activities.map((activity, i) => (
            <motion.button
              key={activity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAdd(activity.gal)}
              className="bento-card p-4 text-center cursor-pointer group"
            >
              <Plus className="w-5 h-5 mx-auto mb-2 text-[#A1A1A6] group-hover:text-[#007AFF] transition-colors" />
              <p className="display text-lg font-semibold text-[#1D1D1F]">{activity.name}</p>
              <p className="text-[#007AFF] font-medium mt-1">+{activity.gal} gal</p>
            </motion.button>
          ))}
        </div>

        <div className="minimal-border p-6 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-[#1D1D1F]" strokeWidth={1.5} />
            <h3 className="font-semibold text-[#1D1D1F]">Daily Breakdown</h3>
          </div>
          <div className="flex items-end gap-1 h-32">
            {[data.water, data.water * 1.3, data.water * 0.8, data.water * 1.5, data.water * 0.9, data.water * 1.1, data.water].map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[#1D1D1F] rounded-t-sm min-h-[4px]"
                initial={{ height: 0 }}
                animate={{ height: `${Math.min(v / 2, 100)}%` }}
                transition={{ delay: 0.2 + i * 0.05 }}
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