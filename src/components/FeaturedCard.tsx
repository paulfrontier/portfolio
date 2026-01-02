import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { useTheme } from '../context/ThemeContext'

interface FeaturedCardProps {
  project: Project
}

export function FeaturedCard({ project }: FeaturedCardProps) {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group block holo-card p-5 transition-all hover:-translate-y-1"
      >
        {/* Label */}
        {project.featuredLabel && (
          <span className="text-xs font-mono text-gray-500 mb-2 block">
            {`// ${project.featuredLabel}`}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-100 font-mono mb-2">
          <span className="holo-prefix">{"> "}</span>
          <span className="group-hover:text-white transition-colors">
            {project.subtitle || project.title}
          </span>
        </h3>

        {/* Result */}
        {project.result && (
          <p className="text-sm text-gray-400 font-mono line-clamp-2">
            {project.result}
          </p>
        )}

        {/* Glow */}
        <div className="holo-glow" />
      </Link>
    )
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1"
    >
      {/* Label */}
      {project.featuredLabel && (
        <span className="inline-block px-2 py-1 text-xs rounded-full gradient-bg text-white mb-3">
          {project.featuredLabel}
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-colors mb-2">
        {project.subtitle || project.title}
      </h3>

      {/* Result */}
      {project.result && (
        <p className="text-sm text-gray-400 line-clamp-2">
          {project.result}
        </p>
      )}
    </Link>
  )
}
