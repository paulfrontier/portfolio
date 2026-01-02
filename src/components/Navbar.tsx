import { Link, NavLink } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">
          Portfolio
        </Link>

        <div className="flex items-center gap-8">
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

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
