'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Our Story Section */}
        <section className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/ourstory-bg.jpg"
              alt="Our Story Background"
              fill
              className="object-cover filter brightness-90 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-8 fade-up">Our Story</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-white/90 mb-8 fade-up delay-200">
                Founded in 2025, QPF emerged in response to the lack of student organizations focused on financial literacy. We empower students to take charge of their finances in a way that works for them.
              </p>
            </div>
          </div>
        </section>

        {/* Expanded Pillars Section */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-qpf-dark text-center mb-16 fade-up">Our Three Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Practical Education */}
              <div className="bg-white p-8 rounded-lg shadow-sm fade-up">
                <div className="text-qpf-gold mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-qpf-dark mb-4">Practical Education</h3>
                <p className="text-qpf-dark/80">
                  Delivering digestible workshops, toolkits, and templates students can apply immediately. Our focus is on real-world applications that make a difference in your daily financial decisions.
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
                  Open to all students, regardless of program or year — no prior financial knowledge required. We believe financial education should be accessible to everyone at Queen's.
                </p>
              </div>

              {/* Long-Term Benefits */}
              <div className="bg-white p-8 rounded-lg shadow-sm fade-up delay-400">
                <div className="text-qpf-gold mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-qpf-dark mb-4">Long-Term Benefits</h3>
                <p className="text-qpf-dark/80">
                  Helping students build habits that last well beyond their time at Queen's. Our goal is to provide you with the foundation for lifelong financial success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Button */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-4 border-2 border-qpf-gold text-qpf-gold hover:bg-qpf-gold hover:text-white transition-colors duration-200 rounded-md text-lg font-medium"
            >
              Meet Our Team
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 