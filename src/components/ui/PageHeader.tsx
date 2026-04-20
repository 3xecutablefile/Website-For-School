"use client";

import Link from "next/link";
import { ArrowLeft, RotateCcw, Moon, Sun } from "lucide-react";
import { useEco } from "@/context/EcoContext";
import { useEffect } from "react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
}

export default function PageHeader({ title, showBack = true }: PageHeaderProps) {
  const { darkMode, toggleDarkMode, resetData } = useEco();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className={`sticky top-0 z-40 ${darkMode ? "bg-[#1D1D1F]/80" : "bg-[#FFFFFF]/80"} backdrop-blur-xl border-b ${darkMode ? "border-[#2C2C2E]" : "border-[#E5E5E7]"}`}>
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Link 
              href="/" 
              className={`p-2 rounded-lg ${darkMode ? "hover:bg-[#2C2C2E]" : "hover:bg-[#F5F5F7]"} transition-colors`}
            >
              <ArrowLeft className={`w-5 h-5 ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`} />
            </Link>
          )}
          <span className={`display text-xl font-semibold ${darkMode ? "text-[#FFFFFF]" : "text-[#1D1D1F]"}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${darkMode ? "hover:bg-[#2C2C2E]" : "hover:bg-[#F5F5F7]"} transition-colors`}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-[#FFFFFF]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1D1D1F]" />
            )}
          </button>
          <button
            onClick={resetData}
            className={`p-2 rounded-lg ${darkMode ? "hover:bg-[#2C2C2E]" : "hover:bg-[#F5F5F7]"} transition-colors`}
            title="Reset Data"
          >
            <RotateCcw className={`w-4 h-4 ${darkMode ? "text-[#A1A1A6]" : "text-[#A1A1A6]"}`} />
          </button>
        </div>
      </div>
    </header>
  );
}