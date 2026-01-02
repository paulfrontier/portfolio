import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { Tag } from '../components/Tag'
import { useTheme } from '../context/ThemeContext'

export function ProjectDetail() {
  const { holoMode } = useTheme()
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  if (!project) {
    if (holoMode) {
      return (
        <div className="py-12">
          <div className="holo-panel p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-100 font-mono mb-4">
              <span className="holo-prefix">{"> "}</span>
              ERROR: projet_non_trouve
            </h1>
            <Link to="/projects" className="holo-tag px-4 py-2 font-mono text-sm inline-block">
              <span className="holo-prefix">{"> "}</span>
              cd ../projets
            </Link>
          </div>
        </div>
      )
    }
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Projet non trouve</h1>
        <Link to="/projects" className="text-gray-400 hover:text-white">
          &larr; Retour aux projets
        </Link>
      </div>
    )
  }

  if (holoMode) {
    const allImages = project.images || (project.image ? [project.image] : [])

    return (
      <div className="py-12">
        <div className="holo-panel p-8">
          <Link
            to="/projects"
            className="text-gray-500 hover:text-gray-300 text-sm mb-6 inline-block font-mono"
          >
            <span className="holo-prefix">{"> "}</span>
            cd ../projets
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-gray-500">project://</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-100 font-mono mb-2">
            <span className="holo-prefix">{"> "}</span>
            {project.title.toLowerCase().replace(/\s+/g, '_')}<span className="holo-cursor" />
          </h1>

          <p className="text-gray-600 text-xs font-mono mb-6">// {project.date}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>

          <div className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
            <p className="text-gray-600 mb-2">{`/* Description */`}</p>
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Gallery avec bordures holo - thumbnails */}
          {allImages.length > 0 && (
            <div className="mb-8">
              <p className="text-gray-600 font-mono text-xs mb-4">{`// Screenshots`}</p>
              <div className="flex flex-wrap gap-3">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxImage(img)}
                    className="relative h-24 w-40 rounded-lg overflow-hidden border-2 border-[color-mix(in_srgb,var(--gradient-from)_30%,transparent)] hover:border-[color-mix(in_srgb,var(--gradient-from)_60%,transparent)] transition-all hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="holo-tag px-5 py-2 font-mono text-sm"
              >
                <span className="holo-prefix">{"> "}</span>
                ./open_site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="holo-tag px-5 py-2 font-mono text-sm"
              >
                <span className="holo-prefix">{"> "}</span>
                ./github
              </a>
            )}
          </div>
        </div>

        {/* Lightbox Modal - Holo */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-mono transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              [x]
            </button>
            <div
              className="relative max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden border-2 border-[color-mix(in_srgb,var(--gradient-from)_40%,transparent)] shadow-[0_0_60px_color-mix(in_srgb,var(--gradient-from)_20%,transparent)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Screenshot"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  const allImages = project.images || (project.image ? [project.image] : [])

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

      <div className="prose prose-invert max-w-none mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </div>

      {/* Gallery avec bordures gradient - thumbnails */}
      {allImages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Screenshots</h2>
          <div className="flex flex-wrap gap-3">
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setLightboxImage(img)}
                className="relative h-24 w-40 rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--gradient-from)_30%,transparent)] transition-all hover:scale-105 cursor-pointer"
              >
                <div className="rounded-[10px] overflow-hidden bg-gray-900 h-full">
                  <img
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <div
            className={`relative max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden ${
              holoMode
                ? 'border-2 border-[color-mix(in_srgb,var(--gradient-from)_40%,transparent)] shadow-[0_0_60px_color-mix(in_srgb,var(--gradient-from)_20%,transparent)]'
                : 'p-[3px] bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={holoMode ? '' : 'rounded-[9px] overflow-hidden'}>
              <img
                src={lightboxImage}
                alt="Screenshot"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
