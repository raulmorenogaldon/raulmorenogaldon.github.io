import projects, { type Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.css'

const Projects = () => {
  return (
    <section className="page projects">
      <header className="page__header">
        <h1>Projects</h1>
        <p>A selection of work highlighting problem-solving and product impact.</p>
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
