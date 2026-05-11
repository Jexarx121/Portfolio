'use client'
import { useReveal } from '@/hooks/useReveal'

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function RevealSection({ children, delay = 0 }: Props) {
  const [ref, isVisible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal-section${isVisible ? ' reveal-visible' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
