import HeroSection from "@/components/ui/HeroSection";
import BentoDashboard from "@/components/ui/BentoDashboard";
import ACTemperatureSlider from "@/components/ui/ACTemperatureSlider";
import StickyBottomNav from "@/components/ui/StickyBottomNav";
import { FloatingChatWidget } from "@/components/ui/floating-chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <HeroSection />
      <BentoDashboard />
      <ACTemperatureSlider />
      <StickyBottomNav />
      <FloatingChatWidget />
    </div>
  );
}