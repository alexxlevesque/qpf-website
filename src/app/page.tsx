'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import QuoteCarousel from '@/components/sections/QuoteCarousel'
import PartnerCarousel from '@/components/sections/PartnerCarousel'
import InstagramFeed from '@/components/sections/InstagramFeed'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      
      {/* Hero Section - Full screen background with overlay */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover filter brightness-90 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-qpf-dark/80 to-qpf-gold/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-medium mb-6 fade-up">WE ARE</h2>
            <h1 className="text-5xl md:text-6xl font-serif font-normal mb-8 fade-up delay-200">
              Queen&apos;s Premier Financial Education Initiative
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl fade-up delay-400">
              A student-run education initiative centred around teaching people how to manage their money, their way.
            </p>
            <div className="fade-up delay-600">
              <Link href="/about" className="btn-white">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Mission Section - Clean design without background */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl fade-right">
            <h2 className="heading-lg mb-8">Our Vision</h2>
            <p className="text-body mb-8">
              To provide practical and essential financial education to every Queen&apos;s student.
            </p>
            <div className="mt-8">
              <Link href="/membership" className="btn-primary">
                Start Learning Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Diagonal background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 skew-y-6 transform origin-top-left">
          <Image
            src="/images/quote-bg.jpg"
            alt="Quote Background"
            fill
            className="object-cover filter brightness-75 contrast-75 saturate-50 sepia hue-rotate-[340deg] blur-[2px] grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-dark/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 -skew-y-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 skew-y-6 fade-in">
            <QuoteCarousel />
          </div>
        </div>
      </section>

      {/* Why Choose QPF Section - Combined Three Pillars */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-qpf-dark mb-6 fade-up">Why Choose QPF?</h2>
            <p className="text-xl text-qpf-dark/80 max-w-3xl mx-auto fade-up delay-200">
              Join a community dedicated to your financial success through our three core pillars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Practical Education */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-qpf-gold/20 hover:shadow-lg transition-all duration-300 fade-up">
              <div className="text-qpf-gold mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 0A11.115 11.115 0 0113 13.23a1 1 0 01-.89.89 8.969 8.969 0 00-1.05.174V10.12l1.72-.723z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-qpf-dark mb-4">Practical Education</h3>
              <p className="text-qpf-dark/80 mb-4">Learn essential financial skills through hands-on workshops and real-world applications.</p>
              <p className="text-sm text-qpf-dark/60">Expert-led learning from experienced students and industry professionals who understand your financial journey.</p>
            </div>

            {/* Accessibility */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-qpf-gold/20 hover:shadow-lg transition-all duration-300 fade-up delay-200">
              <div className="text-qpf-gold mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-qpf-dark mb-4">Community Support</h3>
              <p className="text-qpf-dark/80 mb-4">Open to all students, regardless of program or experience level.</p>
              <p className="text-sm text-qpf-dark/60">Connect with like-minded peers and build a network of financially savvy individuals.</p>
            </div>

            {/* Long-Term Benefits */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-qpf-gold/20 hover:shadow-lg transition-all duration-300 fade-up delay-400">
              <div className="text-qpf-gold mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-qpf-dark mb-4">Practical Skills</h3>
              <p className="text-qpf-dark/80 mb-4">Build lasting financial habits that extend beyond your university years.</p>
              <p className="text-sm text-qpf-dark/60">Gain real-world financial skills that you can apply immediately and throughout your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Carousel Section */}
      <section className="relative">
        <PartnerCarousel />
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-qpf-dark mb-6 fade-up">
            Learn More About Us
          </h3>
                      <p className="text-qpf-dark/80 text-lg mb-8 max-w-2xl mx-auto fade-up delay-200">
              Discover our story, mission, and the team behind Queen&apos;s Premier Financial Education Initiative.
            </p>
          <div className="fade-up delay-400">
            <Link href="/about" className="btn-primary">
              About QPF
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <div className="fade-up">
        <InstagramFeed />
      </div>

      <Footer />
    </>
  )
} 