export default function EnergyPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 glass">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="display text-xl font-bold text-emerald-400">EcoSite</a>
          <div className="flex gap-6">
            <a href="/water" className="tag" style={{ background: 'var(--water)', color: '#000' }}>Water</a>
            <a href="/waste" className="tag" style={{ background: 'var(--waste)', color: '#000' }}>Waste</a>
            <a href="/energy" className="tag" style={{ background: 'var(--energy)', color: '#000' }}>Energy</a>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-12 px-6">
        <section className="max-w-4xl mx-auto">
          <p className="section-label mb-4">Energy Tracking</p>
          <h1 className="display text-5xl font-bold mb-8">
            <span className="text-amber-400">Energy</span> Usage
          </h1>
          
          <div className="card p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Today's Usage</h2>
              <span className="text-2xl font-bold text-amber-400">12.5 <span className="text-sm font-normal">kWh</span></span>
            </div>
            <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">62% of daily budget (20 kWh)</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-3 rounded-lg bg-amber-500/20 text-left hover:bg-amber-500/30 transition">
                  💡 Turn off lights
                </button>
                <button className="w-full py-3 rounded-lg bg-amber-500/20 text-left hover:bg-amber-500/30 transition">
                  🔌 Unplug devices
                </button>
                <button className="w-full py-3 rounded-lg bg-amber-500/20 text-left hover:bg-amber-500/30 transition">
                  🌡️ Adjust thermostat
                </button>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Streak</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-2">5 <span className="text-lg">days</span></p>
              <p className="text-sm text-muted-foreground">Longest: 12 days</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}