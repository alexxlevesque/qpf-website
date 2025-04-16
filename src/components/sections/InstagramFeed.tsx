'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Add type declaration for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

const InstagramFeed = () => {
  useEffect(() => {
    // Reload Instagram embed script when component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-qpf-dark text-center mb-12">Follow Our Journey</h2>
        
        {/* Instagram Feed Container */}
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/queens.personalfinance/embed"
            className="w-full max-w-3xl aspect-[4/5]"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/queens.personalfinance/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-qpf-gold-bright text-qpf-gold-bright hover:bg-qpf-gold-bright hover:text-white transition-colors duration-200 rounded-md"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed 