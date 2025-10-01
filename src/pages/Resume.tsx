import '../styles/resume.css'

const resumeUrl = '/personal/resume.pdf'

const Resume = () => {
  return (
    <section className="page resume">

      {/* Full-width Professional Summary */}
      <section className="summary summary--full-width">
        <h2>Professional Summary</h2>
        <p>
          Microsoft Certified Azure Solutions Architect with 5+ years of experience designing and implementing 
          cloud infrastructure and data solutions. Specialized in Azure architecture, serverless computing, 
          and AI/ML platforms with a strong background in High Performance Computing (HPC) research. 
          Experience spans multiple industries delivering robust, scalable, and efficient cloud solutions.
        </p>
      </section>

      <div className="resume__grid">
        {/* Main content on the left */}
        <main className="resume__content">
          <section className="education">
            <h2>Education</h2>
            <div className="education__item">
              <h3>
                PhD in Advanced Computer Technologies, <b>High Performance Computing</b>
              </h3>
              <p className="timeline__meta">University of Castilla-La Mancha — 2013–2019</p>
            </div>
            <div className="education__item">
              <h3>MSc in Advanced Computer Science Technologies</h3>
              <p className="timeline__meta">University of Castilla-La Mancha — 2012–2013</p>
            </div>
            <div className="education__item">
              <h3>BSc in Computer Science</h3>
              <p className="timeline__meta">University of Castilla-La Mancha — 2008–2012</p>
            </div>
          </section>

          <section>
            <h2>Experience</h2>
            <ul className="timeline">
              <li>
                <h3>Azure Cloud Architect · Keepler Data Tech S.L.</h3>
                <p className="timeline__meta">Sept 2021 — Present · Spain</p>
                <ul>
                  <li>Design and deliver data-focused solutions hosted in Microsoft Azure Cloud for various clients.</li>
                  <li>Work on diverse projects including landing zones, data ingestion platforms, IoT platforms, and AI solutions.</li>
                  <li>Implemented the company's first LLM Q&A bot based on Retrieval Augmented Generation with GPT-3.5.</li>
                </ul>
              </li>

              <li>
                <h3>Azure Infrastructure Specialist · IBM GSA Spain</h3>
                <p className="timeline__meta">May 2020 — Sept 2021 · Spain</p>
                <ul>
                  <li>Provided high-level operations support for client systems hosted in Microsoft Azure Cloud.</li>
                  <li>Developed a fully automated Virtual Desktop Infrastructure system using a serverless approach with Azure Functions, Storage, and Automation.</li>
                  <li>Supported multiple successful migrations of legacy systems to hub and spoke architecture in Azure.</li>
                </ul>
              </li>
              
              <li>
                <h3>Data Platform Engineer · SolidQ S.A.</h3>
                <p className="timeline__meta">June 2019 — May 2020 · Spain</p>
                <ul>
                  <li>Provided support and expertise for clients using Microsoft Azure solutions.</li>
                  <li>Created automation solutions using Azure Functions, Azure Automation, and PowerShell/CLI to reduce operational overhead.</li>
                  <li>Evaluated client requirements and existing solutions to optimize their Azure implementations.</li>
                </ul>
              </li>
              
              <li>
                <h3>PhD Scholarship Student · University of Castilla-La Mancha</h3>
                <p className="timeline__meta">April 2015 — April 2019 · Spain</p>
                <ul>
                  <li>Developed a service-oriented framework (using Linux, NodeJS, MongoDB) to run HPC software on supercomputing platforms.</li>
                  <li>Conducted MPI performance and scalability studies on the Weather Research and Forecasting model (WRF).</li>
                  <li>Collaborated with ICE-POP 2018 project to provide meteorological forecasts for the 2018 Winter Olympic Games.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>Selected Projects</h2>
            <ul className="projects-list">
              <li>
                <strong>Project One</strong> — A public-facing dashboard that visualizes user metrics. Implemented modular charts and improved rendering performance with virtualization.
              </li>
              <li>
                <strong>Project Two</strong> — Internal design system migration: consolidated button and form components, reducing duplication and onboarding time for new engineers.
              </li>
            </ul>
          </section>

          <section>
            <h2>Open Source & Community</h2>
            <p>Contributor to accessibility-focused libraries and a regular speaker at local frontend meetups.</p>
          </section>
        </main>

        {/* Sidebar on the right */}
        <aside className="resume__sidebar">

          <div className="contact">
            <h2>Contact</h2>
            <p><strong>Raúl Moreno Galdón</strong></p>
            <p>Location: Albacete, Spain</p>
            <p>Email: raulmorenogaldon@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/raulmorenogaldon/" target="_blank" rel="noreferrer">
                LinkedIn: linkedin.com/in/raulmorenogaldon
              </a>
            </p>
            <p>
              <a href="/">portfolio.example.com</a>
            </p>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            <ul className="pill-list">
              <li>GenAI</li>
              <li>DevOps</li>
              <li>Python</li>
              <li>Azure Cloud</li>
              <li>Serverless</li>
              <li>Databricks</li>
              <li>PySpark</li>
              <li>MLOps</li>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>Bash/PowerShell</li>
              <li>HPC</li>
              <li>Automation</li>
            </ul>
          </div>

          <div className="pdf">
            <h2>Download my resume</h2>
            <a className="button button--primary" href={resumeUrl} download>
              Download PDF
            </a>
          </div>

        </aside>
      </div>
    </section>
  )
}

export default Resume
