"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Leaf, Plus, Recycle, Sprout, Trash2 } from "lucide-react";
import { useEco } from "@/context/EcoContext";

export default function WastePage() {
  const { data, addRecycled, addComposted, addLandfill, darkMode } = useEco();

  return (
    <div className={`min-h-screen pb-24 ${darkMode ? "bg-[#1D1D1F]" : "bg-[#FFFFFF]"}`}>
      <PageHeader title="Waste" showReset />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <Leaf className={`w-16 h-16 mx-auto mb-4 ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`} strokeWidth={1.5} />
          <h1 className={`display text-4xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"} mb-2`}>
            Refine Your Waste Strategy
          </h1>
          <p className={darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}>Every item sorted is progress made.</p>
          <div className="display text-5xl font-bold text-[#007AFF] mt-6">
            {data.waste} <span className={`text-xl font-normal ${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}`}>lbs</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`minimal-border p-4 rounded-xl text-center ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""}`}
          >
            <Recycle className="w-6 h-6 mx-auto mb-2 text-[#007AFF]" />
            <p className={`display text-xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{data.wasteRecycled}</p>
            <p className={`text-xs ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`}>Recycled</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`minimal-border p-4 rounded-xl text-center ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""}`}
          >
            <Sprout className="w-6 h-6 mx-auto mb-2 text-[#34C759]" />
            <p className={`display text-xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{data.wasteComposted}</p>
            <p className={`text-xs ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`}>Composted</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`minimal-border p-4 rounded-xl text-center ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""}`}
          >
            <Trash2 className="w-6 h-6 mx-auto mb-2 text-[#FF3B30]" />
            <p className={`display text-xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{data.wasteLandfill}</p>
            <p className={`text-xs ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`}>Landfill</p>
          </motion.div>
        </div>

        <h3 className={`font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"} mb-4`}>Add Item</h3>
        <div className="space-y-3">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addRecycled(1)}
            className={`w-full p-4 rounded-xl font-medium text-left flex items-center justify-between ${darkMode ? "bg-[#2C2C2E] hover:bg-[#3C3C3E]" : "bg-[#F5F5F7] hover:bg-[#E5E5E7]"} transition-colors group`}
          >
            <div className="flex items-center gap-3">
              <Recycle className="w-5 h-5 text-[#007AFF]" />
              <span className={darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}>Recycle Item</span>
            </div>
            <Plus className={`w-5 h-5 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"} group-hover:text-[#007AFF]`} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addComposted(1)}
            className={`w-full p-4 rounded-xl font-medium text-left flex items-center justify-between ${darkMode ? "bg-[#2C2C2E] hover:bg-[#3C3C3E]" : "bg-[#F5F5F7] hover:bg-[#E5E5E7]"} transition-colors group`}
          >
            <div className="flex items-center gap-3">
              <Sprout className="w-5 h-5 text-[#34C759]" />
              <span className={darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}>Compost Item</span>
            </div>
            <Plus className={`w-5 h-5 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"} group-hover:text-[#34C759]`} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addLandfill(1)}
            className={`w-full p-4 rounded-xl font-medium text-left flex items-center justify-between ${darkMode ? "bg-[#2C2C2E] hover:bg-[#3C3C3E]" : "bg-[#F5F5F7] hover:bg-[#E5E5E7]"} transition-colors group`}
          >
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-[#FF3B30]" />
              <span className={darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}>Landfill Item</span>
            </div>
            <Plus className={`w-5 h-5 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"} group-hover:text-[#FF3B30]`} />
          </motion.button>
        </div>
      </main>

      <StickyBottomNav />
    </div>
  );
}
