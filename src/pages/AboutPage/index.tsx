import { Progress } from "antd";
import { Link } from "react-router-dom";
import { PageFrame } from "../../components/PageFrame";
import {
  CLOSING_QUOTE,
  EVOLUTION_CARDS,
  PROFESSIONAL_BIO,
  SKILLS,
  TIMELINE_ENTRIES,
} from "./consts";
import { formatSkillLabel } from "./utils";
import styles from "./styles.module.css";

export function AboutPage() {
  return (
    <PageFrame>
      <div className={styles.content}>
        <section className={styles.hero}>
          <div>
            <p className="section-kicker">Profile</p>
            <h1 className={styles.title}>
              Engineering <span>Human-Centric</span> Technical Ecosystems
            </h1>
            <p className={styles.bioLabel}>Professional Bio</p>
            <p className={styles.bio}>{PROFESSIONAL_BIO}</p>

            <div className={styles.skills} aria-label="Core expertise">
              {SKILLS.map((skill) => (
                <div key={skill.id} className={styles.skillRow}>
                  <div className={styles.skillHeader}>
                    <span>{skill.label}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <Progress
                    percent={skill.percent}
                    showInfo={false}
                    aria-label={formatSkillLabel(skill.label, skill.percent)}
                    strokeColor={{ from: "#2bcfff", to: "#199dff" }}
                    trailColor="rgba(34, 66, 121, 0.5)"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.portrait} aria-hidden="true" />
        </section>

        <section className={styles.section} aria-labelledby="evolution-heading">
          <p className="section-kicker">Career</p>
          <h2 id="evolution-heading" className={styles.sectionTitle}>
            Strategic Career Evolution
          </h2>
          <div className={styles.evolutionGrid}>
            {EVOLUTION_CARDS.map((card) => (
              <article key={card.id} className={styles.evolutionCard}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="timeline-heading">
          <p className="section-kicker">Timeline</p>
          <h2 id="timeline-heading" className={styles.sectionTitle}>
            The Evolution
          </h2>
          <ol className={styles.timeline}>
            {TIMELINE_ENTRIES.map((entry) => (
              <li key={entry.id} className={styles.timelineEntry}>
                <p className={styles.period}>{entry.period}</p>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.entryDescription}>{entry.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.cta}>
          <blockquote className={styles.quote}>&ldquo;{CLOSING_QUOTE}&rdquo;</blockquote>
          <div className={styles.ctaActions}>
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/cv" className="btn-secondary">
              Download Resume
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
