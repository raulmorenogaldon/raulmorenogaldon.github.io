import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Résumé' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">My Portfolio</div>
      <nav className="navbar__nav">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }: { isActive: boolean }) =>
              `navbar__link${isActive ? ' navbar__link--active' : ''}`
            }
            end={path === '/'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
