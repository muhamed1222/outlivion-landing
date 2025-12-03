'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ShimmeringTextProps {
  children: React.ReactNode
  className?: string
}

export function ShimmeringText({
  children,
  className,
}: ShimmeringTextProps) {
  return (
    <span
      className={cn(
        'inline-block bg-gradient-to-r from-[#FB7452] via-white to-[#FB7452] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer',
        className
      )}
    >
      {children}
    </span>
  )
}

