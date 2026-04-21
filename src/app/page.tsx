"use client";

import HeroSection from "@/components/ui/HeroSection";
import BentoDashboard from "@/components/ui/BentoDashboard";
import ACTemperatureSlider from "@/components/ui/ACTemperatureSlider";
import StickyBottomNav from "@/components/ui/StickyBottomNav";
import MiniNavbar from "@/components/ui/MiniNavbar";
import FancyFooter from "@/components/ui/FancyFooter";
import AnimatedStats from "@/components/ui/AnimatedStats";
import { motion } from "framer-motion";
import { useEco } from "@/context/EcoContext";

export default function Home() {
  const { darkMode } = useEco();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1D1D1F]" : "bg-[#FFFFFF]"}`}>
      <MiniNavbar />
      
      <HeroSection />
      
      {/* Stats Section */}
      <section className={`py-16 px-6 ${darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F7]"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`}>Our Impact</p>
            <h2 className={`display text-4xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Together We&apos;re Making a <span className="text-[#007AFF]">Difference</span>
            </h2>
          </motion.div>
          <AnimatedStats />
        </div>
      </section>

      <BentoDashboard />
      <ACTemperatureSlider />
      <FancyFooter />
      <StickyBottomNav />
    </div>
  );
}