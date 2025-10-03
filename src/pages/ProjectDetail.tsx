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
          <span>{date}</span>
        </p>
        <p>{description}</p>
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

      {content && (
        <div className="project-content-wrapper">
          <ProjectContentRenderer content={content} />
        </div>
      )}

      <Link to="/projects" className="button button--ghost">
        ← Back to projects
      </Link>
    </section>
  )
}

export default ProjectDetail
