import { Link } from "react-router-dom";
import { PageFrame } from "../components/PageFrame";
import { Portrait } from "../components/Portrait";
import { PROJECTS } from "../data/projects";

const FEATURED_HOME = PROJECTS.filter((p) => p.featured).slice(0, 3);

export function HomePage() {
  return (
    <PageFrame>
      <section className="page-hero">
        <div className="page-hero-copy">
          <p className="hero-kicker">Senior Frontend Engineer</p>
          <h1 className="page-hero-title">
            Architecting <span>Digital Logic</span>
          </h1>
          <p className="hero-text">
            Full-stack and QA automation engineer specializing in high-performance React
            applications, reliable APIs, and test-first delivery for production teams.
          </p>
          <div className="hero-actions">
            <Link to="/journey" className="btn-primary">
              View Methodology
            </Link>
            <Link to="/about" className="btn-secondary">
              The Blueprint
            </Link>
          </div>
        </div>
        <div className="page-hero-portrait">
          <Portrait variant="home" />
        </div>
      </section>

      <section className="works">
        <div className="section-title-row">
          <div>
            <p className="section-kicker">Selected work</p>
            <h3>Engineering Portfolio</h3>
          </div>
          <Link to="/projects">View all projects</Link>
        </div>
        <div className="home-portfolio-grid">
          {FEATURED_HOME.map((project, index) => (
            <article
              key={project.id}
              className={`card home-project-card ${index === 0 ? "home-project-card-large" : ""}`}
            >
              <div className={`home-project-visual home-project-visual-${project.id}`} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-intro">
          <h4>The Architectural Foundation</h4>
          <p>
            Systems thinking, human-centric design, and measurable quality across the stack.
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <span>Core</span>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
          </div>
          <div>
            <span>Vision</span>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
            <p>
              <Link to="/journey">Journey</Link>
            </p>
          </div>
          <div>
            <span>Success</span>
            <p>
              <Link to="/cv">Resume</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div>
            <span>Tools</span>
            <p>React / TypeScript</p>
            <p>Playwright / Node.js</p>
          </div>
        </div>
      </footer>
    </PageFrame>
  );
}
