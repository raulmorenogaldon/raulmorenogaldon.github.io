import projects, { type Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.css'

const Projects = () => {
  return (
    <section className="page projects">
      <header className="page__header">
        <h1>Personal Projects</h1>
        <p>A selection of work done in my free time.</p>
      </header>

      <div className="project-grid">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
