'use client'

import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear')
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-right, .fade-left')

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
} 