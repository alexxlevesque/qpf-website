'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import QuoteCarousel from '@/components/sections/QuoteCarousel'
import InstagramFeed from '@/components/sections/InstagramFeed'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover filter brightness-90 contrast-30 saturate-50 sepia hue-rotate-[340deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 fade-up">
              Queen&apos;s Personal Finance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 fade-up delay-200">
              Empowering students with practical financial knowledge for life beyond university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-400">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-qpf-gold hover:bg-qpf-gold/90"
              >
                Join Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-qpf-dark mb-8 fade-up">Our Mission</h2>
              <p className="text-xl text-qpf-dark/80 mb-12 fade-up delay-200">
                We&apos;re dedicated to making financial literacy accessible to every Queen&apos;s student through practical education, real-world applications, and a supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="py-24 bg-qpf-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-qpf-dark text-center mb-16 fade-up">Our Three Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Practical Education */}
              <div className="bg-white p-8 rounded-lg shadow-sm fade-up">
                <div className="text-qpf-gold mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-qpf-dark mb-4">Practical Education</h3>
                <p className="text-qpf-dark/80">
                  We focus on real-world applications that make a difference in your daily financial decisions.
                </p>
              </div>

              {/* Accessibility */}
              <div className="bg-white p-8 rounded-lg shadow-sm fade-up delay-200">
                <div className="text-qpf-gold mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-qpf-dark mb-4">Accessibility</h3>
                <p className="text-qpf-dark/80">
                  Our resources are designed to be accessible and understandable, regardless of your background.
                </p>
              </div>

              {/* Long-term Impact */}
              <div className="bg-white p-8 rounded-lg shadow-sm fade-up delay-400">
                <div className="text-qpf-gold mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-qpf-dark mb-4">Long-term Impact</h3>
                <p className="text-qpf-dark/80">
                  We focus on building sustainable financial habits that will benefit you throughout your career and life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/stats-bg.jpg"
              alt="Stats Background"
              fill
              className="object-cover filter brightness-90 contrast-30 saturate-50 sepia hue-rotate-[340deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-up">
                <div className="text-4xl font-serif text-white mb-2">100+</div>
                <div className="text-white/90">Active Members</div>
              </div>
              <div className="fade-up delay-200">
                <div className="text-4xl font-serif text-white mb-2">20+</div>
                <div className="text-white/90">Workshops Hosted</div>
              </div>
              <div className="fade-up delay-400">
                <div className="text-4xl font-serif text-white mb-2">15+</div>
                <div className="text-white/90">Partner Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/quote-bg.jpg"
              alt="Quote Background"
              fill
              className="object-cover filter brightness-90 contrast-30 saturate-50 sepia hue-rotate-[340deg] blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteCarousel />
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-24 bg-white">
          <InstagramFeed />
        </section>
      </main>
      <Footer />
    </>
  )
} 