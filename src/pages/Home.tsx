import { Link } from 'react-router-dom'

const stack = [
  'Symfony',
  'TypeScript',
  'Rust',
  'Python',
  'React',
  'tests automatises',
  'clean architecture',
]

export function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <p className="text-gray-400 mb-2">Salut, je suis</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="gradient-text">Paul FRONTIER</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 font-medium">
          Developpeur full-stack oriente architecture & qualite.
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {stack.map((tech, i) => (
            <span key={tech} className="text-gray-400 text-sm">
              {tech}
              {i < stack.length - 1 && <span className="ml-2 text-gray-600">•</span>}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="gradient-bg px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg font-medium border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  )
}
