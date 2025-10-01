import '../styles/footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} Your Name. All rights reserved.</p>
      <p>
        Built with <span className="footer__highlight">React + Vite</span>
      </p>
    </footer>
  )
}

export default Footer
