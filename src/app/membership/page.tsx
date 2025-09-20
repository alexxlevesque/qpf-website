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
      <main className="min-h-screen bg-transparent pt-16">
        {/* Program Overview */}
        <section className="relative py-24">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/calculator.jpg"
              alt="Membership Background"
              fill
              className="object-cover blur-[2px]"
            />
            <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-ink text-center mb-8 fade-up">
              Join QPF
            </h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-ink/80 mb-12 fade-up delay-200">
                Become a member of Queen&apos;s Personal Finance and gain access to exclusive resources,
                workshops, and networking opportunities. We&apos;re here to help you build a strong
                foundation for your financial future.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="py-20 bg-sand-100/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="panel p-8 fade-up">
              <h2 className="text-2xl font-serif text-ink mb-8 text-center">
                Membership Registration
              </h2>
              <div className="text-center">
                <p className="text-lg text-ink/80 mb-4">
                  Membership registration coming soon!
                </p>
                <p className="text-sm text-ink/60">
                  We&apos;re working hard to bring you an amazing membership experience. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusiveness */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-ink mb-8">
                Our Commitment to Inclusivity
              </h2>
              <p className="text-lg text-ink/80 mb-8">
                QPF is open to all students across all years, regardless of faculty.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule + Objectives */}
        <section className="py-20 bg-sand-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-ink mb-8">
                Program Schedule
              </h2>
              <div className="panel p-8">
                <p className="text-lg text-ink/80 italic">
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