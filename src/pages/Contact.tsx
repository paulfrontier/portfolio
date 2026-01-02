export function Contact() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">
        <span className="gradient-text">Contact</span>
      </h1>
      <p className="text-gray-400 mb-8">
        Une question ou un projet ? N'hesite pas a me contacter.
      </p>

      <div className="max-w-md space-y-6">
        <a
          href="mailto:paulfrontier91@gmail.com"
          className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
            @
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white group-hover:gradient-text transition-colors">
              paulfrontier91@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://github.com/paulfrontier"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
            GH
          </div>
          <div>
            <p className="text-sm text-gray-400">GitHub</p>
            <p className="text-white group-hover:gradient-text transition-colors">
              github.com/paulfrontier
            </p>
          </div>
        </a>

        <a
          href="https://gitlab.com/paulfrontier"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
            GL
          </div>
          <div>
            <p className="text-sm text-gray-400">GitLab</p>
            <p className="text-white group-hover:gradient-text transition-colors">
              gitlab.com/paulfrontier
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/paul-frontier/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs">
            in
          </div>
          <div>
            <p className="text-sm text-gray-400">LinkedIn</p>
            <p className="text-white group-hover:gradient-text transition-colors">
              linkedin.com/in/paul-frontier
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
