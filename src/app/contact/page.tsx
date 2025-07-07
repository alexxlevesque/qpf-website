'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-serif text-qpf-dark text-center mb-16">
            Get in Touch
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-qpf-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-qpf-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-qpf-dark">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-qpf-dark">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-qpf-gold/20 shadow-sm focus:border-qpf-gold focus:ring-qpf-gold"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-qpf-gold hover:bg-qpf-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qpf-gold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-qpf-dark/80">
                You can also reach us at{' '}
                <a
                  href="mailto:personalfinance@clubs.queensu.ca"
                  className="text-qpf-gold hover:text-qpf-gold/80"
                >
                  personalfinance@clubs.queensu.ca
                </a>
              </p>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/queens.personalfinance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-qpf-gold hover:text-qpf-gold/80"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 