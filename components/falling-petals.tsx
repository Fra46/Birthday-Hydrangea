"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  color: string
}

const petalColors = [
  "rgba(180, 130, 200, 0.7)",
  "rgba(160, 100, 180, 0.7)",
  "rgba(200, 150, 220, 0.7)",
  "rgba(140, 80, 160, 0.7)",
  "rgba(220, 180, 240, 0.6)",
]

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const generatedPetals: Petal[] = []
    for (let i = 0; i < 25; i++) {
      generatedPetals.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 15 + 10,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 15,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
      })
    }
    setPetals(generatedPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill={petal.color}
            style={{
              filter: `drop-shadow(0 0 3px ${petal.color})`,
            }}
          >
            <path d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
