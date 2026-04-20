"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAFBFC]">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, #06B6D4 50%, #22D3EE 100%)",
            filter: "blur(100px)",
            opacity: 0.4,
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, #10B981 0%, #34D399 50%, #22C55E 100%)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, #F59E0B 0%, #FBBF24 50%, #F97316 100%)",
            filter: "blur(70px)",
            opacity: 0.3,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Glass Navigation */}
      <nav className="relative z-10 fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="display text-2xl font-bold text-gray-900">
            EcoTrack
          </a>
          <div className="flex gap-2">
            {[
              { label: "Water", color: "#0EA5E9", href: "/water" },
              { label: "Waste", color: "#22C55E", href: "/waste" },
              { label: "Energy", color: "#F59E0B", href: "/energy" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm mb-8">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-gray-600">Track Your Impact</span>
              </div>

              <h1 className="display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
                Make Every Day{" "}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  Greener
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Track water usage, waste reduction, and energy consumption. 
                Build eco-habits and see your real environmental impact.
              </p>

              <div className="flex gap-4">
                <a href="/water" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-xl hover:scale-105 transition-all">
                  Start Tracking →
                </a>
                <a href="/about" className="px-8 py-4 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-white transition-all">
                  Learn More
                </a>
              </div>

              <div className="flex gap-10 mt-12 pt-8 border-t border-gray-200">
                {[
                  { value: "2.5k+", label: "Active Users" },
                  { value: "50k+", label: "Gallons Saved" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="display text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { title: "Water", desc: "Track shower time, faucet usage", icon: "💧", color: "#0EA5E9", href: "/water" },
                { title: "Waste", desc: "Log recycling & composting", icon: "♻️", color: "#22C55E", href: "/waste" },
                { title: "Energy", desc: "Monitor electricity usage", icon: "⚡", color: "#F59E0B", href: "/energy" },
              ].map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 12 }}
                  className="group block p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-lg cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: `${item.color}15` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <span className="ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all">→</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}