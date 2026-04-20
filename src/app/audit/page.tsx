"use client";

import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, RefreshCcw, Droplets, Leaf, Zap, Recycle } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "How do you primarily commute?",
    options: [
      { label: "Private car (single occupancy)", value: 3, micro: "The solo driver" },
      { label: "Public transport", value: 1, micro: "The transit commuter" },
      { label: "Walk or cycle", value: 0, micro: "The zero-emission walker" },
      { label: "Carpool / Shared ride", value: 2, micro: "The shared traveler" },
    ],
  },
  {
    id: 2,
    question: "What's your typical shower duration?",
    options: [
      { label: "Under 5 minutes", value: 0, micro: "The efficiency optimizer" },
      { label: "5-10 minutes", value: 1, micro: "The mindful cleaner" },
      { label: "10-15 minutes", value: 2, micro: "The long refresher" },
      { label: "15+ minutes", value: 3, micro: "The water waster" },
    ],
  },
  {
    id: 3,
    question: "How often do you recycle?",
    options: [
      { label: "Always - I separate everything", value: 0, micro: "The recycling champion" },
      { label: "Most of the time", value: 1, micro: "The conscious recycler" },
      { label: "Sometimes", value: 2, micro: "The occasional sorter" },
      { label: "Rarely / Never", value: 3, micro: "The landfill contributor" },
    ],
  },
  {
    id: 4,
    question: "What's your home's typical thermostat setting in summer?",
    options: [
      { label: "26°C or higher (eco mode)", value: 0, micro: "The heat adapter" },
      { label: "24-25°C", value: 1, micro: "The balanced keeper" },
      { label: "22-23°C", value: 2, micro: "The comfort seeker" },
      { label: "21°C or lower", value: 3, micro: "The arctic resident" },
    ],
  },
  {
    id: 5,
    question: "How frequently do you buy new clothing?",
    options: [
      { label: "Once a season or less", value: 0, micro: "The capsule wardrobe" },
      { label: "Every few months", value: 1, micro: "The moderate shopper" },
      { label: "Monthly", value: 2, micro: "The trend follower" },
      { label: "Weekly", value: 3, micro: "The fast fashion follower" },
    ],
  },
  {
    id: 6,
    question: "Do you use reusable bags/containers?",
    options: [
      { label: "Always - I never forget", value: 0, micro: "The zero-waste pioneer" },
      { label: "Most of the time", value: 1, micro: "The forgetful activist" },
      { label: "Occasionally", value: 2, micro: "The occasional user" },
      { label: "Never", value: 3, micro: "The plastic consumer" },
    ],
  },
  {
    id: 7,
    question: "What's your food waste habit?",
    options: [
      { label: "I compost everything possible", value: 0, micro: "The compost king" },
      { label: "I try to minimize waste", value: 1, micro: "The conscious eater" },
      { label: "I occasionally waste food", value: 2, micro: "The casual waster" },
      { label: "I often waste food", value: 3, micro: "The excess discarder" },
    ],
  },
  {
    id: 8,
    question: "How energy-efficient are your habits?",
    options: [
      { label: "I unplug devices when not in use", value: 0, micro: "The vampire hunter" },
      { label: "I turn off lights", value: 1, micro: "The light switcher" },
      { label: "I use energy-saving mode", value: 2, micro: "The eco setting user" },
      { label: "I don't think about it", value: 3, micro: "The unaware consumer" },
    ],
  },
];

function getPersona(score: number) {
  if (score <= 5) return { title: "The Carbon Architect", desc: "You're a sustainability champion. Your habits reflect a deep commitment to environmental responsibility. You think in systems, act in habits, and measure in impact.", icon: Leaf };
  if (score <= 10) return { title: "The Efficiency Architect", desc: "You balance comfort with consciousness. Small tweaks create meaningful impact. You're building sustainable habits one choice at a time.", icon: Zap };
  if (score <= 15) return { title: "The Emerging Eco", desc: "You're on the right path. Awareness is the first step to transformation. Keep questioning and adjusting your daily routines.", icon: Droplets };
  return { title: "The Beginning Explorer", desc: "Everyone starts somewhere. Your journey to sustainability begins now. Start small, think big, and track your progress.", icon: Recycle };
}

export default function AuditPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((step + 1) / questions.length) * 100;
  const persona = getPersona(score);
  const PersonaIcon = persona.icon;

  const handleAnswer = (value: number) => {
    setSelectedOption(value);
    setTimeout(() => {
      setScore((prev) => prev + value);
      setSelectedOption(null);
      if (step < questions.length - 1) {
        setStep((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const resetAudit = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#FFFFFF]/80 backdrop-blur-xl border-b border-[#E5E5E7]">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6E6E73]">Eco-Audit</span>
            <span className="text-xs font-medium text-[#007AFF]">{step + 1} / {questions.length}</span>
          </div>
          <div className="h-1 bg-[#E5E5E7] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#007AFF]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-4">
                  Question {step + 1} of {questions.length}
                </p>
                <h2 className="display text-3xl font-semibold text-[#1D1D1F] mb-8">
                  {questions[step].question}
                </h2>

                <div className="space-y-3">
                  {questions[step].options.map((option, index) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleAnswer(option.value)}
                      disabled={selectedOption !== null}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 rounded-xl text-left bg-[#F5F5F7] hover:bg-[#E5E5E7] border border-transparent transition-all group ${
                        selectedOption === option.value ? "border-[#007AFF]" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#1D1D1F] font-medium">{option.label}</span>
                        <ArrowRight className="w-4 h-4 text-[#A1A1A6] group-hover:text-[#007AFF] transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-xs font-medium tracking-widest text-[#A1A1A6] uppercase mb-4">Your Sustainability Persona</p>
                
                <div className="minimal-border rounded-2xl p-8 mb-8">
                  <PersonaIcon className="w-16 h-16 mx-auto mb-4 text-[#007AFF]" strokeWidth={1.5} />
                  <h2 className="display text-4xl font-bold text-[#1D1D1F] mb-4">{persona.title}</h2>
                  <p className="text-[#6E6E73] text-lg">{persona.desc}</p>
                  <div className="mt-6 pt-6 border-t border-[#E5E5E7]">
                    <p className="text-sm text-[#A1A1A6]">Audit Score: <span className="text-[#007AFF] font-semibold">{score}</span> / {questions.length * 3}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetAudit}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5E5E7] text-[#1D1D1F] font-medium rounded-xl hover:border-[#007AFF] transition-all"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Retake Audit
                  </button>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D1D1F] text-white font-medium rounded-xl hover:bg-[#007AFF] transition-all"
                  >
                    Start Tracking
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}