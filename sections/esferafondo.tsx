"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

interface StarFieldProps {
  count?: number
  opacity?: number
}

export function StarField({ count = 30, opacity = 0.2 }: StarFieldProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(newStars)
  }, [count])

  if (stars.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            opacity,
          }}
        />
      ))}
    </div>
  )
}
