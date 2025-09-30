import { Link } from 'react-router-dom'
import profileImg from '../assets/personal/profile.jpg'
import projects, { type Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="page home">
      <div className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Hi, I'm Your Name</p>
          <h1>Building thoughtful digital experiences.</h1>
          <p className="lead">
            I'm a <strong>frontend developer</strong> focused on crafting
            delightful interfaces and performant web applications.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="button button--primary">
              View projects
            </Link>
            <Link to="/contact" className="button button--ghost">
              Get in touch
            </Link>
          </div>
        </div>
        <img
          src={profileImg}
          alt="Portrait"
          className="hero__photo"
          loading="lazy"
        />
      </div>

      <section className="section">
        <div className="section__header">
          <h2>Featured work</h2>
          <Link to="/projects" className="section__link">
            Browse all projects
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project: Project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home
