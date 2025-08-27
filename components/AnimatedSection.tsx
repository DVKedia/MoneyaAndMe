'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'bounceIn'
  delay?: number
  duration?: number
  className?: string
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  className = '' 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '-50px' })

  const animationClasses = {
    fadeInUp: isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-16 opacity-0',
    fadeInLeft: isVisible 
      ? 'translate-x-0 opacity-100' 
      : '-translate-x-16 opacity-0',
    fadeInRight: isVisible 
      ? 'translate-x-0 opacity-100' 
      : 'translate-x-16 opacity-0',
    scaleIn: isVisible 
      ? 'scale-100 opacity-100' 
      : 'scale-75 opacity-0',
    slideInUp: isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-32 opacity-0',
    bounceIn: isVisible 
      ? 'scale-100 opacity-100' 
      : 'scale-50 opacity-0'
  }

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}
