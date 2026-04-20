"use client"

import { startTransition, useState } from "react"
import { motion } from "framer-motion"
import { auditQuestions } from "@/components/sustainable-uae/content"
import { SiteShell } from "@/components/sustainable-uae/site-shell"
import { cn } from "@/lib/utils"

const tierMap = {
  low: {
    title: "Reset tier",
    summary: "Start with cooling discipline and one waste habit so the routine feels manageable.",
  },
  medium: {
    title: "Steady tier",
    summary: "You already have some structure. Push consistency and tighten your AC target.",
  },
  high: {
    title: "Lead tier",
    summary: "Your baseline is strong. Focus on influencing home, class, or team habits around you.",
  },
} as const

export function AuditPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [step, setStep] = useState(0)
  const currentQuestion = auditQuestions[step]
  const isComplete = step >= auditQuestions.length
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
  const tier = totalScore >= 8 ? tierMap.high : totalScore >= 5 ? tierMap.medium : tierMap.low

  return (
    <SiteShell
      eyebrow="Internal page / Audit"
      title="A 3-step sustainability audit with direct, readable feedback."
      lede="This internal page keeps the interaction simple: answer three questions, generate a score, and show one recommendation tier without unnecessary charts or clutter."
    >
      <section className="grid gap-6 md:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-[#1D1D1F] p-7 text-white shadow-[0_20px_60px_rgba(29,29,31,0.16)]">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Progress</p>
          <div className="mt-8 flex items-end gap-4">
            <span className="text-6xl font-semibold tracking-[-0.07em]">{Math.min(step + 1, auditQuestions.length)}</span>
            <span className="pb-2 text-slate-400">/ {auditQuestions.length}</span>
          </div>
          <div className="mt-8 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-[#007AFF] transition-all duration-300"
              style={{ width: `${(Object.keys(answers).length / auditQuestions.length) * 100}%` }}
            />
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-300">Each step is intentionally binary in structure: answer, move forward, and keep the interface calm enough for screenshots and presentation slides.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(29,29,31,0.05)] md:p-8">
          {!isComplete ? (
            <motion.div key={currentQuestion.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Step {step + 1}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-4xl">{currentQuestion.prompt}</h2>
              <div className="mt-10 grid gap-4">
                {currentQuestion.answers.map((answer) => {
                  const selected = answers[currentQuestion.id] === answer.score
                  return (
                    <button
                      key={answer.id}
                      type="button"
                      onClick={() => {
                        startTransition(() => {
                          setAnswers((current) => ({ ...current, [currentQuestion.id]: answer.score }))
                          setStep((current) => current + 1)
                        })
                      }}
                      className={cn(
                        "min-h-11 rounded-[1.5rem] border px-5 py-5 text-left transition-all",
                        selected ? "border-[#007AFF] bg-[#007AFF]/5 shadow-[0_12px_30px_rgba(0,122,255,0.12)]" : "border-slate-200 bg-[#F5F5F7] hover:border-slate-300 hover:bg-white"
                      )}
                    >
                      <span className="block text-lg font-medium tracking-[-0.03em] text-slate-950">{answer.label}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Result</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">{tier.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{tier.summary}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-slate-200 bg-[#F5F5F7] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Score</p>
                  <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950">{totalScore}</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-[#F5F5F7] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Cooling</p>
                  <p className="mt-4 text-lg font-semibold text-slate-950">24C should become your anchor habit.</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-[#F5F5F7] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Next step</p>
                  <p className="mt-4 text-lg font-semibold text-slate-950">Choose one water or waste behavior to lock in this week.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  startTransition(() => {
                    setAnswers({})
                    setStep(0)
                  })
                }}
                className="rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,122,255,0.28)]"
              >
                Run audit again
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </SiteShell>
  )
}
