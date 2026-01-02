export type ThemeName = 'violet-blue' | 'cyan-teal' | 'orange-pink' | 'gray'

export interface Theme {
  name: ThemeName
  label: string
  from: string
  to: string
}

export const themes: Theme[] = [
  { name: 'violet-blue', label: 'Violet/Bleu', from: '#8b5cf6', to: '#3b82f6' },
  { name: 'cyan-teal', label: 'Cyan/Teal', from: '#22d3ee', to: '#14b8a6' },
  { name: 'orange-pink', label: 'Orange/Rose', from: '#fb923c', to: '#ec4899' },
  { name: 'gray', label: 'Noir/Gris', from: '#111827', to: '#4b5563' },
]
