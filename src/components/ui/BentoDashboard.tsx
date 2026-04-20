"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

function BentoCard({ title, description, icon: Icon, href }: BentoCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bento-card p-6 cursor-pointer h-full flex flex-col justify-between"
      >
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F5F5F7] mb-4">
          <Icon className="w-6 h-6 text-[#1D1D1F]" />
        </div>
        <div>
          <h3 className="display text-lg font-semibold text-[#1D1D1F]">{title}</h3>
          <p className="text-sm text-[#6E6E73] mt-1">{description}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#A1A1A6] mt-4" />
      </motion.div>
    </Link>
  );
}

function StatCard({ value, label, trend }: { value: string; label: string; trend?: string }) {
  return (
    <div className="minimal-border p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <p className="display text-2xl font-semibold text-[#1D1D1F]">{value}</p>
        {trend && (
          <span className="text-xs font-medium text-[#007AFF] bg-[#007AFF10] px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <p className="text-xs text-[#A1A1A6] mt-1">{label}</p>
    </div>
  );
}

export default function BentoDashboard() {
  const cards: BentoCardProps[] = [
    { title: "Water", description: "Track shower, faucet, garden", icon: Droplets, href: "/water" },
    { title: "Waste", description: "Log recycling, composting", icon: Leaf, href: "/waste" },
    { title: "Energy", description: "Monitor electricity, HVAC", icon: Zap, href: "/energy" },
  ];

  const stats = [
    { value: "2,547", label: "Active Trackers", trend: "+12%" },
    { value: "48.2k", label: "Gallons Saved", trend: "+8%" },
    { value: "12.4k", label: "kg CO2 Reduced", trend: "+23%" },
  ];

  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-3">Track Your Impact</p>
          <h2 className="display text-4xl font-semibold text-[#1D1D1F]">
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
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