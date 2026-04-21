"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Leaf, Zap, Droplets } from "lucide-react";
import Link from "next/link";
import StickyBottomNav from "@/components/ui/StickyBottomNav";
import PageHeader from "@/components/ui/PageHeader";
import { useEco } from "@/context/EcoContext";

export default function AboutPage() {
  const { darkMode } = useEco();
  const values = [
    {
      icon: Globe,
      title: "UAE-Centric",
      desc: "Built specifically for the Gulf region's unique environmental challenges. AC efficiency, water conservation, and sustainable urban living.",
    },
    {
      icon: Leaf,
      title: "Data-Driven",
      desc: "Real tracking leads to real insights. We make sustainability measurable, actionable, and rewarding.",
    },
    {
      icon: Zap,
      title: "Community-First",
      desc: "Join thousands of UAE residents working toward a greener tomorrow. Your habits matter.",
    },
  ];

  const stats = [
    { value: "2,547", label: "Active Users" },
    { value: "48.2k", label: "Gallons Saved" },
    { value: "12.4k", label: "kg CO₂ Reduced" },
    { value: "98%", label: "Satisfaction" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1D1D1F]" : "bg-[#FFFFFF]"}`}>
      <PageHeader title="About" />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-6">About Us</p>
            <h1 className={`display-serif text-5xl md:text-7xl font-medium mb-8 leading-tight ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Sustainability, <br />
              <span className="text-[#007AFF]">Reimagined</span> for the UAE
            </h1>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}`}>
              Ecolife helps you understand and reduce your environmental footprint through 
              simple daily tracking. Built for the unique challenges of Gulf region living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Grid */}
      <section className={`py-20 px-6 ${darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F7]"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-4">Our Mission</p>
            <h2 className={`display text-4xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Three Pillars of <span className="text-[#007AFF]">Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className={`minimal-border p-8 rounded-2xl ${darkMode ? "bg-[#1D1D1F] border-[#3C3C3E]" : "bg-[#FFFFFF]"}`}
                 >
                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${darkMode ? "bg-[#2C2C2E]" : "bg-[#F5F5F7]"}`}>
                     <Icon className="w-6 h-6 text-[#007AFF]" strokeWidth={1.5} />
                   </div>
                   <h3 className={`display text-xl font-semibold mb-3 ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{item.title}</h3>
                   <p className={`${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"} leading-relaxed`}>{item.desc}</p>
                 </motion.div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <p className={`display text-4xl font-bold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{stat.value}</p>
                <p className="text-sm text-[#A1A1A6] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`minimal-border rounded-2xl p-12 ${darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""}`}
          >
            <h2 className={`display text-3xl font-semibold mb-4 ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
              Ready to Make an Impact?
            </h2>
            <p className={`${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"} mb-8`}>
              Join thousands of UAE residents tracking their sustainability journey.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0056CC] transition-all"
            >
              Take the Eco-Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <StickyBottomNav />
    </div>
  );
}
