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

        {/* Team Overview Section */}
        <section className="py-16 bg-qpf-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-up">
                <div className="text-3xl font-serif text-qpf-gold mb-2">{teamMembers.length}</div>
                <div className="text-qpf-dark/80">Team Members</div>
              </div>
              <div className="fade-up delay-200">
                <div className="text-3xl font-serif text-qpf-gold mb-2">{groupOrder.length}</div>
                <div className="text-qpf-dark/80">Departments</div>
              </div>
              <div className="fade-up delay-400">
                <div className="text-3xl font-serif text-qpf-gold mb-2">100%</div>
                <div className="text-qpf-dark/80">Student-Led</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {groupOrder.map((group, groupIndex) => (
              groupedMembers[group] && (
                <div key={group} className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-serif text-qpf-dark mb-3 fade-up">{group}</h2>
                    <div className="w-16 h-1 bg-qpf-gold mx-auto fade-up delay-200"></div>
                  </div>
                  
                  <div className={`grid gap-6 ${
                    groupedMembers[group].length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
                    groupedMembers[group].length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' :
                    groupedMembers[group].length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  }`}>
                    {groupedMembers[group].map((member, index) => (
                      <div
                        key={member.name}
                        className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 fade-up delay-${Math.min(index * 200, 600)}`}
                      >
                        <div className="aspect-w-3 aspect-h-4 relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-serif text-qpf-dark mb-1">{member.name}</h3>
                          <p className="text-qpf-gold font-medium text-sm">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-qpf-dark mb-8 fade-up">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-qpf-dark/80 mb-8 fade-up delay-200">
              We&apos;re always looking for passionate students to help us grow and make a difference in financial education.
            </p>
            <div className="fade-up delay-400">
              <a
                href="/membership"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-qpf-gold hover:bg-qpf-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qpf-gold transition-colors duration-200"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 