"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
            <h1 className="display text-5xl md:text-7xl lg:text-8xl font-semibold text-[#1D1D1F] leading-[1.1] tracking-tight">
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
            <h1 className="display-serif text-5xl md:text-7xl lg:text-8xl font-medium text-[#1D1D1F] leading-[1.1] tracking-tight">
              Big impact
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-[#6E6E73] mt-8 max-w-lg leading-relaxed"
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
              className="group magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-xl hover:bg-[#007AFF] transition-colors"
            >
              Start Tracking
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 border border-[#E5E5E7] text-[#1D1D1F] font-medium rounded-xl hover:border-[#007AFF] hover:text-[#007AFF] transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-[#E5E5E7]"
          >
            {[
              { value: "2,547", label: "Active Trackers" },
              { value: "48.2k", label: "Gallons Saved" },
              { value: "12.4k", label: "kg CO₂ Reduced" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="display text-2xl font-semibold text-[#1D1D1F]">{stat.value}</p>
                <p className="text-sm text-[#A1A1A6] mt-1">{stat.label}</p>
              </div>
            ))}
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
              <div className="bento-card p-6 cursor-pointer">
                <h3 className="display text-lg font-semibold text-[#1D1D1F]">{item.label}</h3>
                <p className="text-sm text-[#6E6E73] mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}