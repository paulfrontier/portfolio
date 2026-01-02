import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

interface ThemeSwitcherProps {
  compact?: boolean
}

export function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const { theme, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentTheme = themes.find((t) => t.name === theme) || themes[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Desktop: show all buttons inline
  if (!compact) {
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

  // Mobile: show single button with popup
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-7 h-7 rounded-full transition-transform hover:scale-110 ring-2 ring-white/30 ring-offset-1 ring-offset-gray-950"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.from}, ${currentTheme.to})`,
        }}
        title="Changer de theme"
        aria-label="Changer de theme"
      />

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 p-2 bg-gray-900 rounded-lg border border-gray-700 shadow-xl flex gap-2">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => {
                setTheme(t.name)
                setIsOpen(false)
              }}
              className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${
                theme === t.name ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
              }`}
              style={{
                background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
              }}
              title={t.label}
              aria-label={`Theme ${t.label}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
