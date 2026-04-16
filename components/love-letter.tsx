"use client"

import { useState, useEffect } from "react"

interface LoveLetterProps {
  recipientName: string
  content: string
  signature: string
}

export function LoveLetter({ recipientName, content, signature }: LoveLetterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 500)
    const timer2 = setTimeout(() => setShowContent(true), 1000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const paragraphs = content.split('\n\n').filter(p => p.trim())

  return (
    <div
      className={`glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        boxShadow: "0 0 40px rgba(180, 130, 200, 0.2), 0 0 80px rgba(140, 80, 160, 0.1)",
      }}
    >
      {/* Decorative header */}
      <div className="text-center mb-8">
        <div className="inline-block">
          <svg width="60" height="30" viewBox="0 0 60 30" className="text-primary mx-auto mb-4">
            <path
              d="M0 15 Q15 0 30 15 Q45 30 60 15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
        <p className="text-muted-foreground italic text-lg">Para</p>
        <h2 
          className="text-3xl md:text-4xl font-semibold mt-2 gradient-text"
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          {recipientName}
        </h2>
      </div>

      {/* Letter content */}
      <div
        className={`space-y-6 text-foreground/90 leading-relaxed text-lg transition-all duration-1000 delay-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.3 + 0.5}s`,
              opacity: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Signature */}
      <div
        className={`mt-10 text-right transition-all duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${paragraphs.length * 0.3 + 1}s` }}
      >
        <p className="text-muted-foreground italic mb-2">{signature}</p>
        <div className="flex justify-end items-center gap-2">
          <svg width="40" height="20" viewBox="0 0 40 20" className="text-primary">
            <path
              d="M0 10 Q10 0 20 10 Q30 20 40 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
