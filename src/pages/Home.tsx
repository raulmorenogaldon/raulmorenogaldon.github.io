import { Link } from 'react-router-dom'
import profileImg from '../assets/personal/profile.jpg'
import projects, { type Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/home.css'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="page home">
      <div className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Hi, I'm Raúl</p>
          <h1>Ready to craft playful, performant game experiences.</h1>
          <p className="lead">
            I’m looking to start in the <strong>videogame industry</strong>, helping create enjoyable, smart, and smooth gaming experiences
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="button button--primary">
              View personal projects
            </Link>
            <Link to="/resume" className="button button--ghost">
              Contact me
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
