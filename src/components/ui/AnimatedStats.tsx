"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedStats() {
  const stats = [
    { value: "2,547", label: "Active Trackers", trend: "+12%", color: "#0077B6" },
    { value: "48.2k", label: "Gallons Saved", trend: "+8%", color: "#2D6A4F" },
    { value: "12.4k", label: "kg CO₂ Reduced", trend: "+23%", color: "#F59E0B" },
    { value: "98%", label: "Satisfaction", trend: "", color: "#8B5CF6" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass-card p-6 rounded-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="display text-3xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </span>
            {stat.trend && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"
              >
                {stat.trend}
              </motion.span>
            )}
          </div>
          <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}