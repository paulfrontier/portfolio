import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { Tag } from './Tag'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1"
    >
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
    </Link>
  )
}
