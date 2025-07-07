'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const teamMembers = [
  {
    name: 'Ezekiel Madruga',
    title: 'Executive Director',
    group: 'Executive Directors',
    image: '/team/ezekiel.png'
  },
  {
    name: 'Cyrus Horner',
    title: 'Executive Director',
    group: 'Executive Directors',
    image: '/team/cyrus.png'
  },
  {
    name: 'Luke Wilson',
    title: 'Director',
    group: 'Sponsorships',
    image: '/team/luke.png'
  },
  {
    name: 'Arman Gulamhussein',
    title: 'Director',
    group: 'Culture',
    image: '/team/arman.png'
  },
  {
    name: 'Henry Carter',
    title: 'Director',
    group: 'Logistics',
    image: '/team/henry.png'
  },
  {
    name: 'Talia Charach',
    title: 'Director',
    group: 'Marketing',
    image: '/team/talia.png'
  },
  {
    name: 'Victoria Orlando',
    title: 'Director',
    group: 'Student Engagement',
    image: '/team/victoria.png'
  },
  {
    name: 'Alessandro Napoli',
    title: 'Director',
    group: 'Brand',
    image: '/team/alessandro.png'
  },
  {
    name: 'Alex Levesque',
    title: 'Director',
    group: 'Web Development',
    image: '/team/alex.png'
  }
]

const groupOrder = [
  'Executive Directors',
  'Sponsorships',
  'Culture',
  'Logistics',
  'Marketing',
  'Student Engagement',
  'Brand',
  'Web Development'
]

export default function Team() {
  useScrollAnimation()

  const groupedMembers = groupOrder.reduce((acc, group) => {
    const members = teamMembers.filter(member => member.group === group)
    if (members.length > 0) {
      acc[group] = members
    }
    return acc
  }, {} as Record<string, typeof teamMembers>)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Team Hero Section */}
        <section className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/team-bg.jpg"
              alt="Team Background"
              fill
              className="object-cover filter brightness-90 contrast-75 saturate-50 sepia hue-rotate-[340deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-qpf-dark/90 to-qpf-gold/40 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-white text-center mb-8 fade-up">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-16 fade-up delay-200">
              A dedicated group of students passionate about making financial education accessible to all.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {groupOrder.map((group, groupIndex) => (
              groupedMembers[group] && (
                <div key={group} className="mb-16">
                  <h2 className="text-2xl font-serif text-qpf-dark mb-8 fade-up">{group}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {groupedMembers[group].map((member, index) => (
                      <div
                        key={member.name}
                        className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 fade-up delay-${Math.min(index * 200, 600)}`}
                      >
                        <div className="aspect-w-1 aspect-h-1 relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-serif text-qpf-dark">{member.name}</h3>
                          <p className="text-qpf-dark/80">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 