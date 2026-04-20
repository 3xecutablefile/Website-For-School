"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const features = [
    { icon: Droplets, label: "Water", color: "#0EA5E9", href: "/water" },
    { icon: Leaf, label: "Waste", color: "#22C55E", href: "/waste" },
    { icon: Zap, label: "Energy", color: "#F59E0B", href: "/energy" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAFBFC]">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-60"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            background: "linear-gradient(135deg, #22C55E 0%, #10B981 100%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-40"
          style={{
            background: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? "#0EA5E9" : i % 3 === 1 ? "#22C55E" : "#F59E0B",
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 glass-nav fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="display text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
            EcoTrack
          </a>
          <div className="flex items-center gap-3">
            {features.map((f) => (
              <a
                key={f.label}
                href={f.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{ 
                  background: `${f.color}15`,
                  color: f.color,
                }}
              >
                {f.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-gray-700">Track Your Impact</span>
              </motion.div>

              <h1 className="display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Make Every Day{" "}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  Greener
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Track your water usage, waste reduction, and energy consumption. 
                Build eco-habits and see your real environmental impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/water" className="btn-primary inline-flex items-center gap-2">
                  Start Tracking <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/about" className="px-6 py-3 rounded-2xl border border-gray-300 font-medium text-gray-700 hover:bg-white/80 transition-all">
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <p className="display text-3xl font-bold text-gray-900">2.5k+</p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="display text-3xl font-bold text-gray-900">50k+</p>
                  <p className="text-sm text-gray-500">Gallons Saved</p>
                </div>
                <div>
                  <p className="display text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-500">Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.a
                    key={feature.label}
                    href={feature.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group glass-card p-6 cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: `${feature.color}20` }}
                      >
                        <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.label}</h3>
                        <p className="text-gray-500 text-sm">
                          {feature.label === "Water" && "Track usage and conservation"}
                          {feature.label === "Waste" && "Log recycling and composting"}
                          {feature.label === "Energy" && "Monitor consumption"}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="display text-2xl font-bold text-teal-600">🌱</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FAFBFC"/>
        </svg>
      </div>
    </section>
  );
}