"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import { Home, Briefcase, Calendar, Shield, Settings } from "lucide-react"

type IconComponentType = React.ElementType<{ className?: string }>

export interface InteractiveMenuItem {
  label: string
  icon: IconComponentType
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[]
  accentColor?: string
}

const defaultItems: InteractiveMenuItem[] = [
  { label: "home", icon: Home },
  { label: "strategy", icon: Briefcase },
  { label: "period", icon: Calendar },
  { label: "security", icon: Shield },
  { label: "settings", icon: Settings },
]

const defaultAccentColor = "var(--component-active-color-default)"

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ items, accentColor }) => {
  const finalItems = useMemo(() => {
    const isValid = items && Array.isArray(items) && items.length >= 2 && items.length <= 5
    if (!isValid) return defaultItems
    return items
  }, [items])

  const [activeIndex, setActiveIndex] = useState(0)
  const textRefs = useRef<(HTMLElement | null)[]>([])
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex]
      const activeTextElement = textRefs.current[activeIndex]
      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth
        activeItemElement.style.setProperty("--lineWidth", `${textWidth}px`)
      }
    }
    setLineWidth()
    window.addEventListener("resize", setLineWidth)
    return () => window.removeEventListener("resize", setLineWidth)
  }, [activeIndex, finalItems])

  const handleItemClick = (index: number) => setActiveIndex(index)

  const navStyle = useMemo(() => ({ "--component-active-color": accentColor || defaultAccentColor } as React.CSSProperties), [accentColor])

  const setItemRef = (index: number) => (el: HTMLButtonElement | null) => { itemRefs.current[index] = el }
  const setTextRef = (index: number) => (el: HTMLElement | null) => { textRefs.current[index] = el }

  return (
    <nav className="menu" role="navigation" style={navStyle}>
      {finalItems.map((item, index) => {
        const isActive = index === activeIndex
        const IconComponent = item.icon
        return (
          <button
            key={item.label}
            className={`menu__item ${isActive ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
            ref={setItemRef(index)}
            style={{ "--lineWidth": "0px" } as React.CSSProperties}
          >
            <div className="menu__icon">
              <IconComponent className="icon" />
            </div>
            <strong className={`menu__text ${isActive ? "active" : ""}`} ref={setTextRef(index)}>
              {item.label}
            </strong>
          </button>
        )
      })}
    </nav>
  )
}

export { InteractiveMenu }