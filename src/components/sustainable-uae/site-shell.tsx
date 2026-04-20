"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { navItems } from "@/components/sustainable-uae/content"
import { cn } from "@/lib/utils"

type SiteShellProps = {
  eyebrow: string
  title: string
  lede: string
  children: React.ReactNode
}

export function SiteShell({ eyebrow, title, lede, children }: SiteShellProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_60px_rgba(29,29,31,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-white/65 md:px-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-xs font-medium text-white">
              UAE
            </span>
            Sustainable UAE
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-28 pt-32 md:px-6 md:pb-16">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-4 border-b border-slate-200/80 pb-10 md:grid-cols-[1.3fr_0.7fr] md:items-end"
        >
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">{eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">{title}</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 md:justify-self-end md:text-base">{lede}</p>
        </motion.section>

        {children}
      </main>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
        <div className="mx-auto flex max-w-sm items-center justify-between rounded-[1.75rem] border border-white/80 bg-white/80 p-2 shadow-[0_20px_60px_rgba(29,29,31,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/72">
          {navItems.map((item) => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-[11px] font-medium transition-all",
                  active ? "bg-[#007AFF] text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
