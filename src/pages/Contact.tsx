import { useTheme } from '../context/ThemeContext'

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const MaltIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 186.8 186.8">
    <path d="M159.9,27c-14.1-14.1-29.2-5-38.6,4.5l-89,89c-9.4,9.4-19.3,23.7-4.5,38.6c14.8,14.8,29.2,5,38.6-4.5l89-89C164.8,56.1,174,41.1,159.9,27z"/>
    <path d="M74.8,23.3l18.9,18.9L112.8,23c1.3-1.3,2.6-2.5,4-3.7C114.8,9.2,109,0,93.6,0C78.2,0,72.5,9.2,70.5,19.4C71.9,20.6,73.3,21.9,74.8,23.3z"/>
    <path d="M112.8,163.4l-19.2-19.2L74.8,163c-1.4,1.4-2.9,2.7-4.3,4c2.2,10.3,8.3,19.8,23.1,19.8c14.9,0,21-9.5,23.1-19.9C115.4,165.8,114.1,164.7,112.8,163.4z"/>
    <path d="M66.8,69H30.4C17.1,69,0,73.2,0,93.2c0,14.9,9.5,21,19.9,23.1C21.1,114.9,66.8,69,66.8,69z"/>
    <path d="M167.4,70c-1.1,1.3-46.9,47.3-46.9,47.3h35.8c13.3,0,30.4-3.1,30.4-24.1C186.8,77.8,177.6,72,167.4,70z"/>
    <path d="M78.7,57.1l6.5-6.5L66.3,31.7c-9.4-9.4-23.7-19.3-38.6-4.5c-10.9,10.9-8.5,21.5-2.7,30.1C26.8,57.2,78.7,57.1,78.7,57.1z"/>
    <path d="M108.6,129.2l-6.5,6.5l19.2,19.2c9.4,9.4,24.5,18.6,38.6,4.5c10.5-10.5,8.1-21.6,2.3-30.4C160.3,129.1,108.6,129.2,108.6,129.2z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const GitLabIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
  </svg>
)

const links = {
  left: [
    {
      href: 'mailto:paulfrontier91@gmail.com',
      icon: EmailIcon,
      label: 'Email',
      value: 'paulfrontier91@gmail.com',
      external: false,
    },
    {
      href: 'https://www.linkedin.com/in/paul-frontier/',
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'paul-frontier',
      external: true,
    },
    {
      href: 'https://www.malt.fr/profile/paulfrontier',
      icon: MaltIcon,
      label: 'Malt',
      value: 'paulfrontier',
      external: true,
    },
  ],
  right: [
    {
      href: 'https://github.com/paulfrontier',
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'paulfrontier',
      external: true,
    },
    {
      href: 'https://gitlab.com/paulfrontier',
      icon: GitLabIcon,
      label: 'GitLab',
      value: 'paulfrontier',
      external: true,
    },
  ],
}

export function Contact() {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <div className="py-12">
        <div className="holo-panel p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-gray-500">system://</span>
            <h1 className="text-3xl font-bold text-gray-100 font-mono">
              <span className="holo-prefix">{"> "}</span>
              contact<span className="holo-cursor" />
            </h1>
          </div>

          <p className="text-gray-500 font-mono text-sm mb-8">
            // Une question ou un projet ? N'hesite pas a me contacter.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {/* Colonne gauche */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-gray-600 mb-2"># liens_directs</p>
              {links.left.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="holo-card flex items-center gap-4 p-4 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-gray-200 transition-colors">
                    <link.icon />
                  </div>
                  <div className="font-mono">
                    <p className="text-xs text-gray-600">{`// ${link.label}`}</p>
                    <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Colonne droite - Code */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-gray-600 mb-2"># repositories</p>
              {links.right.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-card flex items-center gap-4 p-4 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-gray-200 transition-colors">
                    <link.icon />
                  </div>
                  <div className="font-mono">
                    <p className="text-xs text-gray-600">{`// ${link.label}`}</p>
                    <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">Contact</span>
      </h1>
      <p className="text-gray-400 mb-8">
        Une question ou un projet ? N'hesite pas a me contacter.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {/* Colonne gauche */}
        <div className="space-y-4">
          {links.left.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                <link.icon />
              </div>
              <div>
                <p className="text-sm text-gray-400">{link.label}</p>
                <p className="text-white group-hover:gradient-text transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Colonne droite - Code */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-2">Repositories</p>
          {links.right.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                <link.icon />
              </div>
              <div>
                <p className="text-sm text-gray-400">{link.label}</p>
                <p className="text-white group-hover:gradient-text transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
