import { useState } from "react";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import { PageFrame } from "../../components/PageFrame";
import {
  DEV_INSIGHTS,
  PAGE_SUBTITLE,
  PAGE_TITLE,
  PROJECT_CATEGORIES,
  PROJECTS,
} from "./consts";
import type { ProjectCategory } from "./consts";
import { filterProjectsByCategory, getProjectCardClassName } from "./utils";
import styles from "./styles.module.css";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const visibleProjects = filterProjectsByCategory(PROJECTS, activeCategory);

  return (
    <PageFrame>
      <div className={styles.content}>
        <header className={styles.hero}>
          <p className="section-kicker">Portfolio</p>
          <h1 className={styles.title}>{PAGE_TITLE}</h1>
          <p className={styles.subtitle}>{PAGE_SUBTITLE}</p>
        </header>

        <div className={styles.filters} role="tablist" aria-label="Project filters">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              className={
                activeCategory === category.id
                  ? `${styles.filterButton} ${styles.filterButtonActive}`
                  : styles.filterButton
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className={getProjectCardClassName(styles.card, styles.cardLarge, project.size)}
            >
              <div className={`${styles.visual} project-visual-${project.id}`} />
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Tag key={tag} color="processing">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.insights} aria-label="Development insights">
          {DEV_INSIGHTS.map((insight) => (
            <div key={insight.id} className={styles.insightItem}>
              <p className={styles.insightValue}>{insight.value}</p>
              <p className={styles.insightLabel}>{insight.label}</p>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Scale your next technical vision.</h2>
          <Link to="/contact" className={styles.ctaButton}>
            Initiate Consultation
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
