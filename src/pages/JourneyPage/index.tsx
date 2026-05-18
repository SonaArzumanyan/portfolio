import { PageFrame } from "../../components/PageFrame";
import { EXPERIENCE_CARDS, PAGE_SUBTITLE, PAGE_TITLE, PHILOSOPHY_BLOCKS } from "./consts";
import { getPhilosophyCardClassName } from "./utils";
import styles from "./styles.module.css";

export function JourneyPage() {
  return (
    <PageFrame>
      <div className={styles.content}>
        <header className={styles.hero}>
          <p className="section-kicker">Experience</p>
          <h1 className={styles.title}>{PAGE_TITLE}</h1>
          <p className={styles.subtitle}>{PAGE_SUBTITLE}</p>
        </header>

        <section className={styles.experienceGrid} aria-label="Career experience">
          {EXPERIENCE_CARDS.map((card) => (
            <article key={card.id} className={styles.experienceCard}>
              <div className={`${styles.experienceVisual} ${card.visualClass}`} />
              <div className={styles.experienceBody}>
                <p className={styles.period}>{card.period}</p>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="philosophy-heading">
          <header className={styles.philosophyHeader}>
            <p className="section-kicker">Values</p>
            <h2 id="philosophy-heading" className={styles.philosophyTitle}>
              Professional Philosophy
            </h2>
          </header>
          <div className={styles.philosophyGrid}>
            {PHILOSOPHY_BLOCKS.map((block) => (
              <article
                key={block.id}
                className={getPhilosophyCardClassName(styles.philosophyCard, block.wide)}
              >
                <div>
                  <h3 className={styles.philosophyCardTitle}>{block.title}</h3>
                  <p className={styles.philosophyCardText}>{block.description}</p>
                </div>
                <div className={styles.statBlock}>
                  <p className={styles.statValue}>{block.stat}</p>
                  <p className={styles.statLabel}>{block.statLabel}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
