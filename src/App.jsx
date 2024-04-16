import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes'
import { ThemeProvider } from './components/contexts/themeContext'

function App() {
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App