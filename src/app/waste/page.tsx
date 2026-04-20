"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Plus, RotateCcw, Recycle, Sprout, Trash2 } from "lucide-react";
import { useEco } from "@/context/EcoContext";

export default function WastePage() {
  const { data, addRecycled, addComposted, addLandfill, resetData } = useEco();

  const totalWeight = 1;

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
          <Leaf className="w-16 h-16 mx-auto mb-4 text-[#1D1D1F]" strokeWidth={1.5} />
          <h1 className="display text-4xl font-semibold text-[#1D1D1F] mb-2">Refine Your Waste Strategy</h1>
          <p className="text-[#6E6E73]">Every item sorted is progress made.</p>
          <div className="display text-5xl font-bold text-[#007AFF] mt-6">
            {data.waste} <span className="text-xl font-normal text-[#6E6E73]">lbs</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="minimal-border p-4 rounded-xl text-center"
          >
            <Recycle className="w-6 h-6 mx-auto mb-2 text-[#007AFF]" />
            <p className="display text-xl font-semibold text-[#1D1D1F]">{data.wasteRecycled}</p>
            <p className="text-xs text-[#A1A1A6]">Recycled</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="minimal-border p-4 rounded-xl text-center"
          >
            <Sprout className="w-6 h-6 mx-auto mb-2 text-[#34C759]" />
            <p className="display text-xl font-semibold text-[#1D1D1F]">{data.wasteComposted}</p>
            <p className="text-xs text-[#A1A1A6]">Composted</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="minimal-border p-4 rounded-xl text-center"
          >
            <Trash2 className="w-6 h-6 mx-auto mb-2 text-[#FF3B30]" />
            <p className="display text-xl font-semibold text-[#1D1D1F]">{data.wasteLandfill}</p>
            <p className="text-xs text-[#A1A1A6]">Landfill</p>
          </motion.div>
        </div>

        <h3 className="font-semibold text-[#1D1D1F] mb-4">Add Item</h3>
        <div className="space-y-3">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addRecycled(1)}
            className="w-full p-4 rounded-xl font-medium text-left flex items-center justify-between bg-[#F5F5F7] hover:bg-[#E5E5E7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Recycle className="w-5 h-5 text-[#007AFF]" />
              <span className="text-[#1D1D1F]">Recycle Item</span>
            </div>
            <Plus className="w-5 h-5 text-[#A1A1A6] group-hover:text-[#007AFF]" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addComposted(1)}
            className="w-full p-4 rounded-xl font-medium text-left flex items-center justify-between bg-[#F5F5F7] hover:bg-[#E5E5E7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Sprout className="w-5 h-5 text-[#34C759]" />
              <span className="text-[#1D1D1F]">Compost Item</span>
            </div>
            <Plus className="w-5 h-5 text-[#A1A1A6] group-hover:text-[#34C759]" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addLandfill(1)}
            className="w-full p-4 rounded-xl font-medium text-left flex items-center justify-between bg-[#F5F5F7] hover:bg-[#E5E5E7] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-[#FF3B30]" />
              <span className="text-[#1D1D1F]">Landfill Item</span>
            </div>
            <Plus className="w-5 h-5 text-[#A1A1A6] group-hover:text-[#FF3B30]" />
          </motion.button>
        </div>
      </main>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}