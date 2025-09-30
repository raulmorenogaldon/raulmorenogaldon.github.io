import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = Pick<
  Project,
  'slug' | 'title' | 'summary' | 'technologies' | 'coverImage' | 'liveUrl' | 'repoUrl'
>

const ProjectCard = ({
  slug,
  title,
  summary,
  technologies,
  coverImage,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  return (
    <article className="project-card">
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="project-card__image"
          loading="lazy"
        />
      )}
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="project-card__tags">
          {technologies.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          <Link to={`/projects/${slug}`} className="button button--primary">
            View details
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Live site
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
