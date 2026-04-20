import { Blocks, ClipboardCheck, House } from "lucide-react"

export const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/pillars", label: "Pillars", icon: Blocks },
  { href: "/audit", label: "Audit", icon: ClipboardCheck },
]

export const pillarCards = [
  {
    id: "water",
    label: "01",
    name: "Water",
    stat: "13% less daily waste",
    description: "Shorter showers, better leak habits, and calmer irrigation routines add up fast in a hot climate.",
    detail: "Track cooling tower checks, kitchen flow, and reusable bottle habits in one clean system.",
  },
  {
    id: "waste",
    label: "02",
    name: "Waste",
    stat: "2 bags avoided weekly",
    description: "Buying less, sorting better, and reusing containers keeps bins lighter without turning daily life into a chore.",
    detail: "Focus on food planning, refill culture, and better separation at home, office, and school.",
  },
  {
    id: "energy",
    label: "03",
    name: "Energy",
    stat: "24C is the target",
    description: "Cooling discipline matters more than slogans. Better thermostat settings create the biggest visible savings.",
    detail: "Pair AC targets with blinds, lighting cutoffs, and off-peak routines to keep interiors comfortable.",
  },
] as const

export const initiativeRows = [
  {
    title: "Home routine",
    summary: "Five-minute checks before leaving: plugs, lights, AC setpoint, and bottle refill.",
    metric: "4 habits",
  },
  {
    title: "School challenge",
    summary: "Small class-based scorecards designed for screenshot-ready progress rather than complex dashboards.",
    metric: "3-week cycle",
  },
  {
    title: "Office reset",
    summary: "Shared pantry planning, double-sided printing defaults, and after-hours cooling discipline.",
    metric: "1 clear policy",
  },
] as const

export const auditQuestions = [
  {
    id: "cooling",
    prompt: "How do you usually run AC at home or school?",
    answers: [
      { id: "cooling-low", label: "I keep it below 22C for long stretches.", score: 1 },
      { id: "cooling-mid", label: "I mix comfort and discipline, usually around 23-24C.", score: 2 },
      { id: "cooling-high", label: "I aim for 24C and reduce overcooling where possible.", score: 3 },
    ],
  },
  {
    id: "water",
    prompt: "Which water-saving habit sounds most like you?",
    answers: [
      { id: "water-low", label: "I rarely think about leaks or shower length.", score: 1 },
      { id: "water-mid", label: "I try to keep showers shorter and avoid waste when I remember.", score: 2 },
      { id: "water-high", label: "I actively check fixtures and use water carefully every day.", score: 3 },
    ],
  },
  {
    id: "waste",
    prompt: "What best describes your waste routine?",
    answers: [
      { id: "waste-low", label: "Mostly single-use items and little sorting.", score: 1 },
      { id: "waste-mid", label: "Some reuse and better shopping, but not consistent.", score: 2 },
      { id: "waste-high", label: "I plan purchases, reuse often, and separate waste properly.", score: 3 },
    ],
  },
] as const
