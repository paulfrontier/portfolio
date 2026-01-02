import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const enBref = [
  {
    title: 'Stack',
    items: ['Symfony / PHP', 'TypeScript / React', 'Rust', 'Python'],
  },
  {
    title: 'Qualite',
    items: ['Clean architecture', 'TDD / Tests auto', 'CI/CD', 'Code reviews'],
  },
  {
    title: 'Systemes',
    items: ['APIs REST', 'Event-driven', 'Auth (LDAP/SSO)', 'Observabilite'],
  },
  {
    title: 'IA & Automation',
    items: ['Agents LLM', 'Workflows auto', 'Tooling dev', 'Scripts Python'],
  },
]

export function Home() {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <div className="space-y-12">
        {/* Hero Holo */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <div className="holo-panel p-8 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-gray-500">user@portfolio:~$</span>
            </div>
            <p className="text-gray-500 font-mono text-sm mb-2">// Salut, je suis</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-mono text-gray-100">
              <span className="holo-prefix">{"> "}</span>
              Paul FRONTIER<span className="holo-cursor" />
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-mono">
              Je construis des applications <span className="text-gray-200">robustes et testees</span> avec
              Symfony, TypeScript et Rust. Focus clean architecture, automatisation et qualite.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="holo-tag px-5 py-2.5 font-mono text-sm"
              >
                <span className="holo-prefix">{"> "}</span>
                ./voir_projets
              </Link>
              <Link
                to="/contact"
                className="holo-tag px-5 py-2.5 font-mono text-sm"
              >
                <span className="holo-prefix">{"> "}</span>
                ./contact
              </Link>
            </div>
          </div>
        </section>

        {/* En bref Holo */}
        <section className="holo-panel p-8">
          <h2 className="text-xl font-bold text-gray-100 mb-6 font-mono">
            <span className="holo-prefix">{"> "}</span>
            cat ./en_bref.md
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {enBref.map((block) => (
              <div key={block.title} className="holo-card p-4">
                <h3 className="font-mono text-sm text-gray-300 mb-3">
                  <span className="holo-prefix">{"> "}</span>
                  {block.title.toLowerCase()}
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-500 font-mono">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-600">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Ce que je fais Holo */}
        <section className="holo-panel p-8">
          <h2 className="text-xl font-bold text-gray-100 mb-6 font-mono">
            <span className="holo-prefix">{"> "}</span>
            ls ./services/
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-mono text-sm text-gray-300">
                <span className="holo-prefix">{"> "}</span>
                developpement/
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 font-mono pl-4">
                <li>- apps_web_fullstack</li>
                <li>- apis_rest_eventdriven</li>
                <li>- apps_mobiles</li>
                <li>- integrations_tierces</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-mono text-sm text-gray-300">
                <span className="holo-prefix">{"> "}</span>
                architecture/
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 font-mono pl-4">
                <li>- clean_hexagonal</li>
                <li>- tests_unit_e2e</li>
                <li>- cicd_pipelines</li>
                <li>- code_reviews</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-mono text-sm text-gray-300">
                <span className="holo-prefix">{"> "}</span>
                automation/
              </h3>
              <ul className="space-y-2 text-sm text-gray-500 font-mono pl-4">
                <li>- agents_llm</li>
                <li>- scripts_cli</li>
                <li>- dev_tooling</li>
                <li>- code_generation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Holo */}
        <section className="holo-panel p-8 text-center">
          <p className="text-gray-500 font-mono mb-4">// Un projet en tete ?</p>
          <Link
            to="/contact"
            className="holo-tag px-6 py-3 font-mono text-sm inline-block"
          >
            <span className="holo-prefix">{"> "}</span>
            ./discutons_en --now
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-gray-400 mb-3">Salut, je suis</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Paul FRONTIER</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            Je construis des applications <strong className="text-white">robustes et testees</strong> avec
            Symfony, TypeScript et Rust. Focus clean architecture, automatisation et qualite.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="gradient-bg px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-medium border border-gray-700 text-gray-300 hover:border-gray-500 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* En bref */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">En bref</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {enBref.map((block) => (
            <div
              key={block.title}
              className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <h3 className="font-semibold gradient-text mb-3">{block.title}</h3>
              <ul className="space-y-1.5 text-sm text-gray-400">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full gradient-bg flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ce que je fais */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Ce que je fais</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Developpement produit</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Applications web full-stack</li>
              <li>APIs REST & event-driven</li>
              <li>Apps mobiles (React Native)</li>
              <li>Integrations tierces</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Architecture & qualite</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Clean / Hexagonal architecture</li>
              <li>Tests unitaires & e2e</li>
              <li>CI/CD pipelines</li>
              <li>Code reviews & refactoring</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Automatisation & IA</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Agents LLM / workflows</li>
              <li>Scripts & CLI (Rust/Python)</li>
              <li>Outillage developpeur</li>
              <li>Generation de code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-12 border-t border-gray-800">
        <p className="text-gray-400 mb-4">Un projet en tete ?</p>
        <Link
          to="/contact"
          className="gradient-bg px-8 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity inline-block"
        >
          Discutons-en
        </Link>
      </section>
    </div>
  )
}
