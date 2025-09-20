'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function JoinUs() {
  useScrollAnimation()

  const roles = [
    {
      title: 'Mentors',
      description: 'Join our team of passionate educators who help deliver financial literacy workshops and create educational content.',
      responsibilities: [
        'Develop and deliver engaging financial workshops',
        'Create educational content and resources',
        'Mentor students in their financial journey'
      ]
    },
    {
      title: 'Club Delegates',
      description: 'Represent QPF across campus and help us build strong relationships with other student organizations.',
      responsibilities: [
        'Represent QPF at campus events',
        'Build partnerships with other clubs',
        'Help organize collaborative events'
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-transparent pt-16">
        {/* Fall Hiring */}
        <section className="relative py-24">
          <div className="absolute inset-0 -z-10">
            <Image
              src={"/images/tax return \"need help?\".jpg"}
              alt="Join Us background"
              fill
              className="object-cover blur-[2px]"
            />
            <div className="absolute inset-0 bg-brand-yellow/10 bg-sand-100/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6 fade-up">Join Our Team</h1>
              <p className="text-xl text-ink/80 max-w-3xl mx-auto fade-up delay-200">
                Be part of a dynamic team dedicated to making financial education accessible to every Queen&apos;s student.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roles.map((role, index) => (
                <div key={role.title} className={`panel p-8 fade-right delay-${index * 200}`}>
                  <h3 className="text-2xl font-serif text-ink mb-4">{role.title}</h3>
                  <p className="text-ink/80 mb-6">{role.description}</p>
                  <div>
                    <h4 className="text-lg font-medium text-ink mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-ink/80 space-y-2">
                      {role.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center fade-up delay-600">
              <div className="inline-flex items-center px-8 py-4 bg-ink/10 text-ink/60 rounded-xl text-lg font-medium cursor-not-allowed">
                Applications coming soon
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Candid Photos Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6 fade-up">Join Our Community</h2>
              <p className="text-ink/80 text-lg max-w-3xl mx-auto fade-up delay-200">
                See what it's like to be part of the QPF family.
              </p>
            </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                      <Image
                        src={i <= 1 ? "/images/candid/workshop.jpeg" : i <= 3 ? "/images/candid/team.jpeg" : "/images/candid/advisory.jpg"}
                        alt={`Community photo ${i}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-sand-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-ink text-center mb-16">
              Resources
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="panel p-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-6 text-brand-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <h3 className="text-xl font-serif text-ink mb-4">Educational Materials</h3>
                <p className="text-ink/80 mb-8">
                  Our collection of financial education resources and toolkits will be available soon.
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