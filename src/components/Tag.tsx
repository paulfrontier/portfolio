import { useTheme } from '../context/ThemeContext'

interface TagProps {
  name: string
  active?: boolean
  onClick?: () => void
}

export function Tag({ name, active = false, onClick }: TagProps) {
  const { holoMode } = useTheme()

  if (holoMode) {
    return (
      <button
        onClick={onClick}
        className={`holo-tag px-3 py-2 text-sm transition-all cursor-pointer ${active ? 'active' : ''}`}
      >
        <span className="holo-prefix">{"> "}</span>
        {name.toLowerCase()}
      </button>
    )
  }

  const baseClass = 'px-3 py-1 text-xs rounded-full transition-all cursor-pointer'
  const activeClass = active
    ? 'gradient-bg text-white'
    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'

  return (
    <button onClick={onClick} className={`${baseClass} ${activeClass}`}>
      {name}
    </button>
  )
}
