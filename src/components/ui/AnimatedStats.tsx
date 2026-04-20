"use client";

import { motion } from "framer-motion";
import { useEco } from "@/context/EcoContext";

export default function AnimatedStats() {
  const { data } = useEco();

  const formatValue = (val: number) => {
    if (val >= 1000) return (val / 1000).toFixed(1) + "k";
    return val.toString();
  };

  const stats = [
    { value: data.water + data.energy + data.waste, label: "Total Impact", suffix: "", color: "#007AFF" },
    { value: data.water, label: "Gallons Tracked", suffix: " gal", color: "#0077B6" },
    { value: data.energy, label: "kWh Tracked", suffix: " kWh", color: "#F59E0B" },
    { value: data.waste, label: "Items Tracked", suffix: "", color: "#34C759" },
  ];

  const hasData = data.water > 0 || data.energy > 0 || data.waste > 0;

  if (!hasData) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-3xl text-center"
        >
          <p className="text-xs text-[#A1A1A6] mb-2">Start tracking to see your impact</p>
          <p className="text-[#6E6E73] text-sm">No data yet</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-3xl text-center"
        >
          <p className="text-xs text-[#A1A1A6] mb-2">Start tracking to see your impact</p>
          <p className="text-[#6E6E73] text-sm">No data yet</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 rounded-3xl text-center"
        >
          <p className="text-xs text-[#A1A1A6] mb-2">Start tracking to see your impact</p>
          <p className="text-[#6E6E73] text-sm">No data yet</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 rounded-3xl text-center"
        >
          <p className="text-xs text-[#A1A1A6] mb-2">Start tracking to see your impact</p>
          <p className="text-[#6E6E73] text-sm">No data yet</p>
        </motion.div>
      </div>
    );
  }

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
          <span className="display text-3xl font-bold" style={{ color: stat.color }}>
            {formatValue(stat.value)}{stat.suffix}
          </span>
          <p className="text-[#6E6E73] text-sm mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}