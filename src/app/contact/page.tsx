'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import InstagramFeed from '@/components/sections/InstagramFeed'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Button from '@/components/ui/Button'

export default function Contact() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-sans text-ink text-center mb-16 fade-up">
            Get in Touch
          </h1>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-ink/10 p-12 mb-8 fade-up delay-200">
              <div className="mb-8">
                <div className="w-16 h-16 bg-ink/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-ink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-sans text-ink mb-4">We&apos;re here to help.</h2>
                <p className="text-ink/80 text-lg leading-relaxed">
                  Questions about our workshops or membership? Send us a note.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-sand-100 rounded-xl p-6 text-left">
                  <h3 className="text-lg font-medium text-ink mb-2">Email us</h3>
                  <p className="text-ink/70 mb-4">
                    Send us an email and we&apos;ll get back to you as soon as possible.
                  </p>
                  <Button href="mailto:e.madruga@queensu.ca" variant="primary" className="inline-flex">
                    e.madruga@queensu.ca
                  </Button>
                </div>

                <div className="bg-sand-100 rounded-xl p-6 text-left">
                  <h3 className="text-lg font-medium text-ink mb-2">Follow us</h3>
                  <p className="text-ink/70 mb-4">
                    Stay updated with our latest events, tips, and financial education content.
                  </p>
                  <Button
                    href="https://www.instagram.com/queens.personalfinance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="inline-flex"
                  >
                    Follow on Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Instagram Feed Section */}
      <div className="fade-up">
        <InstagramFeed />
      </div>

      <Footer />
    </>
  )
} 