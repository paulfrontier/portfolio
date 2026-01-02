import { Link, NavLink } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useTheme } from '../context/ThemeContext'

export function Navbar() {
  const { holoMode, setHoloMode } = useTheme()
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

          <button
            onClick={() => setHoloMode(!holoMode)}
            className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${
              holoMode
                ? 'border-current text-[color-mix(in_srgb,var(--gradient-from)_80%,white)] bg-[color-mix(in_srgb,var(--gradient-from)_10%,transparent)]'
                : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
            }`}
            title={holoMode ? 'Désactiver mode holo' : 'Activer mode holo'}
          >
            {holoMode ? '> HOLO_ON' : '> HOLO_OFF'}
          </button>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
