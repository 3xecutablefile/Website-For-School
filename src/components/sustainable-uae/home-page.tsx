"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { pillarCards } from "@/components/sustainable-uae/content"
import { SiteShell } from "@/components/sustainable-uae/site-shell"
import { cn } from "@/lib/utils"

function MagneticButton() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  return (
    <motion.div
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reduceMotion) return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      className="inline-flex"
    >
      <Link
        href="#pillars"
        className="inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,122,255,0.28)] transition-transform hover:scale-[1.02]"
      >
        Explore
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  )
}

function PillarWireframe({ index }: { index: number }) {
  return (
    <div className="flex h-24 items-end gap-2">
      <span className="h-8 w-8 rounded-full border border-slate-300 bg-white" />
      <span className={cn("rounded-full border border-slate-300 bg-slate-100", index === 1 ? "h-14 w-14" : "h-10 w-10")} />
      <span className="h-20 flex-1 rounded-[1.25rem] border border-slate-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,245,247,0.95))]" />
    </div>
  )
}

export function HomePage() {
  const [temperature, setTemperature] = useState(20)
  const efficiency = (temperature - 18) / 8
  const tone = Math.round(244 + efficiency * 10)
  const blue = Math.round(210 + efficiency * 30)

  return (
    <SiteShell
      eyebrow="Minimal / Industrial"
      title="Small habits. Big impact."
      lede="A three-page high-fidelity concept for a cleaner UAE routine. Sharp type, quiet surfaces, and one electric accent keep the focus on action instead of decoration."
    >
      <section className="grid gap-8 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              A school-project ready interface that turns sustainability into something measurable, premium, and easy to present.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
              <span className="rounded-full border border-slate-200 px-3 py-2">No excessive green</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Bento grid</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Glass nav</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton />
            <Link href="/audit" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900 hover:bg-slate-950 hover:text-white">
              Start audit
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(0,122,255,0.11),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f5f5f7_100%)] p-6 shadow-[0_20px_60px_rgba(29,29,31,0.06)]"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Cooling target</p>
              <p className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-slate-950">24C</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Efficient interiors feel crisp, not icy. Comfort improves when cooling is controlled instead of excessive.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-[#1D1D1F] p-5 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Interface language</p>
              <div className="mt-10 space-y-3">
                <div className="h-px w-full bg-white/15" />
                <div className="h-px w-4/5 bg-white/35" />
                <div className="h-px w-2/3 bg-[#007AFF]" />
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 backdrop-blur">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Daily habit cadence</span>
              <span>Fast to screenshot</span>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="h-28 flex-1 rounded-[1.25rem] bg-[#F5F5F7]" />
              <div className="h-28 w-20 rounded-[1.25rem] bg-[#007AFF]" />
              <div className="h-28 w-14 rounded-[1.25rem] bg-slate-950" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="pillars" className="space-y-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Bento grid pillars</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">Three priorities, one clean system.</h2>
          </div>
          <Link href="/pillars" className="text-sm font-semibold text-[#007AFF]">Open internal page</Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
          {pillarCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn(
                "group rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(29,29,31,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(29,29,31,0.08)]",
                index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{card.label}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950">{card.name}</h3>
                </div>
                <p className="text-right text-sm font-medium text-slate-500">{card.stat}</p>
              </div>
              <div className="mt-8">
                <PillarWireframe index={index} />
              </div>
              <div className="mt-8 grid gap-3 md:max-w-xl">
                <p className="text-base leading-7 text-slate-700">{card.description}</p>
                <p className="text-sm leading-6 text-slate-500">{card.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-14 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Interactive AC slider</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">Move from overcooled gray to efficient blue-white.</h2>
          <p className="max-w-xl text-base leading-7 text-slate-600">The UI shifts from warm, dense neutrals into a cleaner and cooler field as the setpoint reaches 24C. Efficiency feels brighter, not greener.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-[2rem] border border-slate-200 p-6 shadow-[0_18px_48px_rgba(29,29,31,0.06)]"
          style={{
            background: `linear-gradient(135deg, rgb(${tone}, ${tone - 2}, ${tone - 4}) 0%, rgb(255,255,255) 58%, rgb(${tone - 8}, ${tone + 2}, ${blue}) 100%)`,
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Setpoint</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-6xl font-semibold tracking-[-0.07em] text-slate-950">{temperature}</span>
                <span className="pb-2 text-xl text-slate-500">C</span>
              </div>
            </div>
            <div className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
              {temperature >= 24 ? "Efficient cooling profile" : "Overcooling in progress"}
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <input
              aria-label="Adjust air conditioning target temperature"
              type="range"
              min={18}
              max={26}
              step={1}
              value={temperature}
              onChange={(event) => setTemperature(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-300 accent-[#007AFF]"
            />
            <div className="flex justify-between text-xs uppercase tracking-[0.22em] text-slate-500">
              <span>18C / Wasteful</span>
              <span>24C / Balanced</span>
              <span>26C / Light</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/80 bg-white/65 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Visual tone</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">{temperature < 22 ? "Warm gray pressure" : temperature < 24 ? "Neutral transition" : "Cool white clarity"}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/80 bg-white/65 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Comfort</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">Steady, not extreme</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/80 bg-white/65 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Narrative</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">Efficiency as control</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-4 border-t border-slate-200 py-10 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-[#1D1D1F] p-7 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Internal page 01</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Pillars and initiatives</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">Expanded layouts for Water, Waste, and Energy with refined surfaces and modular sections suited for a project walkthrough.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-[#F5F5F7] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Internal page 02</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Sustainability audit</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">A 3-step React state flow with a compact score output, recommendation tier, and clean review summary.</p>
        </div>
      </section>
    </SiteShell>
  )
}
