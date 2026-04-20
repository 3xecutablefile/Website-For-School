"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Leaf, Zap, Droplets } from "lucide-react";
import Link from "next/link";
import StickyBottomNav from "@/components/ui/StickyBottomNav";

export default function AboutPage() {
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
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-6">About Us</p>
            <h1 className="display-serif text-5xl md:text-7xl font-medium text-[#1D1D1F] mb-8 leading-tight">
              Sustainability, <br />
              <span className="text-[#007AFF]">Reimagined</span> for the UAE
            </h1>
            <p className="text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              Ecolife helps you understand and reduce your environmental footprint through 
              simple daily tracking. Built for the unique challenges of Gulf region living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Grid */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-4">Our Mission</p>
            <h2 className="display text-4xl font-semibold text-[#1D1D1F]">
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
                  className="minimal-border bg-[#FFFFFF] p-8 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#007AFF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="display text-xl font-semibold text-[#1D1D1F] mb-3">{item.title}</h3>
                  <p className="text-[#6E6E73] leading-relaxed">{item.desc}</p>
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
                <p className="display text-4xl font-bold text-[#1D1D1F]">{stat.value}</p>
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
            className="minimal-border rounded-2xl p-12"
          >
            <h2 className="display text-3xl font-semibold text-[#1D1D1F] mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-[#6E6E73] mb-8">
              Join thousands of UAE residents tracking their sustainability journey.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white font-medium rounded-xl hover:bg-[#007AFF] transition-all"
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