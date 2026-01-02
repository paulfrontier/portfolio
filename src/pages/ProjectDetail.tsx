import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { Tag } from '../components/Tag'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Projet non trouve</h1>
        <Link to="/projects" className="text-gray-400 hover:text-white">
          &larr; Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12">
      <Link
        to="/projects"
        className="text-gray-400 hover:text-white text-sm mb-6 inline-block"
      >
        &larr; Retour aux projets
      </Link>

      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">{project.title}</span>
      </h1>

      <p className="text-gray-500 text-sm mb-6">{project.date}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg px-5 py-2 rounded-lg text-white text-sm hover:opacity-90 transition-opacity"
          >
            Voir le site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
