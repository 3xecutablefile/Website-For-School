"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  // Text reveal animation
  const words = ["Small habits.", "Big impact."];
  const [visibleWords, setVisibleWords] = useState<number[]>([]);

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, i]);
      }, i * 400);
    });
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 via-white to-[#2D6A4F]/5">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, #0077B620 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #2D6A4F15 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Nav (hidden on mobile) */}
          <nav className="desktop-nav glass-card rounded-full px-6 py-3 flex items-center justify-between mb-16 max-w-2xl">
            <Link href="/" className="display text-xl font-bold text-gray-900">
              Sustainable UAE
            </Link>
            <div className="flex gap-2">
              {[
                { label: "Water", href: "/water", color: "#0077B6" },
                { label: "Waste", href: "/waste", color: "#2D6A4F" },
                { label: "Energy", href: "/energy", color: "#F59E0B" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Hero Text with Reveal Animation */}
          <div className="max-w-4xl">
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

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 mt-6 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleWords.length === words.length ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Track your water usage, waste reduction, and energy consumption. 
              Build sustainable habits and see your real environmental impact in the UAE.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visibleWords.length === words.length ? 1 : 0, y: visibleWords.length === words.length ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="/water"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
              >
                Start Tracking
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C240 100 480 100 720 50C960 0 1200 0 1440 50L1440 100L0 100Z" fill="#FAFBFC"/>
        </svg>
      </div>
    </section>
  );
}