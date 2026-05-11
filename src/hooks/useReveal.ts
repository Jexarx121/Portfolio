'use client'
import { useEffect, useRef, useState } from 'react'

export function useReveal(rootMargin = '0px 0px -100px 0px') {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2, rootMargin }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [rootMargin])

    return [ref, isVisible] as const
}
