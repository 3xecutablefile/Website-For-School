import { FloatingChatWidget } from "@/components/ui/floating-chat-widget"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="display text-4xl font-bold mb-8">Eco Site</h1>
      <p className="text-muted-foreground mb-12">Your components are ready</p>
      <FloatingChatWidget />
    </div>
  )
}