"use client"

import { useMemo } from "react"

type StarFieldProps = {
  count?: number
  opacity?: number
}

type Star = {
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

export function StarField({ count = 24, opacity = 0.2 }: StarFieldProps) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
