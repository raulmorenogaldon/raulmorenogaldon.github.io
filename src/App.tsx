import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const App = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
