import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes'
import "../public/fonts/fonts.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App