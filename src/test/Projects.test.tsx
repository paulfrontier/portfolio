import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../context/ThemeContext'
import { Projects } from '../pages/Projects'
import { projects } from '../data/projects'

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <BrowserRouter>
      <ThemeProvider>{ui}</ThemeProvider>
    </BrowserRouter>
  )
}

describe('Projects page', () => {
  it('renders all projects by default', () => {
    renderWithProviders(<Projects />)

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('filters projects by tag', () => {
    renderWithProviders(<Projects />)

    // Get the filter bar (first flex container with tags)
    const filterButtons = screen.getAllByRole('button', { name: 'React' })
    // The first React button is in the filter bar
    fireEvent.click(filterButtons[0])

    const reactProjects = projects.filter((p) => p.tags.includes('React'))
    const nonReactProjects = projects.filter((p) => !p.tags.includes('React'))

    reactProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })

    nonReactProjects.forEach((project) => {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument()
    })
  })

  it('shows all projects when clicking "Tous"', () => {
    renderWithProviders(<Projects />)

    // Filter first
    const filterButtons = screen.getAllByRole('button', { name: 'React' })
    fireEvent.click(filterButtons[0])

    // Then reset with "Tous"
    const tousButton = screen.getByRole('button', { name: 'Tous' })
    fireEvent.click(tousButton)

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })
})
