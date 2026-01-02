import { Link } from 'react-router-dom'

export function NotFound() {
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
