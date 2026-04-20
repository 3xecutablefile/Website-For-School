"use client";

import { useEffect } from "react";
import { useEco } from "@/context/EcoContext";

export default function DarkModeWrapper({ children }: { children: React.ReactNode }) {
  const { darkMode } = useEco();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <>{children}</>;
}