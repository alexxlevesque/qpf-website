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
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Partners Background"
            fill
            className="object-cover filter brightness-90 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-qpf-dark/80 to-qpf-gold/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal mb-8 fade-up">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl fade-up delay-200">
              We&apos;re proud to collaborate with industry leaders to provide exceptional financial education opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-qpf-gold mx-auto mb-4 fade-up"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-qpf-dark mb-6 fade-up delay-100">Our Strategic Partnership</h2>
              <div className="w-16 h-1 bg-qpf-gold mx-auto fade-up delay-200"></div>
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] fade-up overflow-hidden max-w-2xl"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-qpf-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-qpf-gold/20 to-qpf-gold/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-500">
                      <span className="text-qpf-gold font-bold text-xl">
                        {partner.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-qpf-dark mb-1">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-qpf-gold/10 text-qpf-gold text-sm rounded-full font-medium">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-qpf-dark/80 mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="border-t border-qpf-gold/20 pt-4">
                    <h4 className="font-medium text-qpf-dark mb-2">Partnership Focus:</h4>
                    <p className="text-sm text-qpf-dark/70 leading-relaxed">
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
              <div className="w-16 h-1 bg-qpf-gold mx-auto mb-4 fade-up"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-qpf-dark mb-6 fade-up delay-100">Why Partner With Us?</h2>
              <div className="w-16 h-1 bg-qpf-gold mx-auto fade-up delay-200"></div>
            </div>
            <p className="text-body max-w-3xl mx-auto fade-up delay-300 leading-relaxed">
              Our partnerships create mutual value for both our organization and our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center fade-up p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500">
              <div className="text-qpf-gold mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-qpf-dark">Access to Talent</h3>
              <p className="text-qpf-dark/80 leading-relaxed">Connect with motivated, financially literate students who are eager to learn and grow in your industry.</p>
            </div>
            
            <div className="group text-center fade-up delay-200 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500">
              <div className="text-qpf-gold mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-qpf-dark">Brand Visibility</h3>
              <p className="text-qpf-dark/80 leading-relaxed">Increase your brand presence among Queen&apos;s students and demonstrate your commitment to financial education.</p>
            </div>
            
            <div className="group text-center fade-up delay-400 p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500">
              <div className="text-qpf-gold mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-qpf-dark">Industry Impact</h3>
              <p className="text-qpf-dark/80 leading-relaxed">Contribute to the development of the next generation of financially savvy professionals and leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-qpf-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-6 fade-up">Interested in Partnering?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto fade-up delay-200">
            We&apos;re always looking for new partners who share our vision of financial education for all students.
          </p>
          <div className="fade-up delay-400">
            <a href="/contact" className="btn-white">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 