import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { Tag } from './Tag'
import { useTheme } from '../context/ThemeContext'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group block holo-card overflow-hidden transition-all hover:-translate-y-1"
      >
        {/* Image */}
        {project.image && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        )}

        <div className="p-6 relative">
          {/* Coins techno */}
          <div className="holo-corner left-3 top-3" />
          <div className="holo-corner right-3 top-3" />
          <div className="holo-corner left-3 bottom-3" />
          <div className="holo-corner right-3 bottom-3" />

          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-100">
              <span className="holo-prefix">{"> "}</span>
              <span className="group-hover:text-white transition-colors">{project.title}</span>
              <span className="holo-cursor" />
            </h3>
            <span className="text-xs text-gray-500 font-mono">{project.date}</span>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>

          {/* Underline glow */}
          <div className="holo-glow" />
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1"
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500">{project.date}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
