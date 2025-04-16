const Footer = () => {
  return (
    <footer className="bg-qpf-gold-bright py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left side - Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-qpf-dark text-2xl font-bold mb-2">QPF</h2>
            <p className="text-qpf-dark/90 text-sm max-w-md">
              Queen's premier student-run financial education initiative serving students across campus.
            </p>
          </div>

          {/* Right side - Social links and navigation */}
          <div className="flex flex-col items-start md:items-end gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/queens.personalfinance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qpf-dark hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/queens-personal-finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qpf-dark hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/queenspersonalfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-qpf-dark hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="/about" className="text-qpf-dark hover:text-white transition-colors font-medium">
                About
              </a>
              <a href="/membership" className="text-qpf-dark hover:text-white transition-colors font-medium">
                Membership
              </a>
              <a href="/contact" className="text-qpf-dark hover:text-white transition-colors font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 