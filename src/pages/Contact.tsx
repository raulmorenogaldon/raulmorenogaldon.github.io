import '../styles/contact.css'

const Contact = () => {
  return (
    <section className="page contact">
      <header className="page__header">
        <h1>Contact</h1>
        <p>
          Want to collaborate or have a role in mind? Drop a message and I'll get
          back to you within two business days.
        </p>
      </header>

      <div className="contact__grid">
        <section>
          <h2>Say hello</h2>
          <ul className="contact__list">
            <li>
              <span>Email</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/your-profile
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                github.com/your-username
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Send a message</h2>
          <form className="contact__form">
            <label>
              Name
              <input type="text" name="name" placeholder="Jane Doe" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
              />
            </label>
            <button type="submit" className="button button--primary" disabled>
              Submit (coming soon)
            </button>
          </form>
        </section>
      </div>
    </section>
  )
}

export default Contact
