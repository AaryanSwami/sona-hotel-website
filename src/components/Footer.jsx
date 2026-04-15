import { Link } from 'react-router-dom'

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

const footerLinks = [
  { label: 'Sustainability', to: '/about' },
  { label: 'Heritage', to: '/about' },
  { label: 'Gallery', to: '/about' },
]

const policyLinks = [
  { label: 'Press', to: '/' },
  { label: 'Reservation Policy', to: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1b1c1c] text-stone-400">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Block */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="font-headline text-3xl text-stone-50 uppercase tracking-tighter block">
              Sona
            </Link>
            <p className="text-[11px] uppercase tracking-[0.12em] leading-relaxed text-stone-500 max-w-xs">
              A legacy of architectural precision and uncompromising luxury in the heart of the tropics.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="mailto:hello@sonahotel.com" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group">
                <span className="material-symbols-outlined text-stone-500 group-hover:text-white text-lg">mail</span>
              </a>
              <a href="tel:+1234567890" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group">
                <span className="material-symbols-outlined text-stone-500 group-hover:text-white text-lg">call</span>
              </a>
              <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group">
                <span className="material-symbols-outlined text-stone-500 group-hover:text-white text-lg">share</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[11px] uppercase tracking-[0.1em] text-stone-500 hover:text-primary-container transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div className="space-y-5">
            <h4 className="text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[11px] uppercase tracking-[0.1em] text-stone-500 hover:text-primary-container transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div className="space-y-5">
            <h4 className="text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase">Policy</h4>
            <ul className="space-y-3">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[11px] uppercase tracking-[0.1em] text-stone-500 hover:text-primary-container transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.1em] text-stone-600">
            © {new Date().getFullYear()} Sona Luxury Hotel. A legacy of architectural precision.
          </p>
          <div className="flex gap-6 md:gap-8">
            {['Privacy', 'Terms', 'Cookies'].map((text) => (
              <a
                key={text}
                href="#"
                className="text-[10px] uppercase tracking-[0.1em] text-stone-600 hover:text-stone-200 transition-colors"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
