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
    specialty: 'Sponsorships',
    group: 'Directors',
    image: '/team/luke.png'
  },
  {
    name: 'Arman Gulamhussein',
    title: 'Director',
    specialty: 'Culture',
    group: 'Directors',
    image: '/team/arman.png'
  },
  {
    name: 'Henry Carter',
    title: 'Director',
    specialty: 'Logistics',
    group: 'Directors',
    image: '/team/henry.png'
  },
  {
    name: 'Talia Charach',
    title: 'Director',
    specialty: 'Marketing',
    group: 'Directors',
    image: '/team/talia.png'
  },
  {
    name: 'Victoria Orlando',
    title: 'Director',
    specialty: 'Student Engagement',
    group: 'Directors',
    image: '/team/victoria.png'
  },
  {
    name: 'Alessandro Napoli',
    title: 'Director',
    specialty: 'Brand',
    group: 'Directors',
    image: '/team/alessandro.png'
  }
]

const groupOrder = [
  'Executive Directors',
  'Directors'
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
      <main className="min-h-screen bg-transparent pt-16">
        {/* Team Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/team-bg.jpg"
              alt="Team background"
              fill
              className="object-cover blur-[2px]"
            />
            <div className="absolute inset-0 bg-sand-100/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-ink text-center mb-8 fade-up">
              Meet Our Team
            </h1>
            <p className="text-xl text-ink/80 text-center max-w-3xl mx-auto mb-16 fade-up delay-200">
              A dedicated group of students passionate about making financial education accessible to all.
            </p>
          </div>
        </section>

        {/* Team Overview Section */}
        <section className="py-16 bg-sand-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-up">
                <div className="text-3xl font-serif text-ink mb-2">{teamMembers.length}</div>
                <div className="text-ink/80">Team Members</div>
              </div>
              <div className="fade-up delay-200">
                <div className="text-3xl font-serif text-ink mb-2">{groupOrder.length}</div>
                <div className="text-ink/80">Departments</div>
              </div>
              <div className="fade-up delay-400">
                <div className="text-3xl font-serif text-ink mb-2">100%</div>
                <div className="text-ink/80">Student-Led</div>
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
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
                  }`}>
                    {groupedMembers[group].map((member, index) => (
                      <div
                        key={member.name}
                        className={`panel overflow-hidden hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 fade-up delay-${Math.min(index * 200, 600)}`}
                      >
                        <div className="aspect-w-3 aspect-h-4 relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-serif text-ink mb-1">{member.name}</h3>
                          <p className="text-ink/70 font-medium text-sm">{member.title}</p>
                          {member.specialty && (
                            <p className="text-ink/70 text-xs mt-1">{member.specialty}</p>
                          )}
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
        <section className="py-20 bg-sand-100/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-ink mb-8 fade-up">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-ink/80 mb-8 fade-up delay-200">
              We&apos;re always looking for passionate students to help us grow and make a difference in financial education.
            </p>
            <div className="fade-up delay-400">
              <a href="/membership" className="btn-primary text-lg">
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