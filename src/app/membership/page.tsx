'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Membership() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Program Overview */}
        <section className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/membership-bg.jpg"
              alt="Membership Background"
              fill
              className="object-cover filter brightness-90 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-8 fade-up">
              Join QPF
            </h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-white/90 mb-12 fade-up delay-200">
                Become a member of Queen&apos;s Personal Finance and gain access to exclusive resources,
                workshops, and networking opportunities. We&apos;re here to help you build a strong
                foundation for your financial future.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 fade-up">
              <h2 className="text-2xl font-serif text-qpf-dark mb-8 text-center">
                Membership Registration
              </h2>
              <div className="text-center">
                <p className="text-lg text-qpf-dark/80 mb-4">
                  Membership registration coming soon!
                </p>
                <p className="text-sm text-qpf-dark/60">
                  We're working hard to bring you an amazing membership experience. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusiveness */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-qpf-dark mb-8">
                Our Commitment to Inclusivity
              </h2>
              <p className="text-lg text-qpf-dark/80 mb-8">
                QPF is open to all students across all years, regardless of faculty.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule + Objectives */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-qpf-dark mb-8">
                Program Schedule
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <p className="text-lg text-qpf-dark/80 italic">
                  Coming soon! Stay tuned for our upcoming events and workshops.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 