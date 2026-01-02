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

          {/* Featured Label */}
          {project.featuredLabel && (
            <span className="inline-block px-3 py-1 text-xs font-mono text-gray-400 border border-gray-700 rounded mb-4">
              {`// ${project.featuredLabel}`}
            </span>
          )}

          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-gray-500">project://</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-100 font-mono mb-2">
            <span className="holo-prefix">{"> "}</span>
            {project.title.toLowerCase().replace(/\s+/g, '_')}<span className="holo-cursor" />
          </h1>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-lg text-gray-400 font-mono mb-2">{project.subtitle}</p>
          )}

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

          {/* Case Study Sections - Holo */}
          {project.problem && project.solution && project.result && (
            <div className="space-y-6 mb-8">
              {/* Problem */}
              <div className="holo-card p-5">
                <p className="text-xs font-mono text-red-400/70 mb-2">{`// PROBLEME`}</p>
                <p className="text-gray-300 font-mono text-sm">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="holo-card p-5">
                <p className="text-xs font-mono text-green-400/70 mb-2">{`// SOLUTION`}</p>
                <p className="text-gray-300 font-mono text-sm">{project.solution}</p>
              </div>

              {/* Result + Metrics */}
              <div className="holo-card p-5">
                <p className="text-xs font-mono text-blue-400/70 mb-2">{`// RESULTAT`}</p>
                <p className="text-gray-300 font-mono text-sm mb-4">{project.result}</p>

                {/* Metrics Grid */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 rounded border border-gray-800 p-3"
                      >
                        <p className="text-xs text-gray-600 font-mono uppercase mb-1">
                          {metric.label}
                        </p>
                        <div className="flex items-baseline gap-2 font-mono">
                          {metric.before && (
                            <>
                              <span className="text-gray-600 line-through text-xs">
                                {metric.before}
                              </span>
                              <span className="text-gray-700">→</span>
                            </>
                          )}
                          <span className="text-lg text-gray-200">
                            {metric.after}
                          </span>
                        </div>
                        {metric.improvement && (
                          <p className="text-xs text-green-400/70 font-mono mt-1">
                            {metric.improvement}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Decisions & Tradeoffs */}
              {project.decisions && project.decisions.length > 0 && (
                <div className="holo-card p-5">
                  <p className="text-xs font-mono text-purple-400/70 mb-3">{`// DECISIONS & TRADEOFFS`}</p>
                  <div className="space-y-3">
                    {project.decisions.map((decision, index) => (
                      <div key={index} className="border-l border-gray-700 pl-3">
                        <p className="text-gray-300 font-mono text-sm">
                          <span className="holo-prefix">{"> "}</span>
                          {decision.choice}{' '}
                          <span className="text-gray-600">vs</span>{' '}
                          <span className="text-gray-500">{decision.alternative}</span>
                        </p>
                        <p className="text-gray-500 font-mono text-xs mt-1 pl-4">
                          {decision.reason}
                        </p>
                        {decision.tradeoff && (
                          <p className="text-gray-600 font-mono text-xs mt-1 pl-4 italic">
                            // {decision.tradeoff}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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

      {/* Featured Label */}
      {project.featuredLabel && (
        <span className="inline-block px-3 py-1 text-xs rounded-full gradient-bg text-white mb-4">
          {project.featuredLabel}
        </span>
      )}

      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">{project.title}</span>
      </h1>

      {/* Subtitle */}
      {project.subtitle && (
        <p className="text-xl text-gray-300 mb-2">{project.subtitle}</p>
      )}

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

      {/* Case Study Sections */}
      {project.problem && project.solution && project.result && (
        <div className="space-y-8 mb-12">
          {/* Problem */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Probleme
            </h2>
            <p className="text-gray-300">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Solution
            </h2>
            <p className="text-gray-300">{project.solution}</p>
          </div>

          {/* Result + Metrics */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Resultat
            </h2>
            <p className="text-gray-300 mb-4">{project.result}</p>

            {/* Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                      {metric.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      {metric.before && (
                        <>
                          <span className="text-gray-500 line-through text-sm">
                            {metric.before}
                          </span>
                          <span className="text-gray-600">→</span>
                        </>
                      )}
                      <span className="text-xl font-bold gradient-text">
                        {metric.after}
                      </span>
                    </div>
                    {metric.improvement && (
                      <p className="text-xs text-green-400 mt-1">
                        {metric.improvement}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Decisions & Tradeoffs */}
          {project.decisions && project.decisions.length > 0 && (
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h2 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Decisions & Tradeoffs
              </h2>
              <div className="space-y-4">
                {project.decisions.map((decision, index) => (
                  <div key={index} className="border-l-2 border-purple-400/30 pl-4">
                    <p className="text-gray-200 font-medium">
                      {decision.choice}{' '}
                      <span className="text-gray-500">plutot que</span>{' '}
                      <span className="text-gray-400">{decision.alternative}</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{decision.reason}</p>
                    {decision.tradeoff && (
                      <p className="text-gray-500 text-sm mt-1 italic">
                        Tradeoff: {decision.tradeoff}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

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
