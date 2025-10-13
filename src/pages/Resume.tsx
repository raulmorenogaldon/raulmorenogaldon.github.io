import '../styles/resume.css'

const resumeUrl = '/personal/resume.pdf'

const Resume = () => {
  return (
    <section className="page resume">

      {/* Full-width Professional Summary */}
      <section className="summary summary--full-width">
        <h2>Professional Summary</h2>
        <p>
          I’m a gameplay / networking / AI programmer transitioning from cloud and HPC engineering, eager to start my first studio role. In personal projects I’ve used Unity DOTS/ECS to build a 3D multiplayer FPS prototype — server-authoritative networking, synchronized animation and server-side shot validation — that runs 1,000+ zombies, giving me some hands-on experience in large-scale performance and AI behavior. I’m advanced in Python and C, comfortable with C#, JavaScript and other languages (I love programming); I also bring strong CI/CD and realtime optimization experience, systems thinking, and a fast-learning, can-do attitude ready to contribute to gameplay and AI development.
        </p>
      </section>

      <div className="resume__grid">
        {/* Main content on the left */}
        <main className="resume__content">
          <section>
            <h2>Professional Experience</h2>
            <ul className="timeline">
              <li>
                <h3>Azure Cloud Solutions Architect · Keepler Data Tech S.L.</h3>
                <p className="timeline__meta">Sept 2021 — Sept 2025 · Spain (Full remote)</p>
                <ul>
                  <li>Design and deliver data-focused solutions hosted in Microsoft Azure Cloud for various clients.</li>
                  <li>Work on diverse projects including landing zones, data ingestion platforms, IoT platforms, and AI solutions.</li>
                  <li><strong>Implemented the company's first LLM Q&A bot based on Retrieval Augmented Generation with GPT-3.5.</strong></li>
                </ul>
              </li>

              <li>
                <h3>Azure Infrastructure Specialist · IBM GSA Spain</h3>
                <p className="timeline__meta">May 2020 — Sept 2021 · Spain (Full remote)</p>
                <ul>
                  <li>Provided high-level operations support for client systems hosted in Microsoft Azure Cloud.</li>
                  <li>
                    <strong>Developed a fully automated Virtual Desktop Infrastructure system</strong> using a serverless approach with Azure Functions, Storage, and Automation.
                  </li>
                  <li>Supported multiple successful migrations of legacy systems to hub and spoke architecture in Azure.</li>
                </ul>
              </li>
              
              <li>
                <h3>Data Platform Engineer · SolidQ S.A.</h3>
                <p className="timeline__meta">June 2019 — May 2020 · Spain (Full remote)</p>
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
                  <li>Developed a service-oriented framework, <strong><a href="https://github.com/raulmorenogaldon/Scife" target="_blank" rel="noreferrer">SciFE</a></strong> (using Linux, NodeJS, MongoDB) to run HPC software on supercomputing platforms.</li>
                  <li>Conducted MPI performance and scalability studies on the Weather Research and Forecasting model (WRF).</li>
                  <li>Collaborated with ICE-POP 2018 project to provide meteorological forecasts for the 2018 Winter Olympic Games.</li>
                </ul>
              </li>
            </ul>
          </section>
        </main>

        {/* Sidebar on the right */}
        <aside className="resume__sidebar">

          <div className="contact">
            <h2>Contact</h2>
            <p><strong>Raúl Moreno Galdón</strong></p>
            <p>Albacete, Spain</p>
            <p>
              <span>Email</span>
              <a href="mailto:raulmorenogaldon@gmail.com">raulmorenogaldon@gmail.com</a>
            </p>
            <p>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/raulmorenogaldon
              </a>
            </p>
          </div>

          <div className="education">
            <h2>Education</h2>
            <div className="education__item">
              <h3>PhD in Advanced Computer Technologies</h3>
              <span className="education__specialization">High Performance Computing</span>
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
          </div>

          <div className="certifications">
            <h2>Certifications</h2>
            <div className="certification__item">
              <h3>Microsoft Certified: DevOps Engineer Expert</h3>
              <p className="timeline__meta">September 2023</p>
            </div>
            <div className="certification__item">
              <h3>Microsoft Certified: Azure Developer Associate</h3>
              <p className="timeline__meta">December 2021</p>
            </div>
            <div className="certification__item">
              <h3>Microsoft Certified: Azure Solutions Architect Expert</h3>
              <p className="timeline__meta">October 2021</p>
            </div>
            <div className="certification__item">
              <h3>Microsoft Certified: Azure Administrator Associate</h3>
              <p className="timeline__meta">January 2020</p>
            </div>
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

          <a className="button button--primary resume__download-btn" href={resumeUrl} download>
            Download my resume (PDF)
          </a>

        </aside>
      </div>
    </section>
  )
}

export default Resume
