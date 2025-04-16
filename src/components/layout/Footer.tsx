const Footer = () => {
  return (
    <footer className="bg-qpf-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Queen&apos;s Personal Finance</h3>
            <p className="text-white/80">
              Empowering students with practical financial knowledge for life beyond university.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/80 hover:text-qpf-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-white/80 hover:text-qpf-gold transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/membership" className="text-white/80 hover:text-qpf-gold transition-colors">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-white/80">
              <a
                href="mailto:personalfinance@clubs.queensu.ca"
                className="hover:text-qpf-gold transition-colors"
              >
                personalfinance@clubs.queensu.ca
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Queen&apos;s Personal Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 