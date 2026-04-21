"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEco } from "@/context/EcoContext";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

function BentoCard({ title, description, icon: Icon, href }: BentoCardProps) {
  const { darkMode } = useEco();
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`bento-card p-6 cursor-pointer h-full flex flex-col justify-between ${
          darkMode ? "bg-[#2C2C2E] border-[#3C3C3E]" : ""
        }`}
      >
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${darkMode ? "bg-[#3C3C3E]" : "bg-[#F5F5F7]"}`}>
          <Icon className={`w-6 h-6 ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`} />
        </div>
        <div>
          <h3 className={`display text-lg font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>{title}</h3>
          <p className={`text-sm mt-1 ${darkMode ? "text-[#A1A1A6]" : "text-[#6E6E73]"}`}>{description}</p>
        </div>
        <ArrowRight className={`w-4 h-4 mt-4 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`} />
      </motion.div>
    </Link>
  );
}

export default function BentoDashboard() {
  const { data, darkMode } = useEco();

  const formatValue = (val: number) => {
    if (val >= 1000) return (val / 1000).toFixed(1) + "k";
    return val.toString();
  };

  const cards: BentoCardProps[] = [
    { title: "Water", description: "Track shower, faucet, garden", icon: Droplets, href: "/water" },
    { title: "Waste", description: "Log recycling, composting", icon: Leaf, href: "/waste" },
    { title: "Energy", description: "Monitor electricity, HVAC", icon: Zap, href: "/energy" },
  ];

  const stats = [
    { value: formatValue(data.water), label: "Gallons Tracked" },
    { value: formatValue(data.energy), label: "kWh Tracked" },
    { value: formatValue(data.waste), label: "Items Logged" },
  ];

  return (
    <section className={`py-20 px-6 ${darkMode ? "bg-[#2C2C2E]" : "bg-[#FAFAFA]"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-3">Track Your Impact</p>
          <h2 className={`display text-4xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
            Three Pillars
          </h2>
        </motion.div>

        {/* Bento Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BentoCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Stats - Dynamic */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`minimal-border p-4 rounded-xl ${darkMode ? "bg-[#1D1D1F] border-[#3C3C3E]" : ""}`}
            >
              <p className="display text-2xl font-semibold text-[#007AFF]">{stat.value}</p>
              <p className="text-xs text-[#A1A1A6] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
