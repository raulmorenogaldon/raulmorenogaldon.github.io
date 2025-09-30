import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-shell__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
