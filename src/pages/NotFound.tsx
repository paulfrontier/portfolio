import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export function NotFound() {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="holo-panel p-12 text-center">
          <p className="text-xs font-mono text-gray-600 mb-4">system://error</p>
          <h1 className="text-7xl font-bold font-mono text-gray-100 mb-4">
            <span className="holo-prefix">{"> "}</span>
            404<span className="holo-cursor" />
          </h1>
          <p className="text-gray-500 font-mono text-sm mb-8">
            // ERROR: page_not_found
          </p>
          <Link
            to="/"
            className="holo-tag px-6 py-3 font-mono text-sm inline-block"
          >
            <span className="holo-prefix">{"> "}</span>
            cd ~/accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
      <p className="text-gray-400 text-xl mb-8">
        Oups, cette page n'existe pas.
      </p>
      <Link
        to="/"
        className="gradient-bg px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
      >
        Retour a l'accueil
      </Link>
    </div>
  )
}
