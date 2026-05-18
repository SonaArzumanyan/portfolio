import type { PageShellVariant } from "./consts";
import styles from "./styles.module.css";

export function getPanelClassName(variant: PageShellVariant): string {
  return variant === "narrow" ? `${styles.panel} ${styles.panelNarrow}` : styles.panel;
}
