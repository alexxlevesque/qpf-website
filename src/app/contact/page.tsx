'use client'

import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import InstagramFeed from '@/components/sections/InstagramFeed'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-serif text-qpf-dark text-center mb-16 fade-up">
            Get in Touch
          </h1>

          <div className="max-w-3xl mx-auto text-center">
                         <div className="bg-white rounded-2xl shadow-lg p-12 mb-8 fade-up delay-200">
              <div className="mb-8">
                <div className="w-16 h-16 bg-qpf-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-qpf-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif text-qpf-dark mb-4">Ready to Connect?</h2>
                <p className="text-qpf-dark/80 text-lg leading-relaxed">
                  Have questions about QPF or want to learn more about our financial education programs? 
                  We&apos;d love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-qpf-dark mb-2">Email Us</h3>
                  <p className="text-qpf-dark/70 mb-4">
                    Send us an email and we&apos;ll get back to you as soon as possible.
                  </p>
                  <a
                    href="mailto:e.madruga@queensu.ca"
                    className="inline-flex items-center px-6 py-3 bg-qpf-gold text-white rounded-lg hover:bg-qpf-gold/90 transition-colors duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    e.madruga@queensu.ca
                  </a>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-qpf-dark mb-2">Follow Us</h3>
                  <p className="text-qpf-dark/70 mb-4">
                    Stay updated with our latest events, tips, and financial education content.
                  </p>
                  <a
                    href="https://www.instagram.com/queens.personalfinance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                    Follow on Instagram
                  </a>
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