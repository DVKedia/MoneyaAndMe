'use client'

import { useParallax } from '../hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxElementProps) {
  const { ref, offset } = useParallax(speed)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  )
}
