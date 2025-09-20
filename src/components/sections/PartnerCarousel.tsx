'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Dummy partner data for the carousel
const partners = [
  { id: 1, name: 'Partner 1', initials: 'P1' },
]

const PartnerCarousel = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/credit card and laptop.jpg"
          alt="Partners Background"
          fill
          className="object-cover filter brightness-75 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
        />
        <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-qpf-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-qpf-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-brand-yellow mx-auto mb-4 fade-up"></div>
            <h3 className="text-3xl md:text-4xl font-serif text-ink mb-6 fade-up delay-100">
              Trusted by Industry Leaders
            </h3>
            <div className="w-16 h-1 bg-brand-yellow mx-auto fade-up delay-200"></div>
          </div>
          <p className="text-ink/80 text-lg md:text-xl fade-up delay-300 max-w-3xl mx-auto leading-relaxed">
            Proud to partner with leading financial institutions and organizations
          </p>
        </div>

        <div className="flex justify-center items-center">
          {partners.map((partner, index) => (
            <Link
              key={partner.id}
              href={`/partners#partner-${partner.id}`}
              className={`group relative flex items-center justify-center w-40 md:w-48 h-20 md:h-24 transition-all duration-700 ease-out hover:scale-110 fade-up cursor-pointer`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ink/10 to-ink/5 rounded-2xl backdrop-blur-md border border-ink/20 group-hover:border-brand-yellow/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Partner initials */}
              <span className="relative z-10 text-ink font-bold text-xl md:text-2xl group-hover:text-brand-yellow transition-all duration-500 group-hover:scale-110">
                {partner.initials}
              </span>
              
              {/* Subtle shadow on hover */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-brand-yellow/20 to-transparent"></div>
            </Link>
          ))}
        </div>
        
        {/* Bottom accent line */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand-yellow to-transparent fade-up delay-500"></div>
        </div>
      </div>
    </div>
  )
}

export default PartnerCarousel 