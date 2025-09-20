'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import QuoteCarousel from '@/components/sections/QuoteCarousel'
import PartnerCarousel from '@/components/sections/PartnerCarousel'
import InstagramFeed from '@/components/sections/InstagramFeed'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Button from '@/components/ui/Button'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      
      {/* Hero Section - Warm photo backdrop with overlay */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-bg.jpg"
            alt="Campus backdrop"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
        </div>

        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="heading-xl fade-up">Queen's Personal Finance.</h1>
              <p className="text-body mt-6 fade-up delay-200 max-w-2xl">
                Clear, practical guidance for Queen&apos;s students. Learn the basics. Build confidence.
              </p>
              <div className="mt-10 flex items-center gap-4 fade-up delay-400">
                <Button href="/membership" variant="primary" size="lg">Get started</Button>
                <Button href="/about" variant="secondary" size="lg">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Mission Section - Clean design without background */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-right">
              <h2 className="heading-lg mb-8">Our Vision</h2>
              <p className="text-body mb-8">
                To provide practical and essential financial education to every Queen&apos;s student.
              </p>
              <div className="mt-8">
                <Button href="/membership" variant="primary">
                  Start Learning Now
                </Button>
              </div>
            </div>
            <div className="fade-left">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/candid/team.jpeg"
                  alt="Team candid photo"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - Diagonal background */}
      <section className="relative py-20 bg-sand-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
          <QuoteCarousel />
        </div>
      </section>

      {/* Why Choose QPF Section - Combined Three Pillars */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="heading-lg mb-6 fade-up">Built for real life</h2>
            <p className="text-ink/80 text-lg max-w-3xl mx-auto fade-up delay-200">
              Learn what matters. No jargon. No fluff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Practical Education */}
            <div className="panel p-8 hover:shadow-card transition-all duration-300 fade-up">
              <div className="text-ink mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 0A11.115 11.115 0 0113 13.23a1 1 0 01-.89.89 8.969 8.969 0 00-1.05.174V10.12l1.72-.723z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans text-ink mb-4">Practical Education</h3>
              <p className="text-ink/80 mb-4">Learn essential financial skills through hands-on workshops and real-world applications.</p>
              <p className="text-sm text-ink/60">Expert-led learning from experienced students and industry professionals who understand your financial journey.</p>
            </div>

            {/* Accessibility */}
            <div className="panel p-8 hover:shadow-card transition-all duration-300 fade-up delay-200">
              <div className="text-ink mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans text-ink mb-4">Community Support</h3>
              <p className="text-ink/80 mb-4">Open to all students, regardless of program or experience level.</p>
              <p className="text-sm text-ink/60">Connect with like-minded peers and build a network of financially savvy individuals.</p>
            </div>

            {/* Long-Term Benefits */}
            <div className="panel p-8 hover:shadow-card transition-all duration-300 fade-up delay-400">
              <div className="text-ink mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans text-ink mb-4">Practical Skills</h3>
              <p className="text-ink/80 mb-4">Build lasting financial habits that extend beyond your university years.</p>
              <p className="text-sm text-ink/60">Gain real-world financial skills that you can apply immediately and throughout your life.</p>
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
          <h3 className="text-2xl md:text-3xl font-sans text-ink mb-6 fade-up">
            Learn More About Us
          </h3>
          <p className="text-ink/80 text-lg mb-8 max-w-2xl mx-auto fade-up delay-200">
              Discover our story, mission, and the team behind Queen&apos;s Premier Financial Education Initiative.
            </p>
          <div className="fade-up delay-400">
            <Button href="/about" variant="primary">About QPF</Button>
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