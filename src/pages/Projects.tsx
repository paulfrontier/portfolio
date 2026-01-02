import { useState } from 'react'
import { projects, getAllTags } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Tag } from '../components/Tag'
import { useTheme } from '../context/ThemeContext'

export function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { holoMode } = useTheme()
  const allTags = getAllTags()

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects

  if (holoMode) {
    return (
      <div className="py-12">
        <div className="holo-panel p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-gray-500">system://</span>
            <h1 className="text-3xl font-bold text-gray-100 font-mono">
              <span className="holo-prefix">{"> "}</span>
              projets<span className="holo-cursor" />
            </h1>
          </div>

          <p className="text-gray-400 text-sm mb-8 font-mono">
            // Une selection de mes projets recents.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Tag
              name="tous"
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            />
            {allTags.map((tag) => (
              <Tag
                key={tag}
                name={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-gray-500 text-center py-12 font-mono">
              // Aucun projet trouve avec ce filtre.
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">Projets</span>
      </h1>
      <p className="text-gray-400 mb-8">
        Une selection de mes projets recents.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        <Tag
          name="Tous"
          active={activeTag === null}
          onClick={() => setActiveTag(null)}
        />
        {allTags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-500 text-center py-12">
          Aucun projet trouve avec ce filtre.
        </p>
      )}
    </div>
  )
}
