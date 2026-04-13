"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const updateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }))
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)

    const trailInterval = setInterval(updateTrail, 16)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearInterval(trailInterval)
    }
  }, [position])

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="w-2 h-2 bg-[#7c3aed] rounded-full shadow-[0_0_10px_#7c3aed]" />
      </div>

      {/* Trailing circle */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: trailPosition.x - (isHovering ? 24 : 16),
          top: trailPosition.y - (isHovering ? 24 : 16),
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border-2 border-[#7c3aed]/30 transition-all duration-300"
          style={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            backgroundColor: isHovering ? "rgba(124, 58, 237, 0.15)" : "transparent",
          }}
        />
      </div>
    </>
  )
}
