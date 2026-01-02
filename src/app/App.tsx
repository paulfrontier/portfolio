import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../context/ThemeContext'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { AppRoutes } from './routes'
import '../styles/globals.css'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-24 pb-12">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
