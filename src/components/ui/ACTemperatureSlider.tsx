"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ThermometerSun, Wind, Leaf, Zap } from "lucide-react";

export default function ACTemperatureSlider() {
  const [temperature, setTemperature] = useState(24); // Default 24°C
  const [carbonSaved, setCarbonSaved] = useState(0);

  // Calculate theme based on temperature
  // Lower temp = more AC = "Heat Red" (bad for environment)
  // Higher temp = less AC = "Eco Green" (good for environment)
  const getThemeColor = (temp: number) => {
    if (temp <= 18) return "#E76F51"; // Heat Red - too cold
    if (temp <= 22) return "#F7931E"; // Warm orange
    if (temp <= 26) return "#0077B6"; // Sea blue - optimal
    return "#2D6A4F"; // Desert green - eco friendly
  };

  const themeColor = getThemeColor(temperature);

  // Calculate carbon savings based on temperature difference from 18°C (baseline)
  useEffect(() => {
    const savings = Math.max(0, (24 - temperature) * 0.5); // kg CO2 per day
    setCarbonSaved(savings);
  }, [temperature]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseInt(e.target.value));
  };

  const daysPerYear = 90; // Summer days in UAE
  const yearlySavings = (carbonSaved * daysPerYear).toFixed(1);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass-card rounded-4xl p-8 md:p-12"
          whileHover={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <ThermometerSun className="w-8 h-8" style={{ color: themeColor }} />
              <div>
                <h3 className="display text-2xl font-bold text-gray-900">AC Temperature</h3>
                <p className="text-gray-500 text-sm">Adjust to save energy</p>
              </div>
            </div>
            <motion.div 
              className="text-5xl font-bold"
              style={{ color: themeColor }}
              key={temperature}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {temperature}°C
            </motion.div>
          </div>

          {/* Slider */}
          <div className="relative mb-8">
            <input
              type="range"
              min="16"
              max="30"
              value={temperature}
              onChange={handleSliderChange}
              className="w-full h-4 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E76F51 0%, #F7931E 25%, #0077B6 50%, #2D6A4F 100%)`,
              }}
            />
            {/* Custom thumb */}
            <div
              className="absolute w-8 h-8 -ml-1 rounded-full bg-white shadow-xl border-4 flex items-center justify-center pointer-events-none"
              style={{ 
                borderColor: themeColor,
                top: "50%",
                transform: "translateY(-50%)",
                left: `calc(${((temperature - 16) / 14) * 100}% - 1rem)`,
              }}
            >
              <Wind className="w-3 h-3" style={{ color: themeColor }} />
            </div>

            {/* Labels */}
            <div className="flex justify-between mt-3 text-xs text-gray-400">
              <span>16°C</span>
              <span>18°C</span>
              <span>22°C</span>
              <span>26°C</span>
              <span>30°C</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Carbon Saved */}
            <motion.div 
              className="text-center p-4 rounded-2xl"
              style={{ background: `${themeColor}10` }}
              animate={{ background: `${themeColor}10` }}
            >
              <Leaf className="w-6 h-6 mx-auto mb-2" style={{ color: themeColor }} />
              <p className="display text-2xl font-bold" style={{ color: themeColor }}>
                {carbonSaved.toFixed(1)} kg
              </p>
              <p className="text-gray-500 text-sm">CO₂ Saved Daily</p>
            </motion.div>

            {/* Yearly Impact */}
            <div className="text-center p-4 rounded-2xl bg-gray-50">
              <Zap className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <p className="display text-2xl font-bold text-gray-900">
                {yearlySavings} kg
              </p>
              <p className="text-gray-500 text-sm">CO₂ Saved Yearly</p>
            </div>

            {/* Recommendations */}
            <div className="text-center p-4 rounded-2xl bg-gray-50">
              {temperature <= 20 ? (
                <>
                  <span className="text-3xl">🥶</span>
                  <p className="text-gray-900 font-medium mt-1">Too Cold!</p>
                  <p className="text-gray-500 text-sm">Try 24°C for comfort</p>
                </>
              ) : temperature <= 24 ? (
                <>
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-900 font-medium mt-1">Optimal</p>
                  <p className="text-gray-500 text-sm">Great balance</p>
                </>
              ) : (
                <>
                  <span className="text-3xl">🌿</span>
                  <p className="text-gray-900 font-medium mt-1">Eco Mode</p>
                  <p className="text-gray-500 text-sm">Best for planet</p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}