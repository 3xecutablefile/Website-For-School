"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Thermometer, Wind, Leaf, Zap } from "lucide-react";

export default function ACTemperatureSlider() {
  const [temperature, setTemperature] = useState(24);
  
  // Temperature tint logic
  const getTint = (temp: number) => {
    if (temp <= 20) return "rgba(255, 160, 0, 0.03)"; // Warm gray
    if (temp <= 24) return "rgba(0, 0, 0, 0.02)"; // Neutral
    return "rgba(0, 122, 255, 0.03)"; // Cold blue
  };
  
  const getBorderTint = (temp: number) => {
    if (temp <= 20) return "#FFA500";
    if (temp <= 24) return "#E5E5E7";
    return "#007AFF";
  };
  
  const tint = getTint(temperature);
  const borderColor = getBorderTint(temperature);
  
  // Carbon savings calculation
  const carbonSaved = Math.max(0, (24 - temperature) * 0.5);

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="minimal-border rounded-2xl p-8 md:p-12"
          style={{ background: tint, borderColor }}
          animate={{ borderColor }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Thermometer className="w-6 h-6 text-[#1D1D1F]" />
              <div>
                <h3 className="display text-xl font-semibold text-[#1D1D1F]">Temperature</h3>
                <p className="text-sm text-[#6E6E73]">Adjust your AC for savings</p>
              </div>
            </div>
            <motion.p
              key={temperature}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="display text-5xl font-semibold text-[#1D1D1F]"
            >
              {temperature}°
            </motion.p>
          </div>

          {/* Slider */}
          <div className="relative mb-8">
            <input
              type="range"
              min="16"
              max="30"
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#E5E5E7]"
              style={{
                background: `linear-gradient(to right, ${borderColor} 0%, ${borderColor} ${((temperature - 16) / 14) * 100}%, #E5E5E7 ${((temperature - 16) / 14) * 100}%, #E5E5E7 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-xs text-[#A1A1A6]">
              <span>16°C</span>
              <span>20°C</span>
              <span>24°C</span>
              <span>28°C</span>
              <span>30°C</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
              <Leaf className="w-5 h-5 mx-auto mb-2 text-[#6E6E73]" />
              <p className="display text-xl font-semibold text-[#1D1D1F]">{carbonSaved.toFixed(1)} kg</p>
              <p className="text-xs text-[#A1A1A6]">CO2 Saved Daily</p>
            </div>
            <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
              <Zap className="w-5 h-5 mx-auto mb-2 text-[#6E6E73]" />
              <p className="display text-xl font-semibold text-[#1D1D1F]">{(carbonSaved * 90).toFixed(0)} kg</p>
              <p className="text-xs text-[#A1A1A6]">CO2 Saved Yearly</p>
            </div>
            <div className="text-center p-4 bg-[#F5F5F7] rounded-xl">
              {temperature <= 20 ? (
                <>
                  <Wind className="w-5 h-5 mx-auto mb-2 text-[#FFA500]" />
                  <p className="display text-xl font-semibold text-[#1D1D1F]">Too Cold</p>
                </>
              ) : temperature <= 24 ? (
                <>
                  <Wind className="w-5 h-5 mx-auto mb-2 text-[#007AFF]" />
                  <p className="display text-xl font-semibold text-[#1D1D1F]">Optimal</p>
                </>
              ) : (
                <>
                  <Wind className="w-5 h-5 mx-auto mb-2 text-[#007AFF]" />
                  <p className="display text-xl font-semibold text-[#1D1D1F]">Eco</p>
                </>
              )}
              <p className="text-xs text-[#A1A1A6]">{temperature <= 20 ? "Try 24C" : temperature <= 24 ? "Balanced" : "Best"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}