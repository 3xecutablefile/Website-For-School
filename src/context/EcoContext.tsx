"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface EcoData {
  water: number;
  energy: number;
  waste: number;
  wasteRecycled: number;
  wasteComposted: number;
  wasteLandfill: number;
}

interface EcoContextType {
  data: EcoData;
  darkMode: boolean;
  toggleDarkMode: () => void;
  addWater: (amount: number) => void;
  addEnergy: (amount: number) => void;
  addWaste: (amount: number) => void;
  addRecycled: (amount: number) => void;
  addComposted: (amount: number) => void;
  addLandfill: (amount: number) => void;
  resetData: () => void;
}

const defaultData: EcoData = {
  water: 0,
  energy: 0,
  waste: 0,
  wasteRecycled: 0,
  wasteComposted: 0,
  wasteLandfill: 0,
};

const EcoContext = createContext<EcoContextType | undefined>(undefined);

export function EcoProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<EcoData>(defaultData);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ecolife-data");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch {
        setData(defaultData);
      }
    }
    const savedDark = localStorage.getItem("ecolife-dark");
    if (savedDark) {
      setDarkMode(JSON.parse(savedDark));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ecolife-dark", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ecolife-data", JSON.stringify(data));
    }
  }, [data, mounted]);

  const addWater = (amount: number) => {
    setData((prev) => ({ ...prev, water: prev.water + amount }));
  };

  const addEnergy = (amount: number) => {
    setData((prev) => ({ ...prev, energy: prev.energy + amount }));
  };

  const addWaste = (amount: number) => {
    setData((prev) => ({ ...prev, waste: prev.waste + amount }));
  };

  const addRecycled = (amount: number) => {
    setData((prev) => ({ 
      ...prev, 
      waste: prev.waste + amount,
      wasteRecycled: prev.wasteRecycled + amount 
    }));
  };

  const addComposted = (amount: number) => {
    setData((prev) => ({ 
      ...prev, 
      waste: prev.waste + amount,
      wasteComposted: prev.wasteComposted + amount 
    }));
  };

  const addLandfill = (amount: number) => {
    setData((prev) => ({ 
      ...prev, 
      waste: prev.waste + amount,
      wasteLandfill: prev.wasteLandfill + amount 
    }));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.removeItem("ecolife-data");
  };

  return (
    <EcoContext.Provider value={{ data, darkMode, toggleDarkMode, addWater, addEnergy, addWaste, addRecycled, addComposted, addLandfill, resetData }}>
      {children}
    </EcoContext.Provider>
  );
}

export function useEco() {
  const context = useContext(EcoContext);
  if (!context) {
    throw new Error("useEco must be used within EcoProvider");
  }
  return context;
}
