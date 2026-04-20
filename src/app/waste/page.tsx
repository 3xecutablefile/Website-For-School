export default function WastePage() {
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
          <p className="section-label mb-4">Waste Tracking</p>
          <h1 className="display text-5xl font-bold mb-8">
            <span className="text-lime-400">Waste</span> Management
          </h1>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-lime-400">12</p>
              <p className="text-sm text-muted-foreground">Recycled (lbs)</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-lime-400">8</p>
              <p className="text-sm text-muted-foreground">Composted (lbs)</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-red-400">3</p>
              <p className="text-sm text-muted-foreground">Landfill (lbs)</p>
            </div>
          </div>
          
          <div className="card p-8">
            <h2 className="text-xl font-semibold mb-6">Log Waste</h2>
            <div className="space-y-3">
              <button className="w-full py-4 rounded-lg bg-lime-500/20 text-left hover:bg-lime-500/30 transition">
                <span className="text-lime-400">♻️</span> Recycle Item
              </button>
              <button className="w-full py-4 rounded-lg bg-amber-500/20 text-left hover:bg-amber-500/30 transition">
                <span className="text-amber-400">🌱</span> Compost Item
              </button>
              <button className="w-full py-4 rounded-lg bg-red-500/20 text-left hover:bg-red-500/30 transition">
                <span className="text-red-400">🗑️</span> Landfill Item
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}