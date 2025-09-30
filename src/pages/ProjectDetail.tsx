import { Link, useParams } from 'react-router-dom'
import projects, { type Project } from '../data/projects'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item: Project) => item.slug === slug)

  if (!project) {
    return (
      <section className="page project-detail">
        <div className="page__header">
          <h1>Project not found</h1>
          <p>The project you are looking for does not exist.</p>
          <Link to="/projects" className="button button--primary">
            Back to projects
          </Link>
        </div>
      </section>
    )
  }

  const {
    title,
    description,
    coverImage,
    technologies,
    highlights,
    liveUrl,
    repoUrl,
    period,
    role,
  } = project

  return (
    <section className="page project-detail">
      <header className="page__header">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="project-detail__meta">
          <span>{role}</span>
          <span>·</span>
          <span>{period}</span>
        </p>
        <div className="page__cta">
          {liveUrl && (
            <a
              href={liveUrl}
              className="button button--primary"
              target="_blank"
              rel="noreferrer"
            >
              View live site
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
            >
              View source code
            </a>
          )}
        </div>
      </header>

      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="project-detail__image"
          loading="lazy"
        />
      )}

      <section className="section">
        <h2>Highlights</h2>
        <ul className="bullet-list">
          {highlights.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Tech stack</h2>
        <ul className="pill-list">
          {technologies.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <Link to="/projects" className="button button--ghost">
        ← Back to projects
      </Link>
    </section>
  )
}

export default ProjectDetail
