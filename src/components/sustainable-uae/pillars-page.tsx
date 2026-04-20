"use client"

import { motion } from "framer-motion"
import { initiativeRows, pillarCards } from "@/components/sustainable-uae/content"
import { SiteShell } from "@/components/sustainable-uae/site-shell"

export function PillarsPage() {
  return (
    <SiteShell
      eyebrow="Internal page / Pillars"
      title="Water, waste, and energy as a disciplined daily system."
      lede="This page expands the three core pillars into cleaner narratives, modular blocks, and project-documentation friendly sections with strong hierarchy and whitespace."
    >
      <section className="grid gap-4 md:grid-cols-3">
        {pillarCards.map((card, index) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(29,29,31,0.05)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">{card.label}</span>
              <span className="text-sm font-medium text-[#007AFF]">{card.stat}</span>
            </div>
            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-slate-950">{card.name}</h2>
            <p className="mt-5 text-base leading-7 text-slate-700">{card.description}</p>
            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-[#F5F5F7] p-4">
              <div className="flex h-28 items-center gap-3">
                <div className="h-full w-16 rounded-[1.25rem] border border-slate-300 bg-white" />
                <div className="grid flex-1 gap-3">
                  <div className="h-8 rounded-full border border-slate-300 bg-white" />
                  <div className="h-14 rounded-[1.25rem] border border-slate-300 bg-white" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-500">{card.detail}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Implementation lanes</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">Low-friction actions that still feel premium.</h2>
          <p className="text-base leading-7 text-slate-600">Instead of cluttered eco dashboards, this internal page presents each initiative as a simple operational lane with one clear metric and one readable explanation.</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(29,29,31,0.05)]">
          {initiativeRows.map((row, index) => (
            <div key={row.title} className={index === initiativeRows.length - 1 ? "grid gap-4 p-6 md:grid-cols-[0.9fr_1.4fr_0.7fr]" : "grid gap-4 border-b border-slate-200 p-6 md:grid-cols-[0.9fr_1.4fr_0.7fr]"}>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Lane {index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{row.title}</h3>
              </div>
              <p className="text-sm leading-7 text-slate-600">{row.summary}</p>
              <div className="flex items-start md:justify-end">
                <span className="rounded-full border border-slate-200 bg-[#F5F5F7] px-4 py-2 text-sm font-medium text-slate-700">{row.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
