'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Button from '@/components/ui/Button'

export default function About() {
  const [openPillar, setOpenPillar] = useState<number | null>(null)
  useScrollAnimation()

  const pillars = [
    {
      title: "Practical Education",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 0A11.115 11.115 0 0113 13.23a1 1 0 01-.89.89 8.969 8.969 0 00-1.05.174V10.12l1.72-.723z" />
        </svg>
      ),
      description: "Learn essential financial skills through hands-on workshops and real-world applications.",
      details: [
        "Interactive workshops covering budgeting, investing, and financial planning",
        "Case studies based on real financial scenarios",
        "Guest speakers from the financial industry",
        "Practical exercises to apply financial concepts",
        "Access to financial tools and resources"
      ]
    },
    {
      title: "Accessibility",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      description: "Open to all students, regardless of program or experience level.",
      details: [
        "No prior financial knowledge required",
        "Free membership for all Queen's students",
        "Multiple workshop levels from beginner to advanced",
        "One-on-one mentorship opportunities",
        "Accessible online resources and materials"
      ]
    },
    {
      title: "Long-Term Benefits",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
      ),
      description: "Build lasting financial habits that extend beyond your university years.",
      details: [
        "Lifetime access to alumni resources",
        "Networking opportunities with financial professionals",
        "Continued learning through alumni workshops",
        "Career development in the financial sector",
        "Alumni mentorship program"
      ]
    }
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
            <Image
              src="/images/statement past due.jpg"
              alt="About Background"
            fill
            className="object-cover blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-ink">
          <div className="max-w-4xl">
            <h2 className="text-sm uppercase tracking-wide text-ink/70 mb-4 fade-up">About us</h2>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 fade-up delay-200">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl fade-up delay-400">
              Learn about our mission, values, and the people behind Queen&apos;s Personal Finance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <h2 className="heading-lg mb-8">Our Mission</h2>
            <p className="text-body">
              Queen&apos;s Personal Finance (QPF) is a student-run education initiative centred around teaching people how to manage their money, their way. Our mission is to provide practical and essential financial education to every Queen&apos;s student, regardless of their program or experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="relative py-24 bg-sand-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <h2 className="heading-lg mb-8">Our Three Pillars</h2>
            <p className="text-body">
              These core principles guide everything we do at QPF, ensuring we provide the best possible financial education experience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="panel overflow-hidden fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                <button
                  onClick={() => setOpenPillar(openPillar === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-ink/5 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-brand-yellow">
                      {pillar.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-serif text-ink mb-1">{pillar.title}</h3>
                      <p className="text-ink/80">{pillar.description}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-brand-yellow transform transition-transform duration-200 ${
                      openPillar === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openPillar === index && (
                  <div className="px-6 pb-6 pt-2">
                    <ul className="space-y-3 text-ink/80">
                      {pillar.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-brand-yellow mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <h2 className="heading-lg mb-8">Meet Our Team</h2>
            <p className="text-body mb-8">
              Our dedicated team of students works tirelessly to bring financial education to Queen&apos;s University.
            </p>
            <div className="fade-up delay-200">
              <Button href="/team" variant="primary">View full team</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 