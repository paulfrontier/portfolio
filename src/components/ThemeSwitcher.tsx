import { useTheme } from '../context/ThemeContext'

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
            theme === t.name ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-950' : ''
          }`}
          style={{
            background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
          }}
          title={t.label}
          aria-label={`Theme ${t.label}`}
        />
      ))}
    </div>
  )
}
