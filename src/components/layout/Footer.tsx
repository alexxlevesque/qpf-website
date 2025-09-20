const Footer = () => {
  return (
    <footer className="bg-white text-ink border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Queen&apos;s Personal Finance</h2>
            <p className="text-ink/70 max-w-md mt-3">
              Canada&apos;s premier student-run financial education initiative serving students across Queen&apos;s University.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-ink/70 hover:text-ink transition-colors">About</a>
              <a href="/membership" className="text-ink/70 hover:text-ink transition-colors">Membership</a>
              <a href="/contact" className="text-ink/70 hover:text-ink transition-colors">Contact</a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/queens.personalfinance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/60 hover:text-ink transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
              <a
                href="mailto:e.madruga@queensu.ca"
                className="text-ink/60 hover:text-ink transition-colors"
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

        <div className="pt-8 mt-8 border-t border-ink/10 text-sm text-ink/60">
          © {new Date().getFullYear()} Queen&apos;s Personal Finance
        </div>
      </div>
    </footer>
  )
}

export default Footer