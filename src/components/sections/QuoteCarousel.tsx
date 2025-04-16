'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const quotes = [
  {
    text: "QPF's workshops helped me understand how to manage my student loans and create a realistic budget. The practical advice was exactly what I needed.",
    author: "Sarah Johnson",
    role: "Third Year Commerce Student"
  },
  {
    text: "The investment workshop series completely changed how I think about my financial future. I'm now confident in making informed decisions about my money.",
    author: "Michael Chen",
    role: "Fourth Year Engineering Student"
  },
  {
    text: "As an international student, I found QPF's resources incredibly valuable in understanding Canadian banking and financial systems.",
    author: "Priya Sharma",
    role: "Second Year Arts & Science Student"
  }
]

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useScrollAnimation()

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="max-w-3xl mx-auto text-center fade-in">
      <div className="relative">
        <div className="text-white text-2xl md:text-3xl font-serif mb-8">
          &ldquo;{quotes[currentIndex].text}&rdquo;
        </div>
        <div className="text-qpf-gold text-lg font-medium mb-2">
          {quotes[currentIndex].author}
        </div>
        <div className="text-white/80 text-sm">
          {quotes[currentIndex].role}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevQuote}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-qpf-gold hover:text-white transition-colors"
          aria-label="Previous quote"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextQuote}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-qpf-gold hover:text-white transition-colors"
          aria-label="Next quote"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default QuoteCarousel 