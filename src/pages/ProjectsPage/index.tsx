import { Tag } from "antd";
import { PROJECTS, PAGE_SUBTITLE, PAGE_TITLE } from "./consts";
import styles from "./styles.module.css";

export function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <header className={styles.header}>
          <p className={styles.kicker}>Portfolio</p>
          <h1 className={styles.title}>{PAGE_TITLE}</h1>
          <p className={styles.subtitle}>{PAGE_SUBTITLE}</p>
        </header>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag} color="processing">
                    {tag}
                  </Tag>
                ))}
              </div>
              {(project.demoUrl || project.repoUrl) && (
                <div className={styles.links}>
                  {project.demoUrl && (
                    <a
                      className={styles.link}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className={styles.link}
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
