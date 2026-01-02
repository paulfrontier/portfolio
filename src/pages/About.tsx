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
