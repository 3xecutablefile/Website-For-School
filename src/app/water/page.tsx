export default function WaterPage() {
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
          <p className="section-label mb-4">Water Tracking</p>
          <h1 className="display text-5xl font-bold mb-8">
            <span className="text-cyan-400">Water</span> Usage
          </h1>
          
          <div className="card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Daily Log</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-cyan-500/10">
                <div>
                  <p className="font-medium">Shower</p>
                  <p className="text-sm text-muted-foreground">5 min today</p>
                </div>
                <span className="text-cyan-400">-5 gal</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-cyan-500/10">
                <div>
                  <p className="font-medium">Dishwasher</p>
                  <p className="text-sm text-muted-foreground">1 load</p>
                </div>
                <span className="text-cyan-400">-10 gal</span>
              </div>
            </div>
            <button className="mt-6 w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold">
              + Add Water Activity
            </button>
          </div>
          
          <div className="card p-8">
            <h2 className="text-xl font-semibold mb-4">Weekly Stats</h2>
            <div className="h-32 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-cyan-500/30 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}