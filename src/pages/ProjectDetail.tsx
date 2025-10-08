import { Link, useParams } from 'react-router-dom'
import projects, { type Project } from '../data/projects'
import ProjectContentRenderer from '../components/ProjectContentRenderer'
import '../styles/projects.css'

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
    date,
    content,
  } = project

  return (
    <section className="page project-detail">
      <header className="page__header">
        <h1>{title}</h1>
        <p className="project-detail__meta">
          <span className="project-detail__date">{date}</span>
        </p>
      </header>

      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="project-detail__image"
          loading="lazy"
        />
      )}

      <div className="project-detail__overview">
        <p className="project-detail__description">{description}</p>
      </div>

      <div className="project-detail__info-grid">
        <section className="project-detail__card">
          <h2 className="project-detail__card-title">
            <span className="project-detail__icon">✨</span>
            Highlights
          </h2>
          <ul className="project-detail__highlights">
            {highlights.map((item: string) => (
              <li key={item.substring(0, 50)}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail__card project-detail__card--tech">
          <h2 className="project-detail__card-title">
            <span className="project-detail__icon">🛠️</span>
            Tech Stack
          </h2>
          <ul className="pill-list">
            {technologies.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>

      {(liveUrl || repoUrl) && (
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
      )}

      {content && (
        <div className="project-content-wrapper">
          <ProjectContentRenderer content={content} />
        </div>
      )}

      <Link to="/projects" className="button button--ghost project-detail__back">
        ← Back to projects
      </Link>
    </section>
  )
}

export default ProjectDetail
