'use client'

import Script from 'next/script'
import { useEffect } from 'react'

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
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-qpf-dark text-center mb-12">Follow Our Journey</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/queens.personalfinance/embed"
            className="w-full max-w-3xl aspect-[4/5]"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          />
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed 