"use client";

import HeroSection from "@/components/ui/HeroSection";
import BentoDashboard from "@/components/ui/BentoDashboard";
import ACTemperatureSlider from "@/components/ui/ACTemperatureSlider";
import StickyBottomNav from "@/components/ui/StickyBottomNav";
import MiniNavbar from "@/components/ui/MiniNavbar";
import FancyFooter from "@/components/ui/FancyFooter";
import AnimatedStats from "@/components/ui/AnimatedStats";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <MiniNavbar />
      
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-3">Our Impact</p>
            <h2 className="display text-4xl font-bold text-gray-900">
              Together We&apos;re Making a <span className="text-[#2D6A4F]">Difference</span>
            </h2>
          </motion.div>
          <AnimatedStats />
        </div>
      </section>

      <BentoDashboard />
      <ACTemperatureSlider />
      <FancyFooter />
      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}