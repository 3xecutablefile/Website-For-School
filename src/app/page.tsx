import { FloatingChatWidget } from "@/components/ui/floating-chat-widget"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 glass">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="display text-xl font-bold text-emerald-400">EcoSite</h1>
          <div className="flex gap-6">
            <a href="/water" className="tag" style={{ background: 'var(--water)', color: '#000' }}>Water</a>
            <a href="/waste" className="tag" style={{ background: 'var(--waste)', color: '#000' }}>Waste</a>
            <a href="/energy" className="tag" style={{ background: 'var(--energy)', color: '#000' }}>Energy</a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-12 px-6">
        <section className="max-w-4xl mx-auto text-center py-20">
          <p className="section-label mb-4">Sustainability Tracker</p>
          <h2 className="display text-5xl md:text-7xl font-bold mb-6">
            Track Your <span className="text-emerald-400">Eco Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Monitor your daily habits across water, waste, and energy. 
            Build streaks, complete challenges, and see your real environmental footprint.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/water" className="btn-glow px-8 py-3 rounded-full bg-emerald-500 text-black font-semibold">
              Get Started
            </a>
            <a href="/about" className="px-8 py-3 rounded-full border border-emerald-500/30 text-emerald-400">
              Learn More
            </a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 py-12">
          <a href="/water" className="card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 17.657l-.707.707m16-.707l-.707.707M6.343 6.343l-.707.707" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">Water</h3>
            <p className="text-sm text-muted-foreground">Track shower time, faucet usage, and water-wasting habits.</p>
          </a>

          <a href="/waste" className="card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-lime-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition">Waste</h3>
            <p className="text-sm text-muted-foreground">Log recycling, composting, and trash diversion.</p>
          </a>

          <a href="/energy" className="card p-6 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-400 transition">Energy</h3>
            <p className="text-sm text-muted-foreground">Monitor electricity, heating, and energy-saving actions.</p>
          </a>
        </section>
      </main>

      <FloatingChatWidget />
    </div>
  )
}