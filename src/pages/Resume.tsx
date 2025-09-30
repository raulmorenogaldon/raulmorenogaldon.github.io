const resumeUrl = '/personal/resume.pdf'

const Resume = () => {
  return (
    <section className="page resume">
      <header className="page__header">
        <h1>Résumé</h1>
        <p>Download my résumé or explore a snapshot of my experience below.</p>
        <a className="button button--primary" href={resumeUrl} download>
          Download PDF
        </a>
      </header>

      <div className="resume__grid">
        <section>
          <h2>Experience</h2>
          <ul className="timeline">
            <li>
              <h3>Senior Frontend Engineer · Acme Corp</h3>
              <p className="timeline__meta">2023 — Present · Remote</p>
              <p>
                Leading the UI platform team, delivering design system updates and
                performance improvements across customer-facing surfaces.
              </p>
            </li>
            <li>
              <h3>Frontend Developer · Example Studio</h3>
              <p className="timeline__meta">2020 — 2023 · Madrid</p>
              <p>
                Crafted interactive campaign sites and internal tools with React,
                TypeScript, and Tailwind CSS.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="pill-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Design Systems</li>
            <li>Accessibility (a11y)</li>
            <li>Testing Library</li>
          </ul>

          <h2>Education</h2>
          <p>
            B.Sc. in Computer Science, Universidad Politécnica de Madrid (2016 —
            2020)
          </p>
        </section>
      </div>
    </section>
  )
}

export default Resume
