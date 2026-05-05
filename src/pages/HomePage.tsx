import { Link } from "react-router-dom";

export function HomePage() {
  const leftMenuItems: string[] = ["Home", "About", "Projects", "Contact"];
  const topMenuItems: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="portfolio-screen">
      <main className="portfolio-panel">
        <header className="top-nav">
          <span className="brand-mini">sona/arzumanyan</span>
          <ul className="top-nav-list">
            {topMenuItems.map((item) => (
              <li key={item} className={item === "Home" ? "active" : ""}>
                {item}
              </li>
            ))}
          </ul>
          <span className="top-nav-icon">A</span>
        </header>

        <section className="content-grid">
          <aside className="left-nav">
            <h1 className="name">Sona Arzumanyan</h1>
            {/* Updated Role */}
            <p className="role">Full-Stack & QA Automation Engineer</p>
            <ul>
              {leftMenuItems.map((item) => (
                <li key={item} className={item === "Home" ? "active" : ""}>
                  <span className="dot" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="main-content">
            <section className="hero">
              <div className="hero-copy">
                {/* Updated Kicker */}
                <p className="hero-kicker">Frontend • Backend • Automation</p>
                <h2>
                  Building Reliable <br />
                  <span>Web Solutions</span>
                </h2>
                <p className="hero-text">
                  Specializing in React-based frontend development, Node.js backends, 
                  and automated testing frameworks to deliver high-quality, 
                  performant software.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn-primary">
                    View My Projects
                  </button>
                  <button type="button" className="btn-secondary">
                    Download CV
                  </button>
                  <Link className="btn-secondary" to="/cv-generator">
                    AI CV Generator
                  </Link>
                </div>
              </div>
              <div className="hero-art" />
            </section>

            <section className="works">
              <div className="section-title-row">
                <div>
                  <p className="section-kicker">Recent Projects</p>
                  <h3>Featured Engineering Work</h3>
                </div>
                <a href="/projects">View All Projects</a>
              </div>
              <div className="works-grid">
                <article className="card card-large">
                  <h4>Full-Stack Habit Tracker</h4>
                  <p>
                    A CRUD application built with Node.js and MySQL, focusing on 
                    database schema optimization and API performance.
                  </p>
                </article>
                <article className="card card-image" />
                <article className="card">
                  <h4>Automation Test Suite</h4>
                  <p>E2E testing framework using Playwright for enterprise apps.</p>
                </article>
                <article className="card card-wide">
                  <h4>Project Management Dashboard</h4>
                  <p>Applying Agile methodologies to organize development sprints.</p>
                </article>
              </div>
            </section>

            <footer className="bottom-footer">
              <div>
                <h4>Technical Foundation</h4>
                <p>
                  Combining clean code practices with a "test-first" mindset 
                  to build software that lasts.
                </p>
              </div>
              <div className="footer-columns">
                <div>
                  <span>Frontend</span>
                  <p>React / Next.js</p>
                  <p>TypeScript</p>
                </div>
                <div>
                  <span>Automation</span>
                  <p>Playwright / Cypress</p>
                  <p>Jest / Postman</p>
                </div>
                <div>
                  <span>Backend</span>
                  <p>Node.js / Express</p>
                  <p>PostgreSQL / MySQL</p>
                </div>
                <div>
                  <span>Management</span>
                  <p>Agile / Scrum</p>
                  <p>Jira / Git</p>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}