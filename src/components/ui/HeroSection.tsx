"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEco } from "@/context/EcoContext";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const { data, darkMode } = useEco();

  useEffect(() => {
    setVisible(true);
  }, []);

  const formatValue = (val: number) => {
    if (val >= 1000) return (val / 1000).toFixed(1) + "k";
    return val.toString();
  };

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        {/* Hero with Split Typography */}
        <div className="max-w-4xl">
          {/* "Small habits" - Clean Sans-Serif */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className={`display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Small habits
            </h1>
          </motion.div>

          {/* "Big impact" - Elegant Serif Italic with blur effect */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={visible ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className={`display-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Big impact
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-lg md:text-xl mt-8 max-w-lg leading-relaxed ${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}`}
          >
            Track water, waste, and energy. Build sustainable habits. 
            See your real environmental impact.
          </motion.p>

          {/* CTA Buttons - Magnetic Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link
              href="/water"
              className="group magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0056CC] transition-colors"
            >
              Start Tracking
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className={`magnetic-btn inline-flex items-center gap-2 px-8 py-4 border font-medium rounded-xl transition-all ${
                darkMode 
                  ? "border-[#3C3C3E] text-[#FFFFFF] hover:border-[#007AFF] hover:text-[#007AFF]" 
                  : "border-[#E5E5E7] text-[#1D1D1F] hover:border-[#007AFF] hover:text-[#007AFF]"
              }`}
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats - Dynamic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className={`flex flex-wrap gap-10 mt-16 pt-8 border-t ${darkMode ? "border-[#2C2C2E]" : "border-[#E5E5E7]"}`}
          >
            <div>
              <p className="display text-2xl font-semibold text-[#007AFF]">{formatValue(data.water)}</p>
              <p className="text-sm text-[#A1A1A6] mt-1">Gallons Tracked</p>
            </div>
            <div>
              <p className="display text-2xl font-semibold text-[#007AFF]">{formatValue(data.energy)}</p>
              <p className="text-sm text-[#A1A1A6] mt-1">kWh Tracked</p>
            </div>
            <div>
              <p className="display text-2xl font-semibold text-[#007AFF]">{formatValue(data.waste)}</p>
              <p className="text-sm text-[#A1A1A6] mt-1">Items Logged</p>
            </div>
          </motion.div>
        </div>

        {/* Minimal Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="grid md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { label: "Water", desc: "Track usage", href: "/water" },
            { label: "Waste", desc: "Log recycling", href: "/waste" },
            { label: "Energy", desc: "Monitor usage", href: "/energy" },
          ].map((item) => (
            <Link key={item.label} href={item.href}>
              <div className={`bento-card p-6 cursor-pointer ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""}`}>
                <h3 className={`display text-lg font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{item.label}</h3>
                <p className={`text-sm mt-1 ${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}`}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
