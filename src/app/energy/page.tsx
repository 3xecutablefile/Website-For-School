"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, TrendingUp, Plus, RotateCcw } from "lucide-react";
import { useEco } from "@/context/EcoContext";

const activities = [
  { name: "AC Unit", kwh: 1.5, desc: "1 hour" },
  { name: "Lighting", kwh: 0.1, desc: "1 hour" },
  { name: "Computer", kwh: 0.3, desc: "1 hour" },
  { name: "TV", kwh: 0.2, desc: "1 hour" },
  { name: "Washer", kwh: 0.5, desc: "1 load" },
  { name: "Dryer", kwh: 2.0, desc: "1 load" },
];

export default function EnergyPage() {
  const { data, addEnergy, resetData } = useEco();

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
          <Zap className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" strokeWidth={1.5} />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Optimize Your Power Consumption</h1>
          <p className="text-[#6E6E73]">Every kilowatt counts toward a sustainable future.</p>
          <div className="display text-5xl font-bold text-[#007AFF] mt-6">
            {data.energy.toFixed(1)} <span className="text-xl font-normal text-[#6E6E73]">kWh</span>
          </div>
        </motion.div>

        <div className="minimal-border p-6 rounded-2xl mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-[#1D1D1F]">Daily Budget</span>
            <span className="display text-2xl font-semibold text-[#1D1D1F]">{data.energy.toFixed(1)} <span className="text-sm font-normal text-[#6E6E73]">kWh</span></span>
          </div>
          <div className="h-3 bg-[#E5E5E7] rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full bg-[#1D1D1F]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((data.energy / 20) * 100, 100)}%` }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <p className="text-sm text-[#6E6E73] mt-2">{Math.round((data.energy / 20) * 100)}% of daily budget (20 kWh)</p>
        </div>

        <h3 className="font-semibold text-[#1D1D1F] mb-4">Add Usage</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {activities.map((activity, i) => (
            <motion.button
              key={activity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addEnergy(activity.kwh)}
              className="bento-card p-4 text-center cursor-pointer group"
            >
              <Plus className="w-5 h-5 mx-auto mb-2 text-[#A1A1A6] group-hover:text-[#007AFF] transition-colors" />
              <p className="display text-lg font-semibold text-[#1D1D1F]">{activity.name}</p>
              <p className="text-[#007AFF] font-medium">+{activity.kwh} kWh</p>
              <p className="text-xs text-[#A1A1A6] mt-1">{activity.desc}</p>
            </motion.button>
          ))}
        </div>

        <div className="minimal-border p-6 rounded-2xl text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#1D1D1F]" strokeWidth={1.5} />
          <p className="display text-4xl font-semibold text-[#1D1D1F]">{data.energy > 0 ? "1" : "0"} <span className="text-lg">day</span></p>
          <p className="text-[#6E6E73]">Current Streak</p>
          <p className="text-sm text-[#A1A1A6] mt-2">Start tracking to build your streak</p>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}