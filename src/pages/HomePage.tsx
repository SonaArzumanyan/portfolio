export function HomePage() {
  const leftMenuItems: string[] = ["Home", "About", "Projects", "Contact"];
  const topMenuItems: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="portfolio-screen">
      <main className="portfolio-panel">
        <header className="top-nav">
          <span className="brand-mini">sona/kazaryan</span>
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
            <p className="role">Product Architect</p>
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
                <p className="hero-kicker">Frontend and Product Developer</p>
                <h2>
                  Architecting <br />
                  <span>Digital Logic</span>
                </h2>
                <p className="hero-text">
                  Senior frontend developer specializing in high-performance web
                  applications, architectural scalability, and precision-engineered user
                  interfaces.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn-primary">
                    View Methodology
                  </button>
                  <button type="button" className="btn-secondary">
                    The Blueprint
                  </button>
                </div>
              </div>
              <div className="hero-art" />
            </section>

            <section className="works">
              <div className="section-title-row">
                <div>
                  <p className="section-kicker">Selected Works</p>
                  <h3>Engineering Portfolio</h3>
                </div>
                <a href="/">View Archive</a>
              </div>
              <div className="works-grid">
                <article className="card card-large">
                  <h4>Luminous Core Engine</h4>
                  <p>
                    Developing an enterprise-grade visualization engine for next-generation
                    modeling in data spaces.
                  </p>
                </article>
                <article className="card card-image" />
                <article className="card">
                  <h4>Neural Network Visualizer</h4>
                </article>
                <article className="card card-wide">
                  <h4>Architecture Consultant</h4>
                  <p>Providing high-level technical audits and performance analysis.</p>
                </article>
              </div>
            </section>

            <footer className="bottom-footer">
              <div>
                <h4>The Architectural Foundation</h4>
                <p>
                  A concise synthesis of process, scalability, and the mathematical beauty
                  of clean codebases.
                </p>
              </div>
              <div className="footer-columns">
                <div>
                  <span>Core</span>
                  <p>React / Next.js</p>
                  <p>TypeScript</p>
                </div>
                <div>
                  <span>Visual</span>
                  <p>Framer Motion</p>
                  <p>Tailwind CSS</p>
                </div>
                <div>
                  <span>Backend</span>
                  <p>Node.js</p>
                  <p>PostgreSQL</p>
                </div>
                <div>
                  <span>Tools</span>
                  <p>GitHub</p>
                  <p>Vite</p>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
