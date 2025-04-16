const Footer = () => {
  return (
    <footer className="bg-qpf-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left side - Logo and description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-serif text-qpf-gold mb-4">Queen&apos;s Personal Finance</h2>
            <p className="text-white/60 max-w-md">
              Canada&apos;s premier student-run financial education initiative serving students across Queen&apos;s University.
            </p>
          </div>

          {/* Right side - Navigation and social links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-white/60 hover:text-qpf-gold transition-colors duration-200">About</a>
              <a href="/membership" className="text-white/60 hover:text-qpf-gold transition-colors duration-200">Membership</a>
              <a href="/contact" className="text-white/60 hover:text-qpf-gold transition-colors duration-200">Contact Us</a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/queens.personalfinance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-qpf-gold transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
              <a
                href="mailto:personalfinance@clubs.queensu.ca"
                className="text-white/60 hover:text-qpf-gold transition-colors duration-200"
              >
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 