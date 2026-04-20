"use client";

import { motion } from "framer-motion";
import { 
  Droplets, 
  Leaf, 
  Zap, 
  ArrowRight,
  Wind,
  ThermometerSun,
  Recycle,
  TreePine
} from "lucide-react";
import { useState } from "react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  size?: "small" | "medium" | "large";
}

function BentoCard({ title, description, icon, color, href, size = "medium" }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "col-span-2",
    medium: "col-span-3",
    large: "col-span-6",
  };

  return (
    <motion.a
      href={href}
      className={`${sizeClasses[size]} group relative overflow-hidden rounded-3xl cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient that reveals on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`,
          opacity: isHovered ? 1 : 0.5,
        }}
      />
      
      {/* Border glow on hover */}
      <motion.div 
        className="absolute inset-0 rounded-3xl border-2"
        style={{ borderColor: color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
        {/* Icon */}
        <motion.div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform"
          style={{ background: `${color}15` }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>

        {/* Content */}
        <div>
          <h3 className="display text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Arrow - animates on hover */}
        <motion.div 
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: `${color}20` }}
          animate={{ x: isHovered ? 4 : 0 }}
        >
          <ArrowRight className="w-5 h-5" style={{ color }} />
        </motion.div>
      </div>
    </motion.a>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  trend?: string;
}

function StatCard({ value, label, icon, trend }: StatCardProps) {
  return (
    <motion.div 
      className="col-span-2 glass-card p-5 rounded-2xl"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <p className="display text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </motion.div>
  );
}

export default function BentoDashboard() {
  const cards: BentoCardProps[] = [
    {
      title: "Water",
      description: "Track shower time, faucet usage, and conservation goals",
      icon: "💧",
      color: "#0077B6",
      href: "/water",
      size: "medium",
    },
    {
      title: "Waste",
      description: "Log recycling, composting, and waste diversion",
      icon: "♻️",
      color: "#2D6A4F",
      href: "/waste",
      size: "medium",
    },
    {
      title: "Energy",
      description: "Monitor electricity, HVAC, and carbon footprint",
      icon: "⚡",
      color: "#F59E0B",
      href: "/energy",
      size: "large",
    },
  ];

  const stats: StatCardProps[] = [
    { value: "2,547", label: "Active Trackers", icon: "👥", trend: "+12%" },
    { value: "48.2k", label: "Gallons Saved", icon: "💧", trend: "+8%" },
    { value: "12.4k", label: "kg CO₂ Reduced", icon: "🌱", trend: "+23%" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm tracking-widest text-gray-500 uppercase mb-3">Track Your Impact</p>
          <h2 className="display text-4xl md:text-5xl font-bold text-gray-900">
            Three Pillars of
            <span className="bg-gradient-to-r from-sea-blue to-desert-green bg-clip-text text-transparent"> Sustainability</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid mb-8">
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

        {/* Stats Row */}
        <div className="bento-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}