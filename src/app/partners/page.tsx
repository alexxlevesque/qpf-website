'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'
import { useEffect } from 'react'

// Dummy partner data - matching the carousel
const partners = [
  {
    id: 1,
    name: 'Partner 1',
    initials: 'P1',
    description: 'Partner 1 has been a cornerstone partner of QPF since our inception, providing financial expertise, mentorship opportunities, and real-world insights to our members.',
    partnership: 'Partner 1 supports our mission through guest speaker series, internship opportunities, and financial literacy workshops.',
    category: 'Financial Services'
  }
]

export default function Partners() {
  useScrollAnimation()

  useEffect(() => {
    // Handle hash navigation with offset for fixed header
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        const headerHeight = 120 // Increased offset to position sections lower
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        })
      }
    }
  }, [])

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10">
            <Image
              src="/images/credit card and laptop.jpg"
              alt="Partners Background"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-ink">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 fade-up">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl fade-up delay-200">
              We collaborate with industry leaders to create real opportunities for students.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-sand-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-brand-yellow mx-auto mb-4 fade-up"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6 fade-up delay-100">Our Strategic Partnership</h2>
              <div className="w-16 h-1 bg-brand-yellow mx-auto fade-up delay-200"></div>
            </div>
            <p className="text-body max-w-3xl mx-auto fade-up delay-300 leading-relaxed">
              Our partner plays a crucial role in delivering high-quality financial education and creating opportunities for our members.
            </p>
          </div>

          <div className="flex justify-center">
            {partners.map((partner, index) => (
              <div 
                key={partner.id} 
                id={`partner-${partner.id}`}
                className="group relative panel p-8 hover:shadow-card transition-all duration-500 hover:scale-[1.02] fade-up overflow-hidden max-w-2xl"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-500">
                      <span className="text-brand-yellow font-bold text-xl">
                        {partner.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-ink mb-1">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-sm rounded-full font-medium">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-ink/80 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="border-t border-stroke pt-4">
                    <h4 className="font-medium text-ink mb-2">Partnership Focus:</h4>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      {partner.partnership}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-brand-yellow mx-auto mb-4 fade-up"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6 fade-up delay-100">Why Partner With Us?</h2>
              <div className="w-16 h-1 bg-brand-yellow mx-auto fade-up delay-200"></div>
            </div>
            <p className="text-body max-w-3xl mx-auto fade-up delay-300 leading-relaxed">
              Our partnerships create mutual value for both our organization and our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center fade-up p-8 rounded-2xl hover:bg-ink/5 transition-all duration-500">
              <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-ink">Access to Talent</h3>
              <p className="text-ink/80 leading-relaxed">Connect with motivated, financially literate students who are eager to learn and grow in your industry.</p>
            </div>
            
            <div className="group text-center fade-up delay-200 p-8 rounded-2xl hover:bg-ink/5 transition-all duration-500">
              <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-ink">Brand Visibility</h3>
              <p className="text-ink/80 leading-relaxed">Increase your brand presence among Queen&apos;s students and demonstrate your commitment to financial education.</p>
            </div>
            
            <div className="group text-center fade-up delay-400 p-8 rounded-2xl hover:bg-ink/5 transition-all duration-500">
              <div className="text-brand-yellow mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-ink">Industry Impact</h3>
              <p className="text-ink/80 leading-relaxed">Contribute to the development of the next generation of financially savvy professionals and leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-6 fade-up">Interested in Partnering?</h2>
          <p className="text-xl text-ink/80 mb-8 max-w-3xl mx-auto fade-up delay-200">
            We&apos;re always looking for new partners who share our vision of financial education for all students.
          </p>
          <div className="fade-up delay-400">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 