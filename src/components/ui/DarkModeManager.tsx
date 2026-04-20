"use client";

import { useEffect } from "react";
import { useEco } from "@/context/EcoContext";

export default function DarkModeManager() {
  const { darkMode } = useEco();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--bg-primary", "#1D1D1F");
      document.documentElement.style.setProperty("--bg-secondary", "#2C2C2E");
      document.documentElement.style.setProperty("--text-primary", "#FFFFFF");
      document.documentElement.style.setProperty("--text-secondary", "#A1A1A6");
      document.documentElement.style.setProperty("--border", "#3C3C3E");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--bg-primary", "#FFFFFF");
      document.documentElement.style.setProperty("--bg-secondary", "#F5F5F7");
      document.documentElement.style.setProperty("--text-primary", "#1D1D1F");
      document.documentElement.style.setProperty("--text-secondary", "#6E6E73");
      document.documentElement.style.setProperty("--border", "#E5E5E7");
    }
  }, [darkMode]);

  return null;
}