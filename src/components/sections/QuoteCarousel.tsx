'use client'

import { useState } from 'react'

const quotes = [
  {
    text: "We're passionate about making financial education accessible to every student at Queen's.",
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
    text: "We believe in teaching finance in a way that's relatable and easy to understand.",
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

  return (
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif text-white mb-8 italic">
              &ldquo;{quotes[currentQuote].text}&rdquo;
            </p>
            <div className="text-white">
              <p className="text-lg font-medium">{quotes[currentQuote].author}</p>
              <p className="text-white/60">{quotes[currentQuote].title}</p>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex justify-between w-full">
            <button
              onClick={prevQuote}
              className="bg-white/20 backdrop-blur-sm text-white hover:text-qpf-gold hover:bg-white/30 p-2 rounded-full shadow-md transition-all duration-200"
              aria-label="Previous quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextQuote}
              className="bg-white/20 backdrop-blur-sm text-white hover:text-qpf-gold hover:bg-white/30 p-2 rounded-full shadow-md transition-all duration-200"
              aria-label="Next quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

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
    </div>
  )
}

export default QuoteCarousel 