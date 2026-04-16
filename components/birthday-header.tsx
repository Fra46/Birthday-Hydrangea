"use client"

import { useState, useEffect } from "react"

interface BirthdayHeaderProps {
  name: string
}

export function BirthdayHeader({ name }: BirthdayHeaderProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className="text-center relative">
      {/* Main title */}
      <div
        className={`transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4"
          style={{ 
            fontFamily: "var(--font-script), cursive",
            textShadow: "0 0 40px rgba(180, 130, 200, 0.5)"
          }}
        >
          Feliz Cumpleaños
        </h1>
      </div>

      {/* Name */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-2xl md:text-3xl text-foreground/80 font-light tracking-wide">
          {name}
        </p>
      </div>

      {/* Decorative line */}
      <div
        className={`mt-8 transition-all duration-1000 delay-500 ${
          show ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      >
        <svg width="200" height="20" viewBox="0 0 200 20" className="mx-auto text-primary">
          <path
            d="M0 10 Q50 0 100 10 Q150 20 200 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <circle cx="100" cy="10" r="4" fill="currentColor" opacity="0.8" />
        </svg>
      </div>
    </div>
  )
}
