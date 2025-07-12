'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useState } from 'react'

export default function Membership() {
  useScrollAnimation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    faculty: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Application submitted successfully! We\'ll be in touch soon.')
        setFormData({
          name: '',
          email: '',
          year: 'First Year',
          faculty: 'Commerce'
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

        {/* Sign-Up Form */}
        <section className="py-20 bg-qpf-gold/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 fade-up">
              <h2 className="text-2xl font-serif text-qpf-dark mb-8 text-center">
                Membership Registration
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fade-up delay-200">
                  <label htmlFor="name" className="block text-sm font-medium text-qpf-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                  />
                </div>
                <div className="fade-up delay-300">
                  <label htmlFor="email" className="block text-sm font-medium text-qpf-dark mb-2">
                    Queen&apos;s Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                  />
                </div>
                <div className="fade-up delay-400">
                  <label htmlFor="year" className="block text-sm font-medium text-qpf-dark mb-2">
                    Year of Study
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                  >
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Fourth Year">Fourth Year</option>
                    <option value="Graduate Student">Graduate Student</option>
                  </select>
                </div>
                <div className="fade-up delay-500">
                  <label htmlFor="faculty" className="block text-sm font-medium text-qpf-dark mb-2">
                    Faculty
                  </label>
                  <select
                    id="faculty"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                  >
                    <option value="Arts and Science">Arts and Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Computing">Computing</option>
                    <option value="Health Sciences">Health Sciences</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div className={`fade-up delay-500 p-4 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <div className="fade-up delay-600">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium transition-colors duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'text-white bg-qpf-gold hover:bg-qpf-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qpf-gold'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
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