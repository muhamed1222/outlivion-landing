'use client'

import React, { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface GlareCardProps {
  children: React.ReactNode
  className?: string
}

export function GlareCard({ children, className }: GlareCardProps) {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setGlarePosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Glare effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(251, 116, 82, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Shine effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.1), transparent 40%)`,
        }}
      />

      {children}
    </div>
  )
}

