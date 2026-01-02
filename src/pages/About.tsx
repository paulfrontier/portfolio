import { useTheme } from '../context/ThemeContext'

const skillBlocks = [
  {
    title: 'Backend',
    skills: ['Symfony / PHP', 'APIs REST', 'Auth (JWT, OAuth, LDAP)', 'Event-driven (Kafka)'],
  },
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React / Next.js', 'React Native', 'Tailwind CSS'],
  },
  {
    title: 'Systems',
    skills: ['Rust (perf/outils)', 'Python (scripts/automation)', 'PostgreSQL / MongoDB', 'Redis'],
  },
  {
    title: 'Qualite',
    skills: ['Clean architecture', 'Tests (unit/e2e)', 'CI/CD (GitHub Actions)', 'Observabilite'],
  },
]

export function About() {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <div className="py-12">
        <div className="holo-panel p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-gray-500">system://</span>
            <h1 className="text-3xl font-bold text-gray-100 font-mono">
              <span className="holo-prefix">{"> "}</span>
              a_propos<span className="holo-cursor" />
            </h1>
          </div>

          <div className="max-w-3xl space-y-8">
            <div className="space-y-4 text-gray-400 leading-relaxed font-mono text-sm">
              <p>
                <span className="text-gray-600">// </span>
                Developpeur full-stack avec une forte orientation <span className="text-gray-200">architecture</span> et <span className="text-gray-200">qualite logicielle</span>.
              </p>
              <p>
                <span className="text-gray-600">// </span>
                Je construis des applications web robustes avec Symfony et TypeScript,
                en mettant l'accent sur la maintenabilite, les tests automatises et
                les bonnes pratiques d'ingenierie.
              </p>
              <p>
                <span className="text-gray-600">// </span>
                J'explore aussi l'automatisation et les outils de productivite avec
                Rust et Python.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-lg font-mono text-gray-100 mb-6">
                <span className="holo-prefix">{"> "}</span>
                cat ./stack_competences.json
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillBlocks.map((block) => (
                  <div key={block.title} className="holo-card p-4">
                    <h3 className="font-mono text-sm text-gray-300 mb-3">
                      <span className="holo-prefix">{"> "}</span>
                      {block.title.toLowerCase()}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-500 font-mono">
                      {block.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <span className="text-gray-600">-</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">A propos</span>
      </h1>
      <p className="text-gray-400 mb-8">Un peu plus sur moi.</p>

      <div className="max-w-3xl space-y-8">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Developpeur full-stack avec une forte orientation <strong className="text-white">architecture</strong> et <strong className="text-white">qualite logicielle</strong>.
          </p>
          <p>
            Je construis des applications web robustes avec Symfony et TypeScript,
            en mettant l'accent sur la maintenabilite, les tests automatises et
            les bonnes pratiques d'ingenierie.
          </p>
          <p>
            J'explore aussi l'automatisation et les outils de productivite avec
            Rust et Python.
          </p>
        </div>

        <div className="pt-4">
          <h2 className="text-xl font-semibold text-white mb-6">Stack & Competences</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-gray-900 rounded-xl p-5 border border-gray-800"
              >
                <h3 className="font-medium text-white mb-3 gradient-text">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {block.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
