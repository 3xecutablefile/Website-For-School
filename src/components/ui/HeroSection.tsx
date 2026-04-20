"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, Leaf, Droplets, Zap } from "lucide-react";
import AnimatedStats from "./AnimatedStats";

export default function HeroSection() {
  const words = ["Small habits.", "Big impact."];
  const [visibleWords, setVisibleWords] = useState<number[]>([]);

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, i]);
      }, i * 400);
    });
  }, []);

  const features = [
    { icon: Droplets, label: "Water", desc: "Track usage", color: "#0077B6", href: "/water" },
    { icon: Leaf, label: "Waste", desc: "Log recycling", color: "#2D6A4F", href: "/waste" },
    { icon: Zap, label: "Energy", desc: "Monitor usage", color: "#F59E0B", href: "/energy" },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 via-white to-[#2D6A4F]/5">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, #0077B620 0%, transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, #2D6A4F15 0%, transparent 70%)" }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="max-w-4xl mb-16">
            {words.map((word, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visibleWords.includes(index) ? 1 : 0, y: visibleWords.includes(index) ? 0 : 50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  {word}
                </h1>
              </motion.div>
            ))}

            <motion.p
              className="text-xl text-gray-600 mt-6 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleWords.length === words.length ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Track your water usage, waste reduction, and energy consumption. 
              Build sustainable habits and see your real environmental impact in the UAE.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visibleWords.length === words.length ? 1 : 0, y: visibleWords.length === words.length ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link href="/water" className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all">
                Start Tracking
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all">
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.label} href={feature.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 rounded-3xl cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${feature.color}15` }}>
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="display text-xl font-semibold text-gray-900">{feature.label}</h3>
                    <p className="text-gray-500 mt-1">{feature.desc}</p>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none">
          <path d="M0 50C240 100 480 100 720 50C960 0 1200 0 1440 50L1440 100L0 100Z" fill="#FAFBFC" />
        </svg>
      </div>
    </section>
  );
}