'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const quotes = [
  {
    text: "We&apos;re passionate about making financial education accessible to every student at Queen&apos;s.",
    author: "Ezekiel Madruga",
    title: "Executive Director"
  },
  {
    text: "Our goal is to empower students with practical financial knowledge they can use right away.",
    author: "Cyrus Horner",
    title: "Executive Director"
  },
  {
    text: "Financial literacy is a crucial life skill that every student should have access to.",
    author: "Luke Wilson",
    title: "Sponsorships Director"
  },
  {
    text: "We believe in teaching finance in a way that&apos;s relatable and easy to understand.",
    author: "Arman Gulamhussein",
    title: "Culture Director"
  }
]

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextQuote,
    onSwipedRight: prevQuote,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <section className="py-20 bg-qpf-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative" {...handlers}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif text-white mb-8 italic select-none">
              &ldquo;{quotes[currentQuote].text}&rdquo;
            </p>
            <div className="text-white">
              <p className="font-serif text-lg select-none">{quotes[currentQuote].author}</p>
              <p className="text-sm opacity-80 select-none">{quotes[currentQuote].title}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevQuote}
              className="pointer-events-auto p-2 text-white/50 hover:text-white transition-colors duration-200"
              aria-label="Previous quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextQuote}
              className="pointer-events-auto p-2 text-white/50 hover:text-white transition-colors duration-200"
              aria-label="Next quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentQuote === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteCarousel 