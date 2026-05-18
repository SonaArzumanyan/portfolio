import { JOURNEY_ENTRIES, PAGE_SUBTITLE, PAGE_TITLE } from "./consts";
import { getJourneyTypeLabel } from "./utils";
import styles from "./styles.module.css";

export function JourneyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <header className={styles.header}>
          <p className={styles.kicker}>Career path</p>
          <h1 className={styles.title}>{PAGE_TITLE}</h1>
          <p className={styles.subtitle}>{PAGE_SUBTITLE}</p>
        </header>

        <ol className={styles.timeline}>
          {JOURNEY_ENTRIES.map((entry) => (
            <li key={entry.id} className={styles.entry}>
              <p className={styles.period}>{entry.period}</p>
              <span className={styles.type}>{getJourneyTypeLabel(entry.type)}</span>
              <h2 className={styles.entryTitle}>{entry.title}</h2>
              <p className={styles.organization}>{entry.organization}</p>
              <p className={styles.description}>{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
