import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useTheme } from '../context/ThemeContext'

export function Navbar() {
  const { holoMode, setHoloMode } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 transition-colors hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">
          Portfolio
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-6 text-sm">
            <NavLink to="/" className={linkClass} end>
              Accueil
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projets
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              A propos
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Holo Toggle */}
          <button
            onClick={() => setHoloMode(!holoMode)}
            className={`px-2 sm:px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${
              holoMode
                ? 'border-current text-[color-mix(in_srgb,var(--gradient-from)_80%,white)] bg-[color-mix(in_srgb,var(--gradient-from)_10%,transparent)]'
                : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
            }`}
            title={holoMode ? 'Désactiver mode holo' : 'Activer mode holo'}
          >
            <span className="hidden sm:inline">{holoMode ? '> HOLO_ON' : '> HOLO_OFF'}</span>
            <span className="sm:hidden text-sm">▣</span>
          </button>

          {/* Theme Switcher - Desktop */}
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>

          {/* Theme Switcher - Mobile (popup) */}
          <div className="sm:hidden">
            <ThemeSwitcher compact />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 px-6 py-4">
          <div className="flex flex-col gap-1 text-sm">
            <NavLink
              to="/"
              className={mobileLinkClass}
              end
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/projects"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </NavLink>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              A propos
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileLinkClass}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
