import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type ThemeName, themes } from '../types/theme'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  themes: typeof themes
  holoMode: boolean
  setHoloMode: (enabled: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function getRandomTheme(): ThemeName {
  const themeNames = themes.map((t) => t.name)
  return themeNames[Math.floor(Math.random() * themeNames.length)]
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as ThemeName
      if (stored) return stored
      const random = getRandomTheme()
      localStorage.setItem('theme', random)
      return random
    }
    return getRandomTheme()
  })

  const [holoMode, setHoloModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('holoMode') === 'true'
    }
    return false
  })

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const setHoloMode = (enabled: boolean) => {
    setHoloModeState(enabled)
    localStorage.setItem('holoMode', String(enabled))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-holo', String(holoMode))
  }, [holoMode])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, holoMode, setHoloMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
