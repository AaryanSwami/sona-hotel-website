import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHeroPage = location.pathname === '/' || location.pathname === '/about'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-[0_1px_0_rgba(213,196,179,0.3)]'
          : isHeroPage
          ? 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-none'
          : 'bg-surface/80 backdrop-blur-xl'
      }`}
    >
      <nav className="flex items-center justify-between w-full px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="font-headline text-3xl md:text-4xl font-black uppercase tracking-tighter transition-colors duration-300"
          style={{ color: scrolled || !isHeroPage ? '#1b1c1c' : '#ffffff' }}
        >
          Sona
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-bold uppercase tracking-[0.15em] pb-1 transition-all duration-500 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : scrolled || !isHeroPage
                    ? 'text-on-surface-variant hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <span
              className={`material-symbols-outlined text-xl cursor-pointer transition-colors ${
                scrolled || !isHeroPage ? 'text-on-surface-variant hover:text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              search
            </span>
            <span
              className={`material-symbols-outlined text-xl cursor-pointer transition-colors ${
                scrolled || !isHeroPage ? 'text-on-surface-variant hover:text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              call
            </span>
          </div>

          <Link
            to="/rooms"
            className="hidden sm:block bg-inverse-surface text-inverse-on-surface px-6 md:px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-500"
          >
            Book Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || !isHeroPage ? 'bg-on-surface' : 'bg-white'
              } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || !isHeroPage ? 'bg-on-surface' : 'bg-white'
              } ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || !isHeroPage ? 'bg-on-surface' : 'bg-white'
              } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-surface/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 border-t border-outline-variant/20' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold uppercase tracking-[0.15em] py-2 transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/rooms"
            className="mt-2 bg-inverse-surface text-inverse-on-surface px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase text-center hover:bg-primary transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}
