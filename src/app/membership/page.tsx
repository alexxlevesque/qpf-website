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
                Our membership is open to everyone — no experience required. Just an interest in learning how to better manage your money.
              </p>
            </div>
          </div>
        </section>

        {/* Sign-Up Form */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 fade-up">
              <h2 className="text-2xl font-serif text-qpf-dark mb-8 text-center">
                Membership Registration
              </h2>
              <form className="space-y-6">
                <div className="fade-up delay-200">
                  <label htmlFor="name" className="block text-sm font-medium text-qpf-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring focus:ring-qpf-gold/20"
                  />
                </div>
                <div className="fade-up delay-300">
                  <label htmlFor="email" className="block text-sm font-medium text-qpf-dark">
                    Queen's Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring focus:ring-qpf-gold/20"
                  />
                </div>
                <div className="fade-up delay-400">
                  <label htmlFor="year" className="block text-sm font-medium text-qpf-dark">
                    Year of Study
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring focus:ring-qpf-gold/20"
                  >
                    <option>First Year</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Fourth Year</option>
                    <option>Graduate Student</option>
                  </select>
                </div>
                <div className="fade-up delay-500">
                  <label htmlFor="program" className="block text-sm font-medium text-qpf-dark">
                    Program
                  </label>
                  <input
                    type="text"
                    id="program"
                    name="program"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring focus:ring-qpf-gold/20"
                  />
                </div>
                <div className="fade-up delay-600">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-qpf-gold hover:bg-qpf-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qpf-gold"
                  >
                    Register
                  </button>
                </div>
              </form>
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
                We are committed to empowering students across all years, faculties, and levels of experience.
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