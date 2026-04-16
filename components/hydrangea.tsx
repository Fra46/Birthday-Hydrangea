"use client"

import { useMemo } from "react"

interface HydrangeaProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "light" | "medium" | "dark"
  animationDelay?: number
}

const sizeMap = {
  sm: 80,
  md: 120,
  lg: 180,
}

const colorVariants = {
  light: ["#c9a0dc", "#d8b4e8", "#e8d0f4", "#b088c0"],
  medium: ["#9b59b6", "#8e44ad", "#a569bd", "#7d3c98"],
  dark: ["#6c3483", "#5b2c6f", "#7d3c98", "#4a235a"],
}

// Seeded pseudo-random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

export function Hydrangea({ className = "", size = "md", variant = "medium", animationDelay = 0 }: HydrangeaProps) {
  const dimension = sizeMap[size]
  const colors = colorVariants[variant]

  const petals = useMemo(() => {
    const result = []
    const centerX = dimension / 2
    const centerY = dimension / 2
    const rings = size === "lg" ? 4 : size === "md" ? 3 : 2
    let seed = 0

    for (let ring = 0; ring < rings; ring++) {
      const radius = (dimension / 4) * ((ring + 1) / rings)
      const petalCount = 6 + ring * 4
      const petalSize = dimension / (8 + ring * 2)

      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2 + ring * 0.3
        const x = centerX + Math.cos(angle) * radius * 0.8
        const y = centerY + Math.sin(angle) * radius * 0.8
        const colorIndex = Math.floor(seededRandom(seed++) * colors.length)
        const color = colors[colorIndex]

        result.push(
          <g key={`${ring}-${i}`}>
            <circle cx={x} cy={y} r={petalSize} fill={color} opacity={0.9} />
            <circle cx={x} cy={y} r={petalSize * 0.4} fill="#f4e4ff" opacity={0.6} />
          </g>
        )
      }
    }

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2
      const x = centerX + Math.cos(angle) * (dimension / 12)
      const y = centerY + Math.sin(angle) * (dimension / 12)
      result.push(
        <circle
          key={`center-${i}`}
          cx={x}
          cy={y}
          r={dimension / 15}
          fill={colors[0]}
          opacity={0.95}
        />
      )
    }

    return result
  }, [dimension, size, colors])

  return (
    <div className={`animate-sway ${className}`} style={{ animationDelay: `${animationDelay}s` }}>
      <svg
        width={dimension}
        height={dimension}
        viewBox={`0 0 ${dimension} ${dimension}`}
        className="animate-glow"
      >
        <defs>
          <filter id={`glow-${variant}-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#glow-${variant}-${size})`}>{petals}</g>
      </svg>
    </div>
  )
}

export function HydrangeaBouquet({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2" width="100" height="80" viewBox="0 0 100 80">
        <path d="M50 0 Q45 40 35 80" stroke="#4a7c59" strokeWidth="3" fill="none" />
        <path d="M50 0 Q55 40 65 80" stroke="#4a7c59" strokeWidth="3" fill="none" />
        <path d="M50 0 Q50 50 50 80" stroke="#4a7c59" strokeWidth="3" fill="none" />
        <ellipse cx="38" cy="50" rx="8" ry="15" fill="#5a8f6a" transform="rotate(-20 38 50)" />
        <ellipse cx="62" cy="50" rx="8" ry="15" fill="#5a8f6a" transform="rotate(20 62 50)" />
      </svg>

      <div className="flex items-end justify-center gap-[-20px]">
        <Hydrangea size="md" variant="light" className="-mr-6 z-10" animationDelay={0.5} />
        <Hydrangea size="lg" variant="medium" className="z-20 -mb-2" animationDelay={1} />
        <Hydrangea size="md" variant="dark" className="-ml-6 z-10" animationDelay={1.5} />
      </div>
    </div>
  )
}